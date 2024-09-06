import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../assets/images/oq-fon-uchun-min.png";
import ImgLogin from "../../assets/images/login_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg";
import "./PublicPage.css";
import { Hero } from "../../components/Hero/Hero";
import { Courses } from "../../components/Courses/Courses";

export const PublicPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <Header className="header">
        <div className="container">
          <HeaderInner className="header__inner">
            <HeaderLogoBox className="header__logoBox">
              <NavLink to={"/"} className={"header__linkImg"}>
                <HeaderImg
                  className="header__img"
                  src={Logo}
                  alt="Company Logo"
                  width={100}
                  height={65}
                />
              </NavLink>
            </HeaderLogoBox>
            {/* <BurgerIcon onClick={toggleMenu} className="burger-icon">
              &#9776;
            </BurgerIcon>*/}
            <HeaderList className={`header__list ${isMenuOpen ? "open" : ""}`}>
              {/* <CloseButton onClick={toggleMenu} className="close-button">
                &times;
              </CloseButton> */}
              <HeaderItem className="header__item">
                <StyledNavLink to="/" id="about" className={"header__links"}>
                  About
                </StyledNavLink>
              </HeaderItem>
              <HeaderItem className="header__item">
                <StyledNavLink to="/" id="contacts" className={"header__links"}>
                  Contacts
                </StyledNavLink>
              </HeaderItem>
            </HeaderList>
            <LogButton className="login__button">
              <NavLink to="/login" className={"header__loginLink"}>
                Login
              </NavLink>
              <LoginImg
                className="header__loginimg"
                src={ImgLogin}
                alt="Login Icon"
                width={25}
                height={25}
              />
            </LogButton>
          </HeaderInner>
        </div>
      </Header>

      {/* HERO SECTION  */}

      <Hero />

      {/* COURSES SECTION  */}

      <Courses />
    </>
  );
};

// Styled Components
const Header = styled.header`
  position: fixed;
  top: 0;
  max-width: 100%;
  width: 100%;
  background-color: #fffffff5;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 12 !important;
`;

const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
`;

const HeaderLogoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const HeaderImg = styled.img``;

const HeaderList = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  align-items: center;
  margin: 0;
  padding: 0;
  transition: transform 0.3s ease-in-out;
  transform: translateX(100%); /* Hide menu by default on mobile */

  &.open {
    transform: translateX(0); /* Show menu when open */
  }

  @media (min-width: 482px) {
    display: flex; /* Show menu normally on larger screens */
    transform: translateX(0); /* Ensure menu is visible */
  }
`;

const HeaderItem = styled.li``;

const StyledNavLink = styled(NavLink)`
  color: #000;
  font-weight: 600;
  text-decoration: none;
  position: relative;
  padding-bottom: 5px;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #000;
    transition: width 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
`;

const LogButton = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 16px;
  font-weight: bold;
  background-color: #d0b072;
  border: none;
  padding: 0;
  cursor: pointer;
  border: 2px solid #d0b072;
  border-radius: 10px;
  padding: 10px 15px;
  transition: 0.4s ease;
  &:hover {
    transform: translateY(-3px);
  }

  & > a {
    color: white;
    text-decoration: none; // Ensure no underline
  }
`;

const LoginImg = styled.img``;

// const BurgerIcon = styled.div`
//   display: none;
//   font-size: 24px;
//   cursor: pointer;

//   @media (max-width: 481px) {
//     display: block; /* Show burger icon on small screens */
//   }
// `;

// const CloseButton = styled.div`
//   position: absolute;
//   top: 0px;
//   right: 20px;
//   font-size: 54px;
//   cursor: pointer;
//   color: #000;
//   background: transparent;
//   border: none;
//   z-index: 1001; /* Ensure it is above the menu */
//   @media (min-width: 482px) {
//     display: none; /* Hide the close button on larger screens */
//   }
// `;
