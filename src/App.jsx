import React, { Fragment } from "react";
import { normalize } from "polished";
import Gallery from "./Gallery";
import styled, { createGlobalStyle } from "styled-components";
import { CloudinaryContext } from "cloudinary-react";

const Normalize = createGlobalStyle`${normalize()}`;

const Grid = styled.div`
  grid-template-rows: auto 75% auto;
  position: absolute;
  display: grid;
  height: 100%;
  width: 100%;
`;

export default function App() {
  return (
    <Fragment>
      <Normalize />
      <CloudinaryContext
        cloudName={process.env.CLOUDINARY_CLOUD_NAME}
        crop="fill"
        gravity="faces"
        width="400"
        height="300"
        quality="100"
      >
        <Grid>
          <Gallery />
        </Grid>
      </CloudinaryContext>
    </Fragment>
  );
}
