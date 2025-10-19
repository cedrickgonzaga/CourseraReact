import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import Header from "./components/Header";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, updateQuantity, removeItem } from "./redux/cartSlice";

function App() {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  return (
    <>
      <Header cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/products"
          element={<ProductsPage addToCart={(item) => dispatch(addToCart(item))} />}
        />
        <Route
          path="/cart"
          element={
            <CartPage
              cart={cart}
              updateQuantity={(id, change) => dispatch(updateQuantity({ id, change }))}
              removeItem={(id) => dispatch(removeItem(id))}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
