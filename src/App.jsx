import React, { Fragment } from "react";
import { normalize } from "polished";
import Gallery from "./Gallery";
import { createGlobalStyle } from "styled-components";

const Normalize = createGlobalStyle`${normalize()}`;

export default function App() {
  return (
    <Fragment>
      <Normalize />
      <Gallery />
    </Fragment>
  );
}
