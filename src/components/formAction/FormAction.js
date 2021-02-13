import './FormAction.scss'
import React from 'react';
import  { copyIcon, viewIcon} from "../../assets/index.js"

const FormAction = (row) => {
  console.log(row);
    return (
      <div>
        <img className="iconSpacing" src={copyIcon} alt="Copy"/>
        <img className="iconSpacing" src={viewIcon} alt="View"/>
      </div>
    );
  };

export default FormAction;