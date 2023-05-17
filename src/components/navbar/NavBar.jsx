import {AiOutlineShoppingCart} from "react-icons/ai"
import { Link } from "react-router-dom"
import "./navbar.css"

function NavBar() {
  return (
    <div className="nav-container">
      <nav className="navbar">
        <h1 className="navbar-logo">Book Shop</h1>
        <Link to="/cart"><AiOutlineShoppingCart className="seeCart" size={50}/></Link>
      </nav>
    </div>
  )
}

export default NavBar