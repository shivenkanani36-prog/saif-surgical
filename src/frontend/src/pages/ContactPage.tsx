import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const name = (
      form.querySelector("#c-name") as HTMLInputElement
    ).value.trim();
    const phone = (
      form.querySelector("#c-phone") as HTMLInputElement
    ).value.trim();
    const req = (
      form.querySelector("#c-req") as HTMLTextAreaElement
    ).value.trim();
    const text = `Hello, I'd like to get in touch:\n\nName: ${name}\nPhone: ${phone}\nRequirement: ${req}`;
    window.open(
      `https://wa.me/919898056315?text=${encodeURIComponent(text)}`,
      "_blank",
    );
    setSubmitted(true);
    form.reset();
    setTimeout(() => setSubmitted(false), 5000);
  }

  return (
    <>
      <section className="ss-page-hero">
        <div className="ss-container ss-text-center">
          <h1>Contact Us</h1>
          <p>Reach out via call, WhatsApp or the form below</p>
        </div>
      </section>

      <section className="ss-contact-quick-bar">
        <div className="ss-container ss-contact-quick-bar-inner">
          <a href="tel:9898056315" className="ss-btn-quick-call">
            📞 9898056315
          </a>
          <a
            href="https://wa.me/919898056315"
            target="_blank"
            rel="noopener noreferrer"
            className="ss-btn ss-btn-green ss-btn-lg"
          >
            💬 WhatsApp Now
          </a>
        </div>
      </section>

      <section className="ss-section">
        <div className="ss-container ss-contact-grid">
          <div className="ss-contact-form-wrap">
            <h2>Send Us a Message</h2>
            <form className="ss-form" onSubmit={handleSubmit}>
              <div className="ss-form-group">
                <label htmlFor="c-name">Name *</label>
                <input
                  id="c-name"
                  type="text"
                  required
                  placeholder="Your full name"
                />
              </div>
              <div className="ss-form-group">
                <label htmlFor="c-phone">Phone *</label>
                <input
                  id="c-phone"
                  type="tel"
                  required
                  placeholder="Your phone number"
                />
              </div>
              <div className="ss-form-group">
                <label htmlFor="c-req">Your Requirement *</label>
                <textarea
                  id="c-req"
                  required
                  rows={4}
                  placeholder="Tell us what you need..."
                />
              </div>
              <button type="submit" className="ss-btn ss-btn-blue ss-btn-block">
                Send Message
              </button>
            </form>
            {submitted && (
              <div className="ss-success-msg">
                ✅ Message sent! We'll get back to you shortly on WhatsApp or
                phone.
              </div>
            )}
          </div>

          <div>
            <div className="ss-address-card ss-bg-lightgray">
              <h3>Our Address</h3>
              <div className="ss-loc-row">
                <span>📍</span>
                <p>
                  Bhalej Rd, near Shah Petroleum,
                  <br />
                  Ganesh Chokdi, Sardar Ganj,
                  <br />
                  Anand, Gujarat 388001
                </p>
              </div>
              <div className="ss-loc-row">
                <span>📞</span>
                <a href="tel:9898056315" className="ss-link-blue">
                  9898056315
                </a>
              </div>
            </div>
            <div className="ss-map-wrapper" style={{ height: "300px" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.3!2d72.9718!3d22.5645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDMzJzUyLjIiTiA3MsKwNTgnMTguNSJF!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Saif Surgical Location"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
