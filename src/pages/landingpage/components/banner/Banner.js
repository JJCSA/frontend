import React from 'react';
import { BannerImage } from '../../../../assets/index';
import './Banner.scss';

function Banner() {
  return (
    <div id="home">
      <div className="BANNER">
        <div className="container-fluid top-banner">
          <img src={BannerImage} alt="banner" />
        </div>
      </div>
    </div>
  );
}
export default Banner;
