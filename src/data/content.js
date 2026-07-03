// All portfolio content lives here so copy/links are easy to update.

export const profile = {
  name: 'Brayden Coghill',
  firstName: 'Brayden',
  lastName: 'Coghill',
  role: 'Software Developer',
  location: 'Kelowna, BC',
  available: true,
  tagline:
    'I build web applications end to end, from clean React and TypeScript interfaces to the C#, Node, and PostgreSQL that power them.',
  intro:
    'Software developer who likes turning ideas into reliable, well-built products, front end to back.',
  email: 'brayden.coghill@gmail.com',
  socials: {
    github: 'https://github.com/CoghillB',
    linkedin: 'https://www.linkedin.com/in/braydencoghill',
  },
}

// Rotating descriptors in the hero role line.
export const heroWords = ['fast', 'effortless', 'polished', 'human']

export const about = {
  paragraphs: [
    "I'm a husband and a proud dad based in Kelowna, BC, and I'm building my second career as a software developer. Before tech, I worked as a commercial diver. It was a tough, unusual job, and it taught me how to stay calm under pressure, think on my feet, and lead a team when it really counts.",
    "I bring that same drive to software development now. I got into it because I love helping people bring their ideas to life, taking a rough vision and turning it into something real that actually works. Whether it's my own side project or a client's big idea, watching it come together and ship is the part I look forward to most.",
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
    title: 'Cyan Analytics',
    subtitle: 'Data Transparency Platform · Team',
    description:
      'Marketing site for a data-analytics product that turns business data into transparency, traceability, and insight. Built with the team in Next.js, TypeScript, and Tailwind CSS.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Team'],
    href: 'https://www.cyananalytics.io/',
    cta: 'View Site',
    featured: true,
  },
  {
    title: 'PantryPal',
    subtitle: 'AI Recipe Generator App',
    description:
      "A scenario-based recipe app that generates meals from what you have, what you're craving, and who you're feeding. React Native and Expo on mobile, a Fastify and Supabase backend, and GPT-4o doing the cooking.",
    tags: ['React Native', 'Expo', 'Fastify', 'Supabase', 'OpenAI', 'TypeScript'],
    href: 'https://github.com/CoghillB/RecipeApp',
    cta: 'View on GitHub',
    featured: true,
  },
  {
    title: 'ApeOffside',
    subtitle: 'Player-Prop Betting Platform',
    description:
      'A live player-prop betting platform with real-time odds and statistics. A Python/Django REST API integrates an AI assistant to provide users with data-driven betting insights.',
    tags: ['React', 'Python', 'Django', 'Docker', 'HTML5/CSS3'],
    href: 'https://github.com/CoghillB/ApeOffside',
    cta: 'View on GitHub',
    featured: true,
  },
  {
    title: 'Kelowna Creative',
    subtitle: 'Agency Website',
    description:
      'A dynamic, visually immersive site for a local marketing agency. Fully responsive, showcasing their portfolio with glassmorphism cards and smooth Framer Motion animations.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'AOS'],
    href: 'https://www.kelownacreative.ca/',
    cta: 'View Site',
    featured: false,
  },
  {
    title: 'M&B Capital',
    subtitle: 'Investment Firm Site',
    description:
      'A marketing and investor-facing site for a private investment firm, walking through their acquire, build, and realize model with clear calls to action for investors and business owners.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive'],
    href: 'https://coghillb.github.io/MB-Capital/',
    cta: 'View Site',
    featured: false,
  },
  {
    title: 'Budget Quest',
    subtitle: 'Personal Finance PWA',
    description:
      'A personal-finance app for tracking income, budgets, and expenses, with recurring transactions, shared household budgets, pay-period history, and full offline support. Installable straight to the home screen.',
    tags: ['PWA', 'Offline', 'Budgeting', 'Responsive'],
    href: 'https://coghillb.github.io/budget_app/',
    cta: 'Open App',
    featured: false,
  },
  {
    title: 'Kerion',
    subtitle: 'Creator Landing Page',
    description:
      "A landing page for a RimWorld YouTube channel, built to showcase story-driven let's-plays and challenge series and point viewers to the videos.",
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive'],
    href: 'https://coghillb.github.io/kerion-youtube/',
    cta: 'View Site',
    featured: false,
  },
  {
    title: 'Travel Planner',
    subtitle: 'Trip & Budgeting Web App',
    description:
      'A travel-planning app for organizing trips and managing budgets. Integrates the Google Maps API to visualize routes and locations, designed in Figma and built with vanilla JS.',
    tags: ['JavaScript', 'Node.js', 'HTML5', 'CSS3', 'Google Maps API'],
    href: 'https://github.com/CoghillB/COSC205_CourseProject',
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
