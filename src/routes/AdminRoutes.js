import React, { useContext, useState } from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import AdminHomepage from '../pages/admin/AdminHomepage';
import UserManager from '../pages/admin/UserManager';

const AdminRoutes = () => (
  <>
    <Switch>
      <Route exact path="/admin/dashboard" component={AdminHomepage} />
      <Route path="/admin/manageUsers" component={UserManager} />
    </Switch>
  </>
);

export default AdminRoutes;
