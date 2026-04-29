import { Link } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Modern essentials, thoughtfully chosen</p>

          <h1>
            Well-made products for work, travel, and the spaces you call home.
          </h1>

          <p className="hero-text">
            Northstar Goods is a curated collection of practical essentials
            designed to bring simplicity, style, and function to everyday life.
          </p>

          <div className="hero-actions">
            <Link to="/products" className="primary-button">
              Shop collection
            </Link>

            <Link to="/about" className="secondary-button">
              Learn our story
            </Link>
          </div>
        </div>

        <div className="hero-panel">
          <div className="hero-card">
            <span>Fast shipping</span>
            <strong> Free on orders over R 120</strong>
          </div>

          <div className="hero-card highlight">
            <span>Featured product</span>
            <strong> Summit Backpack</strong>
            <p>Smart storage designed for movement and modern routines.</p>
          </div>

          <div className="hero-card">
            <span>Trusted by customers</span>
            <strong> 4.9 average rating</strong>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Featured products</p>

            <h2>Designed to move with your lifestyle</h2>
          </div>

          <Link to="/products" className="text-link">
            View all products
          </Link>
        </div>

        <div className="product-grid">
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

    <section className="section trust-section">
      <div className="trust-main-card">
        <p className="eyebrow">Why Northstar</p>

        <h2>Thoughtful retail built around everyday needs</h2>

        <p>
          We believe great products should feel effortless to use,
          timeless in design, and dependable enough to become part
          of your daily rhythm.
        </p>

        <Link to="/about" className="text-link">
          Learn more about us
        </Link>
      </div>

      <div className="trust-stack">
        <article className="trust-card">
          <h3>Purposeful selection</h3>
          <p>
            Every item is chosen for quality, utility,
            and lasting visual appeal.
          </p>
        </article>

        <article className="trust-card">
          <h3>Seamless shopping</h3>
          <p>
            A clean storefront experience designed to
            make browsing and buying feel simple.
          </p>
        </article>

        <article className="trust-card">
          <h3>Modern living</h3>
          <p>
            Products that move easily between home,
            office, and life on the go.
          </p>
        </article>
      </div>
    </section>
    </>
  );
}

export default HomePage;