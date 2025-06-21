import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaProjectDiagram, FaUsers, FaSignInAlt } from 'react-icons/fa';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-white shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-primary-600">StudyCircle</span>
            </Link>
          </div>
          
          <div className="flex space-x-8">
            <Link to="/" className="flex items-center text-primary-600 hover:text-primary-800">
              <FaHome className="mr-1" /> Home
            </Link>
            <Link to="/projects" className="flex items-center text-primary-600 hover:text-primary-800">
              <FaProjectDiagram className="mr-1" /> Projects
            </Link>
            <Link to="/peer-groups" className="flex items-center text-primary-600 hover:text-primary-800">
              <FaUsers className="mr-1" /> Peer Groups
            </Link>
            <Link to="/login" className="flex items-center text-primary-600 hover:text-primary-800">
              <FaSignInAlt className="mr-1" /> Login
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}