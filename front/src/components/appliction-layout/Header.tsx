import "../../assets/styles/header.css";
import logo from "../../assets/images/logo-linkodkod.jpg";
import { Link } from "react-router";

export default function Header() {
  return (
    <div className="header">
      <Link className="toHome" to="/" />
      <Link className="addPost" to="/addpost">
        Add-Post
      </Link>
      <div className="slogen">
        <h1>Because without a connection there is no Kodkod</h1>
      </div>
      <div className="logo">
        <img className="logo-img" src={logo}></img>
      </div>
    </div>
  );
}
