import React from "react";
import styled from "styled-components";
import { Image as CloudinaryImage, Transformation } from "cloudinary-react";
import { useMediaQuery } from "react-responsive";
import {
  extraSmallQuery,
  smallQuery,
  mediumQuery,
  smallBreakpoint,
  mediumBreakpoint,
} from "./breakpoints";

const ImageContainer = styled.div`
  margin: 0 auto;
  border: 4px solid #633b41;
  border-spacing: 2px;
  border-radius: 10px;
  background-color: #633b41;
  @media (${extraSmallQuery}) and (orientation: portrait) {
    height: 300px;
  }
  @media (${extraSmallQuery}) and (orientation: landscape) {
    height: 250px;
  }
  @media (${smallQuery}) {
    height: 400px;
  }
  @media (${mediumQuery}) {
    height: 500px;
  }
`;

const DescriptionContainer = styled.div`
  margin: 0 auto;
  padding-top: 10px;
  display: table;
  @media (${extraSmallQuery}) {
    width: 300px;
  }
  @media (${extraSmallQuery}) and (orientation: landscape) {
    width: 450px;
  }
  @media (${smallQuery}) {
    width: 400px;
  }
  @media (${mediumQuery}) {
    width: 500px;
  }
`;

const Description = styled.span`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  color: brown;
  @media (${extraSmallQuery}) {
    font-size: 16px;
  }
`;

const Banner = styled.div`
  align-self: baseline;
  display: grid;
`;

export default function Image({ image }) {
  const smallScreen = useMediaQuery({ minWidth: smallBreakpoint });
  const mediumScreen = useMediaQuery({ minWidth: mediumBreakpoint });
  const landscape = useMediaQuery({ orientation: "landscape" });

  let imageWidth = 300;
  if (smallScreen) imageWidth = 400;
  if (mediumScreen) imageWidth = 500;

  let imageHeight = imageWidth;
  if (landscape && !smallScreen) imageHeight -= 50;

  return (
    <Banner>
      <ImageContainer>
        <CloudinaryImage publicId={image.name} format="png">
          <Transformation
            height={imageHeight}
            width={imageWidth}
            crop="fill"
            gravity="faces"
            quality="100"
            radius="10"
          />
        </CloudinaryImage>
      </ImageContainer>
      <DescriptionContainer>
        <Description>{image.description}</Description>
      </DescriptionContainer>
    </Banner>
  );
}
