import profileImg from "../assets/profile.jpg";
import resumePdf from "../assets/rahulresume.pdf";
import portfolioproject1 from "../assets/portfolioproject1.png";
import Hotelproject from "../assets/Hotelproject.jpg";
import Electricityproject from "../assets/Electricityproject.png";
import Bankproject from "../assets/Bankproject.png";
import foodproject from "../assets/foodproject.jpeg";
import chatapp from "../assets/chatapp.png";
import Todoproject from "../assets/Todoproject.png";
import manoj from "../assets/manoj.jpg";
import coordinator from "../assets/coordinator.png";
import abhay from "../assets/abhay.png";

export const personalData = {
  name: "Rahul Kumar Sah",
  monogram: "RS",
  role: "Java Backend & Spring Boot Developer",
  location: "Delhi, India",
  phone: "+91 6202381698",
  timezone: "Asia/Kolkata (UTC+5:30)",
  availability: "Available for full-time roles & internships",
  headline: "Building reliable backend systems and AI-powered applications with Java & Spring Boot.",
  bio: [
    "Computer Science Engineering student (2022–2026) with hands-on experience in Java, Spring Boot, REST APIs, Spring AI, and MySQL.",
    "Strong foundation in backend development, system design, object-oriented programming, and practical AI integrations (Google Gemini, Ollama). Seeking Java / Spring Boot Developer opportunities to build reliable, high-performance software solutions."
  ],
  resumeUrl: resumePdf,
  contact: {
    email: "rahulsah8227@gmail.com",
    phone: "+91 6202381698",
    github: "https://github.com/Rahulsah33",
    linkedin: "https://www.linkedin.com/in/rahul-sah-r33/",
    website: "https://rahulsah.tech",
    instagram: "https://www.instagram.com/rahulsah.33/",
  },
  profileImage: profileImg,
  telemetry: {
    coreLanguage: "Java / C",
    primaryFramework: "Spring Boot / Spring AI",
    database: "MySQL / MongoDB",
    activeStatus: "Open to Work",
  },
};

export const skillsData = {
  categories: [
    {
      name: "Backend Development",
      icon: "Server",
      description: "Enterprise Java backend services, security, persistence, and RESTful architectures.",
      skills: [
        { name: "Spring Boot", level: "Advanced", tag: "Framework" },
        { name: "Spring AI", level: "Advanced", tag: "AI Layer" },
        { name: "Spring Security", level: "Advanced", tag: "Security" },
        { name: "REST APIs", level: "Advanced", tag: "Architecture" },
        { name: "Hibernate", level: "Advanced", tag: "ORM" },
        { name: "Spring Data JPA", level: "Advanced", tag: "Persistence" },
        { name: "JWT Authentication", level: "Advanced", tag: "Auth" },
      ],
    },
    {
      name: "AI Integrations",
      icon: "Sparkles",
      description: "Generative AI, local model orchestration, and structured tool calling.",
      skills: [
        { name: "Google Gemini", level: "Advanced", tag: "Cloud LLM" },
        { name: "Ollama (Local LLM)", level: "Advanced", tag: "Local AI" },
        { name: "AI Tool Calling", level: "Advanced", tag: "Function Call" },
        { name: "Prompt Engineering", level: "Intermediate", tag: "LLM" },
      ],
    },
    {
      name: "Languages",
      icon: "Code2",
      description: "Core programming languages for backend services and foundational computing.",
      skills: [
        { name: "Java (Core & OOP)", level: "Advanced", tag: "Primary" },
        { name: "C", level: "Intermediate", tag: "Systems" },
        { name: "SQL", level: "Advanced", tag: "Database" },
        { name: "JavaScript (ES6+)", level: "Intermediate", tag: "Web" },
      ],
    },
    {
      name: "Databases",
      icon: "Database",
      description: "Relational and document storage engines with ACID compliance and indexing.",
      skills: [
        { name: "MySQL", level: "Advanced", tag: "RDBMS" },
        { name: "MongoDB", level: "Intermediate", tag: "NoSQL" },
        { name: "JDBC", level: "Advanced", tag: "Data Access" },
        { name: "Query Optimization", level: "Advanced", tag: "Performance" },
      ],
    },
    {
      name: "System Design",
      icon: "Cpu",
      description: "High-level & low-level architecture, design patterns, and SOLID principles.",
      skills: [
        { name: "HLD & LLD", level: "Advanced", tag: "Architecture" },
        { name: "REST API Design", level: "Advanced", tag: "Contracts" },
        { name: "Monolithic Architecture", level: "Advanced", tag: "Structure" },
        { name: "Layered Architecture", level: "Advanced", tag: "Separation" },
        { name: "SOLID Principles", level: "Advanced", tag: "Design" },
        { name: "Design Patterns", level: "Advanced", tag: "OOP" },
      ],
    },
    {
      name: "Frontend",
      icon: "Layout",
      description: "Modern responsive web applications, component architecture, and styling.",
      skills: [
        { name: "React (Vite)", level: "Advanced", tag: "Library" },
        { name: "HTML5", level: "Advanced", tag: "Markup" },
        { name: "CSS3", level: "Advanced", tag: "Styling" },
        { name: "Tailwind CSS", level: "Advanced", tag: "Utility" },
        { name: "Bootstrap", level: "Advanced", tag: "Responsive" },
      ],
    },
    {
      name: "Tools & DevOps",
      icon: "Wrench",
      description: "Version control, containerization, API testing, and deployment platforms.",
      skills: [
        { name: "Git", level: "Advanced", tag: "VCS" },
        { name: "GitHub", level: "Advanced", tag: "Collaboration" },
        { name: "Maven", level: "Advanced", tag: "Build Tool" },
        { name: "Postman", level: "Advanced", tag: "API Testing" },
        { name: "Docker", level: "Intermediate", tag: "Containers" },
        { name: "Render", level: "Intermediate", tag: "Cloud" },
        { name: "Vercel", level: "Advanced", tag: "Deployment" },
        { name: "Claude Code", level: "Advanced", tag: "AI Workflow" },
      ],
    },
  ],
  marquee: [
    "Java",
    "Spring Boot",
    "Spring AI",
    "Google Gemini",
    "Ollama",
    "Spring Security",
    "JWT Authentication",
    "REST APIs",
    "Hibernate",
    "MySQL",
    "MongoDB",
    "Docker",
    "React",
    "Tailwind CSS",
    "System Design",
    "Postman",
    "Git",
    "Maven",
    "Claude Code",
  ],
};

export const projectsData = [
  {
    id: "ai-helpdesk-chatbot",
    title: "AI-Powered Help Desk Chatbot",
    category: "Full Stack",
    tagline: "Full-stack AI IT support assistant integrating Spring AI with Google Gemini and Ollama.",
    image: chatapp,
    tags: ["Spring Boot", "Spring AI", "Google Gemini", "React", "MySQL"],
    github: "https://github.com/Rahulsah33/Chatbot_HelpDesk",
    live: null,
    metrics: "Persistent conversation memory",
    overview: "Built a full-stack AI help desk assistant integrating Spring AI with Google Gemini and Ollama for conversational IT support, troubleshooting, and intelligent inquiry routing.",
    architecture: {
      problem: "Traditional IT help desks suffer from slow response times and repetitive manual triage for common system issues.",
      solution: "Engineered a Spring AI backend connecting to Google Gemini and Ollama with persistent session-based conversation memory and a real-time React chat interface.",
      highlights: [
        "Integrated Spring AI with Google Gemini & local Ollama models",
        "Implemented persistent conversation memory with unique session IDs for multi-turn context",
        "Responsive React (Vite) frontend with real-time chat UI and MySQL persistence",
      ],
    },
  },
  {
    id: "ai-travel-agent",
    title: "AI Travel Agent",
    category: "Full Stack",
    tagline: "AI travel assistant using Spring AI and dynamic LLM tool calling for flight, bus, and hotel booking.",
    image: foodproject,
    tags: ["Spring Boot", "Spring AI", "Gemini", "Ollama", "Tool Calling"],
    github: "https://github.com/Rahulsah33/Ai_Travel_Agent",
    live: null,
    metrics: "Dynamic AI Tool Calling",
    overview: "Constructed an AI-powered travel assistant using Spring Boot and Spring AI to help users search and manage flights, buses, hotels, and live itinerary data.",
    architecture: {
      problem: "Static booking forms require complex manual filtering across multiple transport modes.",
      solution: "Implemented AI function/tool calling in Spring AI that translates natural language travel prompts into structured backend service queries.",
      highlights: [
        "Dynamic tool calling mapping natural language to booking APIs",
        "Multi-modal travel support (flights, buses, hotel management)",
        "Unified Spring Boot architecture supporting Gemini and Ollama LLMs",
      ],
    },
  },
  {
    id: "real-time-chat",
    title: "Real-Time Chat Application",
    category: "Full Stack",
    tagline: "Low-latency instant messaging application built on Spring Boot and WebSocket protocols.",
    image: chatapp,
    tags: ["Spring Boot", "WebSocket", "React", "REST API"],
    github: "https://github.com/Rahulsah33/Real-Time-Chat-Application",
    live: null,
    metrics: "Low-latency bidirectional sockets",
    overview: "Built a real-time messaging application enabling instant two-way communication between users with dynamic UI updates.",
    architecture: {
      problem: "Standard HTTP polling introduces latency and unnecessary network overhead for live chats.",
      solution: "Implemented WebSocket-based architecture for low-latency, bidirectional data exchange between Spring Boot and React.",
      highlights: [
        "WebSocket-based architecture for real-time duplex data transfer",
        "Instant two-way communication with dynamic room synchronization",
        "Decoupled React client handling live socket event streams",
      ],
    },
  },
  {
    id: "hotel-management",
    title: "Hotel Management System",
    category: "Java Desktop",
    tagline: "Role-based desktop management software covering room booking, billing, and staff records.",
    image: Hotelproject,
    tags: ["Java Swing", "MySQL", "JDBC", "AWT"],
    github: "https://github.com/Rahulsah33/Hotel-Management-system",
    live: null,
    metrics: "End-to-end CRUD via JDBC",
    overview: "Developed role-based hotel management software covering room booking, customer records, billing, and staff management using Java Swing and JDBC.",
    architecture: {
      problem: "Manual hospitality logs cause booking overlaps and invoice miscalculations.",
      solution: "Built an event-driven desktop interface backed by a relational MySQL database with normalized schemas and transactional safety.",
      highlights: [
        "Role-based desktop UI designed with Java Swing & AWT",
        "Performed end-to-end CRUD operations using JDBC",
        "Automated room status tracking and invoice calculations",
      ],
    },
  },
  {
    id: "electricity-billing",
    title: "Electricity Meter Billing System",
    category: "Java Desktop",
    tagline: "Utility consumption management calculating tiered tariff rates and generating invoices.",
    image: Electricityproject,
    tags: ["Java", "Swing", "AWT", "MySQL", "JDBC"],
    github: "https://github.com/Rahulsah33/Electricity-Meter-Billing-System",
    live: null,
    metrics: "Tiered tariff engine",
    overview: "Software solution that models customer power consumption, maps units consumed to tiered tariff slabs, and generates itemized billing statements.",
    architecture: {
      problem: "Multi-tier unit tariffs make manual utility bill calculations error-prone.",
      solution: "Engineered a deterministic Java calculation engine with parameterized JDBC queries.",
      highlights: [
        "Configurable multi-tier tariff calculation engine",
        "Customer search and bill history tracking",
        "Printable invoice formatting",
      ],
    },
  },
  {
    id: "bank-management",
    title: "Bank Management System",
    category: "Java Desktop",
    tagline: "Transactional banking simulator supporting deposits, withdrawals, PIN authentication & statements.",
    image: Bankproject,
    tags: ["Java", "Swing", "AWT", "MySQL", "JDBC"],
    github: "https://github.com/Rahulsah33/Bank-Management-System",
    live: null,
    metrics: "Atomic balance transactions",
    overview: "A secure banking simulation application allowing users to open accounts, perform PIN-protected ATM-like transactions, and inspect mini-statements.",
    architecture: {
      problem: "Banking workflows require strict transactional guarantees where balances must remain consistent.",
      solution: "Implemented transactional JDBC operations with balance validation and PIN verification.",
      highlights: [
        "Account creation with automated card and PIN generation",
        "Transaction mini-statement generator",
        "Atomic balance checks before approval",
      ],
    },
  },
  {
    id: "developer-portfolio",
    title: "Personal 3D Developer Portfolio",
    category: "Frontend",
    tagline: "Interactive 3D blueprint portfolio with Three.js server core, Card3D tilt & single-source data.",
    image: portfolioproject1,
    tags: ["React 19", "Three.js", "Vite", "Tailwind CSS v4"],
    github: "https://github.com/Rahulsah33/Personal-Portfolio",
    live: "https://rahulsah.tech",
    metrics: "60 FPS 3D & 100% WCAG AA",
    overview: "The portfolio you are browsing right now. Re-engineered as a high-precision blueprint experience featuring interactive Three.js components, card 3D tilt physics, and single-source content architecture.",
    architecture: {
      problem: "Generic developer portfolios fail to highlight real engineering depth and technical craft.",
      solution: "Designed an interactive 3D technical blueprint layout showcasing Java backend architectures, Spring AI projects, and modular React components.",
      highlights: [
        "Interactive 3D Three.js blueprint core with real-time cursor parallax",
        "Single-source data file (`content.js`) for decoupled content management",
        "Full WCAG AA contrast compliance and dark/light mode persistence",
      ],
    },
  },
];

export const experienceData = [
  {
    period: "2024 — Present",
    role: "Java & Spring AI Developer",
    organization: "Independent Projects & Architectural Practice",
    location: "Remote / Delhi",
    badge: "Current Focus",
    type: "Project Engineering",
    description:
      "Engineering full-stack and backend systems using Java, Spring Boot, and Spring AI. Integrating LLMs (Google Gemini, Ollama), designing RESTful APIs, and implementing database persistence with MySQL and MongoDB.",
    technologies: ["Java", "Spring Boot", "Spring AI", "Google Gemini", "REST APIs", "MySQL", "MongoDB", "Docker"],
  },
  {
    period: "2024",
    role: "Java Programming Intern",
    organization: "Codsoft Virtual Internship",
    location: "Remote",
    badge: "Completed",
    type: "Internship",
    description:
      "Completed hands-on software development tasks emphasizing core object-oriented principles, exception handling, data persistence, and multi-component CRUD application development.",
    technologies: ["Core Java", "OOP Design", "Advanced Java", "JDBC", "SQL"],
  },
  {
    period: "2023",
    role: "Academic Project Backend Developer",
    organization: "JB Institute of Technology",
    location: "India",
    badge: "Academic",
    type: "Team Project",
    description:
      "Collaborated in a developer team to design and build backend services for student record management. Architected database schemas and verified endpoints using Postman.",
    technologies: ["Java", "Spring Boot", "MySQL", "Postman", "Git"],
  },
  {
    period: "2022 — 2023",
    role: "Foundational Software & Web Learner",
    organization: "Self-Directed Learning",
    location: "Delhi, India",
    badge: "Foundation",
    type: "Skill Building",
    description:
      "Mastered foundational computing principles, algorithmic problem solving in Java, relational querying with JDBC, and modern HTML/CSS/JavaScript web fundamentals.",
    technologies: ["Java", "C", "JDBC", "HTML5", "CSS3", "JavaScript"],
  },
];

export const educationData = [
  {
    period: "2022 — 2026",
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science & Engineering",
    institute: "JB Institute of Technology",
    location: "India",
    grade: "Pursuing",
    keySubjects: [
      "Data Structures & Algorithms",
      "Database Management Systems (DBMS)",
      "Object-Oriented Programming (Java)",
      "Operating Systems",
      "Computer Networks",
      "Software Engineering",
    ],
    highlights: "Focusing on backend systems, Spring Boot micro-architectures, and practical AI integrations.",
  },
  {
    period: "-2021",
    degree: "Higher Secondary Education (XII)",
    field: "Science Stream",
    institute: "National Infotech Secondary School",
    location: "Completed",
    grade: "Completed",
    keySubjects: ["Mathematics", "Physics", "Chemistry", "Computer Science"],
    highlights: "Built quantitative analytical skills and algorithmic fundamentals.",
  },
];

export const certificationsData = [
  {
    name: "Advanced Java Programming",
    issuer: "Technical Certification",
    focus: "OOP, Concurrency, JDBC & Advanced Architectures",
  },
  {
    name: "Full Stack Training",
    issuer: "Professional Training",
    focus: "Spring Boot, REST APIs, React & Database Integration",
  },
];

export const testimonialsData = [
  {
    id: 1,
    quote:
      "Rahul demonstrates exceptional curiosity and discipline for backend engineering. His focus on understanding how Java handles memory, database connections, and clean architecture is remarkable.",
    author: "Manoj Kumar Chaudhary",
    title: "HOD & Professor",
    organization: "Computer Science Department, JBIT",
    avatar: manoj,
  },
  {
    id: 2,
    quote:
      "Rahul has consistently exhibited strong fundamentals in object-oriented programming and Spring Boot. He writes structured, maintainable code and approaches engineering problems with diligence.",
    author: "Dr. Farhad Aalam",
    title: "Academic Coordinator & Professor",
    organization: "Computer Science Department, JBIT",
    avatar: coordinator,
  },
  {
    id: 3,
    quote:
      "Collaborating with Rahul on our project was seamless. He took ownership of backend design, kept our API contracts clear, and always ensured database queries were optimized.",
    author: "Abhay Yadav",
    title: "Project Teammate & Peer",
    organization: "B.Tech CSE, JBIT",
    avatar: abhay,
  },
];
