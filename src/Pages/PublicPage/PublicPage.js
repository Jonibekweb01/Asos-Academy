import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import Skeleton from "react-loading-skeleton"; // импортируем библиотеку
import "react-loading-skeleton/dist/skeleton.css"; // добавляем стили
import Logo from "../../assets/images/oq-fon-uchun-min.png";
import ImgLogin from "../../assets/images/login_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg";
import { Hero } from "../../components/Hero/Hero";
import { Courses } from "../../components/Courses/Courses";
import { Video } from "../../components/Video/Video";
import { Footer } from "../../components/Footer/Footer";
import "./PublicPage.css";

export const PublicPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Имитация загрузки данных
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 секунды ожидания

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Header>
        <div className="container">
          <HeaderInner>
            <HeaderLogoBox>
              <NavLink to="/" className="header__linkImg">
                {loading ? (
                  <Skeleton width={100} height={65} />
                ) : (
                  <HeaderImg
                    src={Logo}
                    alt="Company Logo"
                    width={100}
                    height={65}
                  />
                )}
              </NavLink>
            </HeaderLogoBox>
            <HeaderList className="header__list">
              <HeaderItem>
                {loading ? (
                  <Skeleton width={80} height={20} />
                ) : (
                  <HeaderListLink to="#about" className="header__links">
                    About
                  </HeaderListLink>
                )}
              </HeaderItem>
              <HeaderItem>
                {loading ? (
                  <Skeleton width={100} height={20} />
                ) : (
                  <HeaderListLink to="#contacts" className="header__links">
                    Contacts
                  </HeaderListLink>
                )}
              </HeaderItem>
            </HeaderList>
            {loading ? (
              <>
                <Skeleton width={80} height={40} />
              </>
            ) : (
              <>
                <LogButton>
                  <a target="_blank" href="https://go.asosakademiya.uz/auth/boxed-signin" className="header__loginLink">
                    Login
                  </a>
                  <LoginImg
                    src={ImgLogin}
                    alt="Login Icon"
                    width={25}
                    height={25}
                  />
                </LogButton>
              </>
            )}
          </HeaderInner>
        </div>
      </Header>

      {loading ? (
        <Skeleton height={300} /> // скелет для Hero
      ) : (
        <Hero />
      )}

      {loading ? (
        <Skeleton height={200} count={5} /> // скелет для Courses
      ) : (
        <Courses id="about" />
      )}

     

      {loading ? (
        <Skeleton height={200} /> // скелет для Footer
      ) : (
        <Footer id="contacts" />
      )}
    </>
  );
};

// Стили остаются такими же
const Header = styled.header`
  position: fixed;
  top: 0;
  max-width: 100%;
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
  transform: translateX(0);

  @media (max-width: 481px) {
    transform: translateX(100%);
    &.open {
      transform: translateX(0);
    }
  }
`;

const HeaderItem = styled.li``;

const HeaderListLink = styled(NavLink)`
  position: relative;
  color: #333;
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
    background-color: #d0b072;
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
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  overflow: hidden;

  & > a {
    color: white;
    text-decoration: none;
  }

  &:hover {
    transform: scale(1);
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    border-color: #b59c5a;
  }
`;

const LoginImg = styled.img``;
