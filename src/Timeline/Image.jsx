import React from "react";
import styled from "styled-components";
import { Image as CloudinaryImage, Transformation } from "cloudinary-react";
import { useMediaQuery } from "react-responsive";
import { extraSmall, small } from "../breakpoints";

const ImageContainer = styled.div`
  margin: 0 auto;
  border: 4px solid #633b41;
  border-spacing: 2px;
  border-radius: 10px;
  background-color: #633b41;
  @media (orientation: portrait) {
    height: 300px;
  }
  @media (orientation: landscape) {
    height: 250px;
  }
  @media (min-width: ${extraSmall}px) {
    height: 400px;
  }
  @media (min-width: ${small}px) {
    height: 500px;
  }
`;

const DescriptionContainer = styled.div`
  margin: 0 auto;
  padding-top: 10px;
  display: table;
  width: 300px;
  @media (min-width: 0px) and (orientation: landscape) {
    width: 450px;
  }
  @media (min-width: ${extraSmall}px) {
    width: 400px;
  }
  @media (min-width: ${small}px) {
    width: 500px;
  }
`;

const Description = styled.span`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  color: brown;
  font-size: 16px;
`;

const Banner = styled.div`
  align-self: baseline;
  display: grid;
`;

export default function Image({ image }) {
  const smallScreen = useMediaQuery({ minWidth: extraSmall });
  const mediumScreen = useMediaQuery({ minWidth: small });
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
