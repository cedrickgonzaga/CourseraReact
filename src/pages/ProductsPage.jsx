import "../index.css";
import monstera from "../assets/monstera.jpg";
import snake from "../assets/snake.webp";
import peace from "../assets/peace.jpg";
import fiddle from "../assets/fiddle.jpeg";
import aloe from "../assets/aloe.jpg";
import bonsai from "../assets/bonsai.jpg";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function ProductsPage() {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const products = [
    { id: 1, name: "Monstera Deliciosa", price: 499, category: "Tropical", image: monstera },
    { id: 2, name: "Snake Plant", price: 399, category: "Low Maintenance", image: snake },
    { id: 3, name: "Peace Lily", price: 350, category: "Flowering", image: peace },
    { id: 4, name: "Fiddle Leaf Fig", price: 799, category: "Tropical", image: fiddle },
    { id: 5, name: "Aloe Vera", price: 299, category: "Low Maintenance", image: aloe },
    { id: 6, name: "Bonsai Tree", price: 999, category: "Decorative", image: bonsai },
  ];

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
  };

  return (
    <div className="products-page">
      <h1>Our Plant Collection 🌱</h1>
      <div className="categories">
        <p>Tropical | Low Maintenance | Flowering | Decorative</p>
      </div>
      <div className="product-grid">
        {products.map((plant) => {
          const inCart = cart.some((item) => item.id === plant.id);
          return (
            <div key={plant.id} className="product-card">
              <img src={plant.image} alt={plant.name} />
              <h3>{plant.name}</h3>
              <p>₱{plant.price}</p>
              <button onClick={() => handleAddToCart(plant)} disabled={inCart}>
                {inCart ? "Added to Cart" : "Add to Cart"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductsPage;
