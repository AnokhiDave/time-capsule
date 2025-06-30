import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api',
});

// Attach token automatically if exists
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.authorization = token;
  }
  return req;
});

// ✅ THIS LINE IS ESSENTIAL
export default API;
