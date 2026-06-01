import type { Page } from "../App";

interface QuoteSubmittedPageProps {
  navigate: (page: Page) => void;
}

export default function QuoteSubmittedPage({
  navigate,
}: QuoteSubmittedPageProps) {
  return (
    <>
      <section className="ss-page-hero">
        <div className="ss-container ss-text-center">
          <div className="ss-success-checkmark">✅</div>
          <h1>Quote Request Received!</h1>
          <p>
            Thank you for reaching out. We'll get back to you within{" "}
            <strong style={{ color: "#2FB66D" }}>30 minutes</strong> via
            WhatsApp or phone call.
          </p>
        </div>
      </section>

      <section className="ss-section">
        <div className="ss-container" style={{ maxWidth: "700px" }}>
          <div
            className="ss-card"
            style={{ padding: "40px", marginBottom: "32px" }}
          >
            <h2 style={{ textAlign: "center", marginBottom: "32px" }}>
              What Happens Next?
            </h2>
            <div className="ss-steps">
              <div className="ss-step">
                <div className="ss-step-num">1</div>
                <div>
                  <h3>We Review Your Request</h3>
                  <p>
                    Our team carefully reviews your product requirements and
                    quantity.
                  </p>
                </div>
              </div>
              <div className="ss-step">
                <div className="ss-step-num">2</div>
                <div>
                  <h3>We Prepare a Competitive Quote</h3>
                  <p>
                    We source the best prices from trusted suppliers to give you
                    the most value.
                  </p>
                </div>
              </div>
              <div className="ss-step">
                <div className="ss-step-num">3</div>
                <div>
                  <h3>We Contact You</h3>
                  <p>
                    Mr. Aliasgar personally reaches out via WhatsApp or phone
                    call within 30 minutes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="ss-submitted-cta">
            <a
              href="https://wa.me/919898056315"
              target="_blank"
              rel="noopener noreferrer"
              className="ss-btn ss-btn-green ss-btn-lg"
            >
              💬 WhatsApp Us Now
            </a>
            <a href="tel:9898056315" className="ss-btn ss-btn-blue ss-btn-lg">
              📞 Call Us Now
            </a>
            <button
              type="button"
              className="ss-btn ss-btn-outline-blue ss-btn-lg"
              onClick={() => navigate("home")}
            >
              Back to Home
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
