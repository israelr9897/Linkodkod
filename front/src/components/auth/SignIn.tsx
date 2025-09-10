import { useContext, useState } from "react";
import "../../assets/styles/signIn.css";
import { userContext, type UserType } from "../../useContext/userContext";
import { signInUserAPi } from "../../api/authApi";

const objUser: UserType = {
  username: "",
  password: "",
};

export default function SignIn() {
  const { setUser } = useContext(userContext)!;
  const [newUser, setNewUser] = useState<UserType>(objUser);
  const [isFound, setIsFound] = useState<boolean>(true);
  async function loginOnClick() {
    const user = await signInUserAPi(newUser);
    if (user) {
      setUser(user);
      localStorage.setItem("user", JSON.stringify(user));
    } else setIsFound(false);
  }
  return (
    <div className="signIn">
      <div className="form">
        <div className="wlcome">
          <h1>Welcome</h1>
        </div>
        <label htmlFor="username">Enter Your user name:</label>
        <input
          type="text"
          id="username"
          placeholder="Enter here user name..."
          onChange={(e) => {
            setNewUser({ ...newUser, username: e.target.value });
          }}
        />
        <label htmlFor="password">Enter your password: </label>
        <input
          type="password"
          id="password"
          placeholder="Enter here password..."
          onChange={(e) => {
            setNewUser({ ...newUser, password: e.target.value });
          }}
        />
        <div className="btn-add">
          <div className="btn" onClick={loginOnClick}>
            Enter
          </div>
        </div>
        {!isFound && (
          <p className="msg">
            ❌ User not found, check username or password...
          </p>
        )}
      </div>
    </div>
  );
}
