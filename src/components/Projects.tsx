import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaGithub, FaExternalLinkAlt, FaChartLine, FaTimes, FaBolt,
  FaCoins, FaImage, FaBuilding, FaLandmark, FaChartBar, FaGamepad, FaLock, FaRocket as FaLaunchpad,
  FaShieldAlt as FaInsurance, FaHdd, FaMagic
} from 'react-icons/fa';
import { projects } from '../data/projects';
import type { Project } from '../types';
import type { IconType } from 'react-icons';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'DeFi', 'NFT', 'Infrastructure', 'Governance', 'Analytics', 'Gaming', 'Security', 'Launchpad', 'Insurance', 'Storage', 'Prediction'] as const;

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter((project: Project) => project.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    const icons: Record<string, IconType> = {
      'DeFi': FaCoins,
      'NFT': FaImage,
      'Infrastructure': FaBuilding,
      'Governance': FaLandmark,
      'Analytics': FaChartBar,
      'Gaming': FaGamepad,
      'Security': FaLock,
      'Launchpad': FaLaunchpad,
      'Insurance': FaInsurance,
      'Storage': FaHdd,
      'Prediction': FaMagic
    };
    const IconComponent = icons[category] || FaBolt;
    return <IconComponent className="text-6xl text-primary-400/20" />;
  };

  const getStatusColor = (status: Project['status']) => {
    return status === 'Live' ? 'text-green-400 bg-green-500/20' : 'text-yellow-400 bg-yellow-500/20';
  };

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-secondary-300 max-w-3xl mx-auto">
            A showcase of 20 sophisticated blockchain projects spanning DeFi protocols, 
            NFT marketplaces, cross-chain solutions, and innovative Web3 applications.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg'
                    : 'glass-effect text-secondary-300 hover:text-white hover:bg-white/20'
                }`}
              >
                <span className="mr-2">{getCategoryIcon(category)}</span>
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project: Project, index: number) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="card group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Image */}
                <div className="relative mb-6 overflow-hidden rounded-lg">
                  <div className="w-full h-48 bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center">
                    {getCategoryIcon(project.category)}
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary-500/20 text-primary-300">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-secondary-300 text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-secondary-800 text-secondary-300 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-secondary-800 text-secondary-300 text-xs rounded">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Impact */}
                  <div className="flex items-center space-x-2 text-sm text-accent-400">
                    <FaChartLine />
                    <span>{project.impact}</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 pt-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 flex items-center justify-center space-x-2 py-2 px-4 glass-effect rounded-lg text-secondary-300 hover:text-white transition-colors"
                    >
                      <FaGithub />
                      <span className="text-sm">Code</span>
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 flex items-center justify-center space-x-2 py-2 px-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg text-white hover:shadow-lg transition-all"
                    >
                      <FaExternalLinkAlt />
                      <span className="text-sm">Demo</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="glass-effect rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {selectedProject.title}
                    </h3>
                    <div className="flex items-center space-x-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(selectedProject.status)}`}>
                        {selectedProject.status}
                      </span>
                      <span className="px-3 py-1 rounded-full text-sm font-semibold bg-primary-500/20 text-primary-300">
                        {selectedProject.category}
                      </span>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedProject(null)}
                    className="text-secondary-400 hover:text-white transition-colors"
                  >
                    <FaTimes size={24} />
                  </motion.button>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-bold text-white mb-3">Description</h4>
                      <p className="text-secondary-300 leading-relaxed">
                        {selectedProject.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-white mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {selectedProject.features.map((feature: string, index: number) => (
                          <li key={index} className="flex items-start text-secondary-300">
                            <span className="text-primary-400 mr-2 mt-1">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-white mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech: string) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-secondary-800 text-secondary-300 text-sm rounded-lg"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-bold text-white mb-3">Impact</h4>
                      <div className="glass-effect rounded-lg p-4">
                        <p className="text-accent-400 font-semibold">
                          {selectedProject.impact}
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-white mb-3">Project Links</h4>
                      <div className="space-y-3">
                        <motion.a
                          href={selectedProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.02 }}
                          className="flex items-center space-x-3 p-4 glass-effect rounded-lg hover:bg-white/10 transition-colors"
                        >
                          <FaGithub className="text-2xl text-secondary-400" />
                          <div>
                            <div className="text-white font-semibold">GitHub Repository</div>
                            <div className="text-secondary-400 text-sm">View source code</div>
                          </div>
                        </motion.a>
                        
                        <motion.a
                          href={selectedProject.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.02 }}
                          className="flex items-center space-x-3 p-4 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-lg hover:from-primary-500/30 hover:to-accent-500/30 transition-all"
                        >
                          <FaExternalLinkAlt className="text-2xl text-primary-400" />
                          <div>
                            <div className="text-white font-semibold">Live Demo</div>
                            <div className="text-secondary-400 text-sm">Try the application</div>
                          </div>
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Interested in Working Together?
            </h3>
            <p className="text-secondary-300 mb-6">
              These projects represent just a fraction of my capabilities. I&apos;m always excited 
              to take on new challenges and build innovative blockchain solutions.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center"
            >
              Let&apos;s Discuss Your Project
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
