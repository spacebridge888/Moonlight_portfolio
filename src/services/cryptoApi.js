// Crypto API service for fetching real-time cryptocurrency prices
// Using CoinGecko API (free tier) for reliable data

const COINGECKO_API_URL = 'https://api.coingecko.com/api/v3';

export const fetchCryptoPrices = async () => {
  try {
    const response = await fetch(
      `${COINGECKO_API_URL}/simple/price?ids=bitcoin,ethereum,solana&vs_currencies=usd&include_24hr_change=true&include_market_cap=true&include_24hr_vol=true`,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    // Transform the data to our expected format
    return {
      bitcoin: {
        price: data.bitcoin.usd,
        change24h: data.bitcoin.usd_24h_change,
        marketCap: data.bitcoin.usd_market_cap,
        volume: data.bitcoin.usd_24h_vol
      },
      ethereum: {
        price: data.ethereum.usd,
        change24h: data.ethereum.usd_24h_change,
        marketCap: data.ethereum.usd_market_cap,
        volume: data.ethereum.usd_24h_vol
      },
      solana: {
        price: data.solana.usd,
        change24h: data.solana.usd_24h_change,
        marketCap: data.solana.usd_market_cap,
        volume: data.solana.usd_24h_vol
      }
    };
  } catch (error) {
    console.error('Error fetching crypto prices:', error);
    throw error;
  }
};

// Alternative API using CoinMarketCap (requires API key)
export const fetchCryptoPricesCMC = async (apiKey) => {
  try {
    const response = await fetch(
      'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=BTC,ETH,SOL',
      {
        method: 'GET',
        headers: {
          'X-CMC_PRO_API_KEY': apiKey,
          'Accept': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    return {
      bitcoin: {
        price: data.data.BTC.quote.USD.price,
        change24h: data.data.BTC.quote.USD.percent_change_24h,
        marketCap: data.data.BTC.quote.USD.market_cap,
        volume: data.data.BTC.quote.USD.volume_24h
      },
      ethereum: {
        price: data.data.ETH.quote.USD.price,
        change24h: data.data.ETH.quote.USD.percent_change_24h,
        marketCap: data.data.ETH.quote.USD.market_cap,
        volume: data.data.ETH.quote.USD.volume_24h
      },
      solana: {
        price: data.data.SOL.quote.USD.price,
        change24h: data.data.SOL.quote.USD.percent_change_24h,
        marketCap: data.data.SOL.quote.USD.market_cap,
        volume: data.data.SOL.quote.USD.volume_24h
      }
    };
  } catch (error) {
    console.error('Error fetching crypto prices from CMC:', error);
    throw error;
  }
};

// Fallback mock data for development/offline mode
export const getMockCryptoData = () => {
  return {
    bitcoin: {
      price: 43250.67,
      change24h: 2.34,
      marketCap: 847500000000,
      volume: 28500000000
    },
    ethereum: {
      price: 2650.45,
      change24h: -1.23,
      marketCap: 318000000000,
      volume: 15200000000
    },
    solana: {
      price: 98.76,
      change24h: 5.67,
      marketCap: 42000000000,
      volume: 2100000000
    }
  };
};
