import React, { useState } from 'react';

function Profile() {
  const [userInfo] = useState({
    given_name: 'Temp Name',
    family_name: 'Temp Name',
    email: 'temp@email.com',
  });
  return (
    <div className="PROFILE container">
      <div className="jumbotron mt-5">
        <div className="col-sm-8 mx-auto">
          <h1 className="text-center">PROFILE</h1>
        </div>
        <table className="table col-md-6 mx-auto">
          <tbody>
            <tr>
              <td>Fist Name:</td>
              <td>{userInfo.given_name}</td>
            </tr>
            <tr>
              <td>Last Name:</td>
              <td>{userInfo.family_name}</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>{userInfo.email}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Profile;
