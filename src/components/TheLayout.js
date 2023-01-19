import { NavLink, Outlet } from "react-router-dom";
// NavLink = use to see the current link active contrairement a link
import Badge from "react-bootstrap/Badge";

import "../styles/layout.css";
import logo from "../assets/leaf+1.png";
import { MdOutlineShoppingCart } from "react-icons/md";

const getCartItems = JSON.parse(localStorage.getItem("react-Eco-app"));
const quantities = getCartItems
  ? getCartItems.reduce((accumulator, item) => accumulator + item.quantity, 0)
  : 0;

function Layout() {
  return (
    <div>
      <div className="App-banner">
        <img src={logo} alt="La maison jungle" className="lmj-logo" />
        <h1>La maison jungle</h1>
        <NavLink
          to="/"
          className="mx-4 nav-link-bar"
          style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
        >
          Home
        </NavLink>
        <NavLink
          to="/survey"
          className="mx-4 nav-link-bar"
          style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
        >
          survey
        </NavLink>
        <NavLink
          to="/routerDataPass"
          state={{ content: "my state content from the link" }}
          className="mx-4 nav-link-bar"
          style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
        >
          RoutingTuto
        </NavLink>
        <div>
          <MdOutlineShoppingCart className="shopcart-icon" />
          <Badge pill bg="warning">
            {quantities}
          </Badge>
        </div>
      </div>
      <Outlet context={{ cartContext: { content: "my cart" } }} />{" "}
      {/* WHERE WE WANT TO RENDER THE CONTENT OF THE PAGE === <NUXT /> dans layout */}
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

export default Layout;
