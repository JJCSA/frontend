// import './AdminNavbar.scss'
import React , { Component } from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import {barChartIcon, userIcon, newsIcon, formIcon, feedbackIcon, socialMediaIcon, forumIcon} from "../assets/index.js";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
// import { Navbar, Nav, NavItem } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import { LinkContainer } from 'react-router-bootstrap';

class AdminNavbar extends Component {
    render() {
        return (
            <Router>
                <Route render={({ location, history }) => (
                    <SideNav
                    onSelect={(selected) => {
                        // Add your code here
                        console.log(location);
                        const to = location.pathname + '/' + selected;
                        if (location.pathname !== to) {
                            history.push(to);
                        }
                    }}
                >
                    <SideNav.Toggle />
                    <SideNav.Nav defaultSelected="dashboard">
                        <NavItem eventKey="dashboard">
                            <NavIcon>
                                <img src={barChartIcon} alt="bar" />
                                {/* <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} /> */}
                            </NavIcon>
                            <NavText>
                                Dashboard
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="manageUsers">
                            <NavIcon>
                            <img src={userIcon} alt="user" />
                            </NavIcon>
                            <NavText>
                                User Manager
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="manageForms">
                            <NavIcon>
                                <img src={newsIcon} alt="news" />
                            </NavIcon>
                            <NavText>
                                News Manager
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="formsManager">
                            <NavIcon>
                                <img src={formIcon} alt="form" />
                            </NavIcon>
                            <NavText>
                                Form Manager
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="feedbackManager">
                            <NavIcon>
                                <img src={feedbackIcon} alt="feedback" />
                            </NavIcon>
                            <NavText>
                                Feedback Manager
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="socialMediaManager">
                            <NavIcon>
                                <img src={socialMediaIcon} alt="feedback" />
                            </NavIcon>
                            <NavText>
                                Social Media Manager
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="forumManager">
                            <NavIcon>
                                <img src={forumIcon} alt="forum" />
                            </NavIcon>
                            <NavText>
                                Forum Manager
                            </NavText>
                        </NavItem>
                    </SideNav.Nav>
                </SideNav>
                )} />
            </Router>
            // <div>
        );
    }
}

export default AdminNavbar
