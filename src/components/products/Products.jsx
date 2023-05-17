import { useContext } from "react";
import { dataContext } from "../../context/datacontext";
import "./products.css";

function Products() {
  const { data, cart, setCart } = useContext(dataContext);

  const buyProducts = (product) => {
    setCart([...cart, product]);
  };

  return data.map((product) => {
    return (
      <div className="card" key={product.id}>
        <img src={product.img} alt="my-product" />
        <h3>{product.name}</h3>
        <h4>${product.price}</h4>
        <button onClick={(e) => buyProducts(product)}>Buy a book</button>
      </div>
    );
  });
}

export default Products;
