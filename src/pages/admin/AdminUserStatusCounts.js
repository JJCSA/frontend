import React, { useState } from 'react';
import { useEffect } from 'react';
import comm from '../../helpers/communication';
import { useAuthHeader } from 'react-auth-kit';
import UserStatusCountFormatter from '../../components/UserStatusCountFormatter/UserStatusCountFormatter';

function AdminUserStatusCounts() {

  const [userStatusCounts, setUserStatusCounts] = useState([]);
  const token = useAuthHeader()();

  useEffect(() => {
    async function getUserStatusCounts() {
      const response = await comm.get('/admin/users/userStatusCount', token, null);
      const temp = response.data;
      console.log(temp);
      setUserStatusCounts(response.data);
    }
    getUserStatusCounts();
  }, []);

  return (
    <div className="pageContainer">
      <div className="pageHeader">
        <h4>Number of Users per Status</h4>
        <div className="row">
          {
            userStatusCounts.map(userStatusCount =>
              <div className="col-md-4 text-center mb-5">
                {UserStatusCountFormatter(userStatusCount.userStatus, userStatusCount.userStatusCount)}

              </div>
            )
          }

        </div>
      </div>
    </div>
  );
}

export default AdminUserStatusCounts;
