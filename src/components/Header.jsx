import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const cart = useSelector((state) => state.cart.cart);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <Link to="/" className="logo"> 🌳 Verdant Haven </Link>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Shop</Link>
        <Link to="/cart">Cart ({cartCount})</Link>
      </nav>
    </header>
  );
}

export default Header;
