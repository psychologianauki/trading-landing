import { FaBrain, FaCode, FaMobileAlt } from "react-icons/fa";
import styled from "styled-components";
import { Section, SectionTitle, theme } from "../styles";
import AnimatedWrapper from "./AnimatedWrapper";

// ... (style dla ServicesGrid, ServiceCard, ServiceIcon, etc. z poprzedniej wersji)
const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 40px;
`;
const ServiceCard = styled.div`
  background: ${theme.lightNavy};
  padding: 30px;
  border-radius: 4px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 30px -15px rgba(2, 12, 27, 0.7);
  }
`;
const ServiceIcon = styled.div`
  font-size: 3rem;
  color: ${theme.accent};
  margin-bottom: 20px;
`;
const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  color: ${theme.secondary};
  margin-bottom: 10px;
`;
const ServiceDescription = styled.p`
  color: ${theme.tertiary};
`;

const servicesData = [
  {
    icon: <FaBrain />,
    title: "Rozwiązania AI & ML",
    desc: "Projektujemy i wdrażamy modele machine learning, systemy predykcyjne i przetwarzanie języka naturalnego (NLP).",
  },
  {
    icon: <FaCode />,
    title: "Aplikacje Webowe",
    desc: "Tworzymy skalowalne i wydajne aplikacje internetowe w oparciu o najnowsze technologie, takie jak React i Node.js.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Aplikacje Mobilne",
    desc: "Budujemy natywne i hybrydowe aplikacje na platformy iOS i Android, które zachwycają użytkowników.",
  },
];

const Services = () => (
  <Section id="services">
    <AnimatedWrapper>
      <SectionTitle>Nasze Usługi</SectionTitle>
    </AnimatedWrapper>
    <ServicesGrid>
      {servicesData.map((service, index) => (
        <AnimatedWrapper key={index} delay={`${index * 0.2}s`}>
          <ServiceCard>
            <ServiceIcon>{service.icon}</ServiceIcon>
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.desc}</ServiceDescription>
          </ServiceCard>
        </AnimatedWrapper>
      ))}
    </ServicesGrid>
  </Section>
);

export default Services;
