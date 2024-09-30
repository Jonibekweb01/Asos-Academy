import React, { useRef, useState, useEffect, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom"; // Import useNavigate
import styled from "styled-components";
import Logo from "../../assets/images/oq-fon-uchun-min.png";
import ImgLogin from "../../assets/images/login_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg";
import { Hero } from "../../components/Hero/Hero";
import { AuthContext } from "../../context/AuthContext";
import { OfficialVideo } from "../../components/OfficialVideo/OfficialVideo";

export const PrivatePage = () => {
  const { token, setToken } = useContext(AuthContext);
  const officialVideoRef = useRef(null);
  const contactsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const scrollToVideoSection = () => {
    officialVideoRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContatcsSection = () => {
    contactsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    navigate("/login");
  };

  return (
    <>
      <Header>
        <div className="containers">
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
                <HeaderListLink
                  as="button"
                  onClick={scrollToVideoSection}
                  className="header__links"
                >
                  Videos
                </HeaderListLink>
              </HeaderItem>
            </HeaderList>
            {token ? (
              <LogButton onClick={handleLogout}>
                {" "}
                {/* Handle logout on click */}
                Log Out
                <LoginImg
                  src={ImgLogin}
                  alt="Login Icon"
                  width={25}
                  height={25}
                />
              </LogButton>
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
      {/* <Hero /> */}
      <OfficialVideo ref={officialVideoRef} id="videos" />
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
  border: none;
  background-color: transparent;
  cursor: pointer;

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
  transition: 0.4s ease;
  overflow: hidden;
  color: white;

  & > a {
    color: white;
    text-decoration: none;
  }
`;

const LoginImg = styled.img``;

const ScrollToTopButton = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  background-color: white;
  border: 5px solid black;
  color: black;
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s;
  font-size: 25px;
  &:hover {
    /* background-color: #c0a061; Darken color on hover */
  }
`;
