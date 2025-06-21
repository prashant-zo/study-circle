import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
import { BadRequestError, UnauthorizedError } from '../utils/errors.js';
import { registerSchema, loginSchema } from '../validators/auth.validator.js';

const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: '30d'
  });
};

export const register = async (req, res, next) => {
  try {
    const validatedData = registerSchema.parse(req.body);
    
    const userExists = await User.findOne({ email: validatedData.email });
    if (userExists) {
      throw new BadRequestError('User already exists');
    }

    const user = await User.create(validatedData);
    const token = generateToken(user._id);

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days
    });

    res.status(201).json({
      id: user._id,
      name: user.name,
      email: user.email
    });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const validatedData = loginSchema.parse(req.body);
    
    const user = await User.findOne({ email: validatedData.email });
    if (!user || !(await user.comparePassword(validatedData.password))) {
      throw new UnauthorizedError('Invalid email or password');
    }

    const token = generateToken(user._id);

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days
    });

    res.json({
      id: user._id,
      name: user.name,
      email: user.email
    });
  } catch (error) {
    next(error);
  }
};

export const logout = (req, res) => {
  res.cookie('token', '', {
    httpOnly: true,
    expires: new Date(0)
  });
  res.status(200).json({ message: 'Logged out successfully' });
};

export const getCurrentUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) {
      throw new UnauthorizedError('User not found');
    }
    res.json(user);
  } catch (error) {
    next(error);
  }
};