import React , { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ImageFormatter from "../imageFormatter/ImageFormatter";
import {notificationIcon} from "../../assets/index.js";

class AdminNavbar extends Component {
    
    render() {
        const dropdownName = "Hi, " + this.props.username;
        return (
            <div>
                <Navbar bg="light" variant="light">
                    <Navbar.Brand>
                        <Link to="/admin">JJC Admin Panel</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link style={{marginRight: 30 + 'px'}}>
                                <img src={notificationIcon} alt="Location" />
                            </Nav.Link>
                            <NavItem>
                            <ImageFormatter cell="https://www.nj.com/resizer/h8MrN0-Nw5dB5FOmMVGMmfVKFJo=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg" avatarSize="small"/>
                            </NavItem>
                            <NavDropdown title={dropdownName} id="basic-nav-dropdown" alignRight>
                                <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default AdminNavbar;
