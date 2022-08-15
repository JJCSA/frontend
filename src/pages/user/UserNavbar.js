import React, { useContext } from 'react';
import { NavHashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { useSignOut } from 'react-auth-kit';
import { OverlayTrigger, Popover } from 'react-bootstrap';
import { CgProfile } from 'react-icons/cg';
import { GoHome } from 'react-icons/go';
import { FiLogOut } from 'react-icons/fi';
import Avatar from '../../components/avatar/Avatar';
import { jjcIcon, UserDropDownIcon } from '../../assets/index';
import './UserNavbar.scss';
import GlobalContext from '../../store/GlobalContext';

function UserNavbar() {
  const signOut = useSignOut();
  const { globalState, setGlobalState } = useContext(GlobalContext);

  const userDropdown = (
    <Popover>
      <Popover.Content className="user-profile-dropdown-content">
        {
                  ((Object.keys(globalState.profile).length > 0) && ((globalState.profile.userRole === 'ADMIN') || (globalState.profile.userRole === 'SUPER_ADMIN')))
                    ? (
                      <div className="user-dropdown">
                        <GoHome className="user-dropdown-icon" />
                        <Link to="/admin">
                          <span onClick={() => document.body.click()}>Admin</span>
                        </Link>
                      </div>
                    )
                    : ''
}
        <hr className="m-0" />
        <div className="user-dropdown">
          <CgProfile className="user-dropdown-icon" />
          <Link to="/profile">
            <span onClick={() => document.body.click()}>Profile</span>
          </Link>
        </div>
        <hr className="m-0" />
        <div className="user-dropdown">
          <FiLogOut className="user-dropdown-icon" />
          <span onClick={signOut}>Logout</span>
        </div>
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
            News Feed
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
          <Avatar imgSrc={Object.keys(globalState.profile).length > 0 ? globalState.profile.profilePicture : ''} />
          <h6 className="m-3">
            Hi,
            {Object.keys(globalState.profile).length > 0 ? globalState.profile.firstName : ''}
          </h6>
          <OverlayTrigger trigger="click" placement="bottom" overlay={userDropdown} rootClose>
            <img src={UserDropDownIcon} alt="UserDropdownIcon" className="mr-sm-5 user-profile-dropdown-icon" />
          </OverlayTrigger>
        </form>
      </div>
    </nav>
  );
}
export default UserNavbar;