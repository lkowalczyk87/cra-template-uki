import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ROUTES } from '..';
const HomePage = React.lazy(() => import('./home'));
const TodoDetailsPage = React.lazy(() => import('./todoDetails'));

const PageSwitcher = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.todoDetails} component={TodoDetailsPage} />
      <Route path={ROUTES.home} component={HomePage} />
    </Switch>
  );
};

export default PageSwitcher;
