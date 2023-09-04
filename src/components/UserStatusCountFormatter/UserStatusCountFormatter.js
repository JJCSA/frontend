import React from 'react';
import './UserStatusCountFormatter.scss'
import { Badge } from 'react-bootstrap';

const UserStatusCountFormatter = (cell, count) => {
  const statusClass = `${cell}` === 'Pending'
    ? 'pendingUserStatusContainer'
    : 'approvedUserStatusContainer';

  return (
    <div className={statusClass}>
      <span />
      <span>{cell}</span>
      <Badge variant="secondary" className='count'>{count}</Badge>
    </div>
  );
};

export default UserStatusCountFormatter;
