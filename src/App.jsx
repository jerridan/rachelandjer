import React, { Fragment } from "react";
import { normalize } from "polished";
import styled, { createGlobalStyle } from "styled-components";
import { CloudinaryContext } from "cloudinary-react";
import backgroundImageExtraSmall from "./cherry_blossoms_768w.png";
import backgroundImageSmall from "./cherry_blossoms_1024w.png";
import backgroundImageMedium from "./cherry_blossoms_1360w.png";
import backgroundImageLarge from "./cherry_blossoms_2000w.png";
import ParallaxGallery from "./ParallaxGallery";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import {
  extraSmallQuery,
  smallQuery,
  mediumQuery,
  largeQuery,
} from "./breakpoints";
import images from "./images";

const Normalize = createGlobalStyle`${normalize()}`;

const Background = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  font-family: "Vesper Libre", serif;
  background-position-y: 35%;
  background-size: cover;
  background-repeat: no-repeat;
  @media (${extraSmallQuery}) {
    background-image: url(${backgroundImageExtraSmall});
  }
  @media (${smallQuery}) {
    background-image: url(${backgroundImageSmall});
  }
  @media (${mediumQuery}) {
    background-image: url(${backgroundImageMedium});
  }
  @media (${largeQuery}) {
    background-image: url(${backgroundImageLarge});
  }
`;

const Title = styled.div`
  font-family: "Poiret One", serif;
  font-size: 40px;
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

export default function App() {
  let parallax;

  return (
    <Fragment>
      <Normalize />
      <CloudinaryContext cloudName={process.env.CLOUDINARY_CLOUD_NAME}>
        <Background>
          <Parallax
            scrolling
            pages={images.length + 1}
            ref={(ref) => (parallax = ref)}
            config={{ tension: 200, friction: 40, precision: 0.01, mass: 2 }}
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
            <ParallaxLayer offset={images.length + 0.85} speed={1.0}>
              <Blurb>What do you think we'll do next?</Blurb>
            </ParallaxLayer>
          </Parallax>
        </Background>
      </CloudinaryContext>
    </Fragment>
  );
}
