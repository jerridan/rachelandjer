import React from "react";
import styled from "styled-components";
import { Image, Transformation } from "cloudinary-react";

const carouselHeight = 450;
const descriptionHeight = 50;

const ImageDescription = styled.div`
  height: ${descriptionHeight}px;
  text-align: center;
  line-height: 25px;
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
      <ImageDescription style={{ width: `${image.width}px` }}>
        <span>{image.description}</span>
      </ImageDescription>
    </>
  );
}
