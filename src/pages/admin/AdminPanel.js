import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AdminHomepage from './AdminHomepage';
import AdminNavbar from '../../components/AdminNavbar';
import UserManager from './UserManager';

class AdminPanel extends Component {
    render() {
        return (
            <div>
                <Router>
                    <AdminNavbar />
                    <Switch>
                        <Route exact path="/admin" component={AdminHomepage} />
                        <Route path="/admin/manageUsers" component={UserManager} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default AdminPanel;
