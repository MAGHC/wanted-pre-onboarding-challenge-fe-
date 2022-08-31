import axios from "axios";

export const BASE_URL = "http://localhost:8080";

// export const AP = {
//   todos: `${BASE_URL}/todos`,
//   auth: `${BASE_URL}/users`,
// };

export const API = axios.create({ baseURL: BASE_URL, timeout: 1000, headers: { "Content-Type": "application/json" } });
