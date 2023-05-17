import { useContext } from "react";
import { dataContext } from "../../context/datacontext";
import CartElements from "./CartElements";
import CartTotal from "./CartTotal";

function CartContent() {
  const { cart } = useContext(dataContext);

  return cart.length > 0 ? (
    <>
      <CartElements />
      <CartTotal />
    </>
  ) : (
    <h2 className="cart-message">You cart is empty</h2>
  );
}

export default CartContent;
