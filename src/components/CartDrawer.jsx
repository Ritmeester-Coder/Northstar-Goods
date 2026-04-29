import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useCart } from "../store/CartContext";

function CartDrawer() {
  const {
    items,
    isCartOpen,
    subtotal,
    closeCart,
    incrementItem,
    decrementItem,
    removeItem,
    notice,
    clearNotice,
  } = useCart();

  useEffect(() => {
    if (!notice) return undefined;

    const timeoutId = window.setTimeout(() => {
      clearNotice();
    }, 2500);

    return () => window.clearTimeout(timeoutId);
  }, [clearNotice, notice]);

  const hasItems = items.length > 0;

  return (
    <>
      <div
        className={`backdrop ${isCartOpen ? "visible" : ""}`}
        onClick={closeCart}
        aria-hidden={!isCartOpen}
      />

      <aside className={`cart-drawer ${isCartOpen ? "open" : ""}`}>
        {/* Header */}
        <div className="cart-drawer-header">
          <div>
            <p className="eyebrow">Your cart</p>
            <h2>Ready to check out</h2>
          </div>

          <button
            type="button"
            className="icon-button"
            onClick={closeCart}
          >
            Close
          </button>
        </div>

        {/* Notice */}
        {notice && (
          <p className="cart-notice">
            {notice}
          </p>
        )}

        {/* Stable Content Area */}
        <div className="cart-content">
          {hasItems ? (
            <div className="cart-items fade-in">
              {items.map((item) => (
                <article
                  key={item.id}
                  className="cart-item"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <div>
                    <h3>{item.name}</h3>

                    <p>R {item.price}</p>

                    <div className="quantity-controls">
                      <button
                        type="button"
                        onClick={() =>
                          decrementItem(item.id)
                        }
                      >
                        -
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        type="button"
                        onClick={() =>
                          incrementItem(item.id)
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="text-link"
                    onClick={() =>
                      removeItem(item.id)
                    }
                  >
                    Remove
                  </button>
                </article>
              ))}
            </div>
          ) : (
            <div className="cart-empty fade-in">
              <p className="cart-empty-message">
                Your cart is empty right now.
              </p>
            </div>
          )}
        </div>

        {/* Sticky Footer */}
        <div className="cart-summary">
          <div>
            <span>Subtotal </span>
            <strong>
              R {hasItems ? subtotal : "0"}
            </strong>
          </div>

          <Link
            to={hasItems ? "/cart" : "/products"}
            className="primary-button"
            onClick={closeCart}
          >
            {hasItems
              ? "Go to cart"
              : "Browse products"}
          </Link>
        </div>
      </aside>
    </>
  );
}

export default CartDrawer;