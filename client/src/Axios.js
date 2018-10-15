import axios from 'axios'
import Qs from "qs";

const config = {
  baseURL: 'https://safe-journey-90334.herokuapp.com/api',
  // headers: {"Content-Type": "multipart/form-data"},
  transformRequest: [function (data, headers) {
    return Qs.stringify(data);
  }],
};

export const instance = axios.create(config);