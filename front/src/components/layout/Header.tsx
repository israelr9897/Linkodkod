import "../../assets/styles/header.css";
import outImg from "../../assets/images/out.png";
import toHome from "../../assets/images/home.png"
import logo from "../../assets/images/logo-linkodkod.jpg";
import { Link, useNavigate } from "react-router";
import { useContext } from "react";
import { userContext } from "../../useContext/userContext";

export default function Header() {
  const navigate = useNavigate()
  const { setUser } = useContext(userContext)!;
  return (
    <div className="header">
      <div className="left-head">
        <div className="toHome">
          <img src={toHome} alt="home" onClick={() => navigate("/")}/>
          </div>
        <div
          className="log-out"
          onClick={() => {
            setUser(null);
            //מוחק נתונים מהלוקאל סטור
            localStorage.removeItem("user");
            localStorage.removeItem("data");
          }}
        >
          <img src={outImg} alt="outImg" />{" "}
        </div>
      </div>
      <div className="slogen">
        <h1>Because without a connection there is no Kodkod</h1>
      </div>
      <div className="right-head">
        <Link className="addPost" to="/addpost">
          Add-Post
        </Link>
        <div className="logo">
          <img className="logo-img" src={logo}></img>
        </div>
      </div>
    </div>
  );
}
