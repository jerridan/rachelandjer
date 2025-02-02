import React, { useState } from "react";
import styled from "styled-components";
import { Transition } from "react-transition-group";
import MenuSvg from "../../icons/MenuSvg";
import theme from "../../theme";

const defaultStyle = {
  transition: "height 500ms ease-in-out",
  height: "50px",
};

const transitionStyles = {
  entering: { height: "250px" },
  entered: { height: "250px" },
  exiting: { height: "50px" },
  exited: { height: "50px" },
};

const MenuButton = styled.div`
  text-align: center;
  padding-top: 10px;
`;

const MenuPanel = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #e3e3e3;
  z-index: 120;
`;

const MenuTitle = styled.span`
  font-size: ${theme.fontSizes.medium};
  padding-left: 5px;
  line-height: 30px;
`;

const IconWrapper = styled.div`
  background-color: #373d3f;
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  vertical-align: bottom;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

export default function MobileNavigation({ children }) {
  const [inProp, setInProp] = useState(false);

  const toggleNavigation = () => {
    setInProp(!inProp);
  };

  return (
    <Transition in={inProp} timeout={500}>
      {(state) => (
        <MenuPanel
          onClick={toggleNavigation}
          style={{ ...defaultStyle, ...transitionStyles[state] }}
        >
          <MenuButton>
            <IconWrapper>
              <MenuSvg fill={theme.colors.white} width="14px" />
            </IconWrapper>
            <MenuTitle>MENU</MenuTitle>
          </MenuButton>
          {children}
        </MenuPanel>
      )}
    </Transition>
  );
}
