export const nav = [
  { label: "Work", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Stack", href: "#stack" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const whyChooseMe = [
  {
    title: "Dual Focus on Core Dev & CMS",
    detail:
      "WordPress & WooCommerce for rapid site-building and commerce; Python & Django for custom logic, APIs, and complex backend systems.",
  },
  {
    title: "Strong Computer Science Base",
    detail:
      "Solid understanding of core concepts like Data Structures, Algorithms, Database Design, and authentication flows, ensuring clean, performant architecture.",
  },
  {
    title: "Result-Driven & Scalable Builds",
    detail:
      "I prioritize clean schemas, query optimization, and structured database designs to ensure code handles growth smoothly.",
  },
  {
    title: "Modern Development & Tools",
    detail:
      "Leveraging Git, GitHub, modern IDEs, and productive workflows to deliver projects cleanly, with robust code reviews and versioning.",
  },
  {
    title: "Clear Communication & Self-Learning",
    detail:
      "Native in Bangla, intermediate in English, and constantly learning new frameworks. You get transparent and responsive updates.",
  },
  {
    title: "Post-Launch Support & Adaptability",
    detail:
      "Maintenance windows, bug-fixing, and system modifications are part of my service to make sure your site stays fast and secure.",
  },
];

export type Service = {
  title: string;
  problem: string;
  solution: string;
  benefits: string[];
  outcome: string;
};

export const services: Service[] = [
  {
    title: "Django Backend Development",
    problem: "Off-the-shelf software doesn't fit your custom business rules, and pre-built solutions are slow or insecure.",
    solution:
      "A custom Django backend engineered with optimized schemas, secure models, clean REST APIs, and authentication flows.",
    benefits: ["Robust authentication systems", "RESTful API design & integration", "Optimized database schemas"],
    outcome: "A secure, scalable server architecture tailored exactly to your workflow.",
  },
  {
    title: "WordPress Custom Development",
    problem: "Generic themes load slowly, suffer from plugin bloat, and are difficult for non-technical team members to edit.",
    solution:
      "Tailored WordPress and WooCommerce setups customized for your visual identity, with speed optimization and custom features.",
    benefits: ["SEO-friendly structure", "Clean content editing interface", "Minimalist, high-performance styling"],
    outcome: "A stunning, fast business site that your team can update without code.",
  },
  {
    title: "WooCommerce Store Development",
    problem: "Out-of-the-box templates lose customers during variants checking and checkouts.",
    solution:
      "WooCommerce setups tuned for your shipping rules, payment gateways, product taxonomies, and high-converting checkouts.",
    benefits: ["Streamlined multi-currency checkout", "Complex product variant handling", "Inventory and order flow configs"],
    outcome: "A reliable online store with fewer abandoned checkouts and simpler management.",
  },
  {
    title: "Database Design & Optimization",
    problem: "Cluttered queries (e.g. N+1 query patterns) block website load speeds as traffic scales.",
    solution:
      "Optimized query structures, index configurations, and normalized relations using Django ORM, MySQL, or PostgreSQL.",
    benefits: ["Substantially reduced API times", "Correct relational structures", "Data security checks"],
    outcome: "Fast, reliable data reads and writes under heavier loads.",
  },
  {
    title: "Landing Page Development",
    problem: "Slow load times and confusing Call-To-Actions (CTAs) are ruining your ad-spend conversions.",
    solution:
      "Highly responsive, mobile-first landing pages built with clean code and sub-2-second loading times.",
    benefits: ["Sub-2s page speed target", "Clear CTA design hierarchy", "Lighthouse-optimized performance"],
    outcome: "A page built to convert visitors, yielding measurable ROI.",
  },
  {
    title: "Maintenance & Troubleshooting",
    problem: "Broken pages, database connection errors, or broken integrations represent a huge business risk.",
    solution:
      "Root-cause diagnosis, dependency patching, and security maintenance for existing WordPress or Django systems.",
    benefits: ["Rapid bug investigation", "Security patches and updates", "Backup and logging checks"],
    outcome: "A healthy, stable project, giving you peace of mind.",
  },
];

export const techStack = [
  {
    category: "Core Expertise",
    items: ["Python", "C", "C++", "Django", "Django ORM", "MySQL", "DBMS", "PHP", "AI Tools"],
  },
  {
    category: "Web Development",
    items: ["HTML", "CSS", "Tailwind CSS", "Bootstrap", "WordPress", "WooCommerce"],
  },
  {
    category: "CS Concepts",
    items: ["Data Structures", "Algorithms", "Database Design", "Authentication Systems"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "GitHub", "VS Code", "Figma"],
  },
];

export type Project = {
  title: string;
  tag: string;
  problem: string;
  solution: string;
  features: string[];
  stack: string[];
  lessons: string;
  githubClient?: string;
  githubServer?: string;
  github?: string;
  demo?: string;
  status: "shipped" | "in-progress";
  image?: string;
  date?: string;
};

export const projects: Project[] = [
  {
    title: "SolveIt",
    tag: "Featured Full-Stack App",
    problem:
      "Software issues and coding project assignments needed a secure place to be managed, logged, and updated by developers and clients.",
    solution:
      "A complete solution hub utilizing a clean React frontend and a robust Node.js/Express.js backend to support issue tracking, workflows, and user contributions.",
    features: [
      "Issue tracker dashboard with categorizations",
      "Token-based secure authentication and role management",
      "Responsive user interface styled with Tailwind CSS",
      "Optimized query structures and database schema logic",
    ],
    stack: ["React.js", "Vite", "Tailwind CSS", "Node.js", "Express.js"],
    lessons:
      "Implementing custom cross-origin authentication and secure APIs between React client and Node/Express server solidified my understanding of CORS, JWT, and relational database integrity.",
    githubClient: "https://github.com/thejamilcode/solveit-client",
    githubServer: "https://github.com/thejamilcode/solveit-server",
    demo: "https://solveit-place.vercel.app/",
    status: "shipped",
    image: "/images/solveit.jpg",
    date: "Jan 2026 - Present",
  },
  {
    title: "Student Management System",
    tag: "Web Application",
    problem:
      "Administrators needed a digital solution to handle student records, profiles, and result processing without spreadsheet clutter.",
    solution:
      "A full-fledged PHP and MySQL platform providing a teacher login system, automated grades calculation, and profile editing.",
    features: [
      "Full Management System: Includes student data handling and a dedicated teacher login system.",
      "Result Management: Provides automated result processing, calculations, and secure management.",
    ],
    stack: ["PHP", "MySQL", "HTML", "CSS"],
    lessons:
      "Designing a custom authentication system from scratch in PHP taught me how crucial session security is, and why planning database normalization prevents future migration headaches.",
    github: "https://github.com/thejamilcode",
    status: "shipped",
    date: "Jan 2024 - Apr 2024",
  },
  {
    title: "Hotel & Event Management System",
    tag: "Web Application",
    problem:
      "Venue owners and clients experienced double-bookings and lack of real-time reservation visibility.",
    solution:
      "An integrated reservation portal with live calendar checkups, availability validation, and reservation confirmations.",
    features: [
      "Booking Engine: Features real-time hall availability checking and booking confirmation.",
      "Admin Dashboard: Includes a dashboard system for venue managers to handle bookings, dates, and reports.",
    ],
    stack: ["HTML", "CSS", "PHP", "JavaScript", "MySQL"],
    lessons:
      "Handling dates and double-booking edge cases requires rigorous transaction validation on the backend database level rather than simple client-side checks.",
    github: "https://github.com/thejamilcode/Event-Hall-Booking-System",
    status: "shipped",
    image: "/images/eventbooking.png",
    date: "Dec 2025 - Mar 2026",
  },
];

export const timeline = [
  { year: "2019", commit: "feat: ssc-completed --gpa=4.61", detail: "Finished Secondary School Certificate (SSC) in Science from Bangabandhu Ideal High School." },
  { year: "2021", commit: "feat: hsc-completed --gpa=4.42", detail: "Finished Higher Secondary Certificate (HSC) in Science from Kulaura Govt. College." },
  { year: "2021", commit: "git init wordpress-learning", detail: "Began custom WordPress development at Sorobindu Academy, building responsive layouts." },
  { year: "2022", commit: "feat: client-stores --woocommerce", detail: "Launched WooCommerce e-commerce setups and landing pages for local businesses." },
  { year: "2024", commit: "feat: learn-python --algorithms", detail: "Began focusing on Python, database systems, and core computer science concepts." },
  { year: "2025", commit: "feat: learn-django --backend-api", detail: "Specialized in Django, Django ORM, and REST architectures to build scalable backend web apps." },
  { year: "2026", commit: "feat: final-year-cse --cgpa=4.20-running", detail: "Final year student in B.Sc. in Computer Science & Engineering (CSE) at Metropolitan University, Sylhet." },
];

export const process = [
  { step: "Discovery", detail: "Identify the primary business goals, metrics to move, and technical specs first." },
  { step: "Architecture", detail: "Map database schemas, user roles, security, and integration rules before coding." },
  { step: "Design", detail: "Refine layouts and styling themes (like responsive glassmorphism) for pixel-perfect presentation." },
  { step: "Development", detail: "Write clean, modular code with self-documenting parameters and version logs." },
  { step: "Validation", detail: "Perform strict testing on date ranges, edge cases, responsive layout shifts, and APIs." },
  { step: "Deployment", detail: "Deploy with continuous integration and setup uptime monitoring logs." },
  { step: "Support", detail: "Provide ongoing support windows for queries, optimizations, and minor updates." },
];

export const certificates = [
  { title: "B.Sc. in CSE (Final Year)", issuer: "Metropolitan University, Sylhet", category: "Academic" },
  { title: "WordPress Development Mastery", issuer: "Sorobindu Academy", category: "CMS" },
  { title: "Python & Django Core Concepts", issuer: "Phitron Academy (Self-learning)", category: "Programming" },
];

export const testimonials = [
  {
    quote:
      "Jamil designed and optimized our booking engine without issues. His understanding of database integrity prevented reservation conflicts.",
    name: "Local Venue Owner",
    role: "Managing Director",
  },
  {
    quote:
      "Jamil is a fast learner. He worked on SolveIt's Django REST backend, managing JWT tokens and schemas perfectly.",
    name: "Collaborating Developer",
    role: "Senior Full-Stack Engineer",
  },
];

export const contact = {
  email: "jamilcode56@gmail.com",
  phone: "+8801796876066",
  linkedin: "https://www.linkedin.com/in/thejamilcode/",
  github: "https://github.com/thejamilcode",
  location: "Sylhet, Bangladesh",
};
