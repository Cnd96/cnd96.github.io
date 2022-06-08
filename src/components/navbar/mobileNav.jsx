import React, { useState } from "react";
import styled from "styled-components";
import { MenuToggle } from "./toggle";
const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 200px;
  list-style: none;
  background-color: #fff;
  width: 100%;
  flex-direction: column;
  position: fixed;
  top: 60px;
  left: 0;
  z-index: 100;
`;

const LinkItem = styled.li`
  width: 100%;
  padding: 0 1.1em;
  color: #0178b4;
  font-weight: 500;
  font-size: 16px;
  display: flex;
  justify-content:center;
  margin-bottom: 10px;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
`;

const Marginer = styled.div`
  height: 2em;
`;

export function MobileNavLinks(props) {
  const [isOpen, setOpen] = useState(false);
  const { gotoServices, gotoBlog, gotoContacts, gotoHome } = props

  return (
    <NavLinksContainer>
      <MenuToggle isOpen={isOpen} toggle={() => {
        setTimeout(function () {
          setOpen(!isOpen);
        }, 200)
      }} />
      {isOpen && (
        <LinksWrapper>
          <LinkItem>
            <Link onClick={() => { setOpen(false); gotoHome() }}>Home</Link>
          </LinkItem>
          <LinkItem>
            <Link onClick={() => { setOpen(false); gotoServices() }}>Services</Link>
          </LinkItem>
          <LinkItem>
            <Link onClick={() => { setOpen(false); gotoBlog() }}>Blog</Link>
          </LinkItem>
          <LinkItem>
            <Link onClick={() => { setOpen(false); gotoContacts() }}>Contact</Link>
          </LinkItem>
          <Marginer />
        </LinksWrapper>
      )}
    </NavLinksContainer>
  );
}
