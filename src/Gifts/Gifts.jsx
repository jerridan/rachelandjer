import React from "react";
import Background from "../Background";
import Navigation from "../Navigation/Navigation";
import styled from "styled-components";
import "./kwesFormOverrides.css";

export default function Gifts() {
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

  const Form = styled.form`
    text-align: left;
  `;

  const Field = styled.div`
    display: block;
    padding-bottom: 10px;
  `;

  const Label = styled.label`
    width: 150px;
    display: inline-block;
  `;

  return (
    <Background>
      <Navigation />
      <Content>
        <Title>Gifts</Title>
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
          . You can also send us an e-transfer if you like.
        </Details>
        <Details>
          If you have any questions, feel free to get in touch or use the form
          below.
        </Details>
        <Form
          className="kwes-form"
          action="https://kwes.io/api/foreign/forms/u0pubsxkBcKWNmbI3Qch"
        >
          <Field>
            <Label htmlFor="name">Full Name</Label>
            <input name="name" type="text" rules="required" />
          </Field>
          <Field>
            <Label htmlFor="email">Email</Label>
            <input name="email" type="email" rules="required|email" />
          </Field>
          <Field>
            <Label htmlFor="message">Message (optional)</Label>
            <input name="message" type="text" />
          </Field>
          <button type="submit">Submit</button>
        </Form>
      </Content>
    </Background>
  );
}
