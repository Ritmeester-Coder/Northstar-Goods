import { Link } from "react-router-dom";
import { useCart } from "../store/CartContext";

function CartPage() {
  const { items, subtotal, incrementItem, decrementItem, removeItem } = useCart();
  const shipping = items.length > 0 ? 12 : 0;
  const total = subtotal + shipping;

  return (
    <section className="section">
      <div className="page-heading">
        <p className="eyebrow">Checkout overview</p>
        <h1>Your Cart</h1>
        <p>Review quantities, adjust items, and prepare for your next checkout step.</p>
      </div>

      {items.length === 0 ? (
        <div className="empty-state">
          <h2>Your cart is still empty</h2>
          <p>Browse the catalog and add products to see them here.</p>
          <Link to="/products" className="primary-button">
            Go to products
          </Link>
        </div>
      ) : (
        <div className="cart-page-layout">
          <div className="cart-page-items">
            {items.map((item) => (
              <article key={item.id} className="cart-page-item">
                <img src={item.image} alt={item.name} />
                <div>
                  <p className="eyebrow">{item.category}</p>
                  <h2>{item.name}</h2>
                  <p>R {item.price}</p>
                </div>
                <div className="quantity-controls large">
                  <button type="button" onClick={() => decrementItem(item.id)}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button type="button" onClick={() => incrementItem(item.id)}>
                    +
                  </button>
                </div>
                <button
                  type="button"
                  className="text-link"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </article>
            ))}
          </div>

          <aside className="order-summary">
            <h2>Order summary</h2>
            <div>
              <span>Subtotal</span>
              <strong>R {subtotal}</strong>
            </div>
            <div>
              <span>Shipping</span>
              <strong>R {shipping}</strong>
            </div>
            <div className="summary-total">
              <span>Total</span>
              <strong>R {total}</strong>
            </div>
            <button type="button" className="primary-button full-width">
              Proceed to checkout
            </button>
          </aside>
        </div>
      )}
    </section>
  );
}

export default CartPage;