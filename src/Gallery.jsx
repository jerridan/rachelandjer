import React from "react";
import styled from "styled-components";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import CarouselImage from "./CarouselImage";
import images from "./images";

const CarouselContainer = styled.div`
  background-color: pink;
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
`;

const CarouselImageContainer = styled.div`
  align-self: baseline;
  display: grid;
`;

export default function Gallery() {
  return (
    <CarouselContainer>
      <Carousel arrows infinite>
        {images.map((image, index) => (
          <CarouselImageContainer key={index}>
            <CarouselImage image={image} />
          </CarouselImageContainer>
        ))}
      </Carousel>
    </CarouselContainer>
  );
}
