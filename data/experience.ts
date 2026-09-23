export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  companyUrl?: string;
  description: string;
  achievements: string[];
  skills: string[];
}

export const experiences: ExperienceItem[] = [
  {
    company: "CI&T",
    role: "Full-Stack Software Engineer",
    location: "Campinas - SP, Brazil",
    period: "2020 — Now",
    companyUrl: "https://www.ciandt.com/",
    description:
      "Engineered mission-critical web applications, high-throughput microservices, and modern frontend platforms for leading enterprise clients. Championed code quality, clean architecture, automated CI/CD pipelines, and high-performance user experiences.",
    achievements: [
      "Architected scalable web applications using Next.js, React, TypeScript, and Java / Spring Boot.",
      "Designed and optimized RESTful APIs, caching strategies, and database integrations delivering sub-100ms response times.",
      "Led technical initiatives around developer productivity, CI/CD automation, and modern frontend design systems.",
      "Collaborated closely with cross-functional global teams across product, UX, and backend infrastructure.",
    ],
    skills: [
      "TypeScript",
      "React",
      "Next.js",
      "Java",
      "Spring Boot",
      "Tailwind CSS",
      "REST APIs",
      "CI/CD",
      "Docker",
    ],
  },
  {
    company: "Open Source",
    role: "Independent macOS Developer",
    location: "Campinas - SP, Brazil",
    period: "Ongoing",
    description:
      "Crafting high-polish, open-source macOS native utilities using Swift 6, SwiftUI, and low-level system APIs. Focused on high responsiveness, zero telemetry, Mach Kernel performance, and delightful desktop UX.",
    achievements: [
      "Authored and published OpenCleaner for Mac, featuring squarified treemaps and direct Mach Kernel RAM compaction.",
      "Built Win+V for Mac, introducing zero-latency clipboard auto-pasting and global Carbon hotkeys to macOS.",
      "Engineered hardware-reactive utilities leveraging Apple Silicon kinetic vibration sensors (Hit Mac Hard & Soft).",
      "Implemented automated CI/CD DMG packaging pipelines using GitHub Actions and native shell build tooling.",
    ],
    skills: [
      "Swift 6",
      "SwiftUI",
      "Mach Kernel APIs",
      "AppKit",
      "Carbon Events",
      "Git & GitHub Actions",
      "SPM",
    ],
  },
];
