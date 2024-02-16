import React, { useState, useEffect } from 'react';
import { useAuthHeader } from 'react-auth-kit';
import comm from '../../../../helpers/communication';
import UserStatusCountFormatter from '../../../../components/UserStatusCountFormatter/UserStatusCountFormatter';
import { DashboardUserStatus } from '../../../../utils/constants';
import './AdminUserStatusCount.scss';

function AdminUserStatusCounts() {
  const [userStatusCounts, setUserStatusCounts] = useState([]);
  const token = useAuthHeader()();

  useEffect(() => {
    async function getUserStatusCounts() {
      const response = await comm.get(
        '/admin/dashboard/userStatusCount',
        token,
        null
      );
      const fetchedUserStatus = [];
      let totalUsers = 0;
      const fetchedUserStatusCounts = response.data || [];
      const updatedStatusCounts = fetchedUserStatusCounts.map(count => {
        if (count.userStatus === 'NewUser') {
          return { ...count, userStatus: 'Approved' };
        }
        return count;
      });
      updatedStatusCounts.forEach(updatedStatusCount => {
        fetchedUserStatus.push(updatedStatusCount.userStatus);
        totalUsers += updatedStatusCount.userStatusCount;
      });
      Object.values(DashboardUserStatus).forEach(status => {
        if (!fetchedUserStatus.includes(status)) {
          updatedStatusCounts.push({
            userStatus: status,
            userStatusCount: 0,
          });
        }
      });
      updatedStatusCounts.push({
        userStatus: 'Total',
        userStatusCount: totalUsers,
      });
      // Sort the array by userStatus property in alphabetical order
      updatedStatusCounts.sort((a, b) => {
        const statusA = a.userStatus.toUpperCase(); // Convert to uppercase for case-insensitive comparison
        const statusB = b.userStatus.toUpperCase();

        if (statusA < statusB) {
          return -1;
        }
        if (statusA > statusB) {
          return 1;
        }
        return 0; // If statuses are equal
      });

      setUserStatusCounts(updatedStatusCounts);
    }
    getUserStatusCounts();
  }, [token]);

  return (
    <div className="pageContent">
      <h6>Users per status</h6>
      <div className="row">
        {userStatusCounts.map(userStatusCount => (
          <div
            className="col-md-2 text-center mb-5"
            key={userStatusCount.userStatus}
          >
            {UserStatusCountFormatter(
              userStatusCount.userStatus,
              userStatusCount.userStatusCount
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminUserStatusCounts;
