import React from 'react';
import './FormStatusFormatter.css';

const FormStatusFormatter = cell => {
  const statusClass =
    `${cell}` === 'Active' ? 'activeStatusContainer' : 'closedStatusContainer';
  return (
    <div className={statusClass}>
      <span />
      <span>{cell}</span>
    </div>
  );
};

export default FormStatusFormatter;
