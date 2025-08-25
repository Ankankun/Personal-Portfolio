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
    description: "Desktop app built with Python and CustomTkinter for managing books and borrowing. Features ISBN auto-fetch from Open Library API, full CRUD operations, issue/return/re-issue flow, and MySQL persistence.",
    techStack: ["Python", "CustomTkinter", "MySQL", "Open Library API"],
    learnings: "Learned about desktop GUI development, API integration for data enrichment, designing a relational database schema, and modeling real-world workflows like book checkouts and returns.",
    repository: "https://github.com/ankan-das/booknest",
    category: "Major",
    status: "Ongoing"
  },
  {
    id: "2",
    title: "PharmaStock",
    description: "An early web prototype for pharmacy inventory tracking built with HTML, CSS, and JavaScript. The vision includes features like low-stock alerts, vendor management, and data import/export.",
    techStack: ["HTML5", "CSS3", "JavaScript", "FastAPI (planned)", "Database"],
    learnings: "This project is an exercise in planning for scale. I'm focusing on designing robust inventory workflows, considering data-heavy UI challenges, and architecting for a future backend integration.",
    repository: "https://github.com/ankan-das/pharmastock",
    category: "Major",
    status: "Ongoing"
  },
  {
    id: "3",
    title: "Modern Web Calculator",
    description: "A vanilla JavaScript calculator with keyboard support, chained operations, and robust error handling like divide-by-zero protection. The UI includes modern touches like ripple effects on click.",
    techStack: ["HTML5", "CSS3", "Vanilla JavaScript"],
    learnings: "This project was a deep dive into core JavaScript, focusing on handling numeric precision, complex state management for chained operations, keyboard event handling, and accessibility.",
    liveDemo: "https://ankan-das.github.io/calculator",
    repository: "https://github.com/ankan-das/calculator",
    category: "Minor",
    status: "Completed"
  },
  {
    id: "4",
    title: "Frontend Component Gallery",
    description: "A collection of small UI builds (like a Blog Preview Card and Social Links Profile) that highlight semantic HTML and responsive CSS patterns for creating common web components.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    learnings: "Focused on fundamentals: writing clean, semantic markup, mastering responsive techniques without frameworks, implementing accessibility patterns, and organizing reusable CSS.",
    liveDemo: "https://ankan-das.github.io/frontend-components",
    repository: "https://github.com/ankan-das/frontend-components",
    category: "Minor",
    status: "Completed"
  }
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
  { id: "1", date: "2024-03-20", title: "JavaScript DOM Manipulation", description: "Deepened my understanding of state management and event handling in vanilla JS for interactive UIs.", tags: ["JavaScript", "DOM", "State"], category: "Frontend" },
  { id: "2", date: "2024-03-15", title: "Responsive & Semantic Layouts", description: "Practiced building responsive layouts using Flexbox and CSS Grid, with a focus on semantic HTML for accessibility.", tags: ["HTML", "CSS", "Accessibility"], category: "Frontend" },
  { id: "3", date: "2024-02-25", title: "Python for Tooling", description: "Explored using Python for scripting and building simple desktop applications with CustomTkinter.", tags: ["Python", "GUI", "Scripts"], category: "Tools" },
  { id: "4", date: "2024-02-10", title: "Database Schema Fundamentals", description: "Learned the basics of relational database design and writing queries with MySQL.", tags: ["MySQL", "Schema", "SQL"], category: "Database" },
  { id: "5", date: "2024-01-20", title: "Version Control with Git", description: "Mastered core Git commands and workflows using GitHub Pages to host projects.", tags: ["Git", "GitHub", "CI/CD"], category: "Tools" }
];

export const logFilters = ["All","Frontend","Backend","Database","Tools"];
