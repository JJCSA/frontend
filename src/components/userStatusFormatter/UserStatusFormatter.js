import React from 'react';
import './UserStatusFormatter.scss';

const UserStatusFormatter = (cell) => {
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

export default UserStatusFormatter;