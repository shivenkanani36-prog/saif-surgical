import type { Page } from "../App";

interface FooterProps {
  navigate: (page: Page) => void;
}

export default function Footer({ navigate }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer id="ss-footer">
      <div className="ss-container">
        <div className="ss-footer-grid">
          <div className="ss-footer-brand">
            <div className="ss-footer-logo">
              <div className="ss-footer-logo-icon">✚</div>
              <div>
                <span className="ss-footer-brand-name">Saif Surgical</span>
                <span className="ss-footer-brand-sub">
                  &amp; Scientific Equipment
                </span>
              </div>
            </div>
            <p className="ss-footer-desc">
              Your trusted partner for surgical instruments, laboratory
              equipment and scientific tools in Anand, Gujarat.
            </p>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "6px" }}
            >
              <a href="tel:9898056315" className="ss-footer-link">
                📞 9898056315
              </a>
              <a
                href="https://wa.me/919898056315"
                target="_blank"
                rel="noopener noreferrer"
                className="ss-footer-link"
              >
                💬 WhatsApp
              </a>
            </div>
            <div className="ss-footer-social">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="ss-social-icon"
                aria-label="Facebook"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                <span className="ss-sr-only">Facebook</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="ss-social-icon"
                aria-label="Instagram"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                <span className="ss-sr-only">Instagram</span>
              </a>
              <a
                href="https://wa.me/919898056315"
                target="_blank"
                rel="noopener noreferrer"
                className="ss-social-icon"
                aria-label="WhatsApp"
              >
                <svg
                  viewBox="0 0 32 32"
                  width="18"
                  height="18"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M16.004 2.667C8.637 2.667 2.667 8.636 2.667 16c0 2.336.628 4.618 1.816 6.618L2.667 29.333l6.91-1.786A13.3 13.3 0 0016.004 29.333C23.37 29.333 29.333 23.363 29.333 16S23.37 2.667 16.004 2.667zm0 2.666c5.88 0 10.663 4.782 10.663 10.667s-4.783 10.667-10.663 10.667c-1.97 0-3.818-.542-5.402-1.484l-.39-.233-4.037 1.046 1.072-3.908-.253-.41A10.62 10.62 0 015.341 16c0-5.885 4.783-10.667 10.663-10.667zm-3.03 5.16c-.24 0-.627.088-.955.437-.328.349-1.25 1.22-1.25 2.975s1.28 3.452 1.46 3.692c.177.241 2.507 3.832 6.083 5.225 3.027 1.168 3.579.936 4.217.877.638-.059 2.06-.841 2.351-1.655.29-.814.29-1.51.204-1.655-.088-.146-.329-.23-.687-.403-.358-.174-2.12-1.047-2.449-1.163-.328-.116-.567-.174-.806.174-.24.348-.928 1.163-1.137 1.404-.21.24-.42.27-.779.087-.358-.182-1.512-.558-2.882-1.78-1.065-.948-1.786-2.12-1.994-2.477-.21-.358-.022-.55.157-.726.162-.16.358-.418.537-.627.18-.21.24-.358.36-.598.12-.24.06-.45-.03-.627-.088-.174-.792-1.934-1.09-2.642-.286-.688-.579-.594-.806-.605z" />
                </svg>
                <span className="ss-sr-only">WhatsApp</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="ss-social-icon"
                aria-label="LinkedIn"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <span className="ss-sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="ss-footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <button type="button" onClick={() => navigate("home")}>
                  Home
                </button>
              </li>
              <li>
                <button type="button" onClick={() => navigate("about")}>
                  About Us
                </button>
              </li>
              <li>
                <button type="button" onClick={() => navigate("products")}>
                  Products
                </button>
              </li>
              <li>
                <button type="button" onClick={() => navigate("contact")}>
                  Contact
                </button>
              </li>
              <li>
                <button type="button" onClick={() => navigate("get-quote")}>
                  Get Quote
                </button>
              </li>
            </ul>
          </div>

          <div className="ss-footer-address">
            <h4>Our Address</h4>
            <p>
              📍 Bhalej Rd, near Shah Petroleum,
              <br />
              Ganesh Chokdi, Sardar Ganj,
              <br />
              Anand, Gujarat 388001
            </p>
            <p style={{ marginTop: "8px", fontSize: "13px", color: "#93b8d8" }}>
              Serving Anand, Gujarat &amp; Nearby Areas
            </p>
          </div>
        </div>
      </div>
      <div className="ss-footer-bottom">
        <span>
          &copy; {year} Saif Surgical &amp; Scientific Equipment. All rights
          reserved.
        </span>
      </div>
    </footer>
  );
}
