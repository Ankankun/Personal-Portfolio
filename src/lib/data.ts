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
    techStack: ["Python","CustomTkinter","MySQL","Open Library API"],
    learnings: "Desktop GUI development, API integration, relational schema design, workflow modeling.",
    repository: "https://github.com/ankan-das/booknest",
    category: "Major",
    status: "Ongoing"
  },
  {
    id: "2",
    title: "PharmaStock",
    description: "Early web prototype for pharmacy inventory tracking built with HTML, CSS, and JavaScript. Planned features: low-stock alerts, vendor management, auth, dashboards, CSV import/export.",
    techStack: ["HTML5","CSS3","JavaScript","Planned: Node.js/FastAPI","Database"],
    learnings: "Inventory workflows, scalable architecture planning, data-heavy UI design.",
    repository: "https://github.com/ankan-das/pharmastock",
    category: "Major",
    status: "Ongoing"
  },
  {
    id: "3",
    title: "Modern Web Calculator",
    description: "Vanilla JavaScript calculator with keyboard support, chained operations, precision handling, ripple effects, focus feedback, and divide-by-zero protection.",
    techStack: ["HTML5","CSS3","Vanilla JavaScript"],
    learnings: "Numeric precision, keyboard event management, accessibility, and interaction design.",
    liveDemo: "https://ankan-das.github.io/calculator",
    repository: "https://github.com/ankan-das/calculator",
    category: "Minor",
    status: "Completed"
  },
  {
    id: "4",
    title: "Frontend Component Gallery",
    description: "Collection of small UI builds (Blog Preview Card, Social Links Profile, QR Code Component, Recipe Page, Cafe Menu) highlighting semantic HTML + responsive layout patterns.",
    techStack: ["HTML5","CSS3","JavaScript","Responsive Design"],
    learnings: "Semantic structure, responsive techniques, accessibility patterns, and reusable CSS.",
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
  { id: "1", date: "2024-01-15", title: "Desktop GUI with CustomTkinter", description: "Learned how to create modern-looking desktop applications with Python.", tags: ["Python","GUI","CustomTkinter"], category: "Frontend" },
  { id: "2", date: "2024-01-10", title: "API Integration Best Practices", description: "Handled errors, rate limiting, and graceful failures.", tags: ["API","Python","Error Handling"], category: "Backend" },
  { id: "3", date: "2024-01-05", title: "Semantic HTML and Accessibility", description: "Studied heading hierarchy, focus management, and screen reader interaction.", tags: ["HTML","Accessibility","Semantics"], category: "Frontend" },
  { id: "4", date: "2023-12-20", title: "MySQL Schema Design", description: "Focused on foreign keys, normalization, and efficient queries.", tags: ["MySQL","Database","Schema"], category: "Backend" }
];

export const logFilters = ["All","Frontend","Backend","Database","Tools"];
