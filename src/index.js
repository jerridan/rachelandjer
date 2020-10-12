import React from "react";
import ReactDOM from "react-dom";
import WebFont from "webfontloader";
import App from "./App";

WebFont.load({
  google: {
    families: ["Lora", "Tangerine", "serif"],
  },
});

// eslint-disable-next-line react/jsx-filename-extension
ReactDOM.render(<App />, document.getElementById("root"));
