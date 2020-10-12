import React from "react";
import Background from "./Background";
import Navigation from "./Navigation/Navigation";

export default function Layout({ children }) {
  return (
    <Background>
      <Navigation />
      {children}
    </Background>
  );
}
