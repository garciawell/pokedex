import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Dashboard } from '../pages';

const Routes  = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
    </Switch>
  );
};

export default Routes;
