import axios from "axios";

const API =
  "http://localhost:5000/api/documents";

export const getDocuments =
  () => axios.get(API);

export const uploadDocument =
  (data) =>
    axios.post(API, data);