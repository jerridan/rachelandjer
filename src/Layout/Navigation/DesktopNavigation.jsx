import React from "react";
import styled from "styled-components";

const Navigation = styled.nav`
  position: absolute;
  top: 70px;
  left: 100px;
`;

export default function DesktopNavigation({ children }) {
  return <Navigation>{children}</Navigation>;
}
