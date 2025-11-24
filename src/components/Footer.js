import { FaPhoneAlt } from "react-icons/fa";
import styled from "styled-components";
import { theme } from "../styles"; // Założenie o wspólnym pliku stylów

// --- STYLOWANE KOMPONENTY ---

const FooterContainer = styled.footer`
  padding: 40px 25px;
  text-align: center;
  border-top: 1px solid #233554;
  background-color: ${theme.primary};
`;

const SocialLinks = styled.div`
  margin-bottom: 20px;
`;

const PhoneLink = styled.a`
  display: block;
  margin-bottom: 15px;
  color: ${theme.tertiary};
  font-size: 1rem;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${theme.accent};
  }

  svg {
    margin-right: 8px;
    vertical-align: middle;
  }
`;

const SocialIcon = styled.a`
  font-size: 1.5rem;
  color: ${theme.tertiary};
  margin: 0 15px;
  transition: color 0.3s ease, transform 0.3s ease;
  display: inline-block; // Potrzebne do działania transformacji

  &:hover {
    color: ${theme.accent};
    transform: translateY(-5px);
  }
`;

const CopyrightText = styled.p`
  color: ${theme.tertiary};
  font-size: 0.9rem;
`;

// --- KOMPONENT ---

const Footer = () => {
  return (
    <FooterContainer>
      {/* <SocialLinks>
        <SocialIcon
          href="https://github.com/psychologianauki"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </SocialIcon>
        <SocialIcon
          href="https://www.linkedin.com/company/slcompany-pl/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </SocialIcon>
        <SocialIcon
          href="https://www.instagram.com/sltechnologies/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </SocialIcon>
      </SocialLinks> */}
      <PhoneLink href="tel:+48698140048">
        <FaPhoneAlt /> +48 123456789
      </PhoneLink>
      <CopyrightText>
        Created by SL Technologies &copy; {new Date().getFullYear()}
      </CopyrightText>
    </FooterContainer>
  );
};

export default Footer;
