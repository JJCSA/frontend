import React from 'react';
import './UserStatusCountFormatter.scss'
import { Badge } from 'react-bootstrap';

const UserStatusCountFormatter = (cell, count) => {

  const setStatusClass = () => {
    switch(cell){
      case 'Pending': return 'pendingUserStatusContainer';
      case 'NewUser': return 'newUserStatusContainer';
      case 'Total': return 'totalStatusContainer';
      default: return 'approvedUserStatusContainer';
    }
  } 
  

  return (
    <div className={setStatusClass()}>
      <span />
      <span>{cell}</span>
      <Badge variant="secondary" className='count'>{count}</Badge>
    </div>
  );
};

export default UserStatusCountFormatter;
