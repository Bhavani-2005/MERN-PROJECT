import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/products",
});

export const getDashboardData = async () => {

  const response = await API.get("/");

  return response.data;
};