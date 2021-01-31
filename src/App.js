import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "./App.scss";

import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Profile from "./components/Profile";
import AdminPanel from "./pages/admin/AdminPanel";
import LandingHomepage from "./pages/landingpage/LandingHomepage";
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/admin" component={AdminPanel} />
          <Route>
            <div className="App">
              <Navbar />
              <Route exact path="/" component={LandingHomepage} />
              <div className="container">
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/profile" component={Profile} />
              </div>
            </div>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
