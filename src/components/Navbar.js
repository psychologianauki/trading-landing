import { useEffect, useState } from "react";

const cssStyles = `
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    padding: 1rem 0;
    transition: all 0.3s ease;
    border-bottom: 1px solid transparent;
    
  }

  /* Efekt tła po przewinięciu */
  .navbar.scrolled {
    background-color: rgba(2, 6, 23, 0.85); /* Ciemny granat/czerń */
    backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(59, 130, 246, 0.15); /* Subtelna niebieska linia */
    padding: 0.8rem 0;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  }

  .nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  /* Logo */
  .nav-logo {
    font-size: 1.5rem;
    font-weight: 800;
    color: white;
    text-decoration: none;
    letter-spacing: -0.5px;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .nav-logo span {
    color: #3b82f6; /* Blue accent */
  }

  /* Desktop Menu */
  .nav-links {
    display: flex;
    gap: 2.5rem;
    list-style: none;
    margin: 0;
    padding: 0;
    align-items: center;
  }

  .nav-link {
    color: #cbd5e1; /* Cool gray */
    text-decoration: none;
    font-size: 0.95rem;
    font-weight: 500;
    transition: color 0.3s ease;
    position: relative;
    cursor: pointer;
  }

  .nav-link:hover {
    color: #60a5fa; /* Jaśniejszy niebieski */
  }

  /* Efekt podkreślenia przy hover */
  .nav-link::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: #3b82f6;
    transition: width 0.3s ease;
  }

  .nav-link:hover::after {
    width: 100%;
  }

  /* CTA Button w navbarze */
  .nav-btn {
    background: linear-gradient(90deg, #2563eb, #3b82f6);
    color: white;
    padding: 0.6rem 1.4rem;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.9rem;
    transition: transform 0.2s, box-shadow 0.2s;
    border: none;
    cursor: pointer;
    box-shadow: 0 0 15px rgba(37, 99, 235, 0.3);
  }

  .nav-btn:hover {
    transform: translateY(-1px);
    box-shadow: 0 0 20px rgba(37, 99, 235, 0.5);
  }

  /* Hamburger Menu (Mobile) */
  .hamburger {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    flex-direction: column;
    gap: 5px;
    padding: 5px;
    z-index: 1100;
  }

  .bar {
    width: 24px;
    height: 2px;
    background-color: white;
    transition: all 0.3s ease;
  }

  /* Mobile Responsive */
  @media (max-width: 768px) {
    .nav-links {
      position: fixed;
      top: 0;
      right: -100%;
      width: 100%;
      height: 100vh;
      background-color: #020617;
      flex-direction: column;
      justify-content: center;
      gap: 2rem;
      transition: right 0.4s ease;
      z-index: 1050;
    }

    .nav-links.active {
      right: 0;
    }

    .hamburger {
      display: flex;
    }

    .hamburger.active .bar:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }
    .hamburger.active .bar:nth-child(2) {
      opacity: 0;
    }
    .hamburger.active .bar:nth-child(3) {
      transform: rotate(-45deg) translate(5px, -5px);
    }
    
    .nav-link {
        font-size: 1.2rem;
    }
  }
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Obsługa scrollowania (zmiana tła)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Płynne przewijanie do sekcji
  const scrollToSection = (e, id) => {
    e.preventDefault();
    setIsOpen(false); // Zamknij menu mobilne po kliknięciu
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Wysokość navbara
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <style>{cssStyles}</style>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          <a
            href="/"
            className="nav-logo"
            onClick={(e) => scrollToSection(e, "home")}
          >
            AZ<span>.Trading</span>
          </a>

          <button
            className={`hamburger ${isOpen ? "active" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>

          <ul className={`nav-links ${isOpen ? "active" : ""}`}>
            <li>
              <a
                href="#home"
                className="nav-link"
                onClick={(e) => scrollToSection(e, "home")}
              >
                Start
              </a>
            </li>
            <li>
              <a
                href="#results"
                className="nav-link"
                onClick={(e) => scrollToSection(e, "results")}
              >
                Results
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="nav-link"
                onClick={(e) => scrollToSection(e, "faq")}
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="nav-link"
                onClick={(e) => scrollToSection(e, "contact")}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#join"
                className="nav-btn"
                onClick={(e) => scrollToSection(e, "results")}
              >
                Join Now
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
