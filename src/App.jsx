import React, { Fragment } from "react";
import { normalize } from "polished";
import styled, { createGlobalStyle } from "styled-components";
import { CloudinaryContext } from "cloudinary-react";
import backgroundImage from "./cherry_blossoms_2000w.png";
import ParallaxGallery from "./ParallaxGallery";

const Normalize = createGlobalStyle`${normalize()}`;

const Grid = styled.div`
  grid-template-rows: auto 450px auto;
  grid-template-columns: 50% 50%;
  position: absolute;
  display: grid;
  height: 100%;
  width: 100%;
  font-family: "Vesper Libre", sans-serif;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position-y: 30%;
  background-repeat: no-repeat;
`;

export default function App() {
  return (
    <Fragment>
      <Normalize />
      <CloudinaryContext cloudName={process.env.CLOUDINARY_CLOUD_NAME}>
        <Grid>
          <ParallaxGallery />
        </Grid>
      </CloudinaryContext>
    </Fragment>
  );
}
