import axios from "axios";

const API = "https://smart-artisan-backend.onrender.com/api/ecommerce";

export const getDashboardData = async () => {

  const response = await axios.get(
    `${API}/dashboard`
  );

  return response.data;
};