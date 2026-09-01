export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: "macOS Native" | "Full-Stack Web" | "Systems & Cloud" | "macOS Native & Cloud";
  isPinned: boolean;
  githubUrl: string;
  downloadUrl?: string;
  liveUrl?: string;
  techStack: string[];
  accentColor: "emerald" | "indigo" | "amber" | "purple" | "cyan";
  installCommand?: string;
  stars?: number;
  featuredBadge?: string;
  highlights: string[];
  architecture: {
    title: string;
    details: string[];
  };
  keyFeatures: {
    icon: string;
    title: string;
    description: string;
  }[];
}

export const projects: Project[] = [
  {
    id: "open-cleaner-for-mac",
    title: "OpenCleaner for Mac",
    tagline: "Native macOS disk visualizer, RAM optimizer & system junk cleaner in pure SwiftUI.",
    description:
      "A free, 100% open-source macOS utility designed to visualize disk usage with squarified treemaps, safely purge inactive Mach Kernel RAM, deep-clean residual junk, completely uninstall apps, and purge developer build artifacts across JavaScript, Python, Rust, Swift, and Java.",
    category: "macOS Native",
    isPinned: true,
    featuredBadge: "Pinned Open-Source App",
    githubUrl: "https://github.com/carloseorsantos/open-cleaner-for-mac",
    downloadUrl:
      "https://github.com/carloseorsantos/open-cleaner-for-mac/releases/latest/download/OpenCleaner-macOS.dmg",
    techStack: ["Swift 6", "SwiftUI", "Mach Kernel APIs", "AppKit", "SPM"],
    accentColor: "emerald",
    installCommand:
      "git clone https://github.com/carloseorsantos/open-cleaner-for-mac.git && cd open-cleaner-for-mac && ./Scripts/install.sh",
    highlights: [
      "Interactive Squarified Treemap Disk Analyzer (Bruls et al. algorithm)",
      "Direct Mach Kernel RAM Purge & Real-Time Page Statistics",
      "Smart App Uninstaller scanning 10+ remnant system directories",
      "Developer Project Purge for node_modules, .venv, target, DerivedData",
      "1-Click System Maintenance (DNS flush, LaunchServices rebuild, SQLite VACUUM)",
      "Zero telemetry, zero analytics, completely on-device and private",
    ],
    architecture: {
      title: "Native Architecture & Mach Kernel Integration",
      details: [
        "Direct Mach Kernel VM statistics queries for Active, Wired, Compressed, and Inactive memory pages.",
        "Custom Squarified Treemap layout algorithm with responsive animated zooming and folder drill-downs.",
        "Asynchronous filesystem crawling using Swift concurrency with active running process guards.",
        "Automated CI/CD release workflow generating signed DMG installers with zero external dependencies.",
      ],
    },
    keyFeatures: [
      {
        icon: "PieChart",
        title: "Squarified Treemap Disk Visualizer",
        description:
          "Proportional rectangular heatmaps to immediately spot large folders with interactive drill-down navigation and right-click Finder context actions.",
      },
      {
        icon: "Cpu",
        title: "Mach Kernel RAM Optimizer",
        description:
          "Real-time breakdown of memory allocation with 1-click memory compaction to reclaim gigabytes of unlinked cache memory.",
      },
      {
        icon: "Trash2",
        title: "Smart App Uninstaller",
        description:
          "Finds hidden residual files across Application Support, Preferences, Saved Application State, and Containers to ensure clean app removals.",
      },
      {
        icon: "Code2",
        title: "Developer Project Purge",
        description:
          "Scans code directories for stale heavy build artifacts (node_modules, .build, target, .venv) with inactivity age filters.",
      },
    ],
  },
  {
    id: "win-v-for-mac",
    title: "Win+V for Mac",
    tagline: "Native clipboard history manager bringing the Windows + V workflow to macOS.",
    description:
      "A lightweight, cursor-following clipboard manager built with Swift 6 and SwiftUI. Features zero-latency auto-paste, multi-type history preview (formatted text, images, hex colors, URLs), instant search, and favorite pinning.",
    category: "macOS Native",
    isPinned: true,
    featuredBadge: "Pinned Open-Source App",
    githubUrl: "https://github.com/carloseorsantos/win-v-for-mac",
    downloadUrl:
      "https://github.com/carloseorsantos/win-v-for-mac/releases/latest/download/WinPlusV-macOS.dmg",
    techStack: ["Swift 6", "SwiftUI", "Carbon Event API", "CGEvent", "AppKit"],
    accentColor: "indigo",
    installCommand:
      "git clone https://github.com/carloseorsantos/win-v-for-mac.git && cd win-v-for-mac && ./Scripts/install.sh",
    highlights: [
      "Global ⌥ + V (Option + V) HotKey registered via Carbon Events API",
      "Floating non-activating HUD anchored directly adjacent to mouse coordinates",
      "Hardware-level CGEvent keystroke simulation for zero-latency auto-paste",
      "Multi-type content detection (Code, Images, Hex Swatches, Parsed URLs)",
      "Search, Filter Tabs, and Permanent Pinning for frequent snippets",
      "MenuBarExtra companion running in background as LSUIElement with zero Dock clutter",
    ],
    architecture: {
      title: "Low-Level Event Handling & HUD Engineering",
      details: [
        "NSPasteboard polling engine with hash deduplication to capture items without CPU overhead.",
        "Non-activating NSPanel with macOS material vibrancy that doesn't steal window key focus.",
        "Carbon Event HotKey handling combined with CoreGraphics CGEvent keyboard synthesis for auto-paste.",
        "On-device JSON persistence with configurable capacity limits and pin protection.",
      ],
    },
    keyFeatures: [
      {
        icon: "MousePointerClick",
        title: "Cursor-Following HUD",
        description:
          "The panel dynamically positions itself next to your active cursor so you never break typing context.",
      },
      {
        icon: "Zap",
        title: "Zero-Latency Auto-Paste",
        description:
          "Press Enter, click, or hit number keys 1–9 to paste immediately into your focused text field or IDE.",
      },
      {
        icon: "Palette",
        title: "Hex Color & Image Previews",
        description:
          "Automatically identifies copied hex codes (#HEX) with interactive color swatches, plus high-res image previews.",
      },
      {
        icon: "Pin",
        title: "Snippet Pinning & Search",
        description:
          "Pin critical snippets permanently and search through thousands of history items with instant fuzzy filtering.",
      },
    ],
  },
  {
    id: "hit-mac-hard-n-soft",
    title: "Hit Mac Hard & Soft",
    tagline: "Slap & tap detection menu bar utility for Apple Silicon Macs.",
    description:
      "An experimental and fun macOS menu bar app that detects physical taps and slaps on your MacBook chassis using built-in hardware sensors, triggering custom audio responses and automated system actions.",
    category: "macOS Native",
    isPinned: false,
    githubUrl: "https://github.com/carloseorsantos/hit-mac-hard-n-soft",
    techStack: ["Swift", "SwiftUI", "Hardware Sensors", "AudioToolbox"],
    accentColor: "amber",
    highlights: [
      "Apple Silicon sensor telemetry for kinetic vibration detection",
      "Custom audio feedback triggers with zero lag",
      "Lightweight MenuBar app with negligible battery impact",
    ],
    architecture: {
      title: "Hardware Sensor Telemetry",
      details: [
        "Reads real-time micro-accelerations from onboard sensors to distinguish gentle taps from firm slaps.",
        "Discreet background listener with calibrated threshold filters to avoid false positives.",
      ],
    },
    keyFeatures: [
      {
        icon: "Sparkles",
        title: "Physical Vibration Sensing",
        description:
          "Reacts dynamically to physical interactions on your MacBook chassis.",
      },
      {
        icon: "Volume2",
        title: "Custom Sound Effects",
        description:
          "Play responsive retro audio clips or run custom automated shortcuts.",
      },
    ],
  },
  {
    id: "heeey",
    title: "Heeey! Live Marquee",
    tagline: "Floating desktop retro marquee for live crowd reactions via heeey.click.",
    description:
      "A floating pixel-art retro marquee application for macOS that connects directly to heeey.click, allowing friends, colleagues, or stream viewers to drop live messages and reactions on your screen in real time.",
    category: "macOS Native & Cloud",
    isPinned: false,
    githubUrl: "https://github.com/carloseorsantos/heeey",
    liveUrl: "https://heeey.click",
    techStack: ["Swift", "SwiftUI", "WebSockets", "Cloud Infrastructure"],
    accentColor: "purple",
    highlights: [
      "Real-time WebSocket message streaming from heeey.click",
      "Floating transparent macOS desktop overlay",
      "Pixel-art retro typography with configurable banners",
    ],
    architecture: {
      title: "Real-Time WebSocket Integration",
      details: [
        "Bidirectional WebSocket transport streaming messages from web clients into native SwiftUI views.",
        "Always-on-top transparent canvas with window dragging and click-through options.",
      ],
    },
    keyFeatures: [
      {
        icon: "Radio",
        title: "Live Stream Companion",
        description:
          "Receive real-time cheers, reactions, and shoutouts floating cleanly across your screen.",
      },
      {
        icon: "MessageSquare",
        title: "Instant Webhook & Web App",
        description:
          "Viewers simply open the web app to send messages directly to your desktop.",
      },
    ],
  },
  {
    id: "quanto-rendeu",
    title: "Quanto Rendeu?",
    tagline: "Financial investment yield simulator & compound interest calculator.",
    description:
      "A modern, responsive financial simulation tool that helps users calculate investment yields, compound growth trajectories, and inflation-adjusted future returns with interactive real-time projections.",
    category: "Full-Stack Web",
    isPinned: false,
    liveUrl: "https://v1-quantorendeu.vercel.app/",
    githubUrl: "https://github.com/carloseorsantos",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    accentColor: "cyan",
    highlights: [
      "Interactive compound interest projection engine",
      "Real-time calculation graphs with inflation adjustments",
      "Mobile-optimized responsive design with slider controls",
    ],
    architecture: {
      title: "Financial Math Engine",
      details: [
        "Client-side reactive computation pipeline delivering instant 60fps graph updates.",
        "Modern component-driven UI built with Tailwind CSS and Next.js App Router.",
      ],
    },
    keyFeatures: [
      {
        icon: "TrendingUp",
        title: "Yield Simulation",
        description:
          "Accurately calculate monthly and annual investment returns across varying interest rates.",
      },
      {
        icon: "Sliders",
        title: "Interactive Controls",
        description:
          "Adjust investment horizons, monthly contributions, and tax rates dynamically.",
      },
    ],
  },
];
