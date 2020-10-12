import React from "react";
import styled from "styled-components";
import Layout from "../../Layout/Layout";

const Names = styled.p`
  margin: 10px;
  letter-spacing: 0.3em;
  font-family: Tangerine, serif;
  font-size: 60px;
`;

const Details = styled.p`
  letter-spacing: 0.1em;
  font-size: 16px;
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
