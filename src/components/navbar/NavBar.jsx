import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import TotalItems from "../cart_content/TotalItems";
import { useContext } from "react";
import { dataContext } from "../../context/datacontext";
import "./navbar.css";

function NavBar() {
  const { cart } = useContext(dataContext);
  return (
    <div className="nav-container">
      <nav className="navbar">
        <Link to={"/"}>
          <h1 className="navbar-logo">Book Shop</h1>
        </Link>

        <Link to="/cart">
          <AiOutlineShoppingCart className="seeCart" size={50} />
          {cart.length > 0 ? <TotalItems /> : null}
        </Link>
      </nav>
    </div>
  );
}

export default NavBar;
