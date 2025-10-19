import { Link } from "react-router-dom";

function CartPage({ cart, updateQuantity, removeItem }) {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalCost = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h1>Your Shopping Cart 🛒</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty. <Link to="/products">Continue shopping</Link>.</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="details">
                  <h3>{item.name}</h3>
                  <p>₱{item.price}</p>
                  <div className="quantity-controls">
                    <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                  </div>
                  <button onClick={() => removeItem(item.id)}>Delete</button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <p>Total Items: {totalItems}</p>
            <p>Total Cost: ₱{totalCost}</p>
            <button onClick={() => alert("Checkout coming soon!")}>Checkout</button>
            <Link to="/products">
              <button>Continue Shopping</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;
