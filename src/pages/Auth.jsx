import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useAutofill } from '../hooks/useAutofill';
import Toast from '../components/ui/Toast';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [toast, setToast] = useState({ message: '', type: 'success' });
  const emailRef = useRef(null);
  const isEmailAutofilled = useAutofill(emailRef);
  const navigate = useNavigate();
  const { login, register } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = {
      email: formData.get('email'),
      password: formData.get('password'),
      ...(isLogin ? {} : { name: formData.get('name') })
    };

    try {
      if (isLogin) {
        await login(userData);
      } else {
        await register(userData);
      }
      setToast({
        message: `Successfully ${isLogin ? 'logged in' : 'registered'}!`,
        type: 'success'
      });
      setTimeout(() => navigate('/projects'), 1500);
    } catch (error) {
      setToast({
        message: error.response?.data?.message || 'An error occurred',
        type: 'error'
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-primary-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-md w-full space-y-8">
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast({ message: '', type: 'success' })}
        />

        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-primary-800">
            {isLogin ? 'Sign in to your account' : 'Create new account'}
          </h2>
        </motion.div>

        <motion.form
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          className="mt-8 space-y-6"
          onSubmit={handleSubmit}
        >
          {!isLogin && (
            <div>
              <label className="sr-only">Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <FaUser className="text-primary-500" />
                </div>
                <input
                  name="name"
                  type="text"
                  required
                  className="appearance-none rounded-lg relative block w-full pl-10 px-3 py-2 border border-primary-300 placeholder-primary-500 text-primary-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Full name"
                  autoComplete="name"
                />
              </div>
            </div>
          )}

          <div>
            <label className="sr-only">Email address</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <FaEnvelope className={`${isEmailAutofilled ? 'text-primary-700' : 'text-primary-500'}`} />
              </div>
              <input
                ref={emailRef}
                name="email"
                type="email"
                required
                className="appearance-none rounded-lg relative block w-full pl-10 px-3 py-2 border border-primary-300 placeholder-primary-500 text-primary-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                placeholder="Email address"
                autoComplete="email"
              />
            </div>
          </div>

          <div>
            <label className="sr-only">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <FaLock className="text-primary-500" />
              </div>
              <input
                name="password"
                type="password"
                required
                className="appearance-none rounded-lg relative block w-full pl-10 px-3 py-2 border border-primary-300 placeholder-primary-500 text-primary-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                placeholder="Password"
                autoComplete={isLogin ? 'current-password' : 'new-password'}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              {isLogin ? 'Sign in' : 'Sign up'}
            </button>
          </div>

          <div className="text-center">
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-primary-600 hover:text-primary-800"
            >
              {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
            </button>
          </div>
        </motion.form>
      </div>
    </motion.div>
  );
}