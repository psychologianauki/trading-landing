import { FaCode, FaPencilRuler, FaRocket, FaSearch } from "react-icons/fa";
import styled from "styled-components";
import { Section, SectionTitle, theme } from "../styles";
import AnimatedWrapper from "./AnimatedWrapper";

const ProcessContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-top: 50px;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: ${theme.lightNavy};
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    z-index: -1;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 40px;
    &::after {
      display: none;
    }
  }
`;

const ProcessStep = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 200px;
`;

const StepIconWrapper = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: ${theme.lightNavy};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: ${theme.accent};
  border: 2px solid ${theme.accent};
  margin-bottom: 20px;
  background-color: ${theme.primary};
`;

const StepTitle = styled.h3`
  color: ${theme.secondary};
  margin-bottom: 10px;
`;

const StepDescription = styled.p`
  font-size: 0.9rem;
  color: ${theme.tertiary};
`;

const processSteps = [
  {
    icon: <FaSearch />,
    title: "1. Analiza",
    desc: "Zaczynamy od dogłębnego zrozumienia Twoich celów i wymagań.",
  },
  {
    icon: <FaPencilRuler />,
    title: "2. Projekt",
    desc: "Tworzymy architekturę i projekt UI/UX, który jest intuicyjny i efektywny.",
  },
  {
    icon: <FaCode />,
    title: "3. Development",
    desc: "Nasi inżynierowie piszą czysty, skalowalny kod, wdrażając najlepsze praktyki.",
  },
  {
    icon: <FaRocket />,
    title: "4. Wdrożenie",
    desc: "Uruchamiamy rozwiązanie i zapewniamy wsparcie techniczne po wdrożeniu.",
  },
];

const Process = () => (
  <Section id="process">
    <AnimatedWrapper>
      <SectionTitle>Nasz Proces</SectionTitle>
    </AnimatedWrapper>
    <ProcessContainer>
      {processSteps.map((step, index) => (
        <AnimatedWrapper key={index} delay={`${index * 0.2}s`}>
          <ProcessStep>
            <StepIconWrapper>{step.icon}</StepIconWrapper>
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.desc}</StepDescription>
          </ProcessStep>
        </AnimatedWrapper>
      ))}
    </ProcessContainer>
  </Section>
);

export default Process;
