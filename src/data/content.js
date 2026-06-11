// All portfolio content lives here so copy/links are easy to update.

export const profile = {
  name: 'Brayden Coghill',
  firstName: 'Brayden',
  lastName: 'Coghill',
  role: 'Software Developer',
  location: 'Kelowna, BC',
  available: true,
  tagline:
    'I build clean, accessible web apps that feel good to use, usually with React, TypeScript, and Next.js.',
  intro:
    'Frontend developer who likes turning ideas into fast, friendly experiences on the web.',
  email: 'brayden.coghill@gmail.com',
  socials: {
    github: 'https://github.com/CoghillB',
    linkedin: 'https://www.linkedin.com/in/braydencoghill',
  },
}

// Rotating descriptors in the hero role line.
export const heroWords = ['fast', 'accessible', 'delightful', 'human']

export const about = {
  paragraphs: [
    "I'm a husband and a proud dad based in Kelowna, BC, and I'm building my second career as a frontend developer. Before tech, I worked as a commercial diver. It was a tough, unusual job, and it taught me how to stay calm under pressure, think on my feet, and lead a team when it really counts.",
    "I bring that same drive to web development now. I got into frontend because I love helping people bring their ideas to life, taking a rough vision and turning it into something real you can actually click and use. Whether it's my own side project or a client's big idea, watching it come together on screen is the part I look forward to most.",
  ],
  stats: [
    { value: '20+', label: 'Technologies' },
    { value: '4+', label: 'Shipped projects' },
    { value: '2025', label: 'CIS Diploma' },
  ],
}

export const experience = [
  {
    role: 'Junior Software Developer',
    company: 'Barreleye Software',
    location: 'Kelowna, BC',
    period: 'Jan 2025 – Present',
    current: true,
    summary:
      "I help build a production water management and infrastructure planning platform, owning real user-facing features and bugs from the first report through to a merged PR. My work spans the TypeScript and React front end, a C# (.NET) backend, and a PostgreSQL database, with a focus on data-import reliability, UI and UX polish, and test quality.",
    stack: ['TypeScript', 'React', 'C# / .NET', 'PostgreSQL', 'Azure DevOps'],
    strengths: [
      'End-to-end ownership',
      'User-driven problem solving',
      'Cross-functional collaboration',
      'Proactive test correctness',
    ],
  },
]

// Grouped skills for a structured, scannable layout.
export const skillGroups = [
  {
    title: 'Frontend',
    items: [
      'React',
      'Next.js',
      'JavaScript (ES6+)',
      'TypeScript',
      'TailwindCSS',
      'HTML5',
      'CSS3',
      'jQuery',
      'Bootstrap',
      'Responsive Design',
    ],
  },
  {
    title: 'Backend & Data',
    items: [
      'Node.js',
      '.NET',
      'Django',
      'Fastify',
      'REST APIs',
      'PostgreSQL',
      'MySQL',
    ],
  },
  {
    title: 'Languages & Tooling',
    items: ['C#', 'Java', 'Python', 'JavaFX', 'VB.NET', 'Vite', 'GitHub', 'Azure DevOps'],
  },
]

export const projects = [
  {
    title: 'Kelowna Creative',
    subtitle: 'Agency Website',
    description:
      'A dynamic, visually immersive site for a local marketing agency. Fully responsive, showcasing their portfolio with glassmorphism cards and smooth Framer Motion animations.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'AOS'],
    href: 'https://www.kelownacreative.ca/',
    cta: 'View Site',
    featured: true,
  },
  {
    title: 'EdgeFinder',
    subtitle: 'AI-Powered Sports Prop Betting Platform',
    description:
      'A full-stack web app for sports prop betting analysis. It blends an AI model with trend and weather data to surface prop picks, with user accounts and subscription billing. The same React front end also ships to Android and iOS through Capacitor.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Fastify', 'Supabase', 'Stripe', 'Capacitor', 'AI'],
    href: 'https://www.edgefinder.ca/',
    cta: 'View Site',
    featured: true,
  },
  {
    title: 'ApeOffside',
    subtitle: 'Player-Prop Betting Platform',
    description:
      'A live player-prop betting platform with real-time odds and statistics. A Python/Django REST API integrates an AI assistant to provide users with data-driven betting insights.',
    tags: ['React', 'Python', 'Django', 'Docker', 'HTML5/CSS3'],
    href: 'https://github.com/CoghillB/ApeOffside.git',
    cta: 'View on GitHub',
    featured: false,
  },
  {
    title: 'Travel Planner',
    subtitle: 'Trip & Budgeting Web App',
    description:
      'A travel-planning app for organizing trips and managing budgets. Integrates the Google Maps API to visualize routes and locations, designed in Figma and built with vanilla JS.',
    tags: ['JavaScript', 'Node.js', 'HTML5', 'CSS3', 'Google Maps API'],
    href: 'https://github.com/CoghillB/COSC205_CourseProject.git',
    cta: 'View on GitHub',
    featured: false,
  },
]

export const education = [
  {
    credential: 'Diploma in Computer Information Systems',
    org: 'Okanagan College',
    period: '2023 – 2025',
    note: 'Coursework: Data Structures, Algorithms, Systems Analysis & Design, Client-side Web Systems, Project Management, Information System Security.',
  },
  {
    credential: 'Responsive Web Design Certification',
    org: 'freeCodeCamp',
    period: '2022',
    note: 'View Certificate',
    href: 'https://www.freecodecamp.org/certification/BraydenCoghill/responsive-web-design',
  },
]

export const nav = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]
