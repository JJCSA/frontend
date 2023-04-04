// import React, { useState } from 'react';

import React, { useEffect } from "react";
import './AcceptRejectButton.scss';
import CookieConsent from "react-cookie-consent";

const AcceptRejectButton = ({ content  }) => {
  useEffect(() => {
    // Initialize CookieConsent on component mount
    window.cookieconsent.initialise({
      
        "content": {
            "message": content.message,
            "dismiss": content.dismiss,
            "link": content.link,
            "href": content.href,
            "allow": content.allow,
          },
    });
  }, [content]);

  return (
    <CookieConsent>
      {content.message} <a href={content.href}>{content.link}</a>
    </CookieConsent>
  );
};

export default AcceptRejectButton;


