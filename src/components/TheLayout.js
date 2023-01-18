import { Link, Outlet } from "react-router-dom";

import "../styles/layout.css";
import logo from "../assets/leaf+1.png";

function Banner() {
  return (
    <div>
      <div className="App-banner">
        <img src={logo} alt="La maison jungle" className="lmj-logo" />
        <h1>La maison jungle</h1>
        <Link className="mx-4 nav-link-bar" to="/">
          Home
        </Link>
        <Link className="mx-4 nav-link-bar" to="/survey">
          survey
        </Link>
        <Link className="mx-4 nav-link-bar" to="/faq/123">
          faq
        </Link>
      </div>

      <Outlet />

      <div className="App-footer">
        <h2>My footer</h2>
        <ul>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Banner;
