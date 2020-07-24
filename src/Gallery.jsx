import React from "react";
import { Image, Transformation } from "cloudinary-react";
import styled from "styled-components";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

const images = ["dorcas_jirah_wedding.jpg", "valentines_day.jpg"];
const carouselHeight = 450;

const CarouselImage = ({ imageIndex }) => {
  return (
    <Image publicId={images[imageIndex]}>
      <Transformation height={carouselHeight} crop="scale" />
    </Image>
  );
};

const CarouselContainer = styled.div`
    background-color: pink;
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
  `;

export default function Gallery() {
  return (
    <CarouselContainer>
      <Carousel arrows infinite>
        {images.map((_image, index) => (
          <div key={index}>
            <CarouselImage imageIndex={index} key={index} />
          </div>
        ))}
      </Carousel>
    </CarouselContainer>
  );
}
