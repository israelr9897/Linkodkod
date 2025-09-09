import { useContext, useState } from "react";
import "../assets/styles/login.css";
import { userContext, type UserType } from "../useContext/userContext";

const objUser: UserType = {
  username: "",
  password: "",
};

export default function Login() {
  const [newUser, setNewUser] = useState<UserType>(objUser);
  const { setUser } = useContext(userContext)!;

  async function loginOn() {
    
  }
  return (
    <div className="login">
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
          <div
            className="btn"
            onClick={() => {
              setUser(newUser);
              localStorage.setItem("user", JSON.stringify(newUser))
            }}
          >
            Enter
          </div>
        </div>
        {/* {!isSucced && (
          <p className="msg">
            Post addition failed! check if you have filled in all fields...
          </p>
        )} */}
      </div>
    </div>
  );
}
