import axios from "axios";

const API_URL = 'http://localhost:5000/api/v1/books';

export const getAllBooksHandler = () => {
  return axios.get(API_URL);
}
