import { Link } from "react-router";
import "../../assets/styles/auth.css";
import { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default function Auth() {
  const [isRegister, setIsRegister] = useState<boolean>(true);
  return (
    <div className="auth">
      {/* בודק האם הוא רוצה להירשם */}
      {isRegister ? (
        <>
          <div className="toRegister">
            <p>First time here?</p>
            <Link
              to=""
              onClick={() => {
                setIsRegister(false);
              }}
            >
              Create an Account.
            </Link>
          </div>
          <SignIn />
        </>
      ) : (
          <SignUp />
      )}
    </div>
  );
}
