import React from "react";
import {ParallaxLayer } from "react-spring/renderprops-addons";
import Image from "./Image";
import images from "./images";

export default function ParallaxGallery() {
  return (
    <>
      <ParallaxLayer offset={1.0} speed={0.5}>
        <Image image={images[0]} />
      </ParallaxLayer>
      <ParallaxLayer offset={2.0} speed={0.5}>
        <Image image={images[1]} />
      </ParallaxLayer>
    </>
  );
}
