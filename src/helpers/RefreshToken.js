import axios from 'axios'
import {useAuthHeader, createRefresh} from 'react-auth-kit'

const refreshApi = createRefresh({
  interval: 10,   // Refreshes the token in every 10 minutes
  refreshApiCallback: (
    {
      authToken,
      authTokenExpireAt,
      refreshToken,
      refreshTokenExpiresAt,
      authUserState
    }) => {
    axios.post('/api/refresh',
      {
        refreshToken: refreshToken,
        oldAuthToken: authToken
      }
    ).then(({data})=>{
      return {
        isSuccess: true,  // For successful network request isSuccess is true
        newAuthToken: data.newAuthToken,
        newAuthTokenExpireIn: data.newAuthTokenExpireIn
        // You can also add new refresh token ad new user state
      }
    }).catch((e)=>{
      console.error(e)
      return{
        isSuccess:false // For unsuccessful network request isSuccess is false
      }
    })
  }
})

export default refreshApi