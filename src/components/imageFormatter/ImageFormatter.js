import React from 'react';
import Avatar from "../../components/avatar/Avatar";

const ImageFormatter = ({cell, styleClass="smallavatarContainer"}) => {
    //ref https://stackoverflow.com/a/1443294
    const imgLinkRegex = RegExp("(http(s?):)|([/|.|w|s])*.(?:jpg|gif|png)");
    const validImg = imgLinkRegex.test(cell);
    return <Avatar src={validImg ? cell : ""} styleClass={styleClass}/>;
  };

export default ImageFormatter;