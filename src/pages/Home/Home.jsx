import React from "react";
import styled from "styled-components";
import Layout from "../../Layout/Layout";
import theme from "../../theme";

const Names = styled.p`
  margin: 10px;
  letter-spacing: 0.3em;
  font-family: Tangerine, serif;
  font-size: ${theme.fontSizes.heading1};
`;

const Details = styled.p`
  letter-spacing: 0.1em;
  font-size: ${theme.fontSizes.medium};
`;

const Content = styled.div`
  text-align: center;
  height: 200px;
`;

export default function Home() {
  return (
    <Layout>
      <Content>
        <Names>Rachel & Jerridan</Names>
        <Details>Are Getting Married</Details>
      </Content>
    </Layout>
  );
}
