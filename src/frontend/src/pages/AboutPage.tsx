import type { Page } from "../App";

interface AboutPageProps {
  navigate: (page: Page) => void;
}

const stats = [
  { value: "500+", label: "Products" },
  { value: "200+", label: "Happy Clients" },
  { value: "10+", label: "Years Experience" },
  { value: "Same Day", label: "Response" },
];

const values = [
  {
    icon: "🛡️",
    title: "Quality",
    desc: "Only genuine, quality-tested products from trusted manufacturers",
  },
  {
    icon: "⭐",
    title: "Affordability",
    desc: "Competitive pricing without compromising on quality or service",
  },
  {
    icon: "❤️",
    title: "Trust",
    desc: "Building long-term relationships with our clients and community",
  },
  {
    icon: "🏅",
    title: "Excellence",
    desc: "Striving for the highest standards in everything we do",
  },
];

export default function AboutPage({ navigate }: AboutPageProps) {
  return (
    <>
      <section className="ss-page-hero">
        <div className="ss-container ss-text-center">
          <h1>About Saif Surgical &amp; Scientific Equipment</h1>
          <p>
            Serving the healthcare and scientific community of Anand, Gujarat
            with dedication and trust
          </p>
        </div>
      </section>

      <section className="ss-stats-bar">
        <div className="ss-container ss-stats-grid">
          {stats.map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div className="ss-stat-value">{s.value}</div>
              <div className="ss-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="ss-section ss-bg-white">
        <div className="ss-container ss-about-grid">
          <div className="ss-about-story">
            <h2>Our Story</h2>
            <p>
              Saif Surgical &amp; Scientific Equipment was founded with a clear
              mission: to make high-quality surgical instruments, laboratory
              equipment and scientific tools accessible to hospitals, clinics,
              laboratories and educational institutions across Anand and the
              broader Gujarat region.
            </p>
            <p>
              We understand the critical role that reliable equipment plays in
              healthcare delivery and scientific research. That's why we
              maintain a comprehensive inventory of quality-tested products from
              trusted manufacturers, ensuring you always have access to what you
              need.
            </p>
            <p>
              From small medical stores to large hospitals, we cater to every
              need with personalised service, competitive pricing and fast local
              delivery.
            </p>
          </div>
          <div className="ss-owner-card ss-bg-lightgray">
            <h3>Meet Our Owner</h3>
            <div className="ss-owner-info">
              <div className="ss-owner-avatar">A</div>
              <div>
                <p className="ss-owner-name">Mr. Aliasgar A. Vohara</p>
                <p className="ss-owner-title">Proprietor, Saif Surgical</p>
              </div>
            </div>
            <p className="ss-owner-bio">
              With years of experience in the medical equipment industry, Mr.
              Vohara has built Saif Surgical on the pillars of quality,
              integrity and customer satisfaction. His deep understanding of the
              local healthcare market enables us to provide exactly what our
              clients need.
            </p>
            <div className="ss-contact-links">
              <a
                href="tel:9898056315"
                className="ss-link-blue"
                style={{ fontSize: "14px", fontWeight: 600 }}
              >
                📞 9898056315
              </a>
              <a
                href="https://wa.me/919898056315"
                className="ss-link-green"
                style={{ fontSize: "14px", fontWeight: 600 }}
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="ss-section ss-bg-lightgray">
        <div className="ss-container">
          <div className="ss-section-header">
            <h2>Our Mission &amp; Values</h2>
            <p>
              Quality + Affordability + Trust — the foundation of everything we
              do
            </p>
          </div>
          <div className="ss-grid ss-grid-4">
            {values.map((v) => (
              <div key={v.title} className="ss-value-card">
                <div className="ss-value-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ss-cta-section">
        <div className="ss-container">
          <h2>Ready to Work With Us?</h2>
          <p className="ss-cta-sub">
            Contact us today for competitive quotes and fast delivery.
          </p>
          <div className="ss-cta-btns">
            <button
              type="button"
              className="ss-btn ss-btn-green ss-btn-lg"
              onClick={() => navigate("get-quote")}
            >
              Get a Quote
            </button>
            <a
              href="tel:9898056315"
              className="ss-btn ss-btn-outline-white ss-btn-lg"
            >
              📞 Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
