import React from 'react';
import { NavHashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { useAuthUser, useSignOut } from 'react-auth-kit';
import { OverlayTrigger, Popover } from 'react-bootstrap';
import { jjcIcon, UserDropDownIcon } from '../../assets/index';
import Avatar from '../../components/avatar/Avatar';
import './UserNavbar.scss';

function UserNavbar() {
  const signOut = useSignOut();
  const auth = useAuthUser();

  const popover = (
    <Popover>
      <Popover.Content className="user-profile-dropdown-content">
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
        href="/"
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
        <div className="navbar-nav mr-auto my-sm-2">
          <NavHashLink
            to="/#news-feed"
            smooth
            className="nav-item nav-link active navbarhover px-3"
            activeClassName="activeLink"
          >
            NewsFeed
          </NavHashLink>
          <NavHashLink
            to="/#news-feed"
            smooth
            className="nav-item nav-link active navbarhover px-3"
            activeClassName="activeLink"
          >
            Search Engine
          </NavHashLink>
          <NavHashLink
            to="/#news-feed"
            className="nav-item nav-link active navbarhover px-3"
            smooth
            activeClassName="activeLink"
          >
            Event Calendar
          </NavHashLink>
        </div>
        <form className="form-inline">
          <button
            className="form-control btn btn-light btn-block mr-sm-5 post-questions-button"
            type="button"
          >
            Post Questions
          </button>
          <Avatar />
          <h6 className="m-3">
            Hi,
            {auth()?.user === undefined ? 'Dude' : auth().user}
          </h6>
          <OverlayTrigger trigger="click" placement="bottom" overlay={popover} rootClose>
            <img src={UserDropDownIcon} alt="UserDropdownIcon" className="mr-sm-5 user-profile-dropdown-icon" />
          </OverlayTrigger>
        </form>
      </div>
    </nav>
  );
}
export default UserNavbar;
