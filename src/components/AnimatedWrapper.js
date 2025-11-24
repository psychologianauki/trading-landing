import { useInView } from "react-intersection-observer";
import styled from "styled-components";

const Wrapper = styled.div`
  opacity: ${({ inView }) => (inView ? 1 : 0)};
  transform: translateY(${({ inView }) => (inView ? "0" : "30px")});
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  transition-delay: ${({ delay }) => delay || "0s"};
`;

const AnimatedWrapper = ({ children, delay, threshold = 0.1 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: threshold,
  });

  return (
    <Wrapper ref={ref} inView={inView} delay={delay}>
      {children}
    </Wrapper>
  );
};

export default AnimatedWrapper;
