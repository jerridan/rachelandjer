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
  border: 4px solid brown;
  border-spacing: 2px;
  border-radius: 10px;
  background-color: brown;
  @media (${extraSmallQuery}) {
    height: 300px;
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
  margin-top: 15px;
  display: table;
  @media (${extraSmallQuery}) {
    width: 300px;
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

  let imageWidth = 300;
  if (smallScreen) imageWidth = 400;
  if (mediumScreen) imageWidth = 500;

  return (
    <Banner>
      <ImageContainer>
        <CloudinaryImage publicId={image.name} format="png">
          <Transformation
            height={imageWidth}
            width={imageWidth}
            crop="fill"
            gravity="faces"
            quality="50"
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
