import React, { Component } from 'react';
import './Avatar.scss';
import Image from 'react-bootstrap/Image';

import defaultAvatar from '../../images/avatar-default.webp';

class Avatar extends Component {

    render() {

        const imgSrc = this.props.src || defaultAvatar;

        return(
            <div className="avatarContainer">
                <Image alt="userImage" src={imgSrc} roundedCircle />
            </div>
        )
    }
}

export default Avatar;
