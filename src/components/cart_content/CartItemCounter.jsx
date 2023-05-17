import { useContext } from "react";
import { dataContext } from "../../context/datacontext";

function CartItemCounter({ product }) {
  const { buyProducts, setCart, cart } = useContext(dataContext);

  const decreaseItem = () => {
    const productRepeat = cart.find((item) => item.id === product.id);

    productRepeat.quantity !== 1 &&
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...product, quantity: productRepeat.quantity - 1 }
            : item
        )
      );
  };

  return (
    <>
      <p className="counter-button" onClick={decreaseItem}>-</p>
      <p>{product.quantity}</p>
      <p className="counter-button" onClick={(e) => buyProducts(product)}>
        +
      </p>
    </>
  );
}

export default CartItemCounter;
