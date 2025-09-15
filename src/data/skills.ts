import { 
  FaGem, FaPython, FaRust, FaBuilding, FaFileAlt, FaGasPump, FaExchangeAlt, FaBolt,
  FaGlobe, FaEthereum, FaFish, FaWrench, FaWallet, FaImage, FaCoins, FaLandmark,
  FaNodeJs, FaRocket,  FaChartLine, FaLink,  FaFolder, 
  FaReact, FaVuejs, FaAngular, FaJs, FaPalette, FaTheaterMasks, FaDatabase,
  FaLeaf, FaServer, FaCircle,  FaCloud,  FaDocker,
  FaHammer, FaCandyCane, FaTools, FaShieldAlt,  FaSearch,  FaLock
} from 'react-icons/fa';
import { SkillsData, Experience, Certification } from '../types';

export const skills: SkillsData = {
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
  frontend: [
    { name: "React", level: 98, icon: FaReact },
    { name: "Next.js", level: 95, icon: FaRocket },
    { name: "Vue.js", level: 85, icon: FaVuejs },
    { name: "Angular", level: 80, icon: FaAngular },
    { name: "TypeScript", level: 92, icon: FaJs },
    { name: "Tailwind CSS", level: 95, icon: FaPalette },
    { name: "Framer Motion", level: 88, icon: FaTheaterMasks },
    { name: "Web3 Integration", level: 93, icon: FaDatabase }
  ],
  backend: [
    { name: "Node.js", level: 90, icon: FaNodeJs },
    { name: "Express.js", level: 88, icon: FaServer },
    { name: "GraphQL", level: 85, icon: FaChartLine },
    { name: "PostgreSQL", level: 87, icon: FaDatabase },
    { name: "MongoDB", level: 82, icon: FaLeaf },
    { name: "Redis", level: 80, icon: FaCircle },
    { name: "Docker", level: 85, icon: FaDocker },
    { name: "AWS", level: 83, icon: FaCloud }
  ],
  tools: [
    { name: "Git", level: 95, icon: FaTools },
    { name: "Hardhat", level: 92, icon: FaHammer },
    { name: "Truffle", level: 88, icon: FaCandyCane },
    { name: "Foundry", level: 85, icon: FaShieldAlt },
    { name: "IPFS", level: 87, icon: FaFolder },
    { name: "Chainlink", level: 90, icon: FaLink },
    { name: "The Graph", level: 82, icon: FaSearch },
    { name: "OpenZeppelin", level: 88, icon: FaLock }
  ]
};

export const experience: Experience[] = [
  {
    title: "Senior Blockchain Developer",
    company: "DeFi Innovations Inc.",
    period: "2021 - Present",
    description: "Leading development of cutting-edge DeFi protocols and cross-chain solutions. Responsible for architecture design, smart contract development, and team mentoring.",
    technologies: ["Solidity", "Rust", "React", "Web3.js", "Chainlink"],
    achievements: [
      "Developed 15+ DeFi protocols with $500M+ TVL",
      "Led team of 8 developers",
      "Reduced gas costs by 40% through optimization",
      "Implemented cross-chain bridge handling $50M+ transfers"
    ]
  },
  {
    title: "Blockchain Developer",
    company: "NFT Solutions Ltd.",
    period: "2019 - 2021",
    description: "Specialized in NFT marketplace development and smart contract security. Built scalable solutions for multiple NFT collections and marketplaces.",
    technologies: ["Solidity", "React", "IPFS", "OpenSea API", "Web3.js"],
    achievements: [
      "Built 5+ NFT marketplaces processing $100M+",
      "Implemented lazy minting reducing costs by 60%",
      "Developed royalty distribution system",
      "Created batch operations for gas efficiency"
    ]
  },
  {
    title: "Frontend Developer",
    company: "Web3 Technologies",
    period: "2017 - 2019",
    description: "Started as frontend developer, quickly transitioned to blockchain development. Built user interfaces for various Web3 applications and DApps.",
    technologies: ["React", "JavaScript", "Web3.js", "Solidity", "CSS"],
    achievements: [
      "Built 20+ Web3 interfaces",
      "Learned Solidity and smart contract development",
      "Contributed to open-source Web3 projects",
      "Mentored junior developers"
    ]
  }
];

export const certifications: Certification[] = [
  {
    name: "Certified Ethereum Developer",
    issuer: "Ethereum Foundation",
    year: "2022",
    credential: "CED-2022-001",
    icon: FaGem
  },
  {
    name: "Solidity Expert",
    issuer: "ConsenSys Academy",
    year: "2021",
    credential: "SE-2021-045",
    icon: FaShieldAlt
  },
  {
    name: "DeFi Protocol Specialist",
    issuer: "DeFi Education Fund",
    year: "2021",
    credential: "DPS-2021-023",
    icon: FaCoins
  },
  {
    name: "Smart Contract Security",
    issuer: "OpenZeppelin",
    year: "2020",
    credential: "SCS-2020-078",
    icon: FaLock
  },
  {
    name: "Web3 Development",
    issuer: "Alchemy University",
    year: "2020",
    credential: "W3D-2020-156",
    icon: FaGlobe
  }
];
