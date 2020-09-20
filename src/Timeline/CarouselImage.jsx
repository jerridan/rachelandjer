import React from "react";
import styled from "styled-components";
import { Image, Transformation } from "cloudinary-react";

const carouselHeight = 450;
const descriptionHeight = 50;

const DescriptionContainer = styled.div`
  display: table;
  height: ${descriptionHeight}px;
`;

const Description = styled.span`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
`;

export default function CarouselImage({ image }) {
  return (
    <>
      <Image publicId={image.name}>
        <Transformation
          height={carouselHeight - descriptionHeight}
          width={image.width}
          crop="fill"
          gravity="faces"
          quality="50"
        />
      </Image>
      <DescriptionContainer style={{ width: `${image.width}px` }}>
        <Description>{image.description}</Description>
      </DescriptionContainer>
    </>
  );
}
