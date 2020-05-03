import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Import from '../pages/Import';

interface Props {
  toggleTheme(): void;
}

const Routes: React.FC<Props> = ({ toggleTheme }) => (
  <Switch>
    <Route path="/" exact component={() => (<Dashboard toggleTheme={toggleTheme} />)} />
    <Route path="/import" component={() => (<Import toggleTheme={toggleTheme} />)} />
  </Switch>
);

export default Routes;
