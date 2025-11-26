import { BsInstagram } from "react-icons/bs";
import styled from "styled-components";
import { theme } from "../styles";

const FooterContainer = styled.footer`
  padding: 40px 25px;
  text-align: center;
  border-top: 1px solid #0c1b33ff;
  background-color: #030c1aff;
`;

const LogoWrapper = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 110px;
  height: 65px;
  border-radius: 12px;
  margin: 0 auto 25px auto;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 95px;
    height: 55px;
    object-fit: contain;
  }
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

const CopyrightText = styled.p`
  color: ${theme.tertiary};
  font-size: 0.9rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <LogoWrapper href="/">
        <img src="/logo1.png" alt="AZ.Trading Logo" />
      </LogoWrapper>

      <PhoneLink
        href="https://www.instagram.com/iamsheikhazeem/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsInstagram />
      </PhoneLink>

      <CopyrightText>
        Created by SL Technologies &copy; {new Date().getFullYear()}
      </CopyrightText>
    </FooterContainer>
  );
};

export default Footer;
