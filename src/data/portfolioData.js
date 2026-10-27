export const portfolioData = {
  personal: {
    name: "James Clarence D. Cantre",
    shortName: "James",
    title: "BSIT Student (Expected Graduate in 2027)",
    location: "Alaminos, Laguna, Philippines",
    availability: "Available for full-time roles & engineering opportunities",
    bio: "I design and build robust web and mobile applications with an eye for clean architecture, seamless user experience, and scalable backend logic. Experienced in leading full-stack workflows from conceptualization to deployment.",
    about: [
      "I am an Information Technology scholar and developer based in Laguna, Philippines. With hands-on experience spanning modern frontend ecosystems (React, React Native, Vite) and scalable backends (Laravel, Node.js, Express), I bridge the gap between design precision and engineering performance.",
      "Whether developing offline-first cross-platform applications or architecting relational database schemas, I thrive in collaborative problem-solving and rapid adaptation to modern web paradigms."
    ],
    contact: {
      email: "jamesclarencecantre@gmail.com",
      phone: "+63 970 027 6381",
      location: "Alaminos, Laguna, Philippines",
      github: "https://github.com/ertnac",
      linkedin: "https://linkedin.com",
    }
  },

  projects: [
    {
      id: "saulado",
      title: "Saulado",
      subtitle: "Context-Based Active Recall Platform",
      role: "Full Stack Developer",
      year: "2026",
      featured: true,
      category: "Full Stack Monorepo (Web & Mobile)",
      summary: "A context-based active recall study application built with a full-stack monorepo that transforms highlighted notes into fill-in-the-blank questions with zero-latency offline SQLite persistence.",
      points: [
        "Architected a context-preserving cloze deletion engine converting highlighted text into dynamic review challenges.",
        "Engineered offline-first persistence using Expo SQLite, TanStack Query, and PostgreSQL with Prisma ORM.",
        "Developed cross-platform clients using React Native with Nativewind alongside a React 18 web app."
      ],
      techStack: [
        "React Native",
        "Expo",
        "TypeScript",
        "React",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Prisma",
        "SQLite",
        "Tailwind CSS",
        "Zustand"
      ],
      links: {
        github: "https://github.com/ertnac/saulado",
        live: "https://saulado-reviewer.vercel.app/"
      },
      stats: "Monorepo · Offline SQLite"
    },
    {
      id: "mapos-catering",
      title: "Mapos Catering",
      subtitle: "Catering Landing & Online Booking Platform",
      role: "Project Manager & Full Stack Developer",
      year: "2025",
      featured: true,
      category: "Web Landing & Booking Portal",
      summary: "An interactive catering landing and reservation web app enabling clients to browse catering packages, customize event menus, locate venues with Leaflet maps, and generate PDF proposals.",
      points: [
        "Engineered customer-facing catering landing platform with dynamic package selection and menu customization flows.",
        "Integrated interactive Leaflet maps for venue location selection and delivery distance calculations.",
        "Built client proposal generation and automated PDF quote exports using HTML2PDF.js backed by Firebase Firestore."
      ],
      techStack: ["React", "Tailwind CSS", "Firebase Firestore", "Node.js", "Express.js", "Leaflet", "HTML2PDF", "Axios"],
      links: {
        github: "https://github.com/Buttercookiez/Mapo-sCatering",
        live: "https://maposcatering.vercel.app/"
      },
      stats: "Catering Web · Interactive Maps"
    },
    {
      id: "virtu-gallery",
      title: "Virtu Gallery",
      subtitle: "Online Art Marketplace & Curator Platform",
      role: "Project Manager & Full Stack Developer",
      year: "2024",
      featured: true,
      category: "Full Stack Web & Marketplace",
      summary: "A modern fine art marketplace and gallery web application enabling creators to showcase collections, process client orders, interact with art enthusiasts, and manage exhibitions via an intuitive curator dashboard.",
      points: [
        "Architected secure RESTful PHP backend endpoints using PDO prepared statements with hybrid MySQL and SQLite database persistence.",
        "Engineered an administrative curator CMS dashboard for artwork catalog management, follower metrics, and order tracking.",
        "Containerized the multi-service application with Docker and Apache mod_rewrite for production deployment on Render."
      ],
      techStack: ["PHP", "MySQL", "SQLite", "Docker", "JavaScript", "Tailwind CSS", "Apache"],
      links: {
        github: "https://github.com/ertnac/Virtu-Gallery",
        live: "https://virtu-gallery.onrender.com/"
      },
      stats: "PHP & MySQL · Docker Stack"
    }
  ],

  skills: {
    "Languages": ["JavaScript (ES6+)", "TypeScript", "PHP", "C#", "Python"],
    "Frontend": ["React", "React Native", "Expo", "Tailwind CSS", "Nativewind", "Zustand", "Vite"],
    "Backend": ["Node.js", "Express.js", "Laravel", "Prisma"],
    "Databases": ["PostgreSQL", "MySQL", "SQLite", "Firebase Firestore"],
    "DevOps & Tools": ["Docker", "Git", "GitHub", "VS Code", "XAMPP", "Electron"]
  },

  education: [
    {
      degree: "Bachelor of Science in Information Technology",
      institution: "Pamantasan ng Lungsod ng San Pablo",
      period: "2023 - Present",
      status: "In Progress",
      description: "Rigorous coursework focusing on software engineering principles, system analysis and design, database management systems, and algorithms."
    },
    {
      degree: "Science, Technology, Engineering, and Mathematics (STEM)",
      institution: "Buenaventura E. Fandialan Memorial Integrated National High School",
      period: "2021 - 2023",
      status: "Graduated with Honors",
      description: "Focused on advanced mathematics, scientific inquiry, computational logic, and academic excellence."
    }
  ]
};
