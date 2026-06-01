import { useState } from "react";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import GetQuotePage from "./pages/GetQuotePage";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import QuoteSubmittedPage from "./pages/QuoteSubmittedPage";

export type Page =
  | "home"
  | "about"
  | "products"
  | "contact"
  | "get-quote"
  | "quote-submitted";

export default function App() {
  const [activePage, setActivePage] = useState<Page>("home");

  function navigate(page: Page) {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <Header activePage={activePage} navigate={navigate} />
      <main id="ss-main">
        {activePage === "home" && <HomePage navigate={navigate} />}
        {activePage === "about" && <AboutPage navigate={navigate} />}
        {activePage === "products" && <ProductsPage navigate={navigate} />}
        {activePage === "contact" && <ContactPage />}
        {activePage === "get-quote" && <GetQuotePage navigate={navigate} />}
        {activePage === "quote-submitted" && (
          <QuoteSubmittedPage navigate={navigate} />
        )}
      </main>
      <Footer navigate={navigate} />
      <FloatingWhatsApp />
      <a href="tel:9898056315" className="ss-sticky-call-bar">
        📞 Call Now: 9898056315
      </a>
    </>
  );
}
