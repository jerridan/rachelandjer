import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Timeline from "./Timeline/Timeline";
import Home from "./Home/Home";
import Ceremony from "./Ceremony/Ceremony";

export default function RouterComponent() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/ceremony" component={Ceremony} />
        <Route path="/timeline" component={Timeline} />
      </Switch>
    </BrowserRouter>
  );
}
