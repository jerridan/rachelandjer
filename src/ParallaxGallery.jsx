import React from "react";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import Image from "./Image";
import images from "./images";

export default function ParallaxGallery() {
  let parallax;

  return (
    <Parallax
      scrolling
      pages={3}
      ref={(ref) => (parallax = ref)}
      config={{ tension: 200, friction: 40, precision: 0.01, mass: 2 }}
    >
      <ParallaxLayer offset={1.0} speed={1.0}>
        <Image image={images[0]} />
      </ParallaxLayer>
      <ParallaxLayer offset={2.0} speed={1.0}>
        <Image image={images[1]} />
      </ParallaxLayer>
    </Parallax>
  );
}
