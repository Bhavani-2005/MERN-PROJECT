import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/products",
});

export const getProducts = () => API.get("/");

export const createProduct = (data) =>
  API.post("/", data);

export const deleteProduct = (id) =>
  API.delete(`/${id}`);

export const updateProduct = async (id, productData) => {

  const response = await axios.put(
    `http://localhost:5000/api/products/${id}`,
    productData
  );

  return response.data;
};