import { ERROR_MESSAGES } from './constants';

export const handleApiError = (error) => {
  if (error.response) {
    // Server responded with error
    return error.response.data.message || ERROR_MESSAGES.GENERAL.SERVER_ERROR;
  } else if (error.request) {
    // Request made but no response
    return ERROR_MESSAGES.GENERAL.NETWORK_ERROR;
  } else {
    // Request setup error
    return error.message || ERROR_MESSAGES.GENERAL.SERVER_ERROR;
  }
};

export const isAuthError = (error) => {
  return error.response?.status === 401 || error.response?.status === 403;
};