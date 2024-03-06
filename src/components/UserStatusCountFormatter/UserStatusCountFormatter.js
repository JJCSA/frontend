import React from 'react';
import './UserStatusCountFormatter.scss';
import CountUp from 'react-countup';

const UserStatusCountFormatter = (cell, count) => {
  const setStatusClass = () => {
    switch (cell) {
      case 'Pending':
        return 'pendingUserStatusContainer';
      case 'Active':
        return 'activeStatusContainer';
      case 'Rejected':
        return 'rejectedStatusContainer';
      case 'Total':
        return 'totalStatusContainer';
      default:
        return 'newUserStatusContainer';
    }
  };

  return (
    <div className="count-card">
      <div className="card border-secondary mb-3">
        <div className={`card-header ${setStatusClass()}`}>{cell}</div>
        <div className="card-body">
          <p className="card-text">
            <CountUp start={0} end={count} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserStatusCountFormatter;
