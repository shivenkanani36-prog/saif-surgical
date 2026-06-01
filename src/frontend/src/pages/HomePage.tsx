import type { Page } from "../App";

interface HomePageProps {
  navigate: (page: Page) => void;
}

const testimonials = [
  {
    name: "Dr. Priya Patel",
    title: "Nadiad Hospital",
    quote:
      "Saif Surgical supplied all our OT equipment on time. Excellent quality and service.",
  },
  {
    name: "Mr. Ramesh Shah",
    title: "Anand Medical Stores",
    quote: "Best prices in the region. Reliable supplier for 5 years.",
  },
  {
    name: "Dr. Meera Joshi",
    title: "Bhavnagar Clinic",
    quote:
      "Professional team, quick response, and genuine products. Highly recommended.",
  },
  {
    name: "Admin",
    title: "Santaram Eye Hospital",
    quote:
      "Trusted partner for our operation theatre setup. Delivered with perfection.",
  },
];

const blogPosts = [
  {
    tag: "New Arrivals",
    tagColor: "#0A74DA",
    title: "New Batch of Surgical Instruments Arrived",
    date: "May 2026",
    excerpt:
      "Fresh stock of premium surgical scissors, forceps, and retractors now available. Competitive pricing for bulk orders.",
  },
  {
    tag: "Project Update",
    tagColor: "#2FB66D",
    title: "Operation Theatre Setup Completed in Bharuch",
    date: "April 2026",
    excerpt:
      "Our team successfully completed a full OT setup for a leading hospital in Bharuch, Gujarat. 26th OT milestone achieved.",
  },
  {
    tag: "Expert Tips",
    tagColor: "#7c3aed",
    title: "Tips for Choosing the Right Surgical Instruments",
    date: "March 2026",
    excerpt:
      "A quick guide to selecting quality surgical tools for clinics and hospitals — what to look for, and questions to ask your supplier.",
  },
];

const categories = [
  {
    img: "/assets/generated/category-surgical.dim_600x400.jpg",
    alt: "Surgical Instruments",
    title: "Surgical Instruments",
    desc: "Premium quality surgical tools for hospitals, clinics and medical professionals",
  },
  {
    img: "/assets/generated/category-laboratory.dim_600x400.jpg",
    alt: "Laboratory Equipment",
    title: "Laboratory Equipment",
    desc: "Advanced lab instruments for diagnostics, research and analysis",
  },
  {
    img: "/assets/generated/category-scientific.dim_600x400.jpg",
    alt: "Scientific Tools",
    title: "Scientific Tools",
    desc: "Precision scientific instruments for research and industrial use",
  },
  {
    img: "/assets/generated/category-educational.dim_600x400.jpg",
    alt: "Educational Equipment",
    title: "Educational Equipment",
    desc: "Science equipment for schools, colleges and medical students",
  },
];

const expertiseCards = [
  {
    icon: "🏥",
    title: "Operation Theatre Specialists",
    desc: "Specialized in complete Operation Theatre setup and supply of OT equipment — from lighting and tables to instruments and accessories.",
  },
  {
    icon: "🏆",
    title: "25+ OTs Successfully Completed",
    desc: "We have successfully set up 25+ Operation Theatres across hospitals and clinics, each delivered with high precision and perfection.",
  },
  {
    icon: "👁️",
    title: "Worked with Leading Hospitals",
    desc: "Our trusted clientele includes Santram Eye Hospital, Nadiad (with 10+ overseas collaborations) and several other reputed healthcare facilities across India.",
  },
  {
    icon: "🌍",
    title: "International Project Experience",
    desc: "Beyond India, we have successfully completed 10+ overseas projects — including work with Santram Eye Hospital, Nadiad — bringing global standards to every engagement.",
  },
  {
    icon: "⭐",
    title: "Trusted by Hospitals & Labs",
    desc: "Hospitals, clinics, and laboratories across the region rely on us for quality equipment and dependable after-sales support.",
  },
];

const benefits = [
  {
    icon: "🏆",
    title: "Trusted Local Supplier",
    desc: "Serving Anand and Gujarat for years with genuine products",
  },
  {
    icon: "✅",
    title: "Quality-Tested Products",
    desc: "Every product is verified for quality and compliance",
  },
  {
    icon: "💰",
    title: "Competitive Pricing",
    desc: "Best prices in the region with no compromise on quality",
  },
  {
    icon: "⚡",
    title: "Quick Response",
    desc: "Fast replies on WhatsApp and phone, same-day quotes",
  },
];

export default function HomePage({ navigate }: HomePageProps) {
  return (
    <>
      {/* Hero */}
      <section
        className="ss-hero-section"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-medical.dim_1920x1080.jpg')",
        }}
      >
        <div className="ss-hero-overlay" />
        <div className="ss-hero-content ss-container">
          <span className="ss-hero-badge">
            Anand's Most Trusted Equipment Supplier
          </span>
          <h1>
            Leading Surgical &amp; Scientific
            <br />
            <span className="ss-text-blue-light">
              Equipment Supplier in Anand
            </span>
          </h1>
          <p className="ss-hero-sub">
            Trusted by hospitals, clinics, laboratories &amp; schools across
            Gujarat. Quality products at competitive prices with fast local
            delivery.
          </p>
          <div className="ss-hero-btns">
            <a href="tel:9898056315" className="ss-btn ss-btn-blue">
              📞 Call Now: 9898056315
            </a>
            <a
              href="https://wa.me/919898056315"
              target="_blank"
              rel="noopener noreferrer"
              className="ss-btn ss-btn-green"
            >
              💬 WhatsApp Now
            </a>
            <button
              type="button"
              className="ss-btn ss-btn-outline-white"
              onClick={() => navigate("get-quote")}
            >
              Get a Quote
            </button>
          </div>
          <p className="ss-hero-owner">
            Owner: Mr. Aliasgar A. Vohara &bull; Anand, Gujarat 388001
          </p>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="ss-trust-bar">
        <div className="ss-container ss-trust-bar-inner">
          <div className="ss-trust-item">
            <span className="ss-trust-icon">👤</span> Mr. Aliasgar A. Vohara
          </div>
          <div className="ss-trust-item">
            <span className="ss-trust-icon">📍</span> Anand, Gujarat
          </div>
          <div className="ss-trust-item">
            <span className="ss-trust-icon">🚚</span> Fast Local Delivery
          </div>
          <div className="ss-trust-item">
            <span className="ss-trust-icon">✅</span> Trusted by Clinics &amp;
            Labs
          </div>
        </div>
      </section>

      {/* Trust Highlights */}
      <section className="ss-trust-highlights-bar">
        <div className="ss-container ss-trust-highlights-inner">
          <div className="ss-th-item">
            <span>✔</span> 25+ Operation Theatres Completed
          </div>
          <div className="ss-th-item">
            <span>✔</span> Trusted by Leading Hospitals
          </div>
          <div className="ss-th-item">
            <span>✔</span> International Project Experience
          </div>
          <div className="ss-th-item">
            <span>✔</span> High Precision Work
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="ss-section ss-bg-lightgray">
        <div className="ss-container">
          <div className="ss-section-header">
            <h2>Our Product Categories</h2>
            <p>
              Comprehensive range of quality equipment for healthcare, research
              and education
            </p>
          </div>
          <div className="ss-grid ss-grid-4">
            {categories.map((cat) => (
              <div key={cat.title} className="ss-card ss-cat-card">
                <div className="ss-cat-img">
                  <img src={cat.img} alt={cat.alt} loading="lazy" />
                </div>
                <div className="ss-card-body">
                  <h3>{cat.title}</h3>
                  <p>{cat.desc}</p>
                  <button
                    type="button"
                    className="ss-btn ss-btn-blue ss-btn-sm"
                    onClick={() => navigate("get-quote")}
                  >
                    Request Price
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="ss-section ss-bg-white">
        <div className="ss-container">
          <div className="ss-section-header">
            <h2>Our Expertise &amp; Experience</h2>
            <p>
              Decades of trusted service in Operation Theatre setup and medical
              equipment supply across India and abroad
            </p>
          </div>
          <div className="ss-grid ss-grid-3">
            {expertiseCards.map((card) => (
              <div key={card.title} className="ss-expertise-card">
                <div className="ss-expertise-icon">{card.icon}</div>
                <div>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="ss-section ss-bg-lightgray">
        <div className="ss-container">
          <div className="ss-section-header">
            <h2>Why Choose Us?</h2>
            <p>
              We go above and beyond to deliver the best service to our clients
            </p>
          </div>
          <div className="ss-grid ss-grid-4">
            {benefits.map((b) => (
              <div key={b.title} className="ss-benefit-card">
                <div className="ss-benefit-icon">{b.icon}</div>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="ss-section ss-bg-white">
        <div className="ss-container">
          <div className="ss-section-header">
            <h2>What Our Clients Say</h2>
            <p>
              Trusted by hospitals, clinics, and laboratories across Gujarat.
            </p>
          </div>
          <div className="ss-grid ss-grid-4">
            {testimonials.map((t) => (
              <div key={t.name + t.title} className="ss-testimonial-card">
                <div className="ss-testimonial-stars">★★★★★</div>
                <p className="ss-testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
                <div className="ss-testimonial-author">
                  <div className="ss-testimonial-avatar">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="ss-testimonial-name">{t.name}</p>
                    <p className="ss-testimonial-title">{t.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog / News */}
      <section className="ss-section ss-bg-lightgray">
        <div className="ss-container">
          <div className="ss-section-header">
            <h2>Latest News &amp; Updates</h2>
            <p>
              Stay informed about our latest products, projects, and insights.
            </p>
          </div>
          <div className="ss-grid ss-grid-3">
            {blogPosts.map((post) => (
              <div key={post.title} className="ss-blog-card">
                <span
                  className="ss-blog-tag"
                  style={{ background: post.tagColor }}
                >
                  {post.tag}
                </span>
                <h3 className="ss-blog-title">{post.title}</h3>
                <p className="ss-blog-date">📅 {post.date}</p>
                <p className="ss-blog-excerpt">{post.excerpt}</p>
                <a
                  href={`https://wa.me/919898056315?text=${encodeURIComponent(
                    `Hi, I'd like to know more about: ${post.title}`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ss-btn ss-btn-outline-blue ss-btn-sm"
                >
                  Read More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Urgent CTA */}
      <section className="ss-cta-section">
        <div className="ss-container">
          <h2>Need Equipment Urgently?</h2>
          <p className="ss-cta-sub">
            Call us now or send a WhatsApp message. We respond within minutes.
          </p>
          <div className="ss-cta-btns">
            <a href="tel:9898056315" className="ss-btn ss-btn-green ss-btn-lg">
              📞 Call Now
            </a>
            <a
              href="https://wa.me/919898056315"
              target="_blank"
              rel="noopener noreferrer"
              className="ss-btn ss-btn-outline-white ss-btn-lg"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="ss-section ss-bg-white">
        <div className="ss-container">
          <div className="ss-section-header">
            <h2>Find Us in Anand</h2>
            <p>Visit us or get in touch — we're always happy to help</p>
          </div>
          <div className="ss-location-grid">
            <div className="ss-location-info ss-bg-lightgray">
              <div className="ss-loc-row">
                <span>📍</span>
                <div>
                  <p className="ss-loc-label">Our Location</p>
                  <p className="ss-loc-addr">
                    Bhalej Rd, near Shah Petroleum,
                    <br />
                    Ganesh Chokdi, Sardar Ganj,
                    <br />
                    Anand, Gujarat 388001
                  </p>
                </div>
              </div>
              <div className="ss-loc-row">
                <span>📞</span>
                <a href="tel:9898056315" className="ss-link-blue">
                  9898056315
                </a>
              </div>
              <a
                href="https://maps.google.com/?q=Saif+Surgical+Anand+Gujarat"
                target="_blank"
                rel="noopener noreferrer"
                className="ss-btn ss-btn-blue ss-btn-sm"
                style={{ marginTop: "16px", display: "inline-flex" }}
              >
                Get Directions
              </a>
            </div>
            <div className="ss-map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.3!2d72.9718!3d22.5645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDMzJzUyLjIiTiA3MsKwNTgnMTguNSJF!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin"
                width="100%"
                height="350"
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
