import { useState } from "react";
import "../../assets/styles/signUp.css";
import { type UserType } from "../../useContext/userContext";
import { addUserAPi } from "../../api/authApi";

const objUser: UserType = {
  username: "",
  password: "",
};

export default function SignUp() {
  const [newUser, setNewUser] = useState<UserType>(objUser);
  async function handleClick() {
    const isTrue = await addUserAPi(newUser);
    if (isTrue) {
      setMsg("✅ Registration was successful.");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } else setMsg("❌ Registration failed");
  }
  const [msg, setMsg] = useState<string>();
  return (
    <div className="signUp">
      <div className="titel">
        <h1>Sign Up</h1>
      </div>
      <label htmlFor="inp-user-name">Enter Full name:</label>
      <input
        className="inp-userName"
        id="inp-user-name"
        type="text"
        placeholder="Full Name"
        onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
      />
      <label htmlFor="inp-password">Enter Password:</label>
      <input
        className="inp-password"
        id="inp-password"
        type="password"
        placeholder="Password"
        onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
      />
      <div className="btn-enter" onClick={handleClick}>
        Enter
      </div>
      {msg && <p className="msg">{msg}</p>}
    </div>
  );
}
