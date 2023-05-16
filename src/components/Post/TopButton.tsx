import React, { Component, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import AnchorLink from "react-anchor-link-smooth-scroll";

const fadein = keyframes`
  from {opacity: 0}
  to { opacity: 1}
`;

const fadeout = keyframes`
  from {opacity: 1}
  to { opacity: 0}
`;

const Top = styled.div`
  position: fixed;
  bottom: 20px;
  left: 20px;
  content: "";
  border-color: transparent transparent #d6b161 transparent;
  border-width: 15px;
  border-style: solid;
  z-index: 0;
  display: none;
  &.show-top {
    opacity: 1;
    display: block;
    animation: ${fadein} 1s;
  }
  &.hide-top {
    animation: ${fadeout} 1s;
    opacity: 0;
    display: block;
  }
`;

const TopButton: React.FC = () => {
  const [show, setShow] = React.useState(false);
  const [init, setInit] = React.useState(true);

  useEffect(() => {
    window.addEventListener("scroll", showArrow);
    return () => {
      window.removeEventListener("scroll", showArrow);
    };
  });

  const showArrow = () => {
    if (window.scrollY >= 400 && !show) {
      setShow(true);
      setInit(false);
    } else if (window.scrollY < 400 && show) {
      setShow(false);
      setInit(false);
    }
  };

  return (
    <AnchorLink href="#blog-top-header">
      <Top className={show ? "show-top" : "hide-top"} />
    </AnchorLink>
  );
};

export default TopButton;
