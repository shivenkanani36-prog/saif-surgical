import { useRef } from "react";
import type { Page } from "../App";

interface GetQuotePageProps {
  navigate: (page: Page) => void;
}

export default function GetQuotePage({ navigate }: GetQuotePageProps) {
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const productRef = useRef<HTMLInputElement>(null);
  const qtyRef = useRef<HTMLInputElement>(null);
  const msgRef = useRef<HTMLTextAreaElement>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const name = nameRef.current?.value.trim() ?? "";
    const phone = phoneRef.current?.value.trim() ?? "";
    const product = productRef.current?.value.trim() ?? "";
    const qty = qtyRef.current?.value.trim() || "Not specified";
    const msg = msgRef.current?.value.trim() || "N/A";

    const text = `Hello, I would like to request a quote:\n\nName: ${name}\nPhone: ${phone}\nRequirement: ${product}\nQuantity: ${qty}\nMessage: ${msg}`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/919898056315?text=${encoded}`, "_blank");

    (e.target as HTMLFormElement).reset();
    navigate("quote-submitted");
  }

  return (
    <>
      <section className="ss-page-hero">
        <div className="ss-container ss-text-center">
          <h1>Get a Quote</h1>
          <p>
            Fill in your requirements and we'll send it directly to WhatsApp
          </p>
        </div>
      </section>

      <section className="ss-section">
        <div className="ss-container" style={{ maxWidth: "640px" }}>
          <div className="ss-card" style={{ padding: "40px" }}>
            <h2 style={{ marginBottom: "24px" }}>Quote Request Form</h2>
            <form className="ss-form" onSubmit={handleSubmit}>
              <div className="ss-form-group">
                <label htmlFor="q-name">Full Name *</label>
                <input
                  id="q-name"
                  ref={nameRef}
                  type="text"
                  required
                  placeholder="Your full name"
                />
              </div>
              <div className="ss-form-group">
                <label htmlFor="q-phone">Phone Number *</label>
                <input
                  id="q-phone"
                  ref={phoneRef}
                  type="tel"
                  required
                  placeholder="Your phone number"
                />
              </div>
              <div className="ss-form-group">
                <label htmlFor="q-product">Requirement *</label>
                <input
                  id="q-product"
                  ref={productRef}
                  type="text"
                  required
                  placeholder="e.g. Operation Theatre setup, Surgical Scissors"
                />
              </div>
              <div className="ss-form-group">
                <label htmlFor="q-qty">Quantity</label>
                <input
                  id="q-qty"
                  ref={qtyRef}
                  type="number"
                  min={1}
                  placeholder="How many do you need?"
                />
              </div>
              <div className="ss-form-group">
                <label htmlFor="q-msg">Additional Message</label>
                <textarea
                  id="q-msg"
                  ref={msgRef}
                  rows={4}
                  placeholder="Any specific requirements, brand preferences, budget..."
                />
              </div>
              <button
                type="submit"
                className="ss-btn ss-btn-green ss-btn-block ss-btn-lg"
              >
                💬 Send via WhatsApp
              </button>
            </form>
            <p
              style={{
                marginTop: "14px",
                textAlign: "center",
                fontSize: "13px",
                color: "#888",
              }}
            >
              ⏱ We'll respond within 30 minutes via WhatsApp or call
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
