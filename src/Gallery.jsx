import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import photo from "./images/jirah_dorcas_wedding.jpg";
import styled from "styled-components";

export default function Gallery() {
  const Image = styled.img`
    max-width: 100%;
    max-height: 100%;
  `;

  const Container = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: 50%;
  `;

  const ImageWrapper = styled.div`
    grid-column: 1;
  `;

  const TextWrapper = styled.div`
    grid-column: 2;
  `;

  return (
    <div>
      <Carousel arrows>
        <Container>
          <ImageWrapper>
            <Image src={photo} />
          </ImageWrapper>
          <TextWrapper>
            <p>
              Donec semper accumsan odio, ac cursus nulla sagittis ut.
              Suspendisse potenti. Etiam quam tellus, aliquet ac nisi sit amet,
              convallis dignissim dui. Nam luctus, augue nec suscipit pretium,
              justo ligula fermentum odio, ultricies convallis odio tortor
              euismod nunc. Fusce ipsum est, semper quis lobortis in, vulputate
              non ligula. Pellentesque quis dui nec sem vestibulum consectetur
              ac vitae dui. Cras gravida mi ac lorem sollicitudin, a rhoncus
              purus imperdiet. Vestibulum ante ipsum primis in faucibus orci
              luctus et ultrices posuere cubilia curae; Morbi nec orci sed ex
              fringilla ornare. In vitae diam ex. Donec tempus quis nisi ac
              pretium. Fusce id fermentum lacus. Sed lectus ex, vulputate vitae
              dapibus in, commodo at dolor. Curabitur tempor nisl nec faucibus
              sodales.
            </p>
          </TextWrapper>
        </Container>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
      </Carousel>
    </div>
  );
}
