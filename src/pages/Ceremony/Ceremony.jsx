import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import theme from "../../theme";
import Layout from "../../Layout/Layout";
import Content from "../../components/Content";
import Details from "../../components/Details";
import Title from "../../components/Title";
import { extraSmall } from "../../breakpoints";

const Date = styled.p`
  letter-spacing: 0.1em;
  margin-top: 25px;
  margin-bottom: 25px;
  font-family: Tangerine, serif;
  font-size: ${theme.fontSizes.larger};
`;

export default function Ceremony() {
  const isTinyScreen = useMediaQuery({ maxWidth: extraSmall });

  return (
    <Layout>
      <Content>
        <Title>Wedding Ceremony</Title>
        <Date>October 24, 2020 at 4:30 est</Date>
        <Details>Thank you for joining us as we share our vows!</Details>
        <Details>
          <iframe
            title="ceremony-livestream"
            width={isTinyScreen ? 300 : 560}
            height="315"
            src="https://www.youtube-nocookie.com/embed/-EuyV_V0mis"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Details>
      </Content>
    </Layout>
  );
}
