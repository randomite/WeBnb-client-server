import React from "react";
import { Route, Switch } from "react-router-dom";

// All pages here
import Landing from "./components/pages/Landing";
import Test from "./components/pages/Test";

const Router = () => (
  <main>
    <Switch>
      <Route path="/Test" component={Test} />
      <Route path="/" component={Landing} />
    </Switch>
  </main>
);

export default Router;
