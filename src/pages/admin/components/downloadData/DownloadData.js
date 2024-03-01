import React, { useState, useEffect } from 'react';
import { useAuthHeader } from 'react-auth-kit';
import comm from '../../../../helpers/communication';
import './DownloadData.scss';

const DownloadData = () => {
  const token = useAuthHeader()();

  function processCSVData(data) {
    // Use the first row of data as the dynamic header
    const headerRow = data[0];

    // Process the rest of the rows, starting from index 1, to handle null values
    const processedData = [
      headerRow,
      ...data.slice(1).map(row => {
        if (Array.isArray(row)) {
          return row.map(value => (value === null ? '' : value));
        }
        return [row]; // Convert non-array data into an array
      }),
    ];

    return processedData;
  }

  // Function to convert data to CSV format
  function convertToCSV(data) {
    return data
      .map(row => (Array.isArray(row) ? row.join(',') : row))
      .join('\n');
  }

  const handleDownload = async () => {
    const response = await comm.get('/admin/users/csv', token, null);
    if (response.status !== 200) {
      throw new Error('Failed to fetch data');
    }

    // Check if the response data is an array or convert it to an array if needed
    const dataArray = Array.isArray(response.data)
      ? response.data
      : [response.data];

    // Process the data to handle null values and set dynamic header
    const cleanedData = processCSVData(dataArray);

    // Create a CSV content string from the cleaned data with dynamic header
    const csvContent = convertToCSV(cleanedData);

    // Create a Blob from the CSV content
    const blob = new Blob([csvContent], {
      type: 'text/csv',
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
