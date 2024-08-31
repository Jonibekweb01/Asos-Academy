import styled from "styled-components";
import React from "react";
import PrivatePageLogo from "../../assets/images/ASOS-AKADEMIYASI-LOGO-WITH-BACKGROUND.png";

export const Header = () => {
  return (
    <>
      <Headers>
        <Logo>
          <PrivateLogo src={PrivatePageLogo} alt="" width="100" height="50" />
        </Logo>
        <NavLinks>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#contacts">Contacts</NavLink>
        </NavLinks>
        <SearchBar>
          <input type="text" placeholder="Search..." />
        </SearchBar>
      </Headers>
    </>
  );
};

const Headers = styled.header`
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

const PrivateLogo = styled.img``;

const NavLinks = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #333;
  font-size: 16px;

  &:hover {
    text-decoration: underline;
  }
`;

const SearchBar = styled.div`
  input {
    padding: 5px 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;
