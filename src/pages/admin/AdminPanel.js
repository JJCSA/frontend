import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { barChartIcon, userIcon, newsIcon, formIcon, feedbackIcon, socialMediaIcon, forumIcon } from "../../assets/index.js";
import { withRouter } from 'react-router-dom';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import AdminNavbar from './AdminNavbar';
import { BiCopyright } from 'react-icons/bi';
import './AdminPanel.scss';
import AdminRoutes from '../../routes/AdminRoutes';

const Main = styled.main`
        position: relative;
        //overflow: scroll;
        transition: all .15s;
        margin-left: ${props => (props.expanded ? 240 : 64)}px;
    `;

function AdminPanel(props) {
    const [selected, setSelected] = useState('dashboard');
    const [expanded, setExpanded] = useState(false);



    useEffect(() => {
        props.toggleNavbar(false);
        props.toggleFooter(false);
        onSelect(selected);
        return () => {
            props.toggleNavbar(true);
            props.toggleFooter(true);
        };
    }, [props]);

    const onSelect = (selected) => {
        const { history } = props;
        setSelected(selected);
        const to = '/admin/' + selected;
        if (history.location.pathname !== to) {
            history.push(to);
        }
    };

    const onToggle = (expanded) => {
        setExpanded(expanded);
    };

    const getCurrentYear = () => {
        return new Date().getFullYear();
    }

    return(
        <div>
                <AdminNavbar/>
                <SideNav
                    className="side-navbar-custom"
                    onSelect={onSelect} onToggle={onToggle}>
                    <SideNav.Toggle/>
                    <SideNav.Nav selected={selected}>
                        <NavItem eventKey="dashboard">
                            <NavIcon>
                                <img src={barChartIcon} alt="bar" />
                            </NavIcon>
                            <NavText className="side-navbar-option" title="Dashboard">
                                Dashboard
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="manageUsers">
                            <NavIcon>
                                <img src={userIcon} alt="user" />
                            </NavIcon>
                            <NavText className="side-navbar-option" title="User Manager">
                                User Manager
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="manageNews">
                            <NavIcon>
                                <img src={newsIcon} alt="news" />
                            </NavIcon>
                            <NavText className="side-navbar-option" title="News Manager">
                                News Manager
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="manageForms">
                            <NavIcon>
                                <img src={formIcon} alt="form" />
                            </NavIcon>
                            <NavText className="side-navbar-option" title="Form Manager">
                                Form Manager
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="feedbackManager">
                            <NavIcon>
                                <img src={feedbackIcon} alt="feedback" />
                            </NavIcon>
                            <NavText className="side-navbar-option" title="Feedback Manager">
                                Feedback Manager
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="socialMediaManager">
                            <NavIcon>
                                <img src={socialMediaIcon} alt="feedback" />
                            </NavIcon>
                            <NavText className="side-navbar-option" title="Social Media Manager">
                                Social Media Manager
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="forumManager">
                            <NavIcon>
                                <img src={forumIcon} alt="forum" />
                            </NavIcon>
                            <NavText className="side-navbar-option">
                                Forum Manager
                            </NavText>
                        </NavItem>
                    </SideNav.Nav>
                </SideNav>
                <Main expanded={expanded}>
                    {AdminRoutes()}
                </Main>
                <div className="copyright-admin-footer"><BiCopyright/>&nbsp;
                {getCurrentYear()}
                Copyright reserved JJC Student Association USA</div>
            </div>
    )

}

export default withRouter(AdminPanel);
