import { useContext } from "react";
import { dataContext } from "../../context/datacontext";
import CartItemCounter from "./CartItemCounter";
import "./cartContent.css";
import { RiDeleteBin5Line } from "react-icons/ri";

function CartElements() {
  const { cart, setCart } = useContext(dataContext);

  const deleteProduct = (id) => {
    const foundId = cart.find((element) => element.id === id);

    const newCart = cart.filter((element) => {
      return element !== foundId;
    });

    setCart(newCart)
  };

  return cart.map((product) => {
    return (
      <div className="cartContent" key={product.id}>
        <img src={product.img} alt="product-img-card" />
        <h3 className="name">{product.name}</h3>
        <CartItemCounter product={product} />
        <h4 className="price">${product.price * product.quantity}</h4>
        <h3
          className="cart-delete-button"
          onClick={(e) => deleteProduct(product.id)}
        >
          <RiDeleteBin5Line />
        </h3>
      </div>
    );
  });
}

export default CartElements;
