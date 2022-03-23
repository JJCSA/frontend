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
  comm.sendPost('/auth/realms/jjcsa-services/protocol/openid-connect/token', null, form, 'KEYCLOAK_BASE_URL').then(async (res) => {
    const profile = await comm.get('/user/profile', res.data.access_token);
    if (profile.data.userStatus === 'NewUser' || profile.data.userStatus === 'NewUser') {
      resolve({
        token: res.data.access_token,
        expiresIn: res.data.expires_in,
        tokenType: res.data.token_type,
        authState: profile.data,
        refreshToken: res.data.refresh_token,
        refreshTokenExpireIn: res.data.refresh_expires_in,
      });
    } else {
      reject(new Error('Profile not active. Please contact admin.'));
    }
  }).catch((err) => {
    reject(err);
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
