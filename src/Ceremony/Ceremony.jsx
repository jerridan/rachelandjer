import React from "react";
import styled from "styled-components";
import Background from "../Background";
import Navigation from "../Navigation/Navigation";

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
      <Navigation />
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
