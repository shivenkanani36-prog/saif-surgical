import { useRef, useState } from "react";
import type { Page } from "../App";

interface HeaderProps {
  activePage: Page;
  navigate: (page: Page) => void;
}

const productCategories = [
  "Surgical Instruments",
  "Laboratory Equipment",
  "Glassware",
  "Diagnostic Tools",
];

export default function Header({ activePage, navigate }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleNav(page: Page) {
    navigate(page);
    setMobileOpen(false);
    setProductsDropdownOpen(false);
    setMobileProductsOpen(false);
  }

  function handleProductsMouseEnter() {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setProductsDropdownOpen(true);
  }

  function handleProductsMouseLeave() {
    dropdownTimeout.current = setTimeout(
      () => setProductsDropdownOpen(false),
      150,
    );
  }

  const navItems: { label: string; page: Page }[] = [
    { label: "Home", page: "home" },
    { label: "About", page: "about" },
    { label: "Products", page: "products" },
    { label: "Contact", page: "contact" },
  ];

  return (
    <header id="ss-header">
      <div className="ss-container ss-header-inner">
        <button
          type="button"
          className="ss-logo-link"
          onClick={() => handleNav("home")}
          style={{ background: "none", border: "none" }}
        >
          <img
            src="/assets/generated/logo.png"
            alt="Saif Surgical Logo"
            className="ss-logo-img"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          <div>
            <span className="ss-logo-title">Saif Surgical</span>
            <span className="ss-logo-sub">&amp; Scientific Equipment</span>
          </div>
        </button>

        <nav id="ss-desktop-nav">
          {navItems.map((item) =>
            item.page === "products" ? (
              <div
                key={item.page}
                className="ss-nav-dropdown-wrap"
                onMouseEnter={handleProductsMouseEnter}
                onMouseLeave={handleProductsMouseLeave}
              >
                <button
                  type="button"
                  className={`ss-nav-link${activePage === item.page ? " active" : ""}`}
                  onClick={() => handleNav(item.page)}
                  aria-haspopup="true"
                  aria-expanded={productsDropdownOpen}
                >
                  {item.label} <span className="ss-dropdown-caret">▾</span>
                </button>
                {productsDropdownOpen && (
                  <div className="ss-dropdown-menu">
                    {productCategories.map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        className="ss-dropdown-item"
                        onClick={() => handleNav("products")}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <button
                key={item.page}
                type="button"
                className={`ss-nav-link${activePage === item.page ? " active" : ""}`}
                onClick={() => handleNav(item.page)}
              >
                {item.label}
              </button>
            ),
          )}
        </nav>

        <div className="ss-header-cta">
          <button
            type="button"
            className="ss-btn ss-btn-green ss-btn-pill"
            onClick={() => handleNav("get-quote")}
          >
            + Request a Quote
          </button>
          <button
            id="ss-menu-toggle"
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((o) => !o)}
          >
            <span className="ss-hamburger-icon">☰</span>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div id="ss-mobile-menu">
          {navItems.map((item) =>
            item.page === "products" ? (
              <div key={item.page}>
                <button
                  type="button"
                  className="ss-mobile-nav-link ss-mobile-nav-link-products"
                  onClick={() => setMobileProductsOpen((o) => !o)}
                >
                  {item.label}{" "}
                  <span className="ss-dropdown-caret">
                    {mobileProductsOpen ? "▴" : "▾"}
                  </span>
                </button>
                {mobileProductsOpen && (
                  <div className="ss-mobile-dropdown">
                    {productCategories.map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        className="ss-mobile-dropdown-item"
                        onClick={() => handleNav("products")}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <button
                key={item.page}
                type="button"
                className="ss-mobile-nav-link"
                onClick={() => handleNav(item.page)}
              >
                {item.label}
              </button>
            ),
          )}
          <button
            type="button"
            className="ss-btn ss-btn-green ss-btn-pill"
            style={{ textAlign: "center", marginTop: "8px" }}
            onClick={() => handleNav("get-quote")}
          >
            Request a Quote
          </button>
        </div>
      )}
    </header>
  );
}
