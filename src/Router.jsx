import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Timeline from "./pages/Timeline/Timeline";
import Home from "./pages/Home/Home";
import Ceremony from "./pages/Ceremony/Ceremony";
import OurStory from "./pages/OurStory/OurStory";

export default function RouterComponent() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/ceremony" component={Ceremony} />
        <Route path="/timeline" component={Timeline} />
        <Route path="/our-story" component={OurStory} />
      </Switch>
    </BrowserRouter>
  );
}
