import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaBook, FaClipboardList, FaQuestionCircle, FaHeadset } from 'react-icons/fa';

export default function Resources() {
  const resources = [
    {
      title: 'Getting Started',
      description: 'Learn how to use StudyCircle effectively',
      icon: <FaBook className="text-3xl mb-4" />,
      path: '/resources/getting-started'
    },
    {
      title: 'Guidelines',
      description: 'Community guidelines and best practices',
      icon: <FaClipboardList className="text-3xl mb-4" />,
      path: '/resources/guidelines'
    },
    {
      title: 'FAQ',
      description: 'Frequently asked questions',
      icon: <FaQuestionCircle className="text-3xl mb-4" />,
      path: '/resources/faq'
    },
    {
      title: 'Support',
      description: 'Get help when you need it',
      icon: <FaHeadset className="text-3xl mb-4" />,
      path: '/resources/support'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-primary-50 py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-primary-800 mb-8">Resources</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => (
            <Link
              key={index}
              to={resource.path}
              className="block"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center h-full"
              >
                <div className="text-primary-600">
                  {resource.icon}
                </div>
                <h2 className="text-xl font-semibold text-primary-800 mb-2">
                  {resource.title}
                </h2>
                <p className="text-primary-600">
                  {resource.description}
                </p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
}