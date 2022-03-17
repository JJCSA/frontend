import axios from 'axios';
import comm from '../helpers/communication';

export const register = (formData) => new Promise((resolve, reject) => {
  comm.sendPost('/users/register', null, {
    jainProof: formData.jainProof,
    profPicture: formData.profPicture,
    newUser: JSON.stringify({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
      mobileNumber: formData.mobileNumber,
      prefMethodOfContact: formData.prefMethodOfContact,
      jainCommunity: formData.jainCommunity,
    }),
  }).then((res) => {
    resolve(res);
  }).catch((err) => {
    console.log(err);
  });
});

export const login = (form) => new Promise((resolve, reject) => {
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
