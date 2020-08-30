import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../Home';
import Contact from '../Contact';

const Router = () => (
  <Switch>
    <Route exact path={'/'} component={Home} />
    <Route exact path={'/contact'} component={Contact} />
    <Route path={'*'}>
      <Redirect to={'/'} />
    </Route>
  </Switch>
);

export default Router;
