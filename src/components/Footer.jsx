import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-primary-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">StudyCircle</h3>
            <p className="text-primary-200">Connecting students through collaborative learning and project development.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary-200 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-primary-200 hover:text-white">Projects</a></li>
              <li><a href="#" className="text-primary-200 hover:text-white">Peer Groups</a></li>
              <li><a href="#" className="text-primary-200 hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary-200 hover:text-white">Documentation</a></li>
              <li><a href="#" className="text-primary-200 hover:text-white">Guidelines</a></li>
              <li><a href="#" className="text-primary-200 hover:text-white">FAQ</a></li>
              <li><a href="#" className="text-primary-200 hover:text-white">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="" className="text-primary-200 hover:text-white">
                <FaGithub className="text-2xl" />
              </a>
              <a href="#" className="text-primary-200 hover:text-white">
                <FaTwitter className="text-2xl" />
              </a>
              <a href="#" className="text-primary-200 hover:text-white">
                <FaLinkedin className="text-2xl" />
              </a>
              <a href="#" className="text-primary-200 hover:text-white">
                <FaEnvelope className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-700 mt-8 pt-8 text-center text-primary-200">
          <p>&copy; {new Date().getFullYear()} StudyCircle. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}