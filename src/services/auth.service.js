import api from '../utils/api';

class AuthService {
  static async login(credentials) {
    const response = await api.post('/auth/login', credentials);
    return response.data;
  }

  static async register(userData) {
    const response = await api.post('/auth/register', userData);
    return response.data;
  }

  static async logout() {
    const response = await api.post('/auth/logout');
    return response.data;
  }

  static async getCurrentUser() {
    const response = await api.get('/auth/me');
    return response.data;
  }
}

export default AuthService;