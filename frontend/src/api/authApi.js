import axios from "axios";

const API = axios.create({
  baseURL: "https://smart-artisan-backend.onrender.com/api/auth",
});

export const registerUser = (userData) =>
  API.post("/register", userData);

export const loginUser = (userData) =>
  API.post("/login", userData);