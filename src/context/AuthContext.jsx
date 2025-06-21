import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import AuthService from '../services/auth.service';
import { ERROR_MESSAGES } from '../utils/constants';
import { handleApiError } from '../utils/errorHandler';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const checkAuthStatus = useCallback(async () => {
    try {
      const userData = await AuthService.getCurrentUser();
      const { _id, name, email } = userData;
      setUser({ id: _id, name, email });
      setError(null);
    } catch (err) {
      setUser(null);
      // Only log error if it's not an unauthorized error
      if (err.response?.status !== 401) {
        console.error('Auth check failed:', handleApiError(err));
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    checkAuthStatus();
  }, [checkAuthStatus]);

  const register = async (userData) => {
    try {
      setLoading(true);
      setError(null);
      const response = await AuthService.register(userData);
      const { _id, name, email } = response;
      setUser({ id: _id, name, email });
      return { success: true };
    } catch (err) {
      const errorMessage = handleApiError(err) || ERROR_MESSAGES.AUTH.REGISTER_FAILED;
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const login = async (credentials) => {
    try {
      setLoading(true);
      setError(null);
      const response = await AuthService.login(credentials);
      const { _id, name, email } = response;
      setUser({ id: _id, name, email });
      return { success: true };
    } catch (err) {
      const errorMessage = handleApiError(err) || ERROR_MESSAGES.AUTH.LOGIN_FAILED;
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await AuthService.logout();
      setUser(null);
      setError(null);
      return { success: true };
    } catch (err) {
      const errorMessage = handleApiError(err) || ERROR_MESSAGES.AUTH.LOGOUT_FAILED;
      setError(errorMessage);
      throw new Error(errorMessage);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-primary-50">
        <div className="text-primary-600">Loading...</div>
      </div>
    );
  }

  const value = {
    user,
    loading,
    error,
    register,
    login,
    logout,
    refreshAuth: checkAuthStatus
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};