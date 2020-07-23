import React from "react";
import { Image } from "cloudinary-react";
import styled from "styled-components";

export default function Gallery() {
  const Carousel = styled.div`
    background-color: pink;
    grid-row-start: 2;
    grid-row-end: 3;
  `;

  return (
    <Carousel>
      <Image publicId="dorcas_jirah_wedding.jpg" />
      <Image publicId="valentines_day.jpg" />
    </Carousel>
  );
}
