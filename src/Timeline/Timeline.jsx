import React, { Fragment } from "react";
import styled from "styled-components";
import backgroundImageExtraSmall from "./cherry_blossoms/cherry_blossoms_768x768.jpg";
import backgroundImageSmall from "./cherry_blossoms/cherry_blossoms_1024x1024.jpg";
import backgroundImageMedium from "./cherry_blossoms/cherry_blossoms_1360x1360.jpg";
import backgroundImageLarge from "./cherry_blossoms/cherry_blossoms_1920x1920.jpg";
import backgroundImageExtraLarge from "./cherry_blossoms/cherry_blossoms_2400x2400.jpg";
import ParallaxGallery from "./ParallaxGallery";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import { extraSmall, small, medium, large } from "../breakpoints";
import images from "./images";

const Background = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  font-family: Lora, serif;
  background-position-y: 35%;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${backgroundImageExtraLarge});
  @media (max-width: ${extraSmall}px) {
    background-image: url(${backgroundImageExtraSmall});
  }
  @media (max-width: ${small}px) {
    background-image: url(${backgroundImageSmall});
  }
  @media (max-width: ${medium}px) {
    background-image: url(${backgroundImageMedium});
  }
  @media (max-width: ${large}px) {
    background-image: url(${backgroundImageLarge});
  }
`;

const Title = styled.div`
  font-family: Tangerine, serif;
  font-size: 55px;
  text-align: center;
  color: brown;
`;

const Blurb = styled.p`
  font-size: 16px;
  text-align: center;
  color: brown;
  padding-left: 15px;
  padding-right: 15px;
`;

export default function Timeline() {
  let parallax;

  return (
    <Fragment>
      <Background>
        <Parallax
          scrolling
          pages={images.length + 2}
          ref={(ref) => (parallax = ref)}
          config={{
            mass: 0.1,
            tension: 210,
            friction: 20,
            precision: 0.01,
            clamp: true,
          }}
        >
          <ParallaxLayer offset={0.5} speed={1.0}>
            <Title>Rachel & Jerridan</Title>
          </ParallaxLayer>
          <ParallaxLayer offset={0.75} speed={1.0}>
            <Blurb>
              We've had some really fun times together! These are some of my
              favourite captured moments with you.
            </Blurb>
          </ParallaxLayer>
          <ParallaxGallery />
          <ParallaxLayer offset={images.length + 1.5} speed={1.0}>
            <Blurb>What do you think we'll do next?</Blurb>
          </ParallaxLayer>
        </Parallax>
      </Background>
    </Fragment>
  );
}
