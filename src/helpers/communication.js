import axios from 'axios';
import { config } from '../utils/constants';

function getConfig(token = null, params = null, content = 'application/json') {
  const conf = {
    headers: {
      'content-type': content,
      'Access-Control-Allow-Origin': '*',
    },
  };
  if (token) {
    conf.headers.Authorization = `${token}`;
  }
  if (params) {
    conf.params = params;
  }
  return conf;
}

function buildData(data) {
  let formData = null;
  if (data) {
    if (data instanceof HTMLFormElement) formData = new FormData(data);
    else {
      formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((arrVal) => {
            if (['number', 'string'].includes(typeof arrVal)) {
              formData.append(`${key}[]`, arrVal);
            } else {
              formData.append(`${key}[]`, JSON.stringify(arrVal));
            }
          });
        } else {
          formData.append(key, value);
        }
      });
    }
  }
  return formData;
}

function sendFormDataPost(route, token = null, data = null, base = 'API_BASE_URL') {
  const formData = buildData(data);
  if (base === 'API_BASE_URL') {
    return axios.post(config.url[base] + route, formData, getConfig(token, null, 'multipart/form-data'));
  }
  const params = new URLSearchParams();
  Array.from(formData.keys()).forEach((key) => {
    params.append(key, formData.get(key));
  });
  return axios.post(config.url[base] + route, params);
}

function sendPost(route, token = null, data = null, base = 'API_BASE_URL') {
  return axios.post(config.url[base] + route, data, getConfig(token));
}

function sendPut(route, token = null, data = null, base = 'API_BASE_URL') {
  return axios.put(config.url[base] + route, data, getConfig(token));
}

function get(route, token = null, params = null, base = 'API_BASE_URL') {
  return axios.get(config.url[base] + route, getConfig(token, params));
}

function sendDelete(route, token = null, params = null, base = 'API_BASE_URL') {
  return axios.delete(config.url[base] + route, getConfig(token, params));
}

export default {
  sendFormDataPost, get, sendPut, sendPost, sendDelete
};
