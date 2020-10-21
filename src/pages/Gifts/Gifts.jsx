import React from "react";
import styled, { css } from "styled-components";
import Layout from "../../Layout/Layout";
import Content from "../../components/Content";
import SharedDetails from "../../components/Details";
import Title from "../../components/Title";
import theme from "../../theme";
import "../../kwesFormOverrides.css";

const Details = styled(SharedDetails)`
  text-align: left;
`;

const Form = styled.form`
  text-align: left;
`;

const ExternalLink = styled.a`
  color: #00438f;
  text-decoration: underline;
`;

const inputStyles = css`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid ${theme.colors.grey};
  margin-bottom: 10px;
`;

const TextArea = styled.textarea`
  ${inputStyles}
`;

const Input = styled.input`
  ${inputStyles}
`;

const Button = styled.button`
  height: 40px;
  color: ${theme.colors.white};
  background-color: ${theme.colors.darkGrey};
  border: none;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: ${theme.colors.grey};
  }
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
          <ExternalLink
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.myregistry.com/wedding-website/rachel-hon-and-jerridan-quiring-toronto-on/2537277/welcomemessage"
          >
            here
          </ExternalLink>
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
          <Input
            name="name"
            type="text"
            placeholder="Full Name"
            rules="required"
          />
          <Input
            name="email"
            type="email"
            placeholder="Email"
            rules="required|email"
          />
          <TextArea
            name="message"
            type="text"
            rows="3"
            placeholder="Message"
            rules="required|max:255"
          />
          <Button type="submit">Submit</Button>
        </Form>
      </Content>
    </Layout>
  );
}
