import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBitcoin, FaEthereum, FaRocket, FaArrowUp, FaArrowDown, FaMinus, FaChartLine, FaCoins, FaWifi } from 'react-icons/fa';
import { fetchCryptoPrices, getMockCryptoData } from '../services/cryptoApi';

const CryptoPrices = () => {
  const [prices, setPrices] = useState({
    bitcoin: { price: 0, change24h: 0, marketCap: 0, volume: 0 },
    ethereum: { price: 0, change24h: 0, marketCap: 0, volume: 0 },
    solana: { price: 0, change24h: 0, marketCap: 0, volume: 0 }
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [lastUpdated, setLastUpdated] = useState(null);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        setLoading(true);
        setError(null);
        
        let data;
        if (isOnline) {
          try {
            data = await fetchCryptoPrices();
            setLastUpdated(new Date());
          } catch (apiError) {
            // API failed, using mock data
            data = getMockCryptoData();
            setError('Using cached data - API unavailable');
          }
        } else {
          data = getMockCryptoData();
          setError('Offline mode - using cached data');
        }
        
        setPrices(data);
      } catch (err) {
        // Error fetching prices
        setError('Failed to fetch prices');
        setPrices(getMockCryptoData());
      } finally {
        setLoading(false);
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

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(price);
  };

  const formatMarketCap = (marketCap) => {
    if (marketCap >= 1e12) return `$${(marketCap / 1e12).toFixed(2)}T`;
    if (marketCap >= 1e9) return `$${(marketCap / 1e9).toFixed(2)}B`;
    if (marketCap >= 1e6) return `$${(marketCap / 1e6).toFixed(2)}M`;
    return `$${marketCap.toLocaleString()}`;
  };

  const formatVolume = (volume) => {
    if (volume >= 1e9) return `$${(volume / 1e9).toFixed(2)}B`;
    if (volume >= 1e6) return `$${(volume / 1e6).toFixed(2)}M`;
    return `$${volume.toLocaleString()}`;
  };

  const getChangeIcon = (change) => {
    if (change > 0) return <FaArrowUp className="text-green-400" />;
    if (change < 0) return <FaArrowDown className="text-red-400" />;
    return <FaMinus className="text-gray-400" />;
  };

  const getChangeColor = (change) => {
    if (change > 0) return 'text-green-400';
    if (change < 0) return 'text-red-400';
    return 'text-gray-400';
  };

  const cryptoData = [
    {
      name: 'Bitcoin',
      symbol: 'BTC',
      icon: FaBitcoin,
      data: prices.bitcoin,
      color: 'from-orange-500 to-yellow-500'
    },
    {
      name: 'Ethereum',
      symbol: 'ETH',
      icon: FaEthereum,
      data: prices.ethereum,
      color: 'from-blue-500 to-purple-500'
    },
    {
      name: 'Solana',
      symbol: 'SOL',
      icon: FaRocket,
      data: prices.solana,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  if (error && !prices.bitcoin.price) {
    return (
      <div className="crypto-prices-container py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaCoins className="mx-auto text-6xl text-primary-400/20 mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">Crypto Market Status</h2>
            <p className="text-gray-400">Unable to load current prices</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="crypto-prices-container py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <FaCoins className="mx-auto text-6xl text-primary-400/20 mb-4" />
          <h2 className="text-4xl font-bold gradient-text mb-4">
            Live Crypto Prices
          </h2>
          <p className="text-gray-400 text-lg mb-4">
            Real-time cryptocurrency market data
          </p>
          
          {/* Status indicators */}
          <div className="flex items-center justify-center space-x-4 text-sm">
            <div className="flex items-center space-x-2">
              <FaWifi className={isOnline ? 'text-green-400' : 'text-red-400'} />
              <span className={isOnline ? 'text-green-400' : 'text-red-400'}>
                {isOnline ? 'Online' : 'Offline'}
              </span>
            </div>
            
            {lastUpdated && (
              <div className="text-gray-400">
                Last updated: {lastUpdated.toLocaleTimeString()}
              </div>
            )}
            
            {error && (
              <div className="text-yellow-400 text-xs">
                {error}
              </div>
            )}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cryptoData.map((crypto, index) => (
            <motion.div
              key={crypto.symbol}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-effect p-6 rounded-2xl hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${crypto.color}`}>
                    <crypto.icon className="text-white text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{crypto.name}</h3>
                    <p className="text-gray-400 text-sm">{crypto.symbol}</p>
                  </div>
                </div>
                {loading ? (
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary-400"></div>
                ) : (
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">
                      {formatPrice(crypto.data.price)}
                    </div>
                    <div className={`flex items-center space-x-1 ${getChangeColor(crypto.data.change24h)}`}>
                      {getChangeIcon(crypto.data.change24h)}
                      <span className="text-sm font-medium">
                        {crypto.data.change24h > 0 ? '+' : ''}{crypto.data.change24h.toFixed(2)}%
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Market Cap</span>
                  <span className="text-white font-medium">
                    {formatMarketCap(crypto.data.marketCap)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">24h Volume</span>
                  <span className="text-white font-medium">
                    {formatVolume(crypto.data.volume)}
                  </span>
                </div>
              </div>

              {/* Price trend indicator */}
              <div className="mt-4 pt-4 border-t border-gray-700">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">24h Trend</span>
                  <div className="flex items-center space-x-2">
                    <FaChartLine className={`text-sm ${getChangeColor(crypto.data.change24h)}`} />
                    <span className={`text-sm font-medium ${getChangeColor(crypto.data.change24h)}`}>
                      {crypto.data.change24h > 0 ? 'Bullish' : crypto.data.change24h < 0 ? 'Bearish' : 'Neutral'}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Market Status Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="glass-effect p-6 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-4">Market Overview</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-400">
                  {cryptoData.filter(c => c.data.change24h > 0).length}
                </div>
                <div className="text-gray-400 text-sm">Gaining</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400">
                  {cryptoData.filter(c => c.data.change24h < 0).length}
                </div>
                <div className="text-gray-400 text-sm">Declining</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-400">
                  {cryptoData.filter(c => c.data.change24h === 0).length}
                </div>
                <div className="text-gray-400 text-sm">Stable</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CryptoPrices;
