import React, { Fragment } from "react";
import { normalize } from "polished";
import styled, { createGlobalStyle } from "styled-components";
import { CloudinaryContext } from "cloudinary-react";
import backgroundImage from "./cherry_blossoms_2000w.png";
import ParallaxGallery from "./ParallaxGallery";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";

const Normalize = createGlobalStyle`${normalize()}`;

const Background = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  font-family: "Vesper Libre", serif;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position-y: 45%;
  background-repeat: no-repeat;
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
              <Title>Jerridan & Rachel</Title>
            </ParallaxLayer>
            <ParallaxGallery />
          </Parallax>
        </Background>
      </CloudinaryContext>
    </Fragment>
  );
}
