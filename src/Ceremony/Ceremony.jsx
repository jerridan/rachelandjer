import React from "react";
import styled from "styled-components";
import { extraSmall, small, medium, large } from "../breakpoints";
import backgroundImageExtraSmall from "./leafy_green_bg/leafy_green_bg_768x512.jpg";
import backgroundImageSmall from "./leafy_green_bg/leafy_green_bg_1024x683.jpg";
import backgroundImageMedium from "./leafy_green_bg/leafy_green_bg_1360x907.jpg";
import backgroundImageLarge from "./leafy_green_bg/leafy_green_bg_1920x1280.jpg";
import backgroundImageExtraLarge from "./leafy_green_bg/leafy_green_bg_2400x1600.jpg";

const Background = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${backgroundImageExtraLarge});
  @media (max-width: ${large}px) {
    background-image: url(${backgroundImageLarge});
  }
  @media (max-width: ${medium}px) {
    background-image: url(${backgroundImageMedium});
  }
  @media (max-width: ${small}px) {
    background-image: url(${backgroundImageSmall});
  }
  @media (max-width: ${extraSmall}px) {
    background-image: url(${backgroundImageExtraSmall});
  }
`;

const Welcome = styled.div`
  text-align: center;
  color: forestgreen;
  margin: auto;
  width: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  background-color: white;
  padding: 20px;
  opacity: 0.85;
  border: 5px solid #eed490;
`;

const Line = styled.p`
  font-family: Lora, serif;
  font-size: 16px;
`;

const Names = styled.p`
  margin: 10px;
  font-family: Tangerine, serif;
  font-size: 55px;
`;

const Date = styled.p`
  margin: 10px;
  font-family: Tangerine, serif;
  font-size: 40px;
`;

export default function Ceremony() {
  return (
    <Background>
      <Welcome>
        <Names>Rachel & Jerridan</Names>
        <Date>October 24, 2020 at 4:30 est</Date>
        <Line>Thank you for joining us as we share our vows!</Line>
        <Line>
          A link to the livestream will be provided here prior to our ceremony.
        </Line>
      </Welcome>
    </Background>
  );
}
