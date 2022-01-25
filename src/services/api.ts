import axios from 'axios';

const IP = "192.168.0.108"

const api = axios.create({
  baseURL: `http://${IP}:3333`,
  timeout: 5000
});

export default api;