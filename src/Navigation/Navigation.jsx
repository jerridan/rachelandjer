import React from "react";
import styled from "styled-components";
import Link from "./Link";

export default function Navigation() {
  const Navigation = styled.nav`
    position: absolute;
    top: 70px;
    left: 100px;
    font-family: Lora, serif;
  `;

  const NavListItem = styled.li`
    list-style: none;
    height: 45px;
    font-size: 14px;
    color: #373d3f;

    a {
      text-decoration: none;
      color: inherit;
      padding-bottom: 5px;
      &:hover {
        color: #838a62;
      }
    }
  `;

  return (
    <Navigation>
      <ul>
        <NavListItem>
          <Link to="/">Home</Link>
        </NavListItem>
        <NavListItem>
          <Link to="/ceremony">Ceremony</Link>
        </NavListItem>
        <NavListItem>
          <Link to="/registry">Registry</Link>
        </NavListItem>
      </ul>
    </Navigation>
  );
}
