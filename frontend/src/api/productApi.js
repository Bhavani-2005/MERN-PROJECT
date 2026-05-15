import axios from "axios";

const API = axios.create({
  baseURL: "https://smart-artisan-backend.onrender.com/api/products",
});

export const getProducts = () => API.get("/");

export const createProduct = (data) =>
  API.post("/", data);

export const deleteProduct = (id) =>
  API.delete(`/${id}`);

export const updateProduct = async (id, productData) => {

  const response = await axios.put(
    `https://smart-artisan-backend.onrender.com/api/products/${id}`,
    productData
  );

  return response.data;
};