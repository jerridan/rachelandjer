import React from "react";
import styled from "styled-components";
import { Image as CloudinaryImage, Transformation } from "cloudinary-react";

const descriptionHeight = 50;

const ImageContainer = styled.div`
  margin: 0 auto;
  border: 4px solid brown;
  border-spacing: 2px;
  border-radius: 10px;
  background-color: brown;
`;

const DescriptionContainer = styled.div`
  margin: 0 auto;
  display: table;
  height: ${descriptionHeight}px;
`;

const Description = styled.span`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  color: brown;
`;

const Banner = styled.div`
  align-self: baseline;
  display: grid;
`;

export default function Image({ image }) {
  return (
    <Banner>
      <ImageContainer style={{ height: `${image.height}px` }}>
        <CloudinaryImage publicId={image.name} format="png">
          <Transformation
            height={image.height}
            width={image.width}
            crop="fill"
            gravity="faces"
            quality="50"
            radius="10"
          />
        </CloudinaryImage>
      </ImageContainer>
      <DescriptionContainer
        style={{ width: `${image.width}px` }}
      >
        <Description>{image.description}</Description>
      </DescriptionContainer>
    </Banner>
  );
}
