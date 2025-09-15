import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaEnvelope, FaTelegram, FaDiscord, FaDownload, FaArrowDown, FaRocket, FaGem, FaBolt, FaBitcoin, FaEthereum, FaArrowUp, FaMinus, FaWifi } from 'react-icons/fa';
import { fetchCryptoPrices, getMockCryptoData } from '../services/cryptoApi';
import type { CryptoPrices, MousePosition } from '../types';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [currentText, setCurrentText] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  
  // Crypto prices state
  const [prices, setPrices] = useState<CryptoPrices>({
    bitcoin: { price: 0, change24h: 0, marketCap: 0, volume: 0 },
    ethereum: { price: 0, change24h: 0, marketCap: 0, volume: 0 },
    solana: { price: 0, change24h: 0, marketCap: 0, volume: 0 }
  });
  const [cryptoLoading, setCryptoLoading] = useState<boolean>(true);
  const [cryptoError, setCryptoError] = useState<string | null>(null);
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Crypto prices fetching
  useEffect(() => {
    const fetchPrices = async () => {
      try {
        setCryptoLoading(true);
        setCryptoError(null);
        
        let data: CryptoPrices;
        if (isOnline) {
          try {
            data = await fetchCryptoPrices();
            setLastUpdated(new Date());
          } catch (apiError) {
            // API failed, using mock data
            data = getMockCryptoData();
            setCryptoError('Using cached data - API unavailable');
          }
        } else {
          data = getMockCryptoData();
          setCryptoError('Offline mode - using cached data');
        }
        
        setPrices(data);
      } catch (err) {
        // Error fetching prices
        setCryptoError('Failed to fetch prices');
        setPrices(getMockCryptoData());
      } finally {
        setCryptoLoading(false);
      }
    };

    fetchPrices();
    
    // Update prices every 30 seconds
    const interval = setInterval(fetchPrices, 30000);
    
    return () => clearInterval(interval);
  }, [isOnline]);

  // Monitor online/offline status
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Custom typing animation effect
  useEffect(() => {
    const texts = [
      'Senior Blockchain Developer',
      'Smart Contract Architect',
      'DeFi Protocol Builder',
      'NFT Marketplace Creator',
      'Cross-Chain Solutions Expert',
      'Web3 Innovation Leader'
    ];

    const timeout = setTimeout(() => {
      const current = texts[currentIndex];
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1));
      } else {
        setCurrentText(current.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentIndex]);

  // Crypto utility functions
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(price);
  };

  const getChangeIcon = (change: number) => {
    if (change > 0) return <FaArrowUp className="text-green-400" />;
    if (change < 0) return <FaArrowDown className="text-red-400" />;
    return <FaMinus className="text-gray-400" />;
  };

  const getChangeColor = (change: number) => {
    if (change > 0) return 'text-green-400';
    if (change < 0) return 'text-red-400';
    return 'text-gray-400';
  };

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/moonlight987', label: 'GitHub', color: 'hover:text-gray-400' },
    { icon: FaEnvelope, href: 'mailto:smartec3414@gmail.com', label: 'Gmail', color: 'hover:text-red-400' },
    { icon: FaTelegram, href: 'https://t.me/smartec3414', label: 'Telegram', color: 'hover:text-blue-500' },
    { icon: FaDiscord, href: 'https://discord.com/users/smartec3414', label: 'Discord', color: 'hover:text-indigo-400' }
  ];

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 15 }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-accent-500/20 to-primary-500/20 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * -0.02,
            y: mousePosition.y * -0.02,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 15 }}
        />
        
        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-20 text-primary-400 opacity-60"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <FaBolt size={16} />
        </motion.div>
        <motion.div
          className="absolute top-40 right-32 text-accent-400 opacity-40"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <FaGem size={24} />
        </motion.div>
        <motion.div
          className="absolute bottom-32 left-1/3 text-primary-300 opacity-50"
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <FaRocket size={12} />
        </motion.div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 glass-effect rounded-full text-sm font-medium text-primary-300 mb-4">
                👋 Welcome to my portfolio
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              <span className="text-white">I am </span>
              <span className="gradient-text">M00nlight</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl md:text-2xl text-secondary-300 mb-8 h-16 flex items-center justify-center lg:justify-start"
            >
              <span className="gradient-text">
                {currentText}
                <span className="animate-pulse">|</span>
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg text-secondary-400 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              With 7 years of experience in blockchain development, I specialize in building 
              sophisticated DeFi protocols, NFT marketplaces, and cross-chain solutions that 
              drive real economic value. I challenge myself with cutting-edge technologies 
              every day and am always ready to collaborate on meaningful projects.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToProjects}
                className="btn-primary inline-flex items-center justify-center"
              >
                View My Work
                <FaArrowDown className="ml-2" />
              </motion.a>
              
              <motion.a
                href="mailto:smartec3414@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary inline-flex items-center justify-center"
              >
                <FaDownload className="mr-2" />
                Get In Touch
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex items-center justify-center lg:justify-start space-x-6"
            >
              <span className="text-secondary-500 text-sm">Follow me:</span>
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`text-secondary-400 ${social.color} transition-all duration-300`}
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-effect rounded-2xl p-8 relative z-10"
              >
                <div className="text-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-32 h-32 mx-auto mb-6 relative"
                  >
                    <div className="absolute inset-0 fantastic-gradient rounded-full opacity-30 blur-xl"></div>
                    <div className="w-full h-full fantastic-gradient rounded-full flex items-center justify-center text-white smart-glow">
                      <FaRocket size={48} />
                    </div>
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">Live Crypto Market</h3>
                  <p className="text-secondary-300 mb-6">
                    Real-time cryptocurrency prices and market data
                  </p>
                  
                  {/* Status indicators */}
                  <div className="flex items-center justify-center space-x-4 text-xs mb-4">
                    <div className="flex items-center space-x-1">
                      <FaWifi className={isOnline ? 'text-green-400' : 'text-red-400'} />
                      <span className={isOnline ? 'text-green-400' : 'text-red-400'}>
                        {isOnline ? 'Online' : 'Offline'}
                      </span>
                    </div>
                    {lastUpdated && (
                      <div className="text-gray-400">
                        {lastUpdated.toLocaleTimeString()} last updated
                      </div>
                    )}
                    {cryptoError && (
                      <div className="text-yellow-400 text-xs">
                        {cryptoError}
                      </div>
                    )}
                  </div>

                  {/* Crypto prices grid */}
                  <div className="space-y-3">
                    {/* Bitcoin */}
                    <div className="glass-effect rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="p-2 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500">
                            <FaBitcoin className="text-white text-sm" />
                          </div>
                          <div>
                            <div className="text-white font-semibold text-sm">BTC</div>
                            <div className="text-gray-400 text-xs">Bitcoin</div>
                          </div>
                        </div>
                        <div className="text-right">
                          {cryptoLoading ? (
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-400"></div>
                          ) : (
                            <>
                              <div className="text-white font-semibold text-sm">
                                {formatPrice(prices.bitcoin.price)}
                              </div>
                              <div className={`flex items-center space-x-1 ${getChangeColor(prices.bitcoin.change24h)}`}>
                                {getChangeIcon(prices.bitcoin.change24h)}
                                <span className="text-xs">
                                  {prices.bitcoin.change24h > 0 ? '+' : ''}{prices.bitcoin.change24h.toFixed(2)}%
                                </span>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Ethereum */}
                    <div className="glass-effect rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="p-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500">
                            <FaEthereum className="text-white text-sm" />
                          </div>
                          <div>
                            <div className="text-white font-semibold text-sm">ETH</div>
                            <div className="text-gray-400 text-xs">Ethereum</div>
                          </div>
                        </div>
                        <div className="text-right">
                          {cryptoLoading ? (
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-400"></div>
                          ) : (
                            <>
                              <div className="text-white font-semibold text-sm">
                                {formatPrice(prices.ethereum.price)}
                              </div>
                              <div className={`flex items-center space-x-1 ${getChangeColor(prices.ethereum.change24h)}`}>
                                {getChangeIcon(prices.ethereum.change24h)}
                                <span className="text-xs">
                                  {prices.ethereum.change24h > 0 ? '+' : ''}{prices.ethereum.change24h.toFixed(2)}%
                                </span>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Solana */}
                    <div className="glass-effect rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="p-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500">
                            <FaRocket className="text-white text-sm" />
                          </div>
                          <div>
                            <div className="text-white font-semibold text-sm">SOL</div>
                            <div className="text-gray-400 text-xs">Solana</div>
                          </div>
                        </div>
                        <div className="text-right">
                          {cryptoLoading ? (
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-400"></div>
                          ) : (
                            <>
                              <div className="text-white font-semibold text-sm">
                                {formatPrice(prices.solana.price)}
                              </div>
                              <div className={`flex items-center space-x-1 ${getChangeColor(prices.solana.change24h)}`}>
                                {getChangeIcon(prices.solana.change24h)}
                                <span className="text-xs">
                                  {prices.solana.change24h > 0 ? '+' : ''}{prices.solana.change24h.toFixed(2)}%
                                </span>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-16 h-16 fantastic-gradient rounded-full flex items-center justify-center text-white smart-glow"
              >
                <FaBolt size={20} />
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 w-12 h-12 fantastic-gradient rounded-full flex items-center justify-center text-white smart-glow"
              >
                <FaGem size={16} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center text-secondary-400"
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <FaArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
