import axios from "axios";

const API_URL = 'http://localhost:5000/api/v1/books';

export const createBookHandler = (data) => {
  return axios.post(API_URL, data);
}

export const getAllBooksHandler = () => {
  return axios.get(API_URL);
}

export const getBookHandler = (id) => {
  return axios.get(`${API_URL}/${id}`);
}

export const editBookHandler = (id, data) => {
  return axios.put(`${API_URL}/${id}`, data);
}

export const deleteBookHandler = (id) => {
  return axios.delete(`${API_URL}/${id}`);
}