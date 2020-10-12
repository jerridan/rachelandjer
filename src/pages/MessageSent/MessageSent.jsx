import React from "react";
import styled from "styled-components";
import Layout from "../../Layout/Layout";

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
`;

export default function MessageSent() {
  return (
    <Layout>
      <Content>
        <Title>Success!</Title>
        <Details>
          Thanks for the message. We'll get in touch with you soon!
        </Details>
        <Details>From Jerridan & Rachel</Details>
      </Content>
    </Layout>
  );
}
