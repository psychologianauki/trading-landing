import styled from "styled-components";
import { Section, SectionTitle, theme } from "../styles";
import AnimatedWrapper from "./AnimatedWrapper";
// Importujemy ikony
import { FaChartLine, FaLightbulb, FaUsers } from "react-icons/fa";
// === KROK 1: Importujemy plik wideo jak moduł ===
import localVideo from "../sl_film.mp4";

// --- STYLOWANE KOMPONENTY ---

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 50px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 60px;
  }
`;

const TextWrapper = styled.div`
  /* Wrapper do grupowania tekstu */
`;

const AboutText = styled.p`
  color: ${theme.tertiary};
  margin-bottom: 30px;
  line-height: 1.7;
`;

const KeyPillarsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const PillarItem = styled.li`
  display: flex;
  align-items: flex-start;
  color: ${theme.tertiary};
`;

const PillarIcon = styled.div`
  color: ${theme.accent};
  font-size: 1.2rem;
  margin-right: 15px;
  margin-top: 4px;
`;

// Ujednolicony kontener dla elementu wizualnego (wideo)
const AboutVisualContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
  aspect-ratio: 3 / 4; /* Ustawiamy proporcje kontenera, idealne dla pionowego wideo */
  border-radius: 4px;
  justify-self: center;

  /* Ramka w kolorze akcentu */
  &::before {
    content: "";
    position: absolute;
    top: 15px;
    left: 15px;
    width: 100%;
    height: 100%;
    border: 2px solid ${theme.accent};
    border-radius: 4px;
    transition: all 0.3s ease-out;
    z-index: 2;
  }

  /* Nakładka kolorystyczna */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${theme.primary};
    opacity: 0.35;
    border-radius: 4px;
    transition: opacity 0.3s ease-out;
    z-index: 3;
  }

  &:hover::before {
    top: 10px;
    left: 10px;
  }

  &:hover::after {
    opacity: 0.1;
  }
`;

// Komponent dla wideo
const StyledVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* KLUCZOWY ELEMENT: wypełnia kontener bez zniekształceń */
  border-radius: 4px;
  z-index: 1;
  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
`;

// --- KOMPONENT ---

const About = () => {
  return (
    <Section id="about">
      <AnimatedWrapper>
        {/* Lepszy, bardziej angażujący tytuł */}
        <SectionTitle>
          Nasza misja:
          <br />
          Innowacja i Partnerstwo
        </SectionTitle>
      </AnimatedWrapper>
      <AboutContent>
        {/* Kolumna 1: Tekst */}
        <AnimatedWrapper delay={200}>
          <TextWrapper>
            <AboutText>
              Naszą misją jest przekształcanie złożonych wyzwań biznesowych w
              eleganckie, inteligentne rozwiązania. Jesteśmy zespołem ekspertów
              łączących pasję do technologii z dogłębnym zrozumieniem rynku, aby
              dostarczać oprogramowanie, które generuje realną wartość.
            </AboutText>
            <KeyPillarsList>
              <PillarItem>
                <PillarIcon>
                  <FaLightbulb />
                </PillarIcon>
                <div>
                  <strong>Innowacja w DNA</strong>
                  <br />
                  Nieustannie eksplorujemy granice AI, aby Twoje rozwiązania
                  były zawsze o krok przed konkurencją.
                </div>
              </PillarItem>
              <PillarItem>
                <PillarIcon>
                  <FaUsers />
                </PillarIcon>
                <div>
                  <strong>Partnerstwo, nie outsourcing</strong>
                  <br />
                  Traktujemy Twój sukces jak nasz własny, blisko współpracując
                  na każdym etapie projektu.
                </div>
              </PillarItem>
              <PillarItem>
                <PillarIcon>
                  <FaChartLine />
                </PillarIcon>
                <div>
                  <strong>Technologia zorientowana na wyniki</strong>
                  <br />
                  Tworzymy narzędzia, które nie tylko działają, ale przede
                  wszystkim przynoszą mierzalne rezultaty.
                </div>
              </PillarItem>
            </KeyPillarsList>
          </TextWrapper>
        </AnimatedWrapper>

        {/* Kolumna 2: Wideo */}
        <AnimatedWrapper delay={400}>
          <AboutVisualContainer>
            <StyledVideo autoPlay loop muted playsInline>
              {/* === KROK 2: Używamy zaimportowanej zmiennej jako źródła === */}
              <source src={localVideo} type="video/mp4" />
              Twoja przeglądarka nie obsługuje tagu wideo.
            </StyledVideo>
          </AboutVisualContainer>
        </AnimatedWrapper>
      </AboutContent>
    </Section>
  );
};

export default About;
