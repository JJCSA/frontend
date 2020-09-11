import React from 'react';
import './StatusFormatter.scss';

const StatusFormatter = (cell) => {
    const statusClass =
      "" + cell === "Pending"
        ? "pendingStatusContainer"
        : "approvedStatusContainer";
    return (
      <div className={statusClass}>
        <span></span>
        <span>{cell}</span>
      </div>
    );
  };

export default StatusFormatter;