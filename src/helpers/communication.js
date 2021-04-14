import axios from 'axios';

function getConfig(params = null) {
  const config = {
    headers: {
      'content-type': 'multipart/form-data',
    },
  };
  if (params) {
    config.params = params;
  }
  return config;
}

function sendPost(route, data = null) {
  let formData = null;
  if (data) {
    if (data instanceof HTMLFormElement) formData = new FormData(data);
    else {
      formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((arrVal) => {
            formData.append(`${key}[]`, arrVal);
          });
        } else {
          formData.append(key, value);
        }
      });
    }
  }
  return axios.post(process.env.REACT_APP_SERVER_ROOT + route, formData, getConfig());
}

function get(route, params = null) {
  return axios.get(process.env.REACT_APP_SERVER_ROOT + route, getConfig(params));
}

export default {
  sendPost, get,
};
