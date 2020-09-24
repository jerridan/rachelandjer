import React from "react";
import Background from "../Background";
import Navigation from "../Navigation/Navigation";
import styled from "styled-components";

export default function Registry() {
  const kwesScript = document.createElement("script");

  kwesScript.setAttribute("src", "https://kwes.io/v2/kwes-script.js");
  kwesScript.setAttribute("charset", "utf-8");

  document.head.appendChild(kwesScript);

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
          We would be honoured to have you simply witness our ceremony. Please
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
        <form
          className="kwes-form"
          action="https://kwes.io/api/foreign/forms/u0pubsxkBcKWNmbI3Qch"
        >
          <label for="name">Full Name</label>
          <input name="name" type="text" rules="required" />
          <label for="email">Email</label>
          <input name="email" type="email" rules="required|email" />
          <label for="message">Message (optional)</label>
          <input name="message" type="text" />
          <button type="submit">Submit</button>
        </form>
      </Content>
    </Background>
  );
}
