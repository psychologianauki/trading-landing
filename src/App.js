import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Process from "./components/Process";
import Services from "./components/Services";
import Stats from "./components/Stats";
import TechStack from "./components/TechStack";
import { GlobalStyle } from "./styles-config";

function App() {
  // --- NOWA LOGIKA TŁA ---

  // Neonowa siatka (lekko futurystyczny klimat) – ciemniejsza
  const gridPatternString = `<svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" fill="none" stroke="%230e1b2b" stroke-width="0.5"/>
  </svg>`;

  const gridDataUrl = `url("data:image/svg+xml,${encodeURIComponent(
    gridPatternString
  )}")`;

  // Gradient w tle (ciemniejszy o ~10%)
  const baseGradient = `linear-gradient(135deg, #081427 0%, #010a16 60%, #151930 100%)`;

  // Subtelny neonowy akcent – ciemniejszy odcień i mniejsza intensywność
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
      <GlobalStyle />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Stats />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
