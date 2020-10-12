import React from "react";
import styled from "styled-components";
import Layout from "../../Layout/Layout";
import theme from "../../theme";

const Content = styled.div`
  background-color: ${theme.colors.white};
  text-align: center;
  padding: 50px;
`;

const Title = styled.p`
  margin-top: 25px;
  margin-bottom: 25px;
  letter-spacing: 0.3em;
  font-family: Tangerine, serif;
  font-size: ${theme.fontSizes.heading2};
`;

const Details = styled.p`
  margin-top: 20px;
  margin-bottom: 20px;
  letter-spacing: 0.1em;
  font-size: ${theme.fontSizes.medium};
  max-width: 750px;
`;

export default function MessageSent() {
  return (
    <Layout>
      <Content>
        <Title>Success!</Title>
        <Details>
          Thanks for the message. We&apos;ll get in touch with you soon!
        </Details>
        <Details>From Jerridan & Rachel</Details>
      </Content>
    </Layout>
  );
}
