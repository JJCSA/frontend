import AdminHomepage from './AdminHomepage';
import styled from 'styled-components';
import UserManager from './UserManager';
import {barChartIcon, userIcon, newsIcon, formIcon, feedbackIcon, socialMediaIcon, forumIcon} from "../../assets/index.js";
import { Switch, Route, withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

const Main = styled.main`
    position: relative;
    overflow: scroll;
    transition: all .15s;
    margin-left: ${props => (props.expanded ? 240 : 64)}px;
`;

class AdminPanel extends Component {
  constructor(props) {
      super(props);
      this.state = {
          selected: 'dashboard',
          expanded: false
      };
  }
    
  onSelect = (selected) => {
    const { history } = this.props;
    this.setState({ selected: selected });
    const to = '/admin/' + selected;
    if (history.location.pathname !== to) {
      history.push(to);
    }
  };

  onToggle = (expanded) => {
      this.setState({ expanded: expanded });
  };
  
  renderMainPage() {
    return (
      <Switch>
        <Route exact path="/admin/dashboard" component={AdminHomepage} />
        <Route path="/admin/manageUsers" component={UserManager} />
      </Switch>
    )}


  render() {
    const { expanded, selected } = this.state;
      return (
          <div>
            <SideNav style={{ background: "#1E2350", position: "fixed", overflow: "hidden" }} onSelect={this.onSelect} onToggle={this.onToggle}>
              <SideNav.Toggle />
                <SideNav.Nav selected={selected}>
                  <NavItem eventKey="dashboard">
                      <NavIcon>
                          <img src={barChartIcon} alt="bar" />
                      </NavIcon>
                      <NavText style={{ paddingRight: 32 }} title="Dashboard">
                          Dashboard
                      </NavText>
                  </NavItem>
                  <NavItem eventKey="manageUsers">
                      <NavIcon>
                      <img src={userIcon} alt="user" />
                      </NavIcon>
                      <NavText style={{ paddingRight: 32 }} title="User Manager">
                          User Manager
                      </NavText>
                  </NavItem>
                  <NavItem eventKey="manageNews">
                      <NavIcon>
                          <img src={newsIcon} alt="news" />
                      </NavIcon>
                      <NavText style={{ paddingRight: 32 }} title="News Manager">
                          News Manager
                      </NavText>
                  </NavItem>
                  <NavItem eventKey="manageForms">
                      <NavIcon>
                          <img src={formIcon} alt="form" />
                      </NavIcon>
                      <NavText style={{ paddingRight: 32 }} title="Form Manager">
                          Form Manager
                      </NavText>
                  </NavItem>
                  <NavItem eventKey="feedbackManager">
                      <NavIcon>
                          <img src={feedbackIcon} alt="feedback" />
                      </NavIcon>
                      <NavText style={{ paddingRight: 32 }} title="Feedback Manager">
                          Feedback Manager
                      </NavText>
                  </NavItem>
                  <NavItem eventKey="socialMediaManager">
                      <NavIcon>
                          <img src={socialMediaIcon} alt="feedback" />
                      </NavIcon>
                      <NavText style={{ paddingRight: 32 }} title="Social Media Manager">
                          Social Media Manager
                      </NavText>
                  </NavItem>
                  <NavItem eventKey="forumManager">
                      <NavIcon>
                          <img src={forumIcon} alt="forum" />
                      </NavIcon>
                      <NavText style={{ paddingRight: 32 }}>
                          Forum Manager
                      </NavText>
                  </NavItem>
                </SideNav.Nav>
            </SideNav>
            <Main expanded={expanded}>
              {this.renderMainPage()}
            </Main>
          </div>
      )
  }
}
export default withRouter(AdminPanel);
