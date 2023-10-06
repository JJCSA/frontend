import React from 'react';
import AdminUserStatusCounts from './AdminUserStatusCounts';
import AdminNewUserNames from './AdminNewUserNames';

function AdminHomepage() {
  return (
    <div className="pageContainer">
      <div className="pageHeader">
        <h4>Admin Dashboard</h4>
      </div>
      <div style={{display: 'flex', flexDirection: 'column'}}>
          <AdminUserStatusCounts/>
          <AdminNewUserNames/>
        </div>
    </div>
  );
}

export default AdminHomepage;
