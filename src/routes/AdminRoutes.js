import React from 'react';
import {
  Switch, Route,
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