import React from "react";
import { Route, Switch } from "react-router-dom";

// All pages here
import Landing from "./components/pages/Landing";
import AboutUs from "./components/pages/AboutUs";
import Privacy from "./components/pages/Privacy";
import Terms from "./components/pages/Terms";
import Search from "./components/pages/Search";
import HotelView from "./components/pages/HotelView";

import Rewards from "./components/pages/Rewards";
import Checkout from './components/pages/Checkout';


const Router = () => (
  <main>
    <Switch>
      <Route path="/payment" component={Checkout} />
      <Route path="/search" component={Search} />
      <Route path="/AboutUs" component={AboutUs} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      <Route path="/hotel" component={HotelView} />
      <Route path="/rewards" component={Rewards} />
      <Route path="/" component={Landing} />
    </Switch>
  </main>
);

export default Router;
