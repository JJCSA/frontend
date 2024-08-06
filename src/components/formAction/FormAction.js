import './FormAction.css';
import React from 'react';
import { copyIcon, viewIcon } from '../../assets/index.js';

const FormAction = row => (
  <div>
    <img className="iconSpacing" src={copyIcon} alt="Copy" />
    <img className="iconSpacing" src={viewIcon} alt="View" />
  </div>
);

export default FormAction;
