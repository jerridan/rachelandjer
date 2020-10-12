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

const Date = styled.p`
  letter-spacing: 0.1em;
  margin-top: 25px;
  margin-bottom: 25px;
  font-family: Tangerine, serif;
  font-size: 30px;
`;

export default function Ceremony() {
  return (
    <Layout>
      <Content>
        <Title>The Wedding Day</Title>
        <Date>October 24, 2020 at 4:30 est</Date>
        <Details>Thank you for joining us as we share our vows!</Details>
        <Details>
          A link to the livestream will be provided here prior to our ceremony
        </Details>
      </Content>
    </Layout>
  );
}
