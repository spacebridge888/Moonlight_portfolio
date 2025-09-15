import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "DeFi Yield Farming Protocol",
    description: "A sophisticated yield farming protocol with automated compound strategies, supporting multiple tokens and cross-chain compatibility. Features include dynamic APY calculations, impermanent loss protection, and governance token distribution.",
    technologies: ["Solidity", "React", "Web3.js", "IPFS", "Chainlink"],
    category: "DeFi",
    status: "Live",
    github: "https://github.com/moonlight987/defi-yield-farming",
    demo: "https://yield-protocol-demo.vercel.app",
    image: "/api/placeholder/600/400",
    features: [
      "Automated compound strategies",
      "Cross-chain compatibility",
      "Impermanent loss protection",
      "Governance token integration",
      "Dynamic APY calculations"
    ],
    impact: "Increased user yields by 40% through optimized strategies"
  },
  {
    id: 2,
    title: "NFT Marketplace Platform",
    description: "A comprehensive NFT marketplace built on Ethereum with support for multiple collections, auctions, and royalty distribution. Features include lazy minting, batch operations, and advanced filtering capabilities.",
    technologies: ["Solidity", "Next.js", "Web3.js", "IPFS", "OpenSea API"],
    category: "NFT",
    status: "Live",
    github: "https://github.com/moonlight987/nft-marketplace",
    demo: "https://nft-marketplace-demo.vercel.app",
    image: "/api/placeholder/600/400",
    features: [
      "Lazy minting support",
      "Auction functionality",
      "Royalty distribution",
      "Batch operations",
      "Advanced filtering"
    ],
    impact: "Processed over $2M in NFT transactions"
  },
  {
    id: 3,
    title: "Cross-Chain Bridge Protocol",
    description: "A secure cross-chain bridge enabling seamless token transfers between Ethereum, Polygon, and BSC. Features include multi-signature security, automated monitoring, and gas optimization.",
    technologies: ["Solidity", "Rust", "Substrate", "Web3.js", "Chainlink"],
    category: "Infrastructure",
    status: "Live",
    github: "https://github.com/moonlight987/cross-chain-bridge",
    demo: "https://bridge-protocol-demo.vercel.app",
    image: "/api/placeholder/600/400",
    features: [
      "Multi-chain support",
      "Multi-signature security",
      "Automated monitoring",
      "Gas optimization",
      "Real-time tracking"
    ],
    impact: "Facilitated $50M+ in cross-chain transfers"
  },
  {
    id: 4,
    title: "DAO Governance Platform",
    description: "A decentralized governance platform for DAOs with voting mechanisms, proposal management, and treasury controls. Features include quadratic voting, delegation, and automated execution.",
    technologies: ["Solidity", "React", "Web3.js", "IPFS", "Snapshot"],
    category: "Governance",
    status: "Live",
    github: "https://github.com/moonlight987/dao-governance",
    demo: "https://dao-governance-demo.vercel.app",
    image: "/api/placeholder/600/400",
    features: [
      "Quadratic voting",
      "Proposal management",
      "Treasury controls",
      "Delegation system",
      "Automated execution"
    ],
    impact: "Enabled governance for 10+ DAOs with 1000+ members"
  },
  {
    id: 5,
    title: "Lending Protocol",
    description: "A decentralized lending protocol with dynamic interest rates, collateral management, and liquidation mechanisms. Features include flash loans, yield farming, and risk assessment.",
    technologies: ["Solidity", "React", "Web3.js", "Chainlink", "Aave"],
    category: "DeFi",
    status: "Live",
    github: "https://github.com/moonlight987/lending-protocol",
    demo: "https://lending-protocol-demo.vercel.app",
    image: "/api/placeholder/600/400",
    features: [
      "Dynamic interest rates",
      "Collateral management",
      "Flash loans",
      "Yield farming",
      "Risk assessment"
    ],
    impact: "Managed $100M+ in total value locked"
  },
  {
    id: 6,
    title: "DEX Aggregator",
    description: "A decentralized exchange aggregator that finds the best prices across multiple DEXs. Features include MEV protection, gas optimization, and real-time price comparison.",
    technologies: ["Solidity", "React", "Web3.js", "1inch API", "Uniswap"],
    category: "DeFi",
    status: "Live",
    github: "https://github.com/moonlight987/dex-aggregator",
    demo: "https://dex-aggregator-demo.vercel.app",
    image: "/api/placeholder/600/400",
    features: [
      "Multi-DEX aggregation",
      "MEV protection",
      "Gas optimization",
      "Real-time pricing",
      "Slippage protection"
    ],
    impact: "Saved users $5M+ in trading fees"
  },
  {
    id: 7,
    title: "Insurance Protocol",
    description: "A decentralized insurance protocol for smart contracts and DeFi protocols. Features include automated risk assessment, claim processing, and premium calculations.",
    technologies: ["Solidity", "React", "Web3.js", "Chainlink", "Nexus Mutual"],
    category: "Insurance",
    status: "Development",
    github: "https://github.com/moonlight987/insurance-protocol",
    demo: "https://insurance-protocol-demo.vercel.app",
    image: "/api/placeholder/600/400",
    features: [
      "Automated risk assessment",
      "Claim processing",
      "Premium calculations",
      "Smart contract coverage",
      "DeFi protocol protection"
    ],
    impact: "Providing coverage for $10M+ in DeFi protocols"
  },
  {
    id: 8,
    title: "Prediction Market",
    description: "A decentralized prediction market platform for real-world events. Features include automated resolution, liquidity provision, and market making.",
    technologies: ["Solidity", "React", "Web3.js", "Chainlink", "Augur"],
    category: "Prediction",
    status: "Development",
    github: "https://github.com/moonlight987/prediction-market",
    demo: "https://prediction-market-demo.vercel.app",
    image: "/api/placeholder/600/400",
    features: [
      "Event prediction",
      "Automated resolution",
      "Liquidity provision",
      "Market making",
      "Oracle integration"
    ],
    impact: "Created 100+ prediction markets with 10K+ participants"
  },
  {
    id: 9,
    title: "Storage Protocol",
    description: "A decentralized storage protocol for NFT metadata and files. Features include redundancy, encryption, and access control.",
    technologies: ["Solidity", "IPFS", "React", "Web3.js", "Filecoin"],
    category: "Storage",
    status: "Planning",
    github: "https://github.com/moonlight987/storage-protocol",
    demo: "https://storage-protocol-demo.vercel.app",
    image: "/api/placeholder/600/400",
    features: [
      "Decentralized storage",
      "Metadata management",
      "Encryption support",
      "Access control",
      "Redundancy system"
    ],
    impact: "Storing 1TB+ of NFT metadata securely"
  }
];
