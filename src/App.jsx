import Home from "./pages/home/Home";
import CartContent from "./components/cart_content/CartContent";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartContent />} />
      </Routes>
    </>
  );
}

export default App;
