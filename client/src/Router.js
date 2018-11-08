import React from "react";
import { Route, Switch } from "react-router-dom";

// All pages here
import Landing from "./components/pages/Landing";
import AboutUs from "./components/pages/AboutUs";
import Privacy from "./components/pages/Privacy";
import Terms from "./components/pages/Terms";

const Router = () => (
  <main>
    <Switch>
      <Route path="/AboutUs" component={AboutUs} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      <Route path="/" component={Landing} />
    </Switch>
  </main>
);

export default Router;
