import axios from 'axios';
import { config } from '../utils/constants';

function getConfig(token = null, params = null) {
  const conf = {
    headers: {
      'content-type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
  };
  if (params) {
    conf.params = params;
  }
  return conf;
}

function sendPost(route, token = null, data = null, base = 'API_BASE_URL') {
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
  return axios.post(config.url[base] + route, formData, getConfig(token));
}

function get(route, token = null, params = null, base = 'API_BASE_URL') {
  return axios.get(config.url[base] + route, getConfig(token, params));
}

export default {
  sendPost, get,
};
