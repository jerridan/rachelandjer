import React from "react";
import styled from "styled-components";
import Layout from "../../Layout/Layout";
import Content from "../../components/Content";
import Title from "../../components/Title";
import theme from "../../theme";
import Details from "../../components/Details";
import "../../kwesFormOverrides.css";

const inputStyles = {
  width: "100%",
  padding: "10px",
  boxSizing: "border-box",
  border: `1px solid ${theme.colors.grey}`,
  marginBottom: "10px",
};

const Form = styled.form`
  text-align: left;
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

export default function Guestbook() {
  const kwesScript = document.createElement("script");

  kwesScript.setAttribute("src", "https://kwes.io/v2/kwes-script.js");
  kwesScript.setAttribute("charset", "utf-8");

  document.head.appendChild(kwesScript);

  return (
    <Layout>
      <Content>
        <Title>Guestbook</Title>
        <Details>Thank you for sharing in our special day! </Details>
        <Details>Let us know you were here, and send us a note.</Details>
        <Form
          className="kwes-form"
          action="https://kwes.io/api/foreign/forms/K7lk1OV6wDyGnOFrfrEp"
          data-kw-redirect="/message-sent"
        >
          <input
            style={inputStyles}
            placeholder="Name"
            name="name"
            rules="required"
            type="text"
          />
          <textarea
            style={inputStyles}
            placeholder="Message (optional)"
            name="message"
          />
          <Button type="submit">Submit</Button>
        </Form>
      </Content>
    </Layout>
  );
}
