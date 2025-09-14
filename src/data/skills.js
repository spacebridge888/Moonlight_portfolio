import { 
  FaGem, FaPython, FaRust, FaBuilding, FaFileAlt, FaGasPump, FaExchangeAlt, FaBolt,
  FaGlobe, FaEthereum, FaFish, FaWrench, FaWallet, FaImage, FaCoins, FaLandmark,
  FaNodeJs, FaRocket, FaWolfPackBattalion, FaChartLine, FaLink, FaPlug, FaFolder, FaHdd,
  FaReact, FaVuejs, FaAngular, FaJs, FaPalette, FaTheaterMasks, FaDatabase,
  FaLeaf, FaServer, FaCircle, FaFire, FaCloud, FaCloudRain, FaDocker,
  FaHammer, FaCandyCane, FaTools, FaShieldAlt, FaFlask, FaSearch, FaCog, FaLock
} from 'react-icons/fa';

export const skills = {
  blockchain: [
    { name: "Solidity", level: 95, icon: FaGem },
    { name: "Vyper", level: 85, icon: FaPython },
    { name: "Rust (Solana)", level: 90, icon: FaRust },
    { name: "Smart Contract Architecture", level: 95, icon: FaBuilding },
    { name: "ERC Standards", level: 98, icon: FaFileAlt },
    { name: "Gas Optimization", level: 92, icon: FaGasPump },
    { name: "Cross-chain Solutions", level: 88, icon: FaExchangeAlt },
    { name: "Layer 2 (Polygon, Arbitrum)", level: 90, icon: FaBolt }
  ],
  web3: [
    { name: "Web3.js", level: 95, icon: FaGlobe },
    { name: "Ethers.js", level: 92, icon: FaEthereum },
    { name: "@wagmi/core", level: 88, icon: FaFish },
    { name: "Viem", level: 85, icon: FaWrench },
    { name: "Wallet Integration", level: 95, icon: FaWallet },
    { name: "NFT Marketplace", level: 90, icon: FaImage },
    { name: "DeFi Protocols", level: 93, icon: FaCoins },
    { name: "DAO Architecture", level: 87, icon: FaLandmark }
  ],
  backend: [
    { name: "Node.js", level: 95, icon: FaNodeJs },
    { name: "Express.js", level: 92, icon: FaRocket },
    { name: "NestJS", level: 88, icon: FaWolfPackBattalion },
    { name: "GraphQL", level: 85, icon: FaChartLine },
    { name: "RESTful APIs", level: 95, icon: FaLink },
    { name: "WebSocket", level: 90, icon: FaPlug },
    { name: "IPFS", level: 87, icon: FaFolder },
    { name: "Decentralized Storage", level: 85, icon: FaHdd }
  ],
  frontend: [
    { name: "React.js", level: 95, icon: FaReact },
    { name: "Next.js", level: 92, icon: FaReact },
    { name: "Vue.js", level: 85, icon: FaVuejs },
    { name: "Angular", level: 80, icon: FaAngular },
    { name: "TypeScript", level: 93, icon: FaJs },
    { name: "TailwindCSS", level: 90, icon: FaPalette },
    { name: "Material-UI", level: 88, icon: FaTheaterMasks },
    { name: "State Management", level: 90, icon: FaDatabase }
  ],
  databases: [
    { name: "MongoDB", level: 90, icon: FaLeaf },
    { name: "PostgreSQL", level: 88, icon: FaServer },
    { name: "MySQL", level: 85, icon: FaServer },
    { name: "Redis", level: 87, icon: FaCircle },
    { name: "Firebase", level: 82, icon: FaFire },
    { name: "AWS", level: 85, icon: FaCloud },
    { name: "GCP", level: 80, icon: FaCloudRain },
    { name: "Docker & Kubernetes", level: 88, icon: FaDocker }
  ],
  tools: [
    { name: "Hardhat", level: 95, icon: FaHammer },
    { name: "Truffle", level: 90, icon: FaCandyCane },
    { name: "Foundry", level: 85, icon: FaTools },
    { name: "OpenZeppelin", level: 92, icon: FaShieldAlt },
    { name: "Testing Frameworks", level: 90, icon: FaFlask },
    { name: "Etherscan", level: 88, icon: FaSearch },
    { name: "GitHub Actions", level: 85, icon: FaCog },
    { name: "Security Auditing", level: 90, icon: FaLock }
  ]
};

export const experience = [
  {
    period: "2021 - Present",
    title: "Senior Blockchain Developer & Engineer",
    company: "Freelance & Contract",
    description: "Leading blockchain development projects including DeFi protocols, NFT marketplaces, and cross-chain solutions. Specializing in smart contract architecture, security auditing, and gas optimization.",
    achievements: [
      "Developed 55+ production blockchain applications",
      "Managed $500M+ in total value locked across protocols",
      "Led security audits preventing $50M+ in potential losses",
      "Mentored 15+ junior developers in blockchain technologies"
    ]
  },
  {
    period: "2018 - 2021",
    title: "Backend Developer",
    company: "Various Tech Companies",
    description: "Developed scalable backend systems using Node.js, Express, and various databases. Focused on API development, microservices architecture, and cloud deployment.",
    achievements: [
      "Built 50+ RESTful APIs and GraphQL endpoints",
      "Implemented microservices architecture for 10+ projects",
      "Achieved 99.9% uptime for critical production systems",
      "Optimized database performance reducing query time by 70%"
    ]
  },
  {
    period: "2017 - 2018",
    title: "Frontend Developer",
    company: "Web Development Agencies",
    description: "Created responsive web applications using React, Vue.js, and modern CSS frameworks. Focused on user experience and performance optimization.",
    achievements: [
      "Developed 30+ responsive web applications",
      "Improved page load times by 60% through optimization",
      "Implemented modern UI/UX patterns and accessibility standards",
      "Collaborated with design teams to create pixel-perfect interfaces"
    ]
  }
];

export const certifications = [
  {
    name: "Certified Ethereum Developer",
    issuer: "Ethereum Foundation",
    year: "2022",
    credential: "CED-2022-001"
  },
  {
    name: "Blockchain Security Expert",
    issuer: "ConsenSys Academy",
    year: "2021",
    credential: "BSE-2021-045"
  },
  {
    name: "Smart Contract Auditor",
    issuer: "OpenZeppelin",
    year: "2021",
    credential: "SCA-2021-023"
  },
  {
    name: "AWS Solutions Architect",
    issuer: "Amazon Web Services",
    year: "2020",
    credential: "AWS-SAA-2020-789"
  }
];
