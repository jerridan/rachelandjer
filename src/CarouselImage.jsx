import React from "react";
import styled from "styled-components";
import { Image, Transformation } from "cloudinary-react";
import images from "./images";

const carouselHeight = 450;
const descriptionHeight = 50;

const ImageDescription = styled.div`
  height: ${descriptionHeight}px;
`;

export default function CarouselImage({ imageIndex }) {
  return (
    <>
      <Image publicId={images[imageIndex]}>
        <Transformation
          height={carouselHeight - descriptionHeight}
          crop="scale"
        />
      </Image>
      <ImageDescription>
        <span>That time we went to a (second?) wedding</span>
      </ImageDescription>
    </>
  );
}
