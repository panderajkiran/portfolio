export type Project = {
  slug: "habit-tracker" | "smart-energy" | "jyos-collection" | "jaaju-restaurant" | "jaaju-restaurent" | "deadlock-simulator" | "weather";
  index: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  features: string[];
  liveUrl: string;
  tone: "amber" | "ink" | "mist";
  image?: string;
};

export const projects: Project[] = [
  {
    slug: "habit-tracker",
    index: "01",
    title: "Habit Tracker",
    category: "Full-stack product",
    description:
      "A full-stack application built to log, track, and visualize daily habits with progress analytics.",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Node.js"],
    features: ["Authentication", "Habit management", "Progress tracking", "Charts", "Persistent data"],
    liveUrl: "https://habbit-tracker.kiranpande.site",
    tone: "amber",
    image: "/habitTrackerbg.jpg",
  },
  {
    slug: "smart-energy",
    index: "02",
    title: "Smart Energy Consumption",
    category: "Data-driven dashboard",
    description:
      "A data dashboard that analyzes energy usage from CSV files and identifies peak wastage patterns.",
    technologies: ["Next.js", "TypeScript", "Tailwind", "Node.js", "Express", "Python"],
    features: ["Data upload", "Peak usage detection", "Charts", "Threshold analysis", "AI insights"],
    liveUrl: "https://smart-energy-consumption.kiranpande.site",
    tone: "ink",
    image: "/smartEnergyBG.jpg",
  },
  {
    slug: "jyos-collection",
    index: "03",
    title: "Jyo's Collection",
    category: "Jewellery Showcase",
    description:
      "A showcase website built to present a curated jewellery collection with refined editorial UI/UX.",
    technologies: ["React", "Next.js", "Tailwind CSS", "JavaScript", "UI/UX Strategy"],
    features: [
      "Curated jewellery catalog & visual storytelling",
      "Editorial typography & high-fashion product layout",
      "Strategic brand presentation & user flow",
      "Fluid responsive interactions & mobile-first UX",
      "Live production deployment on Vercel",
    ],
    liveUrl: "https://jos-collection.vercel.app/",
    tone: "mist",
    image: "/josCollectionBG.jpg",
  },
  {
    slug: "jaaju-restaurant",
    index: "04",
    title: "Jaaju Restaurant",
    category: "Hospitality & Dining",
    description:
      "A client website built to showcase a restaurant's dining spaces, interiors, and bar menu.",
    technologies: ["React", "Next.js", "Tailwind CSS", "JavaScript", "Responsive Design"],
    features: [
      "Immersive restaurant interior & dining atmosphere showcase",
      "Curated food & beverages bar menu presentation",
      "Modern hospitality branding & visual storytelling",
      "Fluid mobile-first navigation for visiting diners",
      "Live production deployment on Vercel",
    ],
    liveUrl: "https://jaaju-restaurent.vercel.app/",
    tone: "amber",
    image: "/jaajuRestBG.jpg",
  },
  {
    slug: "deadlock-simulator",
    index: "05",
    title: "Deadlock Simulator",
    category: "Educational OS Tool",
    description:
      "An educational tool built to visualize OS deadlock scenarios and resource graphs for intuitive learning.",
    technologies: ["React", "JavaScript", "HTML5", "CSS3", "Algorithms"],
    features: [
      "Interactive resource allocation graph (RAG) visualization",
      "Dynamic process & resource allocation state modeling",
      "Step-by-step deadlock detection & circular wait tracing",
      "Intuitive simulation controls for operating system concepts",
      "Live production deployment on custom domain",
    ],
    liveUrl: "https://deadlock-simulator.kiranpande.site/",
    tone: "ink",
    image: "/deadlock.jpg",
  },
];

export type ToolkitItem = {
  name: string;
  category: "Frontend" | "Backend" | "Database" | "Tools";
  emoji: string;
  tagline: string;
  role: string;
  highlight?: boolean;
  synergy: string[];
};

export const toolkitItems: ToolkitItem[] = [
  // Frontend
  {
    name: "Next.js",
    category: "Frontend",
    emoji: "▲",
    tagline: "React Production Framework",
    role: "App router, SSR, caching & production static generation",
    highlight: true,
    synergy: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    name: "React",
    category: "Frontend",
    emoji: "⚛️",
    tagline: "Component Architecture",
    role: "Composable component trees, hooks & reactive interfaces",
    highlight: true,
    synergy: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    name: "TypeScript",
    category: "Frontend",
    emoji: "🔷",
    tagline: "Type-Safe Systems",
    role: "Zero-runtime overhead strict typings & refactor safety",
    highlight: true,
    synergy: ["React", "Next.js", "Node.js", "Prisma"],
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    emoji: "🌊",
    tagline: "Modern Design Tokens",
    role: "Rapid utility styling, custom themes & responsive design",
    highlight: true,
    synergy: ["React", "Next.js"],
  },
  {
    name: "JavaScript",
    category: "Frontend",
    emoji: "⚡",
    tagline: "Core Web Engine",
    role: "Modern ES6+ syntax, asynchronous event loops & DOM APIs",
    highlight: false,
    synergy: ["HTML5", "CSS3", "Node.js"],
  },
  {
    name: "HTML5",
    category: "Frontend",
    emoji: "🌐",
    tagline: "Semantic Structure",
    role: "Accessible document architecture, ARIA & SEO foundations",
    highlight: false,
    synergy: ["CSS3", "JavaScript"],
  },
  {
    name: "CSS3",
    category: "Frontend",
    emoji: "🎨",
    tagline: "Visual Styling & Motion",
    role: "Custom layouts, keyframe animations & responsive fluid design",
    highlight: false,
    synergy: ["HTML5", "Tailwind CSS"],
  },

  // Backend
  {
    name: "Node.js",
    category: "Backend",
    emoji: "🟢",
    tagline: "Server-side Runtime",
    role: "Event-driven architecture, REST services & API endpoints",
    highlight: true,
    synergy: ["Express.js", "PostgreSQL", "TypeScript"],
  },
  {
    name: "Express.js",
    category: "Backend",
    emoji: "🚂",
    tagline: "API Framework",
    role: "Middleware chains, routing & backend service orchestration",
    highlight: false,
    synergy: ["Node.js", "PostgreSQL", "Postman"],
  },
  {
    name: "Python",
    category: "Backend",
    emoji: "🐍",
    tagline: "Data & Automation",
    role: "Data analysis, data structures, scripting & automation",
    highlight: false,
    synergy: ["PostgreSQL", "VS Code"],
  },

  // Database
  {
    name: "PostgreSQL",
    category: "Database",
    emoji: "🐘",
    tagline: "Relational Workhorse",
    role: "ACID compliance, relational integrity & optimized queries",
    highlight: true,
    synergy: ["Prisma", "Node.js", "TypeScript"],
  },
  {
    name: "Prisma",
    category: "Database",
    emoji: "💎",
    tagline: "Type-Safe ORM",
    role: "Declarative modeling, migrations & automatic TypeScript types",
    highlight: true,
    synergy: ["PostgreSQL", "Next.js", "TypeScript"],
  },
  {
    name: "MySQL",
    category: "Database",
    emoji: "🐬",
    tagline: "Structured Database",
    role: "Relational storage, table schemas & reliable data pipelines",
    highlight: false,
    synergy: ["Node.js", "Express.js"],
  },

  // Tools
  {
    name: "Git",
    category: "Tools",
    emoji: "🌿",
    tagline: "Version Control",
    role: "Atomic commits, branch isolation & clean commit history",
    highlight: true,
    synergy: ["GitHub", "VS Code"],
  },
  {
    name: "GitHub",
    category: "Tools",
    emoji: "🐙",
    tagline: "Code Collaboration",
    role: "Remote repository hosting, PR reviews & CI/CD workflows",
    highlight: true,
    synergy: ["Git", "VS Code"],
  },
  {
    name: "VS Code",
    category: "Tools",
    emoji: "💻",
    tagline: "Development Environment",
    role: "Fast development, customized keybindings & TypeScript tooling",
    highlight: true,
    synergy: ["Git", "TypeScript"],
  },
  {
    name: "Postman",
    category: "Tools",
    emoji: "🚀",
    tagline: "API Development & Test",
    role: "Endpoint inspection, contract testing & HTTP debug flows",
    highlight: false,
    synergy: ["Express.js", "Node.js"],
  },
  {
    name: "Canva",
    category: "Tools",
    emoji: "✨",
    tagline: "Visual Design & Assets",
    role: "Wireframe prototyping, social creatives & visual layouts",
    highlight: false,
    synergy: ["Tailwind CSS", "HTML5"],
  },
];

export const skillGroups = [
  { title: "Frontend", skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"] },
  { title: "Backend", skills: ["Node.js", "Express.js", "Python"] },
  { title: "Database", skills: ["MySQL", "PostgreSQL", "Prisma"] },
  { title: "Tools", skills: ["Git", "GitHub", "VS Code", "Postman", "Canva"] },
];

export type EducationItem = {
  degree: string;
  institution: string;
  location: string;
  period: string;
  score: string;
  status?: string;
  description: string;
  details?: string[];
};

export const educationHistory: EducationItem[] = [
  {
    degree: "B.Tech — Data Science",
    institution: "Gokaraju Rangaraju Institute of Engineering and Technology",
    location: "Hyderabad, Telangana",
    period: "2025 – 2028",
    score: "CGPA: 8.2",
    status: "Currently Pursuing",
    description:
      "Bachelor of Technology in Data Science with a focus on machine learning, full-stack development, and data engineering.",
    details: [
      "Core: Data Structures, DBMS, Machine Learning, Web Technologies, Statistics",
      "Actively engaged in project-based building, hackathons, and student tech volunteering",
    ],
  },
  {
    degree: "Diploma — Computer Science Engineering",
    institution: "Government Polytechnic College",
    location: "Nizamabad, Telangana",
    period: "2022 – 2025",
    score: "89% (Distinction)",
    description:
      "Three-year diploma building a rigorous foundation in programming, software fundamentals, and networking.",
    details: [
      "Core: C Programming, Data Structures, Networking, OOP with Java",
      "Developed an interactive chatbot mini-project; graduated with distinction",
    ],
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Sri Vijaya Sai High School",
    location: "Telangana",
    period: "Completed 2020",
    score: "95%",
    description:
      "Completed schooling with outstanding academic performance, demonstrating early aptitude for mathematics and science.",
  },
];

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location?: string;
  description: string;
  highlights: string[];
};

export const workExperience: ExperienceItem[] = [
  {
    role: "UI/UX Intern",
    company: "Lumix",
    period: "2026",
    location: "Hyderabad / Remote",
    description:
      "Worked on interface design, component ergonomics, and user-centered digital product workflows.",
    highlights: [
      "Designed clean, responsive interface components and visual hierarchy",
      "Created structured wireframes, prototypes, and user interaction flows",
      "Collaborated closely to bridge design thinking with frontend code",
    ],
  },
];

export type CertificateItem = {
  title: string;
  issuer: string;
  date?: string;
  description: string;
  link?: string;
};

export const certificates: CertificateItem[] = [
  {
    title: "Full Stack Web Development",
    issuer: "Udemy",
    date: "Verified",
    description: "Modern frontend architecture, backend APIs, databases, and production deployment.",
    link: "http://ude.my/UC-fadaa3a8-efbc-4235-8278-b42b6a081cdf",
  },
  {
    title: "Programming in JavaScript",
    issuer: "Meta • Coursera",
    date: "Verified",
    description: "Core JavaScript fundamentals, ES6+ syntax, asynchronous runtime, and unit testing.",
    link: "https://www.coursera.org/account/accomplishments/certificate/TBQ3C8DK4LDE",
  },
  {
    title: "Git and GitHub Version Control",
    issuer: "IBM • Coursera",
    date: "Verified",
    description: "Distributed version control, branching models, pull requests, and Git workflows.",
    link: "https://www.coursera.org/account/accomplishments/certificate/S9NTCW97B3LF",
  },
  {
    title: "Certificate & Achievement",
    issuer: "Credential",
    date: "Slot Ready",
    description: "Reserved slot ready for your next verified certification or technical award.",
  },
];

export const technologies = ["Next.js", "React", "TypeScript", "Node.js", "Python", "PostgreSQL", "Tailwind", "GitHub"];
