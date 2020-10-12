import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function Link({ children, to }) {
  const NavListItem = styled.li`
    list-style: none;
    height: 45px;
    font-size: 14px;

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
    <NavListItem>
      <NavLink
        to={to}
        exact
        activeStyle={{ borderBottom: "1px solid #373d3f" }}
      >
        {children}
      </NavLink>
    </NavListItem>
  );
}
