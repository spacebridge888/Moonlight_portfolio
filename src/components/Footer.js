import { motion } from 'framer-motion';
import { FaGithub, FaEnvelope, FaTelegram, FaDiscord, FaHeart, FaArrowUp, FaRocket, FaGem } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/moonlight987', label: 'GitHub' },
    { icon: FaEnvelope, href: 'mailto:smartec3414@gmail.com', label: 'Gmail' },
    { icon: FaTelegram, href: 'https://t.me/smartec3414', label: 'Telegram' },
    { icon: FaDiscord, href: 'https://discord.com/users/smartec3414', label: 'Discord' }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-transparent to-secondary-900/50">
      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 z-40"
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </motion.button>

      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">M</span>
                </div>
                <span className="text-2xl font-bold gradient-text">Moonlight987</span>
              </div>
              
              <p className="text-secondary-300 mb-6 max-w-md leading-relaxed">
                Senior Blockchain Developer with 7 years of experience building 
                sophisticated DeFi protocols, NFT marketplaces, and cross-chain solutions 
                that drive real economic value.
              </p>

              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 glass-effect rounded-lg flex items-center justify-center text-secondary-400 hover:text-primary-400 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <motion.button
                      onClick={() => scrollToSection(link.href)}
                      whileHover={{ x: 5 }}
                      className="text-secondary-300 hover:text-primary-400 transition-colors duration-300 text-left"
                    >
                      {link.name}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold text-white mb-4">Get In Touch</h3>
              <div className="space-y-3">
                <div>
                  <a
                    href="mailto:smartec3414@gmail.com"
                    className="text-secondary-300 hover:text-primary-400 transition-colors duration-300"
                  >
                    smartec3414@gmail.com
                  </a>
                </div>
                <div>
                  <a
                    href="https://github.com/moonlight987"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-300 hover:text-primary-400 transition-colors duration-300"
                  >
                    github.com/moonlight987
                  </a>
                </div>
                <div>
                  <a
                    href="https://t.me/smartec3414"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-300 hover:text-primary-400 transition-colors duration-300"
                  >
                    @smartec3414
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="py-6 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-secondary-400 text-sm">
              © {new Date().getFullYear()} Moonlight987. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-2 text-secondary-400 text-sm">
              <span>Made with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-red-400"
              >
                <FaHeart />
              </motion.span>
              <span>for the blockchain community</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-accent-500/10 to-primary-500/10 rounded-full blur-3xl"></div>
        
        {/* Floating Icons */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 360, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-20 text-primary-400/20"
        >
          <FaRocket size={32} />
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -360, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-20 text-accent-400/20"
        >
          <FaGem size={24} />
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
