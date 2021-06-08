import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AdminHomepage from './AdminHomepage';
import AdminNavbar from '../../components/adminNavbar/AdminNavbar';
import UserManager from './UserManager';
import FormManager from './FormManager';

function AdminPanel() {
  return (
    <div>
      <Router>
        <AdminNavbar username="User" />
        <Switch>
          <Route exact path="/admin" component={AdminHomepage} />
          <Route path="/admin/manageUsers" component={UserManager} />
          <Route path="/admin/manageForms" component={FormManager} />
        </Switch>
      </Router>
    </div>
  );
}

export default AdminPanel;
