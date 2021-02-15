import './AdminNavbar.scss'
import React , { Component } from 'react';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import {barChartIcon, userIcon, newsIcon, formIcon, feedbackIcon, socialMediaIcon, forumIcon} from "../assets/index.js";
import { withRouter } from "react-router";
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

class AdminNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        };
        this.onToggle = this.onToggle.bind(this);
    }

    onToggle = (expanded) => {
        this.setState({ expanded: expanded });
    };

    render() {
        return (
            <SideNav
                style={{background: "#1E2350"}}
                onSelect={(selected) => {
                    const { history } = this.props;
                    const to = '/admin/' + selected;
                    if (history.location.pathname !== to) {
                        history.push(to);
                    }
                }}
            >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="dashboard">
                    <NavItem eventKey="dashboard">
                        <NavIcon>
                            <img src={barChartIcon} alt="bar" />
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
                    <NavItem eventKey="manageNews">
                        <NavIcon>
                            <img src={newsIcon} alt="news" />
                        </NavIcon>
                        <NavText>
                            News Manager
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="manageForms">
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
        );
    }
}

export default withRouter(AdminNavbar);
