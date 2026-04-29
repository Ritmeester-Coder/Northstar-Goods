import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../store/CartContext";

function ProductViewPage() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find(
    (item) => String(item.id) === String(id)
  );

  if (!product) {
    return (
      <section className="section">
        <div className="empty-state">
          <p className="eyebrow">Not found</p>
          <h1>Product unavailable</h1>
          <p>
            The item you’re looking for could not be found.
          </p>

          <Link to="/products" className="primary-button">
            Back to products
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      {/* Intro */}
      <div className="page-heading narrow">
        <p className="eyebrow">{product.category}</p>

        <h1>{product.name}</h1>

        <p>
          Thoughtfully designed for modern routines,
          travel, and everyday use.
        </p>
      </div>

      {/* Main Product Layout */}
      <div className="product-view-grid">
        {/* Left Image */}
        <div className="product-gallery-card">
          <img
            src={product.image}
            alt={product.name}
            className="product-page-image"
          />
        </div>

        {/* Right Content */}
        <div className="product-info-card">
          <p className="eyebrow">Overview</p>

          <h2>{product.name}</h2>

          <p className="product-description">
            {product.description}
          </p>

          <div className="product-price">
            R {product.price}
          </div>

          {/* Trust badges */}
          <div className="product-benefits">
            <span>✓ Fast shipping</span>
            <span>✓ Easy returns</span>
            <span>✓ Secure checkout</span>
          </div>

          {/* CTA */}
          <div className="hero-actions">
            <button
              className="primary-button"
              onClick={() => addToCart(product)}
            >
              Add to cart
            </button>

            <Link
              to="/products"
              className="secondary-button"
            >
              Back to shop
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Detail Cards */}
      <section className="product-detail-grid">
        <article className="split-card">
          <p className="eyebrow">Materials</p>
          <h2>Built to last</h2>
          <p>
            Crafted with durable materials selected for
            daily use, comfort, and timeless appeal.
          </p>
        </article>

        <article className="split-card">
          <p className="eyebrow">Shipping</p>
          <h2>Fast & reliable</h2>
          <p>
            Free shipping on qualifying orders with
            secure checkout and easy returns.
          </p>
        </article>

        <article className="split-card wide">
          <p className="eyebrow">Why you'll love it</p>
          <h2>Designed for modern movement</h2>
          <p>
            Whether at home, commuting, or travelling,
            this piece is made to integrate naturally
            into everyday life with clean style and
            dependable practicality.
          </p>
        </article>
      </section>
    </section>
  );
}

export default ProductViewPage;