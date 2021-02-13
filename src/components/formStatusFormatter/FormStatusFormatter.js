import React from 'react';
import './FormStatusFormatter.scss';

const FormStatusFormatter = (cell) => {
    const statusClass =
      "" + cell === "Active"
        ? "activeStatusContainer"
        : "closedStatusContainer";
    return (
      <div className={statusClass}>
        <span></span>
        <span>{cell}</span>
      </div>
    );
  };

export default FormStatusFormatter;