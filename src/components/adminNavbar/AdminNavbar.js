import './AdminNavbar.scss';
import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

class AdminNavbar extends Component {
  render() {
    return (
      <div>
        <Navbar variant="light">
          <Navbar.Brand>
            <Link to="/admin">JJC Admin Panel</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="navbarNav">
              <LinkContainer to="/admin/manageUsers">
                <NavItem>Manage Users</NavItem>
              </LinkContainer>
            </Nav>
            <Nav className="navbarNav">
              <LinkContainer to="/admin/manageForms">
                <NavItem>Manage Forms</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default AdminNavbar;
