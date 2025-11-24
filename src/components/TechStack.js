import styled from "styled-components";
// Załóżmy, że te style pochodzą z centralnego pliku, np. `src/styles/theme.js`
import {
  SiDocker,
  SiKubernetes,
  SiNodedotjs,
  SiPython,
  SiPytorch,
  SiReact,
  SiTensorflow,
} from "react-icons/si";
import { Section, SectionTitle, theme } from "../styles";
// Komponent do animacji (np. fade-in przy scrollu)
import AnimatedWrapper from "./AnimatedWrapper";

// --- STYLOWANE KOMPONENTY ---
// Poprawiona definicja, używając backticks ` `
const TechStackGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  margin-top: 40px;
`;

const TechIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 3.5rem;
  color: ${theme.tertiary};
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: ${theme.accent};
    transform: scale(1.1);
  }

  span {
    font-size: 0.9rem;
    margin-top: 10px;
    color: ${theme.secondary};
  }
`;

// --- DANE ---
// Tablica obiektów definiująca technologie do wyświetlenia
const tech = [
  { icon: <SiPython />, name: "Python" },
  { icon: <SiTensorflow />, name: "TensorFlow" },
  { icon: <SiPytorch />, name: "PyTorch" },
  { icon: <SiReact />, name: "React" },
  { icon: <SiNodedotjs />, name: "Node.js" },
  { icon: <SiDocker />, name: "Docker" },
  { icon: <SiKubernetes />, name: "Kubernetes" },
];

// --- KOMPONENT ---
const TechStack = () => (
  <Section id="tech">
    <SectionTitle>
      Technologie,
      <br />z których korzystamy
    </SectionTitle>
    <TechStackGrid>
      {/* Mapujemy tablicę 'tech', aby dynamicznie renderować ikony */}
      {tech.map((technology, index) => (
        // Każdy element listy musi mieć unikalny 'key'
        // AnimatedWrapper dodaje animację z opóźnieniem zależnym od indeksu
        <AnimatedWrapper key={technology.name} delay={index * 100}>
          <TechIcon>
            {technology.icon}
            <span>{technology.name}</span>
          </TechIcon>
        </AnimatedWrapper>
      ))}
    </TechStackGrid>
  </Section>
);

export default TechStack;
