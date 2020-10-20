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

const ExternalLink = styled.a`
  color: #00438f;
  text-decoration: none;
`;

export default function Ceremony() {
  const isTinyScreen = useMediaQuery({ maxWidth: extraSmall });

  return (
    <Layout>
      <Content>
        <Title>The Wedding Day</Title>
        <Date>October 24, 2020 at 4:30 est</Date>
        <Details>Thank you for joining us as we share our vows!</Details>
        <Details>
          <iframe
            title="ceremony-livestream"
            width={isTinyScreen ? 300 : 560}
            height="315"
            src="https://www.youtube-nocookie.com/embed/ruIyVCSjsnY"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Details>
        <Details>
          Share in the moment with us! Take a selfie of yourselves watching the
          ceremony and share it on social media using the hashtag{" "}
          <ExternalLink
            href="https://www.instagram.com/explore/tags/rachelandjer/"
            target="_blank"
            rel="noopener noreferrer"
          >
            #rachelandjer
          </ExternalLink>
          .
        </Details>
      </Content>
    </Layout>
  );
}
