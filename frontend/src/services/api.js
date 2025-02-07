import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const jobService = {
  getJobs: async (limit = null) => {
    const url = limit ? `/api/jobs?_limit=${limit}` : '/api/jobs';
    const response = await api.get(url);
    return response.data;
  },

  getJob: async (id) => {
    const response = await api.get(`/api/jobs/${id}`);
    return response.data;
  },

  createJob: async (jobData) => {
    const response = await api.post('/api/jobs', jobData);
    return response.data;
  },

  updateJob: async (id, jobData) => {
    const response = await api.put(`/api/jobs/${id}`, jobData);
    return response.data;
  },

  deleteJob: async (id) => {
    const response = await api.delete(`/api/jobs/${id}`);
    return response.data;
  }
};

// Add interceptor for error handling
api.interceptors.response.use(
  response => response,
  error => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

export default api;
