import React from "react";
import styled from "styled-components";
import backgroundImage from "../images/leafy_green_bg_2400x1600.jpg";

export default function Home() {
  const Background = styled.div`
    position: absolute;
    height: 100vh;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${backgroundImage});
    display: flex;
    justify-content: center;
    align-items: center;
  `;

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

  return (
    <Background>
      <Content>
        <Names>Rachel & Jerridan</Names>
        <Details>Are Getting Married</Details>
      </Content>
    </Background>
  );
}
