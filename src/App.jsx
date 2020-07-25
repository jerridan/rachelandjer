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
  font-family: "Vesper Libre", sans-serif;
`;

export default function App() {
  return (
    <Fragment>
      <Normalize />
      <CloudinaryContext cloudName={process.env.CLOUDINARY_CLOUD_NAME}>
        <Grid>
          <Gallery />
        </Grid>
      </CloudinaryContext>
    </Fragment>
  );
}
