"use client";

import React, { useState } from "react";
import { Project } from "@/data/projects";
import { MacWindowMockup } from "./MacWindowMockup";
import {
  Download,
  Github,
  PieChart,
  Cpu,
  Code2,
  Zap,
  Pin,
  Check,
  Copy,
  ExternalLink,
  Terminal,
  Search,
  HardDrive,
  Trash2,
  Wrench,
} from "lucide-react";

interface FeaturedSpotlightProps {
  onSelectProject: (project: Project) => void;
  projects: Project[];
}

export function FeaturedSpotlight({
  onSelectProject,
  projects,
}: FeaturedSpotlightProps) {
  const openCleaner = projects.find((p) => p.id === "open-cleaner-for-mac")!;
  const winPlusV = projects.find((p) => p.id === "win-v-for-mac")!;

  // Interactive tab inside OpenCleaner window
  const [cleanerTab, setCleanerTab] = useState<"treemap" | "storage" | "ram" | "dev">("treemap");

  // Interactive search & filter inside Win+V HUD
  const [winVFilter, setWinVFilter] = useState<"all" | "pinned" | "colors" | "code">("all");
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);

  const copyCommand = (cmd: string, id: string) => {
    navigator.clipboard.writeText(cmd);
    setCopiedCmd(id);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  return (
    <section id="apps" className="py-12 border-t border-white/[0.08]">
      <div className="max-w-4xl mx-auto px-4 md:px-6 space-y-16">
        {/* Section Title */}
        <div className="space-y-1.5">
          <h2 className="text-xl font-bold text-white tracking-tight">
            Flagship Native macOS Utilities
          </h2>
          <p className="text-sm text-[#86868b]">
            Open-source desktop applications built with Swift 6, SwiftUI, and low-level system frameworks.
          </p>
        </div>

        {/* ==================================================== */}
        {/* APP 1: OpenCleaner for Mac                          */}
        {/* ==================================================== */}
        <div className="space-y-6">
          {/* App Header Info */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-white/[0.06] pb-3">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-white tracking-tight">
                  OpenCleaner for Mac
                </h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  v1.2.0 • Swift 6
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#a1a1a6] mt-0.5">
                Native disk visualizer, Mach Kernel RAM optimizer & developer build purger.
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <a
                href={openCleaner.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-white text-black hover:bg-zinc-200 transition-colors shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download .DMG</span>
              </a>
              <a
                href={openCleaner.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-[#18181b] hover:bg-[#27272a] text-zinc-300 hover:text-white border border-white/[0.08] transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Source</span>
              </a>
            </div>
          </div>

          {/* Quick Terminal Snippet */}
          <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#121214] border border-white/[0.06] text-xs font-mono">
            <div className="flex items-center gap-2 text-[#a1a1a6] truncate">
              <Terminal className="w-3.5 h-3.5 text-[#86868b]" />
              <span className="truncate">git clone https://github.com/carloseorsantos/open-cleaner-for-mac.git</span>
            </div>
            <button
              onClick={() => copyCommand("git clone https://github.com/carloseorsantos/open-cleaner-for-mac.git", "cleaner")}
              className="flex items-center gap-1 px-2 py-1 rounded bg-white/[0.06] hover:bg-white/[0.12] text-[#86868b] hover:text-white transition-colors shrink-0"
            >
              {copiedCmd === "cleaner" ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
              <span>{copiedCmd === "cleaner" ? "Copied" : "Copy"}</span>
            </button>
          </div>
        </div>

        {/* ==================================================== */}
        {/* APP 2: Win+V for Mac                                */}
        {/* ==================================================== */}
        <div className="space-y-6 pt-6">
          {/* App Header Info */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-white/[0.06] pb-3">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Win+V for Mac
                </h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  v1.1.0 • Swift 6
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#a1a1a6] mt-0.5">
                Native clipboard history bringing the Windows + V workflow to macOS with cursor HUD & auto-paste.
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <a
                href={winPlusV.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-white text-black hover:bg-zinc-200 transition-colors shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download .DMG</span>
              </a>
              <a
                href={winPlusV.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-[#18181b] hover:bg-[#27272a] text-zinc-300 hover:text-white border border-white/[0.08] transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Source</span>
              </a>
            </div>
          </div>

          {/* Quick Terminal Snippet */}
          <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#121214] border border-white/[0.06] text-xs font-mono">
            <div className="flex items-center gap-2 text-[#a1a1a6] truncate">
              <Terminal className="w-3.5 h-3.5 text-[#86868b]" />
              <span className="truncate">git clone https://github.com/carloseorsantos/win-v-for-mac.git</span>
            </div>
            <button
              onClick={() => copyCommand("git clone https://github.com/carloseorsantos/win-v-for-mac.git", "winv")}
              className="flex items-center gap-1 px-2 py-1 rounded bg-white/[0.06] hover:bg-white/[0.12] text-[#86868b] hover:text-white transition-colors shrink-0"
            >
              {copiedCmd === "winv" ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
              <span>{copiedCmd === "winv" ? "Copied" : "Copy"}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
