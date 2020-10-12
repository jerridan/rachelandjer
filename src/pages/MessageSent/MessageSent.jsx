import React from "react";
import Layout from "../../Layout/Layout";
import Content from "../../components/Content";
import Details from "../../components/Details";
import Title from "../../components/Title";

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
