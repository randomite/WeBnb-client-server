import React from 'react';
import { Route, Switch } from 'react-router-dom';

// All pages here
import Landing from './components/pages/Landing'


const Router = () => (
  <main>
    <Switch>
      <Route path='/' component={Landing}/>
    </Switch>
  </main>
)

export default Router