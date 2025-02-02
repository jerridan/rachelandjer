import React from "react";
import { CloudinaryContext } from "cloudinary-react";
import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";
import Router from "./Router";
import theme from "./theme";

const Normalize = createGlobalStyle`${normalize()}`;
const GlobalStyle = createGlobalStyle`
  body {
    font-family: Lora, serif;
    color: ${theme.colors.darkGrey};
  }
`;

export default function App() {
  return (
    <>
      <Normalize />
      <GlobalStyle />
      <CloudinaryContext cloudName={process.env.CLOUDINARY_CLOUD_NAME}>
        <Router />
      </CloudinaryContext>
    </>
  );
}
