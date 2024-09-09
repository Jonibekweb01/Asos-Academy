import React from "react";
import styled from "styled-components";

export const Footer = ({ id }) => {
  return (
    <Footers id={id}>
      <div className="container">
        <FooterInner>
          <FooterContent>
            <p>
              &copy; {new Date().getFullYear()} Asos Academy. All rights
              reserved.
            </p>
            <SocialLinks>
              <a
                href="https://twitter.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              <a
                href="https://facebook.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                href="https://instagram.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </SocialLinks>
          </FooterContent>
        </FooterInner>
      </div>
    </Footers>
  );
};

const Footers = styled.footer`
  background-color: #d0b072;
  color: white;
  padding: 1rem 0;
  text-align: center;
  position: relative;
  bottom: 0;
  padding: 40px 0;

  @media (max-width: 481px) {
    width: 120%;
  }
`;

const FooterInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
`;

const SocialLinks = styled.div`
  margin-top: 0.5rem;

  a {
    font-weight: bold;
    position: relative;
    color: white;
    text-decoration: none;
    margin: 0 0.5rem;
    padding-bottom: 0.25rem;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: white;
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.3s ease-out;
    }

    &:hover::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
`;
