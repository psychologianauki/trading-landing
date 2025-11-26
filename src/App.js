import Contact from "./components/Contact";
import TechStack from "./components/FaqSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar"; // Import Navbar
import SuccessStories from "./components/Process";
import { GlobalStyle } from "./styles-config";

function App() {
  // --- LOGIKA TŁA ---
  const gridPatternString = `<svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" fill="none" stroke="%230e1b2b" stroke-width="0.5"/>
  </svg>`;

  const gridDataUrl = `url("data:image/svg+xml,${encodeURIComponent(
    gridPatternString
  )}")`;

  const baseGradient = `linear-gradient(135deg, #081427 0%, #010a16 60%, #151930 100%)`;

  const accentGradient = `radial-gradient(circle at 20% 30%, rgba(0, 180, 220, 0.12) 0%, transparent 40%),
                          radial-gradient(circle at 80% 70%, rgba(150, 0, 210, 0.10) 0%, transparent 35%)`;

  const appWrapperStyle = {
    backgroundImage: `${gridDataUrl}, ${accentGradient}, ${baseGradient}`,
    backgroundColor: "#010a16",
    backgroundAttachment: "fixed",
    backgroundSize: "40px 40px, cover, cover",
    minHeight: "100vh",
  };

  return (
    <div style={appWrapperStyle}>
      {/* Dodajemy styl globalny dla płynnego scrollowania */}
      <style>{`html { scroll-behavior: smooth; }`}</style>
      <GlobalStyle />

      {/* Navbar na górze */}
      <Navbar />

      <main>
        {/* Sekcja HERO */}
        <section id="home">
          <Hero />
        </section>

        {/* Sekcja SUCCESS STORIES (Process) */}
        <section id="results">
          <SuccessStories />
        </section>

        {/* Sekcja FAQ (TechStack) */}
        <section id="faq">
          <TechStack />
        </section>

        {/* Sekcja CONTACT / ABOUT */}
        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
