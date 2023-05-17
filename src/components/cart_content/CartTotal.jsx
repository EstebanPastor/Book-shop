import { useContext } from "react";
import { dataContext } from "../../context/datacontext";

function CartTotal() {
    const {cart} = useContext(dataContext);

    const total = cart.reduce((acc, el) => acc + el.price * el.quantity, 0)
  return (
    <div className="cartTotal">
        <h3>Total: $ {total}</h3>
    </div>
  )
}

export default CartTotal