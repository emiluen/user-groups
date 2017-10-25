import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import GroupsPage from '../components/GroupsPage';
import EditGroupPage from '../components/EditGroupPage';
import AddGroupPage from '../components/AddGroupPage';
import ViewGroupPage from '../components/ViewGroupPage';
import UserPage from '../components/UserPage';
import AdminPage from '../components/AdminPage';
import NotFoundPage from '../components/NotFoundPage';
import HelpPage from '../components/HelpPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/user" component={UserPage} />
        <PrivateRoute path="/groups" component={GroupsPage} />
        <PrivateRoute path="/view/:id" component={ViewGroupPage} />
        <PrivateRoute path="/create" component={AddGroupPage} />
        <PrivateRoute path="/edit/:id" component={EditGroupPage} />
        <PrivateRoute path="/admin" component={AdminPage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
