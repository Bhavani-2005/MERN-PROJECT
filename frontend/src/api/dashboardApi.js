import axios from "axios";

const API = "http://localhost:5000/api/ecommerce";

export const getDashboardData = async () => {

  const response = await axios.get(
    `${API}/dashboard`
  );

  return response.data;
};