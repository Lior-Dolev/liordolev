import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../Home';
import Music from '../Music';
import Tour from '../Tour';
import About from '../About';
import Contact from '../Contact';

const Router = () => (
  <Switch>
    <Route exact path={'/'} component={Home} />
    <Route exact path={'/music'} component={Music} />
    <Route exact path={'/tour'} component={Tour} />
    <Route exact path={'/about'} component={About} />
    <Route exact path={'/contact'} component={Contact} />
    <Route path={'*'}>
      <Redirect to={'/'} />
    </Route>
  </Switch>
);

export default Router;
