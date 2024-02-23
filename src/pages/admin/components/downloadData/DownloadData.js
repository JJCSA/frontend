import React, { useState, useEffect } from 'react';
import { useAuthHeader } from 'react-auth-kit';
import comm from '../../../../helpers/communication';
import './DownloadData.scss';

const DownloadData = () => {
  const token = useAuthHeader()();

  const handleDownload = async () => {
    const response = await comm.get('/admin/users/csv', token, null);

    if (response.status !== 200) {
      throw new Error('Failed to fetch data');
    }

    const blob = new Blob([await response.data], {
      type: 'application/octet-stream',
    });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'user.csv';

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="download-container">
      <button
        className="download-button"
        type="button"
        onClick={handleDownload}
      >
        Download Data
      </button>
    </div>
  );
};

export default DownloadData;
