export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    ME: '/auth/me'
  },
  PEER_GROUPS: {
    BASE: '/peer-groups',
    JOIN: (id) => `/peer-groups/${id}/join`
  }
};

export const ERROR_MESSAGES = {
  AUTH: {
    LOGIN_FAILED: 'Login failed. Please check your credentials.',
    REGISTER_FAILED: 'Registration failed. Please try again.',
    LOGOUT_FAILED: 'Logout failed. Please try again.',
    SESSION_EXPIRED: 'Your session has expired. Please login again.',
    UNAUTHORIZED: 'Please login to continue.'
  },
  GENERAL: {
    SERVER_ERROR: 'An error occurred. Please try again later.',
    NETWORK_ERROR: 'Unable to connect to server. Please check your internet connection.'
  }
};