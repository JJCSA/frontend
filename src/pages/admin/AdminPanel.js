import React, { useState, useEffect, useCallback } from 'react';
import { BiCopyright } from 'react-icons/bi';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import styled from 'styled-components';
import { useNavigate, Outlet } from 'react-router-dom';
import { barChartIcon, userIcon } from '../../assets/index';
import AdminNavbar from './AdminNavbar';
import './AdminPanel.css';

const Main = styled.main`
  position: relative;
  //overflow: scroll;
  transition: all 0.15s;
  margin-left: ${props => (props.expanded ? 240 : 64)}px;
`;

function AdminPanel(props) {
  const navigate = useNavigate();
  const [selected, setSelected] = useState('dashboard');
  const [expanded, setExpanded] = useState(false);

  const onSelect = useCallback(selectedOption => {
    setSelected(selectedOption);
    const to = `/admin/${selectedOption}`;
    navigate(to);
  });

  useEffect(() => {
    props.toggleNavbar(false);
    props.toggleFooter(false);
    onSelect(selected);
    return () => {
      props.toggleNavbar(true);
      props.toggleFooter(true);
    };
  }, [onSelect, props, selected]);

  const onToggle = expanded => {
    setExpanded(expanded);
  };

  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <div>
      <AdminNavbar />
      <SideNav
        className="side-navbar-custom"
        onSelect={onSelect}
        onToggle={onToggle}
      >
        <SideNav.Toggle />
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
        </SideNav.Nav>
      </SideNav>
      <Main expanded={expanded}>
        <Outlet />
        <div className="copyright-admin-footer">
          <BiCopyright />
          &nbsp;
          {getCurrentYear()}&nbsp;Copyright reserved JJC USA
        </div>
      </Main>
    </div>
  );
}

export default AdminPanel;
