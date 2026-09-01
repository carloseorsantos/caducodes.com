export interface SkillCategory {
  title: string;
  subtitle: string;
  icon: string;
  skills: {
    name: string;
    level?: string;
    description: string;
  }[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Native macOS & Apple Ecosystem",
    subtitle: "Low-level system engineering and modern SwiftUI apps",
    icon: "Apple",
    skills: [
      {
        name: "Swift 6 / SwiftUI",
        level: "Expert",
        description: "Declarative macOS apps, reactive state management, and modern concurrency.",
      },
      {
        name: "Mach Kernel & System APIs",
        level: "Advanced",
        description: "Direct VM memory management, page allocation stats, and hardware sensors.",
      },
      {
        name: "AppKit & Carbon APIs",
        level: "Advanced",
        description: "Global hotkeys, non-activating NSPanel windows, pasteboard monitors, and CGEvent synthesis.",
      },
      {
        name: "Swift Package Manager (SPM)",
        level: "Expert",
        description: "Modular multi-package architectures and zero-dependency builds.",
      },
    ],
  },
  {
    title: "Frontend & Web Engineering",
    subtitle: "High-performance reactive interfaces and design systems",
    icon: "Layout",
    skills: [
      {
        name: "TypeScript & JavaScript",
        level: "Expert",
        description: "Strict typing, functional patterns, asynchronous programming, and clean code.",
      },
      {
        name: "Next.js 15 & React 19",
        level: "Expert",
        description: "App Router, Server Components, SSR/SSG, hydration optimization, and routing.",
      },
      {
        name: "Tailwind CSS & Shadcn UI",
        level: "Expert",
        description: "Responsive layouts, frosted glassmorphism, design tokens, and fluid animations.",
      },
      {
        name: "Framer Motion",
        level: "Advanced",
        description: "Layout animations, gesture interactions, and 60fps UI micro-interactions.",
      },
    ],
  },
  {
    title: "Backend & Systems Architecture",
    subtitle: "Scalable APIs, services, and cloud integration",
    icon: "Server",
    skills: [
      {
        name: "Java & Spring Boot",
        level: "Advanced",
        description: "Enterprise REST services, dependency injection, and scalable microservices.",
      },
      {
        name: "Node.js & WebSockets",
        level: "Advanced",
        description: "Real-time bidirectional event streaming and asynchronous server runtimes.",
      },
      {
        name: "REST APIs & Architecture",
        level: "Expert",
        description: "Idempotent API design, rate limiting, token authentication, and data contracts.",
      },
      {
        name: "Databases & Persistence",
        level: "Proficient",
        description: "PostgreSQL, MySQL, SQLite VACUUM optimization, and local JSON storage managers.",
      },
    ],
  },
  {
    title: "Tooling & DevOps",
    subtitle: "Continuous delivery, packaging, and developer workflows",
    icon: "Terminal",
    skills: [
      {
        name: "Git & GitHub Actions",
        level: "Expert",
        description: "Automated CI/CD pipelines, DMG installer packaging, and release automation.",
      },
      {
        name: "macOS Shell & Automation",
        level: "Expert",
        description: "Zsh / Bash scripting, ad-hoc codesigning, and release bundling scripts.",
      },
      {
        name: "Vercel & Cloud Deployments",
        level: "Expert",
        description: "Edge networks, serverless functions, automated preview branches.",
      },
      {
        name: "Docker & Containerization",
        level: "Proficient",
        description: "Multi-stage builds, local development parity, and reproducible environments.",
      },
    ],
  },
];
