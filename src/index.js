import React from "react";
import ReactDOM from "react-dom";
import WebFont from "webfontloader";
import App from "./App";

WebFont.load({
  google: {
    families: ["Lora", "Tangerine", "sans-serif"],
  },
});

ReactDOM.render(<App />, document.getElementById("root"));
