import axios from 'axios';
import { ERROR_MESSAGES } from './constants';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // You can add any request preprocessing here
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // Handle unauthorized access
          if (window.location.pathname !== '/login') {
            window.location.href = '/login';
          }
          return Promise.reject(new Error(ERROR_MESSAGES.AUTH.UNAUTHORIZED));
        
        case 403:
          return Promise.reject(new Error(ERROR_MESSAGES.AUTH.SESSION_EXPIRED));
        
        case 500:
          return Promise.reject(new Error(ERROR_MESSAGES.GENERAL.SERVER_ERROR));
        
        default:
          return Promise.reject(error);
      }
    } else if (error.request) {
      return Promise.reject(new Error(ERROR_MESSAGES.GENERAL.NETWORK_ERROR));
    }
    return Promise.reject(error);
  }
);

export default api;