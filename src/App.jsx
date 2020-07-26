import React, { Fragment } from "react";
import { normalize } from "polished";
import styled, { createGlobalStyle } from "styled-components";
import { CloudinaryContext } from "cloudinary-react";
import backgroundImageExtraSmall from "./cherry_blossoms_768w.png";
import backgroundImageSmall from "./cherry_blossoms_1024w.png";
import backgroundImageMedium from "./cherry_blossoms_1360w.png";
import backgroundImageLarge from "./cherry_blossoms_2000w.png";
import backgroundImageExtraLarge from "./cherry_blossoms_4000w.png";
import ParallaxGallery from "./ParallaxGallery";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";

const Normalize = createGlobalStyle`${normalize()}`;

const Background = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  font-family: "Vesper Libre", serif;
  background-position-y: 35%;
  background-size: cover;
  background-repeat: no-repeat;
  @media (min-width: 0px) {
    background-image: url(${backgroundImageExtraSmall});
  }
  @media (min-width: 768px) {
    background-image: url(${backgroundImageSmall});
  }
  @media (min-width: 1024px) {
    background-image: url(${backgroundImageMedium});
  }
  @media (min-width: 1360px) {
    background-image: url(${backgroundImageLarge});
  }
  @media (min-width: 1920px) {
    background-image: url(${backgroundImageExtraLarge});
  }
`;

const Title = styled.div`
  font-family: "Poiret One", serif;
  font-size: 40px;
  text-align: center;
  color: brown;
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
            pages={3.0}
            ref={(ref) => (parallax = ref)}
            config={{ tension: 200, friction: 40, precision: 0.01, mass: 2 }}
          >
            <ParallaxLayer offset={0.5} speed={0.5}>
              <Title>Rachel & Jerridan</Title>
            </ParallaxLayer>
            <ParallaxGallery />
          </Parallax>
        </Background>
      </CloudinaryContext>
    </Fragment>
  );
}
