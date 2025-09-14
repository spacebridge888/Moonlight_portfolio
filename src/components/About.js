import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaRocket, FaShieldAlt, FaUsers, FaLightbulb, FaTrophy, FaRocket as FaRocketIcon, FaShieldAlt as FaShieldIcon, FaBolt, FaHandshake } from 'react-icons/fa';

const About = () => {
  const stats = [
    { icon: FaCode, number: "55+", label: "Blockchain Projects", color: "text-primary-400" },
    { icon: FaRocket, number: "7", label: "Years Experience", color: "text-accent-400" },
    { icon: FaShieldAlt, number: "500+", label: "Contracts Audited", color: "text-primary-400" },
    { icon: FaUsers, number: "50+", label: "Happy Clients", color: "text-accent-400" },
    { icon: FaLightbulb, number: "$500M+", label: "TVL Managed", color: "text-primary-400" },
    { icon: FaTrophy, number: "99.9%", label: "Uptime Achieved", color: "text-accent-400" }
  ];

  const values = [
    {
      icon: FaRocketIcon,
      title: "Innovation First",
      description: "I constantly explore cutting-edge technologies and implement novel solutions that push the boundaries of what's possible in blockchain development."
    },
    {
      icon: FaShieldIcon,
      title: "Security Focused",
      description: "Every smart contract undergoes rigorous security auditing and testing to ensure the highest standards of protection for user funds and data."
    },
    {
      icon: FaBolt,
      title: "Performance Optimized",
      description: "I specialize in gas optimization and efficient code patterns to deliver cost-effective solutions that maximize value for users."
    },
    {
      icon: FaHandshake,
      title: "Collaborative Approach",
      description: "I believe in transparent communication and active collaboration with clients to ensure project success and exceed expectations."
    }
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-xl text-secondary-300 max-w-3xl mx-auto">
            A passionate blockchain developer with 7 years of experience building 
            sophisticated decentralized applications that drive real economic value.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
                <p className="text-secondary-300 leading-relaxed">
                  Starting as a frontend developer in 2017, I quickly discovered my passion for 
                  blockchain technology. Over the years, I've evolved into a senior blockchain 
                  developer, specializing in DeFi protocols, NFT marketplaces, and cross-chain solutions.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">What Drives Me</h3>
                <p className="text-secondary-300 leading-relaxed">
                  I challenge myself with new technologies every day, striving to develop projects 
                  that are truly meaningful and economically valuable. My goal is to build solutions 
                  that not only work flawlessly but also create lasting impact in the blockchain ecosystem.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">My Approach</h3>
                <p className="text-secondary-300 leading-relaxed">
                  I combine deep technical expertise with a client-focused approach. Every project 
                  is an opportunity to push boundaries, implement best practices, and deliver 
                  exceptional results that exceed expectations.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="card text-center"
              >
                <stat.icon className={`text-3xl ${stat.color} mx-auto mb-3`} />
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                  {stat.number}
                </div>
                <div className="text-secondary-400 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="gradient-text">My Core Values</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="card text-center group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 text-primary-400">
                  <value.icon />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">
                  {value.title}
                </h4>
                <p className="text-secondary-300 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

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
              Ready to Build Something Amazing?
            </h3>
            <p className="text-secondary-300 mb-6">
              I'm always ready to accept client proposals and will actively collaborate with you 
              to ensure project success. Let's discuss how we can bring your blockchain vision to life.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center"
            >
              Start a Conversation
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
