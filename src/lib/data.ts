export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  learnings: string;
  liveDemo?: string;
  repository?: string;
  category: "Major" | "Minor";
  status: "Completed" | "Ongoing";
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Booknest (Library Management System)",
    description:
      "Desktop app built with Python and CustomTkinter for managing books and borrowing. Features ISBN auto-fetch from Open Library API, full CRUD operations, issue/return/re-issue flow, and MySQL persistence.",
    techStack: ["Python", "CustomTkinter", "MySQL", "Open Library API"],
    learnings:
      "Learned about desktop GUI development, API integration for data enrichment, designing a relational database schema, and modeling real-world workflows like book checkouts and returns.",
    repository: "https://github.com/Ankankun/Booknest",
    category: "Major",
    status: "Ongoing",
  },
  {
    id: "2",
    title: "PharmaStock",
    description:
      "An early web prototype for pharmacy inventory tracking built with HTML, CSS, and JavaScript. The vision includes features like low-stock alerts, vendor management, and data import/export.",
    techStack: ["HTML5", "CSS3", "JavaScript", "FastAPI (planned)", "Database"],
    learnings:
      "This project is an exercise in planning for scale. I'm focusing on designing robust inventory workflows, considering data-heavy UI challenges, and architecting for a future backend integration.",
    repository: "https://github.com/Ankankun/PharmaStock",
    category: "Major",
    status: "Ongoing",
  },
  {
    id: "3",
    title: "Modern Web Calculator",
    description:
      "A vanilla JavaScript calculator with keyboard support, chained operations, and robust error handling like divide-by-zero protection. The UI includes modern touches like ripple effects on click.",
    techStack: ["HTML5", "CSS3", "Vanilla JavaScript"],
    learnings:
      "This project was a deep dive into core JavaScript, focusing on handling numeric precision, complex state management for chained operations, keyboard event handling, and accessibility.",
    liveDemo: "https://ankan-das.github.io/calculator",
    repository: "https://github.com/ankan-das/calculator",
    category: "Minor",
    status: "Completed",
  },
  {
    id: "4",
    title: "Social Links Profile",
    description:
      "A compact profile card featuring avatar, location, bio, and an accessible vertical list of social links with clear hover and focus states.",
    techStack: ["HTML5", "CSS3", "Flexbox", "Accessibility"],
    learnings:
      "Improved keyboard accessibility with :focus-visible, refined flex column centering, and cleaner semantic structure for grouped interactive links.",
    liveDemo: "https://socials.ankankun.me/",
    repository: "https://github.com/Ankankun/Social-Links-Profile",
    category: "Minor",
    status: "Completed",
  },
  {
    id: "5",
    title: "Blog Preview Card",
    description:
      "A responsive blog teaser card with hoverable title link, author info, tag, and accessible layout matching a design challenge.",
    techStack: ["HTML5", "CSS3", "Responsive Design", "Accessibility"],
    learnings:
      "Practiced centering strategies, managing inline vs flex patterns, image containment, and deploying static content via GitHub Pages.",
    liveDemo: "https://blog-preview-card.ankankun.me/",
    repository: "https://github.com/Ankankun/Blog-Preview-Card",
    category: "Minor",
    status: "Completed",
  },
  {
    id: "6",
    title: "QR Code Component",
    description:
      "A clean QR code card emphasizing spacing, typography, rounded corners, and subtle shadows to match a provided design.",
    techStack: ["HTML5", "CSS3", "CSS Variables", "Responsive Design"],
    learnings:
      "Reinforced layout fundamentals for small components, consistent spacing scales, and use of custom properties for future theming.",
    liveDemo: "https://qr-code-component.ankankun.me/",
    repository: "https://github.com/Ankankun/QR-Code-Component",
    category: "Minor",
    status: "Completed",
  },
  {
    id: "7",
    title: "Cafe Menu",
    description:
      "A semantic, responsive cafe menu page showcasing clean typography, pricing layout consistency, and accessible focus states.",
    techStack: ["HTML5", "CSS3", "Google Fonts", "Accessibility"],
    learnings:
      "Strengthened fundamentals around typography hierarchy, spacing rhythm, pseudo-class states, and small accessibility enhancements.",
    liveDemo: "https://cafe-menu.ankankun.me/",
    repository: "https://github.com/Ankankun/Cafe-Menu",
    category: "Minor",
    status: "Completed",
  },
];

export const projectFilters = ["All", "Major", "Minor", "Completed", "Ongoing"];

export interface LogEntry {
  id: string;
  date: string;
  title: string;
  description: string;
  tags: string[];
  category: "Frontend" | "Backend" | "Database" | "Tools";
}

export const logEntries: LogEntry[] = [
  {
    id: "1",
    date: "2024-03-20",
    title: "JavaScript DOM Manipulation",
    description:
      "Deepened my understanding of state management and event handling in vanilla JS for interactive UIs.",
    tags: ["JavaScript", "DOM", "State"],
    category: "Frontend",
  },
  {
    id: "2",
    date: "2024-03-15",
    title: "Responsive & Semantic Layouts",
    description:
      "Practiced building responsive layouts using Flexbox and CSS Grid, with a focus on semantic HTML for accessibility.",
    tags: ["HTML", "CSS", "Accessibility"],
    category: "Frontend",
  },
  {
    id: "3",
    date: "2024-02-25",
    title: "Python for Tooling",
    description:
      "Explored using Python for scripting and building simple desktop applications with CustomTkinter.",
    tags: ["Python", "GUI", "Scripts"],
    category: "Tools",
  },
  {
    id: "4",
    date: "2024-02-10",
    title: "Database Schema Fundamentals",
    description: "Learned the basics of relational database design and writing queries with MySQL.",
    tags: ["MySQL", "Schema", "SQL"],
    category: "Database",
  },
  {
    id: "5",
    date: "2024-01-20",
    title: "Version Control with Git",
    description: "Mastered core Git commands and workflows using GitHub Pages to host projects.",
    tags: ["Git", "GitHub", "CI/CD"],
    category: "Tools",
  },
];

export const logFilters = ["All", "Frontend", "Backend", "Database", "Tools"];
