import { Link } from "react-router-dom";
import { useCart } from "../store/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <article className="product-card">
      {/* Clickable product area */}
      <Link to={`/products/${product.id}`}>
        <div className="product-image-wrap">
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />

          <span className="product-category">
            {product.category}
          </span>
        </div>

        <div className="product-copy">
          <div className="product-copy-top">
            <h3>{product.name}</h3>
            <strong>R {product.price}</strong>
          </div>

          <p>{product.description}</p>
        </div>
      </Link>

      {/* Separate button */}
      <div className="product-copy">
        <button
          type="button"
          className="primary-button full-width"
          onClick={() => addToCart(product)}
        >
          Add to cart
        </button>
      </div>
    </article>
  );
}

export default ProductCard;