import React from 'react';
import { NavHashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { useAuthUser, useSignOut } from 'react-auth-kit';
import { OverlayTrigger, Popover, Badge } from 'react-bootstrap';
import { jjcIcon, UserDropDownIcon, NotificationIcon } from '../../assets/index';
import Avatar from '../../components/avatar/Avatar';
import {BsBell} from 'react-icons/bs';
import './AdminNavbar.scss';

function AdminNavbar() {
    const signOut = useSignOut();
    const auth = useAuthUser();

    const popover = (
        <Popover>
            <Popover.Content className="user-profile-dropdown-content">
                <div className="p-1" onClick={() => document.body.click()}><Link to="/">Home</Link></div>
                <hr className="m-0" />
                <div className="p-1" onClick={() => document.body.click()}><Link to="/profile">Profile</Link></div>
                <hr className="m-0" />
                <div className="p-1" onClick={signOut}>Logout</div>
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
                        {auth()?.user === undefined ? 'Dude' : auth().user}
                    </h6>
                    <OverlayTrigger trigger="click" placement="bottom" overlay={popover} rootClose>
                        <img src={UserDropDownIcon} alt="UserDropdownIcon" className="mr-sm-5 user-profile-dropdown-icon" />
                    </OverlayTrigger>
                </div>
            </div>
        </nav>
    );
}

export default AdminNavbar;
