export const portfolioData = {
  personal: {
    name: "James Clarence Cantre",
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
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    }
  },

  projects: [
    {
      id: "saulado",
      title: "Saulado",
      subtitle: "Active Recall Study Platform",
      role: "Full Stack Developer",
      year: "2026",
      featured: true,
      category: "Mobile & Web App",
      summary: "A cross-platform study platform built for web and mobile that transforms notes into fill-in-the-blank questions to accelerate learning with zero-latency offline support.",
      points: [
        "Architected an NLP-inspired paragraph processor that converts raw text into dynamic fill-in-the-blank review challenges.",
        "Engineered offline-first persistence allowing seamless review and session syncing without active internet connectivity.",
        "Designed a responsive, distraction-free interface using React Native and Nativewind with rapid cross-platform builds via Expo."
      ],
      techStack: ["React Native", "Expo", "TypeScript", "Firebase Firestore", "Nativewind", "Vite"],
      links: {
        github: "#",
        live: "https://saulado-sigma.vercel.app/"
      },
      stats: "Cross-Platform · Offline-Ready"
    },
    {
      id: "mapos-catering",
      title: "Mapos Catering",
      subtitle: "Enterprise Catering Management System",
      role: "Project Manager & Backend Developer",
      year: "2025",
      featured: true,
      category: "Backend & Systems",
      summary: "A centralized management and booking platform streamlining event scheduling, package customization, and relational database inventory for catering operations.",
      points: [
        "Led project planning and architecture, establishing milestone tracking and sprint coordination to deliver on schedule.",
        "Engineered structured RESTful CRUD modules and relational database queries using Laravel and MySQL for high reliability.",
        "Optimized admin workflows for quote calculation, order management, and operational logging."
      ],
      techStack: ["PHP", "Laravel", "MySQL", "JavaScript", "Tailwind CSS", "Git", "XAMPP"],
      links: {
        github: "#",
        live: "#"
      },
      stats: "Enterprise CRUD · Relational DB"
    },
    {
      id: "virtu-gallery",
      title: "Virtu Gallery",
      subtitle: "Digital Art & Curation Space",
      role: "Project Manager & Full Stack Developer",
      year: "2024",
      featured: true,
      category: "Full Stack Web",
      summary: "An interactive digital gallery platform enabling visual artists to exhibit collections, manage portfolio pieces, and engage viewers through curated exhibitions.",
      points: [
        "Directed cross-functional development tasks, sprint schedules, and architectural reviews from inception to deployment.",
        "Implemented end-to-end data pipelines for artwork curation, image metadata indexing, and user-driven CRUD capabilities.",
        "Built a responsive, fluid gallery UI integrated with an Express.js backend and MySQL database.",
      ],
      techStack: ["React", "Node.js", "Express.js", "MySQL", "Tailwind CSS", "Git"],
      links: {
        github: "#",
        live: "#"
      },
      stats: "Curation Engine · REST API"
    }
  ],

  skills: {
    "Languages": ["JavaScript (ES6+)", "TypeScript", "PHP", "C#", "Python"],
    "Frontend": ["React", "Vite", "React Native", "Expo", "Tailwind CSS", "Nativewind"],
    "Backend": ["Node.js", "Express.js", "Laravel"],
    "Databases": ["Firebase Firestore", "MySQL", "PostgreSQL"],
    "Desktop & Tools": ["Electron", "Git", "GitHub", "VS Code", "XAMPP"]
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
