import React from "react";
import Background from "../Background";
import Navigation from "../Navigation/Navigation";
import styled from "styled-components";

export default function Registry() {
  const Content = styled.div`
    background-color: #f9f9f9;
    text-align: center;
    font-family: Lora, serif;
    color: #373d3f;
    padding: 50px;
  `;

  const Title = styled.p`
    margin-top: 25px;
    margin-bottom: 25px;
    letter-spacing: 0.3em;
    font-family: Tangerine, serif;
    font-size: 50px;
  `;

  const Details = styled.p`
    margin-top: 20px;
    margin-bottom: 20px;
    letter-spacing: 0.1em;
    font-size: 16px;
    max-width: 750px;
    text-align: left;
    line-height: 1.25em;
  `;

  return (
    <Background>
      <Navigation />
      <Content>
        <Title>Registry</Title>
        <Details>To all of our guests,</Details>
        <Details>
          We would be honoured to have you simply witness our ceremony. As our
          wedding will be quite small, we will also have few expenses. Please
          feel no obligation to give a gift, especially during these times.
        </Details>
        <Details>
          If you would like to give a gift, you can find our registry{" "}
          <a
            target="_blank"
            href="https://www.myregistry.com/wedding-website/rachel-hon-and-jerridan-quiring-toronto-on/2537277/welcomemessage"
          >
            here
          </a>
          , or if you prefer, send us an e-transfer.
        </Details>
      </Content>
    </Background>
  );
}
