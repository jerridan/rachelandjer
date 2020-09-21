import React from "react";
import { NavLink } from "react-router-dom";

export default function Link({ children, to }) {
  return (
    <NavLink to={to} exact activeStyle={{ borderBottom: "1px solid #373d3f" }}>
      {children}
    </NavLink>
  );
}
