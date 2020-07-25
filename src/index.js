import React from "react";
import ReactDOM from "react-dom";
import WebFont from "webfontloader";
import App from "./App";

WebFont.load({
  google: {
    families: ["Vesper Libre:400", "sans-serif"],
  },
});

ReactDOM.render(<App />, document.getElementById("root"));
