import axios from 'axios'
import Qs from "qs";

const config = {
  baseURL: process.env.REACT_APP_API_URL,
  // headers: {"Content-Type": "multipart/form-data"},
  transformRequest: [function (data, headers) {
    return Qs.stringify(data);
  }],
};

export const instance = axios.create(config);