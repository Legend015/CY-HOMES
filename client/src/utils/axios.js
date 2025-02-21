// services/axios.js (or utils/axios.js)
import axios from 'axios';

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000',  // Replace with your backend API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
