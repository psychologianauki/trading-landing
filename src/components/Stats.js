import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import { Section, theme } from "../styles";

const StatsContainer = styled(Section)`
  background-color: ${theme.lightNavy};
  padding: 60px 0;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const StatItem = styled.div``;

const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: 700;
  color: ${theme.accent};
`;

const StatLabel = styled.p`
  color: ${theme.tertiary};
  font-size: 1.1rem;
`;

const statsData = [
  { value: 50, label: "Zrealizowanych projektów", suffix: "+" },
  { value: 98, label: "Zadowolonych klientów", suffix: "%" },
  { value: 15, label: "Ekspertów w zespole", suffix: "+" },
  { value: 1.2, label: "Miliona linii kodu", suffix: "M", decimals: 1 },
];

const Stats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <StatsContainer ref={ref}>
      <StatsGrid>
        {statsData.map((stat, index) => (
          <StatItem key={index}>
            <StatNumber>
              {inView && (
                <CountUp
                  end={stat.value}
                  duration={3}
                  separator=" "
                  decimals={stat.decimals || 0}
                />
              )}
              {stat.suffix}
            </StatNumber>
            <StatLabel>{stat.label}</StatLabel>
          </StatItem>
        ))}
      </StatsGrid>
    </StatsContainer>
  );
};

export default Stats;
