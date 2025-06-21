import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function Projects() {
  const projects = [
    {
      title: "Tic-Tac-Toe",
      description: "An interactive game built with React, featuring dynamic animations and responsive design.",
      tech: ["React", "Node.js"],
      status: "completed",
      codeLink: "https://github.com/prashant-zo/tic-tac-toe-react-app",
      liveDemoLink: "https://prashant-zo.github.io/tic-tac-toe-react-app/"
    },
    {
      title: "Tech Gadgets Review",
      description: "A website for the latest tech gadget reviews, fully created using ChatGPT.",
      tech: ["HTML", "CSS", "Javascript"],
      status: "ongoing",
      codeLink: "https://github.com/prashant-zo/tech-gadgets-review.github.io",
      liveDemoLink: "https://prashant-zo.github.io/tech-gadgets-review.github.io/"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-primary-50 py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-primary-800 mb-8">Projects</h1>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="flex justify-between items-start">
                <h2 className="text-xl font-semibold text-primary-800">{project.title}</h2>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  project.status === 'ongoing' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
                }`}>
                  {project.status}
                </span>
              </div>
              
              <p className="text-primary-600 mt-2">{project.description}</p>
              
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span key={i} className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="mt-4 flex gap-4">
                <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-primary-600 hover:text-primary-800">
                  <FaGithub className="mr-1" /> View Code
                </a>
                <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-primary-600 hover:text-primary-800">
                  <FaExternalLinkAlt className="mr-1" /> Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
