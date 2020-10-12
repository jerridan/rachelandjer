import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import theme from "../../theme";

const NavListItem = styled.li`
  list-style: none;
  height: 45px;
  font-size: ${theme.fontSizes.small};

  a {
    text-decoration: none;
    color: inherit;
    padding-bottom: 5px;
    &:hover {
      color: ${theme.colors.olive};
    }
  }
`;

export default function Link({ children, to }) {
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
