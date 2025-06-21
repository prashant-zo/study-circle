import jwt from 'jsonwebtoken';
import { UnauthorizedError } from '../utils/errors.js';

export const protect = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    
    if (!token) {
      throw new UnauthorizedError('Not authorized - no token');
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    next(new UnauthorizedError('Not authorized - invalid token'));
  }
};