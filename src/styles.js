import styled, { createGlobalStyle, keyframes } from "styled-components";

export const theme = {
  primary: "#0a192f",
  secondary: "#ccd6f6",
  tertiary: "#8892b0",
  accent: "#64ffda",
  lightNavy: "#112240",
};
const backgroundPattern = `
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
    <path fill="%23112240" d="M0 0h20v20H0zM20 20h20v20H20z"></path>
  </svg>
`;
const backgroundPatternUrl = `data:image/svg+xml,${backgroundPattern}`;

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Poppins', sans-serif;
    color: #ccd6f6;
    line-height: 1.6;

    /* NOWE TŁO - GRADIENT */
    background: #a6ce21ff; /* Fallback dla starych przeglądarek */
    background: radial-gradient(ellipse at bottom, #112240 0%, #0a192f 100%);
    min-height: 100vh; // Upewnij się, że gradient pokrywa cały ekran
  }
  html {
    scroll-behavior: smooth;
  }
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Section = styled.section`
  padding: 100px 0;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 1080px) {
    padding: 100px 50px;
  }
  @media (max-width: 768px) {
    padding: 80px 25px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: clamp(26px, 5vw, 32px);
  margin-bottom: 40px;
  color: ${theme.secondary};
  position: relative;
  width: max-content;

  &:after {
    content: "";
    display: block;
    width: 60px;
    height: 4px;
    background: ${theme.accent};
    margin-top: 8px;
    border-radius: 2px;
  }
`;
