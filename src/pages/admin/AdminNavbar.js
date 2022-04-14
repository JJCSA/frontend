import React, { useEffect } from 'react';
import { NavHashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { useAuthUser, useSignOut } from 'react-auth-kit';
import { OverlayTrigger, Popover, Badge } from 'react-bootstrap';
import { jjcIcon, UserDropDownIcon, NotificationIcon } from '../../assets/index';
import Avatar from '../../components/avatar/Avatar';
import {BsBell} from 'react-icons/bs';
import {CgProfile} from 'react-icons/cg';
import {GoHome} from 'react-icons/go';
import {FiLogOut} from 'react-icons/fi';
import './AdminNavbar.scss';

function AdminNavbar() {
    const signOut = useSignOut();
    const auth = useAuthUser();

    const userDropdown = (
        <Popover>
            <Popover.Content className="user-profile-dropdown-content">
                <div className="user-dropdown">
                    <GoHome className="user-dropdown-icon"/>
                    <Link to="/">
                        <span onClick={() => document.body.click()}>Home</span>
                    </Link>
                </div>
                <hr className="m-0" />
                <div className="user-dropdown">
                    <CgProfile className="user-dropdown-icon"/>
                    <Link to="/profile">
                        <span onClick={() => document.body.click()}>Profile</span>
                    </Link>
                </div>
                <hr className="m-0" />
                <div className="user-dropdown">
                    <FiLogOut className="user-dropdown-icon"/> 
                    <span onClick={signOut}>Logout</span>
                </div>
            </Popover.Content>
        </Popover>
    );

    return (
        <nav className="navbar navbar-light bg-light navbar-expand-sm rounded fixed-top position-sticky">
            <a
                className="navbar-brand ml-sm-5 px-3"
                href="/admin"
                target="_self"
                rel="noopener noreferrer"
            >
                <img src={jjcIcon} alt="JJC logo" />
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#myTogglerNav"
                aria-controls="myTogglerNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="myTogglerNav">
                <div className="left-section">
                    <div>
                        <BsBell size="1.5em" color="#606060"/>
                        <sup className="notification-number"><Badge pill variant="danger">10</Badge></sup>
                    </div>
                    <div className="vertical-line mr-3 ml-3"></div>
                    <Avatar />
                    <h6 className="m-3">
                        Hi,
                        {auth()?.user === undefined ? 'Dude' : auth().user.name}
                    </h6>
                    <OverlayTrigger trigger="click" placement="bottom" overlay={userDropdown} rootClose>
                        <img src={UserDropDownIcon} alt="UserDropdownIcon" className="mr-sm-5 user-profile-dropdown-icon" />
                    </OverlayTrigger>
                </div>
            </div>
        </nav>
    );
}

export default AdminNavbar;
