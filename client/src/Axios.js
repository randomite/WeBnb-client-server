import axios from 'axios'
import qs from "qs";

const config = {
  baseURL: 'localhost:5000/api/',
  headers: {"Content-Type": "multipart/form-data"},
  paramsSerializer: function (params) {
    return qs.stringify(params, {arrayFormat: 'brackets'})
  }
};

export const instance = axios.create(config);