import React from 'react';
import AdminUserStatusCounts from './AdminUserStatusCounts';

function AdminHomepage() {
  return (
    <div className="pageContainer">
      <div className="pageHeader">
        <h4>Admin Dashboard</h4>
        <AdminUserStatusCounts/>
      </div>
    </div>
  );
}

export default AdminHomepage;
