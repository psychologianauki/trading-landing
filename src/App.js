import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import FaqSection from './components/FaqSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return <div className="trading-site">
    <a className="skip-link" href="#home">Skip to content</a>
    <Navbar />
    <main>
      <Hero />
      <Testimonials />
      <FaqSection />
      <Contact />
    </main>
    <Footer />
  </div>;
}
