import { useContext } from "react";
import { dataContext } from "../../context/datacontext";

function TotalItems() {
  const { cart, setCart } = useContext(dataContext);

  const itemsQuantity = cart.reduce((acc, el) => acc + el.quantity, 0);
  return <span className="cart-items-total">{itemsQuantity}</span>;
}

export default TotalItems;
