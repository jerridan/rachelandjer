import React, { Fragment } from "react";
import Router from "./Router";
import { CloudinaryContext } from "cloudinary-react";
import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";

const Normalize = createGlobalStyle`${normalize()}`;

export default function App() {
  return (
    <Fragment>
      <Normalize />
      <CloudinaryContext cloudName={process.env.CLOUDINARY_CLOUD_NAME}>
        <Router />
      </CloudinaryContext>
    </Fragment>
  );
}
