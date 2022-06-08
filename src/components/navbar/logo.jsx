import React from "react";
import styled from "styled-components";
import LogoImgSrc from "../../assets/one.png";

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.div`
  img {
    width: 100px;
  }
`;


export function Logo(props) {
  return (
    <LogoWrapper>
      <LogoImg>
        <img src={LogoImgSrc} alt="Logo" />
      </LogoImg>
    </LogoWrapper>
  );
}
