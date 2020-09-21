import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Background from "../Background";

export default function Home() {
  const Names = styled.p`
    margin: 10px;
    letter-spacing: 0.3em;
    font-family: Tangerine, serif;
    font-size: 60px;
  `;

  const Details = styled.p`
    letter-spacing: 0.1em;
    font-size: 16px;
  `;

  const Content = styled.div`
    width: 980px;
    text-align: center;
    font-family: Lora, serif;
    height: 200px;
    color: #373d3f;
  `;

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
      padding: 5px;
      &:hover {
        color: #838a62;
      }
    }
  `;

  return (
    <Background>
      <Navigation>
        <ul>
          <NavListItem>
            <NavLink to="/" activeStyle={{ borderBottom: "1px solid #373d3f" }}>
              Home
            </NavLink>
          </NavListItem>
          <NavListItem>
            <NavLink
              to="/ceremony"
              activeStyle={{ borderBottom: "1px solid #373d3f" }}
            >
              Ceremony
            </NavLink>
          </NavListItem>
        </ul>
      </Navigation>
      <Content>
        <Names>Rachel & Jerridan</Names>
        <Details>Are Getting Married</Details>
      </Content>
    </Background>
  );
}
