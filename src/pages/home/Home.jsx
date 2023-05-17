import NavBar from "../../components/navbar/NavBar";
import Banner from "../../components/banner/Banner";
import Products from "../../components/products/Products";

function Home() {
  return (
    <>
      <NavBar />
      <Banner />
      <div className="product-card-container">
        <Products />
      </div>
    </>
  );
}

export default Home;
