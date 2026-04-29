import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useCart } from "../store/CartContext";

function Header() {
  const { totalItems, openCart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <Link to="/" className="brand" onClick={closeMenu}>
        <span className="brand-mark">N</span>

        <span>
          <strong>Northstar Goods</strong>
          <small>Modern essentials for work, travel, and home</small>
        </span>
      </Link>

      {/* Desktop Nav */}
      <nav className="site-nav desktop-nav" aria-label="Primary navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
      </nav>

      {/* Desktop Actions */}
      <div className="header-actions desktop-actions">
        <Link to="/cart" className="text-link">
          View cart
        </Link>

        <button type="button" className="cart-button" onClick={openCart}>
          Cart
          <span>{totalItems}</span>
        </button>
      </div>

      {/* Burger */}
      <button
        className="burger-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? (
          <XMarkIcon className="menu-icon" />
        ) : (
          <Bars3Icon className="menu-icon" />
        )}
      </button>

      {/* Mobile Slide Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <nav className="mobile-nav">
          <NavLink to="/" onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/products" onClick={closeMenu}>
            Products
          </NavLink>

          <NavLink to="/about" onClick={closeMenu}>
            About
          </NavLink>

          <NavLink to="/contact" onClick={closeMenu}>
            Contact Us
          </NavLink>

          <Link to="/cart" onClick={closeMenu}>
            View cart
          </Link>

          <button
            type="button"
            className="cart-button mobile-cart"
            onClick={() => {
              openCart();
              closeMenu();
            }}
          >
            Cart
            <span>{totalItems}</span>
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;