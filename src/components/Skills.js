import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCode, FaRocket, FaShieldAlt, FaUsers, FaLightbulb, FaTrophy, FaRocket as FaRocketIcon, FaShieldAlt as FaShieldIcon, FaBolt, FaHandshake, FaGem, FaGlobe, FaCog, FaPalette, FaCloud, FaTools } from 'react-icons/fa';
import { skills, experience, certifications } from '../data/skills';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('blockchain');

  const categories = [
    { key: 'blockchain', label: 'Blockchain & Smart Contracts', icon: FaGem },
    { key: 'web3', label: 'Web3 & DApp Development', icon: FaGlobe },
    { key: 'backend', label: 'Backend & APIs', icon: FaCog },
    { key: 'frontend', label: 'Frontend Development', icon: FaPalette },
    { key: 'databases', label: 'Databases & Cloud', icon: FaCloud },
    { key: 'tools', label: 'Blockchain Tools & Testing', icon: FaTools }
  ];

  const getSkillLevel = (level) => {
    if (level >= 90) return 'Expert';
    if (level >= 80) return 'Advanced';
    if (level >= 70) return 'Intermediate';
    return 'Beginner';
  };

  const getSkillColor = (level) => {
    if (level >= 90) return 'from-green-400 to-emerald-500';
    if (level >= 80) return 'from-blue-400 to-cyan-500';
    if (level >= 70) return 'from-yellow-400 to-orange-500';
    return 'from-gray-400 to-gray-500';
  };

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-xl text-secondary-300 max-w-3xl mx-auto">
            A comprehensive skill set spanning 7 years of blockchain development, 
            from smart contract architecture to full-stack DApp development.
          </p>
        </motion.div>

        {/* Skills Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <motion.button
                key={category.key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.key)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category.key
                    ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg'
                    : 'glass-effect text-secondary-300 hover:text-white hover:bg-white/20'
                }`}
              >
                <category.icon className="mr-2 inline-block" />
                {category.label}
              </motion.button>
            ))}
          </div>

          {/* Skills Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {skills[activeCategory].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="card group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <skill.icon className="text-2xl text-primary-400" />
                      <span className="font-semibold text-white">{skill.name}</span>
                    </div>
                    <span className="text-sm text-secondary-400">
                      {getSkillLevel(skill.level)}
                    </span>
                  </div>
                  
                  <div className="w-full bg-secondary-800 rounded-full h-2 mb-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className={`h-2 rounded-full bg-gradient-to-r ${getSkillColor(skill.level)}`}
                    />
                  </div>
                  
                  <div className="text-right text-sm text-secondary-400">
                    {skill.level}%
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="gradient-text">Professional Experience</span>
          </h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-accent-500"></div>
            
            <div className="space-y-12">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.period}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative flex items-start space-x-8"
                >
                  {/* Timeline Dot */}
                  <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="card">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-white mb-1">{exp.title}</h4>
                          <p className="text-primary-400 font-medium">{exp.company}</p>
                        </div>
                        <span className="text-accent-400 font-semibold text-sm bg-accent-500/20 px-3 py-1 rounded-full">
                          {exp.period}
                        </span>
                      </div>
                      
                      <p className="text-secondary-300 mb-4 leading-relaxed">
                        {exp.description}
                      </p>
                      
                      <div className="space-y-2">
                        <h5 className="font-semibold text-white">Key Achievements:</h5>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-secondary-300 text-sm flex items-start">
                              <span className="text-primary-400 mr-2">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="gradient-text">Certifications & Credentials</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="card text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FaTrophy className="text-white text-2xl" />
                </div>
                
                <h4 className="font-bold text-white mb-2 text-sm">
                  {cert.name}
                </h4>
                
                <p className="text-primary-400 text-xs mb-2">
                  {cert.issuer}
                </p>
                
                <div className="text-accent-400 text-xs font-semibold">
                  {cert.year}
                </div>
                
                <div className="text-secondary-500 text-xs mt-2">
                  {cert.credential}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
