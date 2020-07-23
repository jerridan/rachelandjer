import React, { Fragment } from "react";
import { normalize } from "polished";
import Gallery from "./Gallery";
import styled, { createGlobalStyle } from "styled-components";
import { CloudinaryContext } from "cloudinary-react";

const Normalize = createGlobalStyle`${normalize()}`;

const Grid = styled.div`
  grid-template-rows: auto 450px auto;
  grid-template-columns: 50% 50%;
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
        quality="50"
      >
        <Grid>
          <Gallery />
        </Grid>
      </CloudinaryContext>
    </Fragment>
  );
}
