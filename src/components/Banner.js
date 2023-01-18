import { Link } from "react-router-dom";

import "../styles/banner.css";
import logo from "../assets/leaf+1.png";

function Banner() {
  return (
    <div className="App-banner">
      <img src={logo} alt="La maison jungle" className="lmj-logo" />
      <h1>La maison jungle</h1>
      <Link className="mx-4 nav-link-bar" to="/">
        Home
      </Link>
      <Link className="mx-4 nav-link-bar" to="/survey">
        survey
      </Link>
    </div>
  );
}

export default Banner;
