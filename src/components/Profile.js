import React, { useState } from 'react';
import Loader from '../helpers/Loader';

function Profile() {
  const [userInfo] = useState(null);
  // if (!userInfo) {
  //   if (keycloak.userInfo) {
  //     setUserInfo(keycloak.userInfo);
  //   } else {
  //     keycloak.loadUserInfo().then((user) => setUserInfo(user));
  //   }
  //   return <Loader />;
  // }
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
