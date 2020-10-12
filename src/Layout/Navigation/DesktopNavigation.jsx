import React from "react";
import styled from "styled-components";
import Link from "./Link";

export default function DesktopNavigation() {
  const Navigation = styled.nav`
    position: absolute;
    top: 70px;
    left: 100px;
    font-family: Lora, serif;
  `;

  return (
    <Navigation>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/ceremony">Ceremony</Link>
        <Link to="/gifts">Gifts</Link>
      </ul>
    </Navigation>
  );
}
