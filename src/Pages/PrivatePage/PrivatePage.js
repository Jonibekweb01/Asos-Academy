import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../assets/images/oq-fon-uchun-min.png";
import ImgLogin from "../../assets/images/login_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg";
import { Hero } from "../../components/Hero/Hero";
import { AuthContext } from "../../context/AuthContext";
import { OfficialVideo } from "../../components/OfficialVideo/OfficialVideo";
import { Footer } from "../../components/Footer/Footer";

export const PrivatePage = () => {
  const { token } = React.useContext(AuthContext);
  return (
    <>
      <Header>
        <div className="container">
          <HeaderInner>
            <HeaderLogoBox>
              <NavLink to="/" className="header__linkImg">
                <HeaderImg
                  src={Logo}
                  alt="Company Logo"
                  width={100}
                  height={65}
                />
              </NavLink>
            </HeaderLogoBox>
            <HeaderList className="header__list">
              <HeaderItem>
                <HeaderListLink to="#videos" className="header__links">
                  Videos
                </HeaderListLink>
              </HeaderItem>
              <HeaderItem>
                <HeaderListLink to="#contacts" className="header__links">
                  Contacts
                </HeaderListLink>
              </HeaderItem>
            </HeaderList>
            {token ? (
              <></>
            ) : (
              <LogButton>
                <NavLink to="/login" className="header__loginLink">
                  Login
                </NavLink>
                <LoginImg
                  src={ImgLogin}
                  alt="Login Icon"
                  width={25}
                  height={25}
                />
              </LogButton>
            )}
          </HeaderInner>
        </div>
      </Header>

      <Hero />

      <OfficialVideo id="videos" />

      <Footer />
    </>
  );
};

const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #fffffff2;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 12;
`;

const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 0;
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

  @media (max-width: 481px) {
    transform: translateX(100%); /* Hide menu by default on mobile */
    &.open {
      transform: translateX(0); /* Show menu when open */
    }
  }
`;

const HeaderItem = styled.li``;

const HeaderListLink = styled(NavLink)`
  position: relative;
  color: #333; /* Adjust color as needed */
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  padding: 0.5rem 0;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #d0b072; /* Adjust color as needed */
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease-out;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`;

const LogButton = styled.button`
  position: relative;
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
  overflow: hidden;

  & > a {
    color: white;
    text-decoration: none;
  }
`;

const LoginImg = styled.img``;
