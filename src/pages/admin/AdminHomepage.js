import React from 'react';
import AdminUserStatusCounts from './components/userStatusCount/AdminUserStatusCounts';

function AdminHomepage() {
  return (
    <div className="pageContainer">
      <div className="pageHeader">
        <h4>Admin Dashboard</h4>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <AdminUserStatusCounts />
      </div>
    </div>
  );
}

export default AdminHomepage;
