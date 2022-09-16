import React from 'react';
import './Avatar.scss';
import Image from 'react-bootstrap/Image';

import defaultAvatar from '../../assets/images/avatar-default.webp';

const Avatar = ({ imgSrc, avatarSize = 'small' }) => (
  <div className={avatarSize === 'small' ? 'smallavatarContainer' : 'largeavatarContainer'}>
    <Image alt="userImage" src={imgSrc || defaultAvatar} roundedCircle />
  </div>
);

export default Avatar;
