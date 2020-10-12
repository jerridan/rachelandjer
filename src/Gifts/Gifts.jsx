import React from "react";
import Layout from "../Layout/Layout";
import styled from "styled-components";
import "./kwesFormOverrides.css";

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
  vertical-align: top;
  padding-top: 5px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 5px;
  border: 1px solid #373d3f;
`;

const Input = styled.input`
  width: 100%;
  padding: 5px;
  border: 1px solid #373d3f;
`;

export default function Gifts() {
  const kwesScript = document.createElement("script");

  kwesScript.setAttribute("src", "https://kwes.io/v2/kwes-script.js");
  kwesScript.setAttribute("charset", "utf-8");

  document.head.appendChild(kwesScript);

  return (
    <Layout>
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
          data-kw-redirect="/message-sent"
        >
          <Field>
            <Label htmlFor="name">Full Name</Label>
            <Input name="name" type="text" rules="required" />
          </Field>
          <Field>
            <Label htmlFor="email">Email</Label>
            <Input name="email" type="email" rules="required|email" />
          </Field>
          <Field>
            <Label htmlFor="message">Message</Label>
            <TextArea name="message" type="text" rows="3" rules="required" />
          </Field>
          <button type="submit">Submit</button>
        </Form>
      </Content>
    </Layout>
  );
}
