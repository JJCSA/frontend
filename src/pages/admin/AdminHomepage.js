import React from 'react';
import DownloadData from './components/downloadData/DownloadData';
import AdminUserStatusCounts from './components/userStatusCount/AdminUserStatusCounts';
import './AdminHomepage.css';

function AdminHomepage() {
  return (
    <div className="pageContainer">
      <div className="pageHeader-dashboard">
        <div className="header-content">
          <h4>Admin Dashboard</h4>
          <DownloadData />
        </div>
      </div>
      <div>
        <AdminUserStatusCounts />
      </div>
    </div>
  );
}

export default AdminHomepage;
