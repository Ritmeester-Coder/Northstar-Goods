import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

function ProductsPage() {
  return (
    <section className="section">
      <div className="page-heading">
        <p className="eyebrow">Curated collection</p>

        <h1>Products</h1>

        <p>
          Discover thoughtfully selected essentials designed for modern living —
          from travel-ready gear and refined home pieces to everyday staples that
          balance form and function.
        </p>
      </div>

      <div className="collection-banner">
        <div>
          <span>New arrivals</span>

          <h2>Purposeful products made to elevate daily routines</h2>
        </div>

        <p>
          Every item in the Northstar collection is chosen for clean design,
          lasting quality, and practical use — built to move effortlessly
          between work, travel, and home.
        </p>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default ProductsPage;