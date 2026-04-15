export const personalInfo = {
  name:     'Juan Ramirez',
  role:     'Desarrollador de Software Full Stack',
  tagline:  'Ingeniero de Sistemas especializado en desarrollo web full stack, con experiencia en proyectos reales y tecnologías modernas.',
  bio:      'Ingeniero de Sistemas con experiencia en diversas tecnologías de desarrollo de software, con especial fortaleza en desarrollo web full stack. Manejo Node.js, Angular, Python, HTML, CSS, JavaScript y PHP, bases de datos MySQL y PostgreSQL, contenedorización con Docker y servicios en la nube con Microsoft Azure.',
  location: 'Tunja, Boyacá',
  email:    'juan.mancilla0404@gmail.com',
  github:   'https://github.com/Juanito040',
  linkedin: 'https://www.linkedin.com/in/juan-ramirez-633052309/',
  cv:       '/CVE_RAMIREZ_JUAN.pdf',
  avatar:   '/favicon.png',
};

export const skills = [
  // Frontend
  { name: 'Angular',      category: 'Frontend', level: 88 },
  { name: 'TypeScript',   category: 'Frontend', level: 82 },
  { name: 'JavaScript',   category: 'Frontend', level: 85 },
  { name: 'HTML5 / CSS3', category: 'Frontend', level: 90 },
  { name: 'Bootstrap',    category: 'Frontend', level: 80 },
  // Backend
  { name: 'Node.js',      category: 'Backend',  level: 85 },
  { name: 'Express.js',   category: 'Backend',  level: 82 },
  { name: 'Python',       category: 'Backend',  level: 78 },
  { name: 'FastAPI',      category: 'Backend',  level: 72 },
  { name: 'PHP',          category: 'Backend',  level: 70 },
  { name: 'MySQL',        category: 'Backend',  level: 85 },
  { name: 'PostgreSQL',   category: 'Backend',  level: 75 },
  // DevOps
  { name: 'Docker',       category: 'DevOps',   level: 72 },
  { name: 'Git / GitHub', category: 'DevOps',   level: 88 },
  { name: 'Azure',        category: 'DevOps',   level: 65 },
  { name: 'JWT / Auth',   category: 'DevOps',   level: 80 },
];

export const projects = [
  {
    id: 1,
    title: {
      es: 'Control de Equipos — Hospital San Rafael',
      en: 'Device Control System — Hospital San Rafael',
    },
    description: {
      es: 'Sistema web para registrar, monitorear y gestionar el estado operativo de computadores, tabletas y dispositivos institucionales, optimizando la trazabilidad y el mantenimiento preventivo.',
      en: 'Web system to register, monitor and manage the operational status of computers, tablets and institutional devices, optimizing traceability and preventive maintenance.',
    },
    tech: ['Angular 15+', 'TypeScript', 'Node.js', 'Express.js', 'MySQL', 'JWT', 'Bootstrap'],
    category: 'Full Stack',
    mainTech: 'angular',
    github: 'https://github.com/Juanito040',
    demo: null,
    featured: true,
    color: '#0F9B8E',
  },
  {
    id: 2,
    title: {
      es: 'Gestión de Usuarios — Fundación MDA',
      en: 'User Management System — MDA Foundation',
    },
    description: {
      es: 'Sistema web integral para administrar el registro y seguimiento de beneficiarias en la fundación, con CRUD completo, arquitectura moderna y escalable.',
      en: 'Comprehensive web system to manage the registration and monitoring of beneficiaries at the foundation, featuring a full CRUD with modern and scalable architecture.',
    },
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'PHP', 'MySQL', 'Apache'],
    category: 'Full Stack',
    mainTech: 'php',
    github: 'https://github.com/Juanito040',
    demo: null,
    featured: true,
    color: '#14B8A6',
  },
  {
    id: 3,
    title: {
      es: 'Catálogo y Gestor de Compras de Hardware',
      en: 'Hardware Parts Catalog & Shop Manager',
    },
    description: {
      es: 'Plataforma e-commerce universitaria para catálogo y gestión de compras de partes de computadoras, con interfaz moderna y experiencia similar a tiendas en línea reales.',
      en: 'University e-commerce platform for browsing and purchasing computer hardware parts, with a modern interface and an experience similar to real online stores.',
    },
    tech: ['Angular', 'TypeScript', 'Node.js', 'Express.js', 'MySQL', 'Docker', 'JWT', 'Tailwind CSS'],
    category: 'Full Stack',
    mainTech: 'angular',
    github: 'https://github.com/Juanito040',
    demo: null,
    featured: true,
    color: '#0D7A6F',
  },
  {
    id: 4,
    title: {
      es: 'Plataforma de Gestión Institucional',
      en: 'Institutional Management Platform',
    },
    description: {
      es: 'Aplicación web para centralizar y optimizar la consulta de información institucional en un entorno académico, replicando escenarios reales de uso empresarial.',
      en: 'Web application to centralize and optimize access to institutional data in an academic environment, replicating real enterprise use cases.',
    },
    tech: ['Angular', 'TypeScript', 'Angular Material', 'Python', 'FastAPI', 'PostgreSQL', 'JWT'],
    category: 'Full Stack',
    mainTech: 'fastapi',
    github: 'https://github.com/Juanito040',
    demo: null,
    featured: false,
    color: '#2DD4BF',
  },
  {
    id: 5,
    title: {
      es: 'CoreVital — Sistema de Consulta IA Hospitalaria',
      en: 'CoreVital — Hospital AI Query System',
    },
    description: {
      es: 'API REST con arquitectura RAG (Retrieval-Augmented Generation) que permite al personal médico consultar protocolos y normativas hospitalarias en lenguaje natural. Procesa documentos PDF/DOCX con embeddings vectoriales y un LLM local (qwen2.5:32b) sobre ChromaDB. Sistema 100% offline para garantizar privacidad total de los datos clínicos.',
      en: 'REST API with RAG (Retrieval-Augmented Generation) architecture allowing medical staff to query hospital protocols and regulations in natural language. Processes PDF/DOCX documents with vector embeddings and a local LLM (qwen2.5:32b) over ChromaDB. Fully offline system to ensure complete privacy of clinical data.',
    },
    tech: ['Python', 'FastAPI', 'ChromaDB', 'Ollama', 'SQLAlchemy', 'Alembic', 'JWT', 'PyMuPDF', 'pytest'],
    category: 'Backend',
    mainTech: 'python',
    github: 'https://github.com/Juanito040',
    demo: null,
    featured: true,
    color: '#0F9B8E',
  },
  {
    id: 6,
    title: {
      es: 'TutelaIA — Plataforma LegalTech',
      en: 'TutelaIA — LegalTech Platform',
    },
    description: {
      es: 'Plataforma full stack que automatiza la contestación de acciones de tutela en Colombia. Procesa PDFs judiciales con IA (LLaMA 3.3 70B / Groq) para extraer accionante, hechos y derechos invocados, genera borradores jurídicos en lenguaje formal, los exporta a .docx con formato legal y envía alertas automáticas de vencimiento de plazos. Reduce el proceso de días hábiles a minutos.',
      en: 'Full-stack platform that automates the response process for tutela (injunction) actions in Colombia. Processes judicial PDFs with AI (LLaMA 3.3 70B / Groq) to extract claimants, facts and invoked rights, generates formal legal drafts, exports them to .docx with legal formatting, and sends automatic deadline alerts. Reduces a multi-day process to minutes.',
    },
    tech: ['Next.js 14', 'React 18', 'Tailwind CSS', 'NextAuth', 'PostgreSQL', 'Prisma', 'Supabase', 'Groq API', 'Nodemailer'],
    category: 'Full Stack',
    mainTech: 'nextdotjs',
    github: 'https://github.com/Juanito040',
    demo: null,
    featured: true,
    color: '#14B8A6',
  },
];

export const experience = [
  {
    id: 8,
    role: {
      es: 'Pasante de Desarrollo de Software',
      en: 'Software Development Intern',
    },
    company: 'Hospital San Rafael de Tunja',
    period: 'Feb 2026 — Presente',
    type: 'Pasantía',
    description: {
      es: 'Desarrollo de sistema de gestión y control de equipos tecnológicos institucionales, orientado a su integración con la mesa de servicios del hospital. Centralización del inventario, seguimiento de incidencias y trazabilidad de activos, reemplazando procesos manuales mediante arquitectura modular y buenas prácticas de desarrollo.',
      en: 'Development of an institutional equipment management and control system oriented toward integration with the hospital service desk. Centralization of inventory, incident tracking and asset traceability, replacing manual processes through a modular architecture and development best practices.',
    },
    tech: ['Angular', 'TypeScript', 'Node.js', 'Express.js', 'MySQL', 'JWT', 'Bootstrap'],
    current: true,
  },
  {
    id: 1,
    role: {
      es: 'Desarrollador IA — CoreVital',
      en: 'AI Developer — CoreVital',
    },
    company: 'Hospital San Rafael de Tunja',
    period: '2025 — 2026',
    type: 'Freelance',
    description: {
      es: 'Diseño e implementación de sistema de IA local para consulta de documentación médica institucional. Construcción de API REST con FastAPI en arquitectura en capas; implementación de pipeline RAG con procesamiento de PDF/DOCX, chunking, embeddings con nomic-embed-text y búsqueda semántica sobre ChromaDB. Integración de Ollama con el modelo qwen2.5:32b para inferencia 100% offline, garantizando privacidad total de datos clínicos. Incluye autenticación JWT + bcrypt, control de roles (médico/admin), auditoría de consultas y migraciones con Alembic.',
      en: 'Designed and implemented a local AI system for querying institutional medical documentation. Built a layered REST API with FastAPI, implemented a RAG pipeline with PDF/DOCX processing, chunking, nomic-embed-text embeddings and semantic search over ChromaDB. Integrated Ollama with the qwen2.5:32b model for 100% offline inference, ensuring full privacy of clinical data. Includes JWT + bcrypt authentication, role-based access (doctor/admin), query auditing and Alembic migrations.',
    },
    tech: ['Python', 'FastAPI', 'ChromaDB', 'Ollama', 'SQLAlchemy', 'Alembic', 'JWT', 'PyMuPDF', 'pytest'],
    current: true,
  },
  {
    id: 2,
    role: {
      es: 'Desarrollador Full Stack — TutelaIA',
      en: 'Full-Stack Developer — TutelaIA',
    },
    company: 'Lawyers Solutions',
    period: '2026',
    type: 'Freelance',
    description: {
      es: 'Desarrollo end-to-end de plataforma LegalTech para automatizar la contestación de tutelas bajo el Decreto 2591/91. Integración de Groq (LLaMA 3.3 70B) para extracción automática de datos estructurados de PDFs judiciales con sanitización de prompt injection. Implementación de generación de contestaciones jurídicas y exportación a .docx con formato legal. Construcción de cron job para cálculo de días hábiles y envío de alertas de vencimiento vía Gmail SMTP. Diseño de autenticación JWT + cookies HttpOnly y sistema multi-rol (abogado/asistente/admin).',
      en: 'Built end-to-end a LegalTech platform to automate tutela (injunction) responses under Decree 2591/91. Integrated Groq (LLaMA 3.3 70B) to automatically extract structured data from judicial PDFs with prompt injection sanitization. Implemented legal draft generation and .docx export with proper legal formatting. Built a cron job calculating business days and sending deadline alerts via Gmail SMTP. Designed JWT + HttpOnly cookie authentication and multi-role system (lawyer/assistant/admin).',
    },
    tech: ['Next.js 14', 'React 18', 'Tailwind CSS', 'NextAuth', 'PostgreSQL', 'Prisma', 'Supabase', 'Groq API', 'Nodemailer', 'Vercel'],
    current: false,
  },
  {
    id: 3,
    role: {
      es: 'Practicante de Desarrollo de Software',
      en: 'Software Development Intern',
    },
    company: 'Hospital San Rafael de Tunja',
    period: 'May 2025 — Sep 2025',
    type: 'Pasantía',
    description: {
      es: 'Desarrollo de sistema de control y regulación de equipos tecnológicos para el área de informática. Mejora del control de activos, reducción de tiempos de búsqueda en inventario e implementación de interfaz accesible para consulta de dispositivos. Aplicación de metodologías ágiles durante todo el ciclo de desarrollo.',
      en: 'Development of a control and regulation system for technological devices in the IT department. Improvement of asset tracking, reduction of inventory search times and implementation of an accessible interface for device queries. Application of agile methodologies throughout the development cycle.',
    },
    tech: ['Angular 15+', 'Node.js', 'MySQL', 'JWT', 'Bootstrap', 'Git'],
    current: false,
  },
  {
    id: 4,
    role: {
      es: 'Desarrollador de Software',
      en: 'Software Developer',
    },
    company: 'Fundación MDA Tunja',
    period: 'Ene 2025 — Abr 2025',
    type: 'Freelance',
    description: {
      es: 'Desarrollo de sistema web integral de gestión de usuarios para administrar el registro y seguimiento de beneficiarias. Liderazgo del equipo de desarrollo, mejora del 100% en la administración de registros y eliminación de procesos obsoletos.',
      en: 'Development of a comprehensive user management web system for registration and follow-up of beneficiaries. Leadership of the development team, 100% improvement in record management and elimination of outdated processes.',
    },
    tech: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL', 'Bootstrap'],
    current: false,
  },
  {
    id: 5,
    role: {
      es: 'Desarrollador de Software',
      en: 'Software Developer',
    },
    company: 'Universidad Santo Tomás de Tunja',
    period: 'May 2024 — Ago 2024',
    type: 'Proyecto Académico',
    description: {
      es: 'Desarrollo de plataforma e-commerce universitaria para catálogo y gestión de compras de partes de computadoras, con interfaz moderna siguiendo estándares profesionales de diseño y usabilidad.',
      en: 'Development of a university e-commerce platform for a computer hardware catalog and purchase management system, with a modern interface following professional design and usability standards.',
    },
    tech: ['Angular', 'TypeScript', 'Node.js', 'MySQL', 'Docker', 'Tailwind CSS'],
    current: false,
  },
  {
    id: 6,
    role: {
      es: 'Desarrollador de Software',
      en: 'Software Developer',
    },
    company: 'Universidad Santo Tomás de Tunja',
    period: 'Mar 2024 — Jun 2024',
    type: 'Proyecto Académico',
    description: {
      es: 'Desarrollo de aplicación web para centralizar información institucional, mejora de la organización y trazabilidad de datos en un entorno académico simulado, con aplicación de buenas prácticas de desarrollo y GitFlow.',
      en: 'Development of a web application to centralize institutional information, improvement of data organization and traceability in a simulated academic environment, with application of development best practices and GitFlow.',
    },
    tech: ['Angular', 'TypeScript', 'Python', 'FastAPI', 'PostgreSQL', 'JWT'],
    current: false,
  },
  {
    id: 7,
    role: {
      es: 'Ingeniería de Sistemas',
      en: 'Systems Engineering',
    },
    company: 'Universidad Santo Tomás de Tunja',
    period: '2021 — Presente',
    type: 'Educación',
    description: {
      es: 'Pregrado en Ingeniería de Sistemas, actualmente en décimo semestre. Formación sólida en desarrollo de software, bases de datos, redes, arquitectura de sistemas e inglés avanzado.',
      en: "Bachelor's degree in Systems Engineering, currently in the tenth semester. Solid background in software development, databases, networking, systems architecture and advanced English.",
    },
    tech: ['Java', 'Python', 'C++', 'SQL', 'Redes'],
    current: true,
  },
];
