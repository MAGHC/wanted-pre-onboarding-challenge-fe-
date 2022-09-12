import axios from "axios";

export const BASE_URL = "http://localhost:8080";

const getToken = () => {
  const data = localStorage.getItem("token");
  if (data) {
    return data;
  }
  return false;
};

const token = getToken();

export const API = axios.create({ baseURL: BASE_URL, timeout: 1000, headers: { "Content-Type": "application/json", Authorization: token } });

API.interceptors.response.use(
  (res) => {
    if (res.data.token) {
      localStorage.setItem("token", res.data.token);
    }
    return res;
  },
  (error) => {
    return Promise.reject(error);
  }
);
