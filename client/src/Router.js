import React from 'react';
import { Route, Switch } from 'react-router-dom';

// All pages here
import Landing from './components/pages/Landing';
import AboutUs from './components/pages/aboutUs';


const Router = () => (
  <main>
    <Switch>
      <Route path ='/AboutUs' component={AboutUs}/>
      <Route path='/' component={Landing}/>
    </Switch>
  </main>
)

export default Router;