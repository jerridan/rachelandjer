import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Timeline from "./Timeline/Timeline";
import Home from "./Home/Home";
import Ceremony from "./Ceremony/Ceremony";
import Gifts from "./Gifts/Gifts";
import MessageSent from "./MessageSent/MessageSent";

export default function RouterComponent() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/ceremony" component={Ceremony} />
        <Route path="/gifts" component={Gifts} />
        <Route path="/timeline" component={Timeline} />
        <Route path="/message-sent" component={MessageSent} />
      </Switch>
    </BrowserRouter>
  );
}
