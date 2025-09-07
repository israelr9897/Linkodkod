import "../../assets/styles/header.css"
import logo from "../../assets/images/logo-linkodkod.jpg"

export default function Header() {
  return (
    <div className="header">
        <div className="slogen">
          <h1>Because without a connection there is no Kodkod</h1>
        </div>
        <div className="logo">
          <img className="logo-img"src={logo}></img>
        </div>
    </div>
  )
}
