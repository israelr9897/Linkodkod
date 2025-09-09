import "../../assets/styles/header.css";
import outImg from "../../assets/images/out.png";
import logo from "../../assets/images/logo-linkodkod.jpg";
import { Link } from "react-router";
import { useContext } from "react";
import { userContext } from "../../useContext/userContext";

export default function Header() {
  const { setUser } = useContext(userContext)!;
  return (
    <div className="header">
      <Link className="toHome" to="/" />
      <Link className="addPost" to="/addpost">
        Add-Post
      </Link>
      <div className="slogen">
        <h1>Because without a connection there is no Kodkod</h1>
      </div>
      <div className="log-out" onClick={() => setUser(null)}>
        <p>Log-Out</p>
        <img src={outImg} alt="outImg" />{" "}
      </div>
      <div className="logo">
        <img className="logo-img" src={logo}></img>
      </div>
    </div>
  );
}
