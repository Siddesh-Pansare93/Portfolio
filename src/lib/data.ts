export const PORTFOLIO_DATA = {
    personal: {
        name: "Siddesh Pansare",
        email: "siddeshpansare207@gmail.com",
        phone: "+91 8779200752",
        linkedin: "https://linkedin.com/in/siddeshpansare93",
        github: "https://github.com/Siddesh-Pansare93",
    },
    stats: [
        { label: "Repos", value: "48+" },
        { label: "Daily Users", value: "1,000+" },
        { label: "CGPA", value: "9.0" }
    ],
    experience: [
        {
            id: 1,
            role: "Kstars Technology LLP",
            period: "Jan 2026–Present",
            tech: "Flutter · Clean Architecture · SOLID · React · PWA",
            highlights: [
                "Leading multi-platform Flutter app with Clean Architecture and SOLID principles across iOS and Android.",
                "Optimized React web app performance -achieved 20% reduction in load time through code splitting and lazy loading.",
                "Built and shipped PWA version, improving accessibility and offline engagement."
            ],
            current: true
        },
        {
            id: 2,
            role: "DevionX Technologies",
            period: "Jun 2025–Dec 2025",
            tech: "Redis · BullMQ · Gemini API · OCR · EasyOCR · Node.js",
            highlights: [
                "Built real-time stock alert service using Redis pub/sub, BullMQ job queues, and Gemini API for automated polling.",
                "Developed multi-vendor e-commerce platform (web + mobile) with modular, scalable architecture.",
                "Implemented OCR-based Aadhaar masking system using EasyOCR for secure government ID processing.",
                "Collaborated on SaaS dashboards for internal tools and client-facing analytics."
            ],
            current: false
        }
    ],
    projects: [
        {
            id: 1,
            title: "Anonymous Chat Platform",
            badge: "PRODUCTION · 1,000+ DAU",
            tech: "WebRTC / Socket.io / Node.js / Express / Stripe / MongoDB",
            description: "Real-time anonymous video and text chat built on WebRTC and Socket.io. Stripe payments, sub-100ms latency, high concurrency backend -1000+ users connected daily.",
            featured: true,
            github: "https://github.com/Siddesh-Pansare93",
            link: "#"
        },
        {
            id: 2,
            title: "DeFi Portfolio Management Agents ⚡",
            badge: "AI AGENTS · BLOCKCHAIN",
            tech: "TypeScript / Solidity / LangChain / AI Agents",
            description: "Autonomous AI agents managing DeFi portfolios on-chain. TypeScript agents + Solidity smart contracts. LangChain orchestration. Claude-integrated architecture.",
            featured: false,
            isWide: true,
            github: "https://github.com/Siddesh-Pansare93"
        },
        {
            id: 3,
            title: "Skill Vultures",
            badge: "EDTECH · FULLSTACK",
            tech: "MERN / Redux / AWS / Docker",
            description: "Full-stack EdTech platform with interactive learning modules, live video sessions, and real-time assessments. Built with MERN stack, Redux, deployed on AWS.",
            featured: false,
            github: "https://github.com/Siddesh-Pansare93",
            link: "#"
        },
        {
            id: 4,
            title: "SmartBite",
            badge: "AI · MOBILE",
            tech: "React Native / Node.js / OpenAI API",
            description: "React Native nutrition tracker with OpenAI API integration. Analyzes eating patterns and delivers personalized meal recommendations. Modular architecture with API caching.",
            featured: false,
            github: "https://github.com/Siddesh-Pansare93"
        },
        {
            id: 5,
            title: "Kisaan-Sarthi",
            badge: "AGRITECH · ML PIPELINE",
            tech: "TypeScript / Python / Jupyter",
            description: "AI-powered agricultural assistant for Indian farmers. Full-stack TypeScript app with Python ML pipeline. Jupyter-based data analysis for crop yield prediction.",
            featured: false,
            isWide: true,
            github: "https://github.com/Siddesh-Pansare93",
            link: "#"
        }
    ],
    skills: [
        {
            category: "Languages",
            tags: "TypeScript · JavaScript · Python · Dart · Solidity · Move · C++ · C",
            badge: "TypeScript-first",
            isHighlighted: false
        },
        {
            category: "Frontend",
            tags: "React.js · Next.js · React Native · Flutter · Tailwind CSS · Framer Motion",
            badge: null,
            isHighlighted: false
        },
        {
            category: "Backend & APIs",
            tags: "Node.js · Express.js · REST · WebSockets · BullMQ · Redis",
            badge: null,
            isHighlighted: false
        },
        {
            category: "AI & Agents",
            tags: "LangChain · OpenAI API · Gemini API · MCP Protocol · AI Agents · RAG",
            badge: "AI-Native",
            isHighlighted: true
        },
        {
            category: "Databases",
            tags: "MongoDB · PostgreSQL · Firebase · MySQL",
            badge: null,
            isHighlighted: false
        },
        {
            category: "Cloud & DevOps",
            tags: "AWS · Docker · VPS · Vercel · CI/CD · Git",
            badge: null,
            isHighlighted: false
        },
        {
            category: "Blockchain",
            tags: "Solidity · Aptos Move · Smart Contracts · DeFi · EVM · Web3.js",
            badge: "Honours specialization",
            isHighlighted: false
        },
        {
            category: "Architecture",
            tags: "Clean Architecture · SOLID · Microservices · MVC · REST API Design",
            badge: null,
            isHighlighted: false
        }
    ]
};
