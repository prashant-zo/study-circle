import { motion } from 'framer-motion';

export default function Support() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-primary-50 py-12"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-primary-800 mb-8">Support</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-primary-700 mb-4">Contact Us</h2>
          <p className="text-primary-600 mb-4">
            Need help? Contact our support team at:{' '}
            <a
              href="mailto:prashantkd010@gmail.com"
              className="text-primary-700 hover:text-primary-800 underline"
            >
              prashantkd010@gmail.com
            </a>
          </p>
          <p className="text-primary-600">
            We typically respond within 24 hours during business days.
          </p>
        </div>
      </div>
    </motion.div>
  );
}