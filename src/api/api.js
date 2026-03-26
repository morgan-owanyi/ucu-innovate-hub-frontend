/*import axios from 'axios';

const API_BASE_URL = 'https://backend-ucu-hub-1.onrender.com/api/';

export const getProjects = () => axios.get(`${API_BASE_URL}projects/`);
export const getProject = (id) => axios.get(`${API_BASE_URL}projects/${id}/`);
export const createProject = (data) => axios.post(`${API_BASE_URL}projects/`, data);
// Add more endpoints as needed */


import axios from 'axios';

const API = axios.create({
  baseURL: 'https://backend-ucu-hub-1.onrender.com/api/'

});

// Register
export const registerUser = (data) => API.post('register/', data);

// Login (we’ll use later)
export const loginUser = (data) => API.post('login/', data);