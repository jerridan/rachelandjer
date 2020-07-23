import React from "react";
import { Image, Transformation } from "cloudinary-react";
import styled from "styled-components";

export default function Gallery() {
  const images = ["dorcas_jirah_wedding.jpg", "valentines_day.jpg"];
  const carouselHeight = 450;
  const Carousel = styled.div`
    background-color: pink;
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
  `;

  return (
    <Carousel>
      <Image
        publicId={images[0]}
        style={{ margin: "0 auto", display: "block" }}
      >
        <Transformation height={carouselHeight} crop="scale" />
      </Image>
    </Carousel>
  );
}
