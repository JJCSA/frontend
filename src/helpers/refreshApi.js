import { createRefresh } from 'react-auth-kit';
import comm from './communication';

const refreshApi = createRefresh({
  interval: 10, // Refreshs the token in every 10 minutes
  refreshApiCallback: ({ refreshToken }) => {
    const formData = {
      client_id: 'jjcsa',
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    };
    return comm.sendFormDataPost('/auth/realms/jjcsa-services/protocol/openid-connect/token', null, formData, 'KEYCLOAK_BASE_URL').then(({ data }) => ({
      isSuccess: true, // For successful network request isSuccess is true
      newAuthToken: data.access_token,
      newAuthTokenExpireIn: data.expires_in,
      newRefreshToken: data.refresh_token,
      newRefreshTokenExpiresIn: data.refresh_expires_in,
    })).catch(() => {
      window.location.reload();
      return {
        isSuccess: false, // For unsuccessful network request isSuccess is false
      };
    });
  },
});

export default refreshApi;
