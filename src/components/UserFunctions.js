import axios from 'axios';
import comm from '../helpers/communication';

export const register = (newUser) => axios
  .post('users/register', {
    first_name: newUser.first_name,
    last_name: newUser.last_name,
    email: newUser.email,
    password: newUser.password,
  })
  .then((response) => {
    console.log('Registered');
  });

export const login = (form) => {
  return new Promise((resolve, reject) => {
    comm.sendPost('/auth/realms/jjcsa-services/protocol/openid-connect/token', null, form, 'KEYCLOAK_BASE_URL').then((res) => {
      console.log(res.data);
      // comm.get('/api/user/profile', res.data.access_token).then((profile) => {
      //   console.log(profile);
      // });
      resolve({
        token: res.data.access_token,
        expiresIn: res.data.expires_in,
        tokenType: 'Bearer',
        authState: {},
        refreshToken: res.data.refresh_token,
        refreshTokenExpireIn: res.data.refresh_expires_in,
      });
    }).catch((err) => {
      console.log(err);
    });
  });
};

export const getProfile = (user) => axios
  .get('users/profile', {
    // headers: { Authorization: ` ${this.getToken()}` }
  })
  .then((response) => {
    console.log(response);
    return response.data;
  })
  .catch((err) => {
    console.log(err);
  });
