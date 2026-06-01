import type { Page } from "../App";

interface ProductsPageProps {
  navigate: (page: Page) => void;
}

type Product = { emoji: string; title: string; desc: string };
type Category = { name: string; products: Product[] };

const productCategories: Category[] = [
  {
    name: "Surgical Instruments",
    products: [
      {
        emoji: "✂️",
        title: "Surgical Scissors Set",
        desc: "High-grade stainless steel scissors for precision surgical use — straight, curved and iris variants included.",
      },
      {
        emoji: "🔬",
        title: "Forceps Collection",
        desc: "Complete set of surgical forceps: tissue, hemostatic, dressing and artery forceps for clinical procedures.",
      },
      {
        emoji: "🩺",
        title: "Retractor Kit",
        desc: "Self-retaining and handheld retractors for wound exposure during surgical procedures.",
      },
    ],
  },
  {
    name: "Laboratory Equipment",
    products: [
      {
        emoji: "🔭",
        title: "Digital Microscope",
        desc: "High-resolution binocular microscope with LED illumination, 40x–1000x magnification for lab analysis.",
      },
      {
        emoji: "⚙️",
        title: "Centrifuge Machine",
        desc: "Benchtop centrifuge with variable speed control, ideal for blood and urine sample separation.",
      },
      {
        emoji: "📊",
        title: "pH Meter (Digital)",
        desc: "Precision digital pH meter with auto-calibration, temperature compensation and ATC for accurate readings.",
      },
    ],
  },
  {
    name: "Glassware",
    products: [
      {
        emoji: "🧪",
        title: "Beakers Set",
        desc: "Borosilicate glass beakers in 50ml, 100ml, 250ml, 500ml and 1000ml sizes, heat resistant.",
      },
      {
        emoji: "🧫",
        title: "Test Tubes Pack",
        desc: "Assorted borosilicate glass test tubes with rubber stoppers, ideal for mixing and heating experiments.",
      },
      {
        emoji: "📏",
        title: "Measuring Cylinders",
        desc: "Graduated measuring cylinders in multiple volumes with clear calibration markings.",
      },
    ],
  },
  {
    name: "Diagnostic Tools",
    products: [
      {
        emoji: "💉",
        title: "Stethoscope",
        desc: "Dual-head acoustic stethoscope for auscultation of cardiovascular and respiratory sounds.",
      },
      {
        emoji: "❤️",
        title: "BP Monitor",
        desc: "Digital automatic blood pressure monitor with memory storage and irregular heartbeat detection.",
      },
      {
        emoji: "🌡️",
        title: "Thermometer Set",
        desc: "Digital and infrared thermometers for accurate temperature measurement in clinical settings.",
      },
    ],
  },
];

export default function ProductsPage({ navigate }: ProductsPageProps) {
  return (
    <>
      <section className="ss-page-hero">
        <div className="ss-container ss-text-center">
          <h1>Our Products</h1>
          <p>
            High-quality equipment across surgical, laboratory, scientific and
            educational categories
          </p>
        </div>
      </section>

      <div className="ss-container ss-section">
        {productCategories.map((cat) => (
          <div key={cat.name} className="ss-product-category">
            <h2>{cat.name}</h2>
            <div className="ss-cat-divider" />
            <div className="ss-grid ss-grid-3">
              {cat.products.map((p) => (
                <div key={p.title} className="ss-product-card">
                  <div className="ss-product-emoji">{p.emoji}</div>
                  <div className="ss-product-info">
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
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
        ))}
      </div>
    </>
  );
}
