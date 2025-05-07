import axios from "axios";

const instance = axios.create({
  baseURL: "https://localhost:44317/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true,
});

export default instance;
