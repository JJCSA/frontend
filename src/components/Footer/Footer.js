import React from 'react';
import './Footer.scss';
import {ImFacebook, ImLinkedin2, ImTwitter, ImYoutube} from 'react-icons/im';
import {GrInstagram} from 'react-icons/gr';
import {BiCopyright} from 'react-icons/bi';

function Footer() {
    return (
        <div className="footer-container">
        <div className="footer">
            <div>JJC MISSION</div> |
            <div>NEWS UPDATES</div> |
            <div>CONTACT US</div> |
            <div>JJC CENTRAL BOARD</div>
            <div className="social-media-icons">
               <ImFacebook/>
               <GrInstagram/>
               <ImLinkedin2/>
               <ImTwitter/>
               <ImYoutube/>
            </div>
        </div>
            <div className="copyright1"><BiCopyright/>&nbsp;2020 Copyright reserved JJC Student Association USA</div>
        </div>
    );
}

export default Footer;
