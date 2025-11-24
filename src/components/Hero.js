import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import styled, { keyframes } from "styled-components";

// === DEFINICJA MOTYWU I ANIMACJI ===

const theme = {
  primary: "#0a192f",
  secondary: "#ccd6f6",
  tertiary: "#8892b0",
  accent: "#64ffda",
  lightNavy: "#112240",
};

// Nowa, bardziej dynamiczna animacja "fade up"
const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// === STYLOWANE KOMPONENTY ===

// Główny kontener już nie potrzebuje własnej animacji
const HeroSection = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  padding: 100px 15px 0; // Dodano padding-top, aby zrobić miejsce pod navbar

  @media (max-width: 768px) {
    padding: 80px 15px 0; // Mniejszy padding na mniejszych ekranach
  }
`;

// Każdy element poniżej otrzyma własną, opóźnioną animację

const TypewriterWrapper = styled.div`
  color: ${theme.accent};
  font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;
  font-size: 1.1rem;
  margin-bottom: 25px;
  font-weight: 400;
  height: 30px;

  /* Animacja kaskadowa */
  opacity: 0;
  animation: ${fadeUp} 0.5s ease-out forwards;
  animation-delay: 0.2s;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const HeroTitle = styled.h1`
  font-size: clamp(40px, 8vw, 80px);
  color: ${theme.secondary};
  font-weight: 700;
  line-height: 1.1;
  margin: 0;

  /* Animacja kaskadowa */
  opacity: 0;
  animation: ${fadeUp} 0.5s ease-out forwards;
  animation-delay: 0.4s;
`;

const HeroSubtitle = styled.h2`
  font-size: clamp(35px, 7vw, 70px);
  color: ${theme.tertiary};
  font-weight: 700;
  line-height: 1.1;
  margin: 10px 0 20px 0;

  /* Animacja kaskadowa */
  opacity: 0;
  animation: ${fadeUp} 0.5s ease-out forwards;
  animation-delay: 0.6s;
`;

const HeroDescription = styled.p`
  font-size: 1.1rem;
  color: ${theme.tertiary};
  max-width: 540px;
  margin-top: 25px;
  line-height: 1.6;

  /* Animacja kaskadowa */
  opacity: 0;
  animation: ${fadeUp} 0.5s ease-out forwards;
  animation-delay: 0.8s;
`;

const CTAButton = styled(Link)`
  display: inline-block;
  color: ${theme.accent};
  background-color: transparent;
  border: 1px solid ${theme.accent};
  padding: 1.25rem 1.75rem;
  border-radius: 12px;
  text-decoration: none;
  font-size: 1rem;
  margin-top: 50px;
  cursor: pointer;
  transition: all 0.3s ease;

  /* Animacja kaskadowa */
  opacity: 0;
  animation: ${fadeUp} 0.5s ease-out forwards;
  animation-delay: 1s;

  &:hover {
    background-color: rgba(100, 255, 218, 0.1);
    transform: translateY(-5px);
    box-shadow: 0 10px 20px -10px rgba(10, 25, 47, 0.7);
  }
`;

// === GŁÓWNY KOMPONENT ===

const Hero = () => {
  return (
    <HeroSection id="hero">
      <TypewriterWrapper>
        <TypeAnimation
          sequence={[
            "Budujemy inteligentne aplikacje.",
            2000,
            "Specjalizujemy się w AI i Machine Learning.",
            2000,
            "Transformujemy dane w realną wartość.",
            2000,
            "Automatyzujemy Twoje procesy biznesowe.",
            2000,
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          speed={60}
          deletionSpeed={80}
        />
      </TypewriterWrapper>

      <HeroTitle>SL Technologies</HeroTitle>
      {/* Nowy, bardziej dynamiczny podtytuł */}
      <HeroSubtitle>Twoja przewaga w erze AI.</HeroSubtitle>

      {/* Nowy, bardziej konkretny opis */}
      <HeroDescription>
        Projektujemy i wdrażamy zaawansowane systemy oparte na sztucznej
        inteligencji, które uwalniają potencjał Twoich danych i zapewniają
        przewagę konkurencyjną.
      </HeroDescription>

      {/* Nowy, bardziej zachęcający tekst na przycisku */}
      <CTAButton to="contact" smooth={true} duration={500}>
        Zrealizuj wizję z nami
      </CTAButton>
    </HeroSection>
  );
};

export default Hero;
