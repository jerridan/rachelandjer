import React from "react";
import Layout from "../../Layout/Layout";
import Content from "../../components/Content";
import Details from "../../components/Details";
import Title from "../../components/Title";

export default function GuestbookSigned() {
  return (
    <Layout>
      <Content>
        <Title>Thank you!</Title>
        <Details>
          Thank you for signing our guest book. We are so grateful that you took
          time to witness our special day.
        </Details>
        <Details>From Jerridan & Rachel</Details>
      </Content>
    </Layout>
  );
}
