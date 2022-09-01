import axios from "axios";

export const BASE_URL = "http://localhost:8080";

export const API = axios.create({ baseURL: BASE_URL, timeout: 1000, headers: { "Content-Type": "application/json" } });

API.interceptors.response.use(
  (res) => {
    console.log(res);
    if (res.data.token) {
      localStorage.setItem("token", res.data.token);
    }
    return res;
  },
  (error) => {
    return Promise.reject(error);
  }
);
