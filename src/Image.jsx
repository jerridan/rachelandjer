import React from "react";
import styled from "styled-components";
import { Image as CloudinaryImage, Transformation } from "cloudinary-react";

const carouselHeight = 450;
const descriptionHeight = 50;

const ImageContainer = styled.div`
  margin: 0 auto;
`;

const DescriptionContainer = styled.div`
  display: table;
  height: ${descriptionHeight}px;
`;

const Description = styled.span`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
`;

const Banner = styled.div`
  align-self: baseline;
  display: grid;
`;

export default function Image({ image }) {
  return (
    <Banner>
      <ImageContainer>
        <CloudinaryImage publicId={image.name}>
          <Transformation
            height={carouselHeight - descriptionHeight}
            width={image.width}
            crop="fill"
            gravity="faces"
            quality="50"
          />
        </CloudinaryImage>
        <DescriptionContainer style={{ width: `${image.width}px` }}>
          <Description>{image.description}</Description>
        </DescriptionContainer>
      </ImageContainer>
    </Banner>
  );
}
