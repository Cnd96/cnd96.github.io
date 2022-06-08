import React from "react";
import styled from "styled-components";
import './navbar.css';

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
`;

const LinkItem = styled.li`
  height: 100%;
  padding: 0 1.1em;
  color: #0178b4;
  font-weight: 500;
  font-size: 20px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-top: 2px solid transparent;
  transition: all 220ms ease-in-out;

//   &:hover {
//     border-top: 2px solid #5f5f5f;
//   }
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
  cursor:pointer
`;

export function LaptopNavLinks(props) {
  const { gotoServices, gotoBlog, gotoHome, gotoContacts } = props
  return (
    <NavLinksContainer>
      <LinksWrapper>
        <LinkItem>
          <Link onClick={() => gotoHome()}>Home</Link>
        </LinkItem>
        <LinkItem>
          <Link onClick={() => gotoServices()}>Services</Link>
        </LinkItem>
        <LinkItem>
          <Link onClick={() => gotoBlog()}>Blog</Link>
        </LinkItem>
        <LinkItem>
          <Link onClick={() => gotoContacts()}>Contact</Link>
        </LinkItem>
      </LinksWrapper>
    </NavLinksContainer>
  );
}
