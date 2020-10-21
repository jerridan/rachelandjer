import React from "react";
import styled, { css } from "styled-components";
import Layout from "../../Layout/Layout";
import Content from "../../components/Content";
import Title from "../../components/Title";
import theme from "../../theme";
import Details from "../../components/Details";
import "../../kwesFormOverrides.css";

const inputStyles = css`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid ${theme.colors.grey};
  margin-bottom: 10px;
`;

const Form = styled.form`
  text-align: left;
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

export default function Guestbook() {
  return (
    <Layout>
      <Content>
        <Title>Guestbook</Title>
        <Details>Thank you for sharing in our special day! </Details>
        <Details>Let us know you were here, and send us a note.</Details>
        <Form>
          <Input placeholder="Name" />
          <TextArea placeholder="Message (optional)" />
          <Button type="submit">Submit</Button>
        </Form>
      </Content>
    </Layout>
  );
}
