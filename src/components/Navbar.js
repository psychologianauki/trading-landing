import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import { theme } from "../styles";

const NavbarContainer = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  padding: 20px 50px;
  background-color: ${({ scrolled }) =>
    scrolled ? "rgba(10, 25, 47, 0.85)" : "transparent"};
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    padding: 15px 25px;
  }
`;

const NavLogo = styled(Link)`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${theme.accent};
  text-decoration: none;
  cursor: pointer;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 25px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: ${theme.secondary};
  text-decoration: none;
  cursor: pointer;
  padding: 5px 0;
  position: relative;
  transition: color 0.3s ease;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${theme.accent};
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${theme.accent};
  }

  &:hover:after {
    width: 100%;
  }
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <NavbarContainer scrolled={scrolled}>
      <NavLogo to="hero" smooth={true} duration={500}>
        SL Technologies
      </NavLogo>
      <NavLinks>
        <NavLink to="about" smooth={true} duration={500} offset={-80}>
          O nas
        </NavLink>
        <NavLink to="services" smooth={true} duration={500} offset={-80}>
          Usługi
        </NavLink>
        <NavLink to="process" smooth={true} duration={500} offset={-80}>
          Proces
        </NavLink>
        <NavLink to="tech" smooth={true} duration={500} offset={-80}>
          Technologie
        </NavLink>
        <NavLink to="contact" smooth={true} duration={500} offset={-80}>
          Kontakt
        </NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
