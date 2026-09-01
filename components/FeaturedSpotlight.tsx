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

          {/* Authentic macOS Window Frame */}
          <MacWindowMockup
            title="OpenCleaner"
            badge="Pure SwiftUI"
            headerRight={
              <div className="flex items-center gap-2 font-mono text-[10px] text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Mach Kernel Active</span>
              </div>
            }
          >
            <div className="grid grid-cols-1 md:grid-cols-12 min-h-[300px] text-xs">
              {/* macOS Sidebar */}
              <div className="md:col-span-4 p-3 border-r border-white/[0.06] bg-[#121214]/60 space-y-1 select-none">
                <div className="px-2 py-1 text-[10px] font-mono uppercase text-[#71717a] font-semibold tracking-wider">
                  Analysis
                </div>
                <button
                  onClick={() => setCleanerTab("treemap")}
                  className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-left transition-colors ${
                    cleanerTab === "treemap"
                      ? "bg-white/[0.08] text-white font-medium"
                      : "text-[#a1a1a6] hover:text-white hover:bg-white/[0.03]"
                  }`}
                >
                  <PieChart className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Squarified Treemap</span>
                </button>
                <button
                  onClick={() => setCleanerTab("storage")}
                  className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-left transition-colors ${
                    cleanerTab === "storage"
                      ? "bg-white/[0.08] text-white font-medium"
                      : "text-[#a1a1a6] hover:text-white hover:bg-white/[0.03]"
                  }`}
                >
                  <HardDrive className="w-3.5 h-3.5 text-blue-400" />
                  <span>Storage Breakdown</span>
                </button>

                <div className="px-2 pt-3 pb-1 text-[10px] font-mono uppercase text-[#71717a] font-semibold tracking-wider">
                  Optimization
                </div>
                <button
                  onClick={() => setCleanerTab("ram")}
                  className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-left transition-colors ${
                    cleanerTab === "ram"
                      ? "bg-white/[0.08] text-white font-medium"
                      : "text-[#a1a1a6] hover:text-white hover:bg-white/[0.03]"
                  }`}
                >
                  <Cpu className="w-3.5 h-3.5 text-orange-400" />
                  <span>Mach Kernel RAM</span>
                </button>
                <button
                  onClick={() => setCleanerTab("dev")}
                  className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-left transition-colors ${
                    cleanerTab === "dev"
                      ? "bg-white/[0.08] text-white font-medium"
                      : "text-[#a1a1a6] hover:text-white hover:bg-white/[0.03]"
                  }`}
                >
                  <Code2 className="w-3.5 h-3.5 text-purple-400" />
                  <span>Project Purge</span>
                </button>
              </div>

              {/* macOS Main Panel */}
              <div className="md:col-span-8 p-4 bg-[#0a0a0c] flex flex-col justify-between space-y-4">
                {cleanerTab === "treemap" && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-[11px] font-mono text-[#86868b]">
                      <span>Squarified Treemap (Bruls et al.)</span>
                      <span className="text-emerald-400">24.6 GB Scan Complete</span>
                    </div>

                    {/* Treemap Geometry Visualization */}
                    <div className="grid grid-cols-12 grid-rows-3 gap-1.5 h-44 rounded-lg overflow-hidden p-1 bg-[#121214] border border-white/[0.06]">
                      <div className="col-span-7 row-span-2 p-2 rounded bg-[#1c2e24] border border-emerald-500/30 flex flex-col justify-between">
                        <span className="font-semibold text-emerald-200 text-xs">Xcode DerivedData</span>
                        <span className="text-[10px] font-mono text-emerald-400">14.2 GB</span>
                      </div>
                      <div className="col-span-5 row-span-2 p-2 rounded bg-[#1b2533] border border-blue-500/30 flex flex-col justify-between">
                        <span className="font-semibold text-blue-200 text-xs">node_modules</span>
                        <span className="text-[10px] font-mono text-blue-400">4.8 GB</span>
                      </div>
                      <div className="col-span-4 row-span-1 p-1.5 rounded bg-[#2a2218] border border-orange-500/30 flex items-center justify-between">
                        <span className="text-[10px] text-orange-200">Safari & Chrome</span>
                        <span className="text-[9px] font-mono text-orange-400">3.1 GB</span>
                      </div>
                      <div className="col-span-5 row-span-1 p-1.5 rounded bg-[#271b2d] border border-purple-500/30 flex items-center justify-between">
                        <span className="text-[10px] text-purple-200">.venv / pycache</span>
                        <span className="text-[9px] font-mono text-purple-400">1.9 GB</span>
                      </div>
                      <div className="col-span-3 row-span-1 p-1.5 rounded bg-[#18181b] border border-white/10 flex items-center justify-between">
                        <span className="text-[10px] text-zinc-300">Logs</span>
                        <span className="text-[9px] font-mono text-zinc-500">650 MB</span>
                      </div>
                    </div>
                  </div>
                )}

                {cleanerTab === "storage" && (
                  <div className="space-y-4 py-2">
                    <div className="flex items-center justify-between text-xs font-mono text-[#86868b]">
                      <span>Macintosh HD (APFS)</span>
                      <span className="text-zinc-200 font-semibold">184.2 GB / 512 GB</span>
                    </div>

                    {/* Apple System Storage Bar */}
                    <div className="w-full h-3.5 rounded-full overflow-hidden flex bg-[#1c1c1e] border border-white/[0.08]">
                      <div className="bg-[#2997ff] h-full w-[45%]" title="Applications" />
                      <div className="bg-[#30d158] h-full w-[25%]" title="Developer" />
                      <div className="bg-[#ff9f0a] h-full w-[15%]" title="Caches" />
                      <div className="bg-[#bf5af2] h-full w-[8%]" title="System Data" />
                      <div className="bg-[#48484a] h-full w-[7%]" title="Free" />
                    </div>

                    <div className="grid grid-cols-4 gap-2 text-[10px] font-mono pt-1">
                      <div className="flex items-center gap-1.5 text-zinc-300">
                        <span className="w-2 h-2 rounded-full bg-[#2997ff]" />
                        <span>Apps 82 GB</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-zinc-300">
                        <span className="w-2 h-2 rounded-full bg-[#30d158]" />
                        <span>Dev 46 GB</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-zinc-300">
                        <span className="w-2 h-2 rounded-full bg-[#ff9f0a]" />
                        <span>Caches 28 GB</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-zinc-300">
                        <span className="w-2 h-2 rounded-full bg-[#bf5af2]" />
                        <span>System 14 GB</span>
                      </div>
                    </div>
                  </div>
                )}

                {cleanerTab === "ram" && (
                  <div className="space-y-3 py-1">
                    <div className="flex items-center justify-between text-xs font-mono text-[#86868b]">
                      <span>Mach Kernel Memory Statistics</span>
                      <span className="text-emerald-400 font-semibold">16.0 GB Physical</span>
                    </div>

                    <div className="grid grid-cols-4 gap-2 text-center text-xs font-mono">
                      <div className="p-2 rounded-lg bg-[#141416] border border-white/[0.06]">
                        <div className="text-emerald-400 font-bold">6.2 GB</div>
                        <div className="text-[10px] text-[#86868b]">Active</div>
                      </div>
                      <div className="p-2 rounded-lg bg-[#141416] border border-white/[0.06]">
                        <div className="text-orange-400 font-bold">3.1 GB</div>
                        <div className="text-[10px] text-[#86868b]">Wired</div>
                      </div>
                      <div className="p-2 rounded-lg bg-[#141416] border border-white/[0.06]">
                        <div className="text-purple-400 font-bold">2.2 GB</div>
                        <div className="text-[10px] text-[#86868b]">Compressed</div>
                      </div>
                      <div className="p-2 rounded-lg bg-[#141416] border border-white/[0.06]">
                        <div className="text-zinc-200 font-bold">4.5 GB</div>
                        <div className="text-[10px] text-[#86868b]">Free</div>
                      </div>
                    </div>

                    <div className="p-2 rounded-lg bg-emerald-500/[0.08] border border-emerald-500/20 text-[11px] text-emerald-300 font-mono flex items-center justify-between">
                      <span>Status:</span>
                      <span>3.4 GB Inactive RAM Purged (vm_deallocate) ✅</span>
                    </div>
                  </div>
                )}

                {cleanerTab === "dev" && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-[#86868b] font-mono">
                      <span>Workspace Build Artifacts</span>
                      <span className="text-zinc-300">18 Directories</span>
                    </div>
                    <div className="space-y-1 text-[11px] font-mono">
                      <div className="flex items-center justify-between p-1.5 rounded bg-[#141416] border border-white/[0.04]">
                        <span className="text-zinc-300 truncate">~/Code/backend/target</span>
                        <span className="text-purple-400 shrink-0">1.8 GB</span>
                      </div>
                      <div className="flex items-center justify-between p-1.5 rounded bg-[#141416] border border-white/[0.04]">
                        <span className="text-zinc-300 truncate">~/Code/web/node_modules</span>
                        <span className="text-blue-400 shrink-0">820 MB</span>
                      </div>
                      <div className="flex items-center justify-between p-1.5 rounded bg-[#141416] border border-white/[0.04]">
                        <span className="text-zinc-300 truncate">~/Code/ai/.venv</span>
                        <span className="text-emerald-400 shrink-0">650 MB</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Footer specs */}
                <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-[#71717a]">
                  <span>Zero Telemetry • Privacy First</span>
                  <span>Mach Kernel direct bindings</span>
                </div>
              </div>
            </div>
          </MacWindowMockup>

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

          {/* Authentic Floating HUD Popup Mockup */}
          <MacWindowMockup
            title="Win+V Clipboard Panel"
            badge="⌥ + V"
            headerRight={
              <div className="flex items-center gap-1.5 font-mono text-[10px] text-blue-400">
                <Zap className="w-3 h-3" />
                <span>Auto-Paste (CGEvent)</span>
              </div>
            }
          >
            <div className="p-4 bg-[#0a0a0c] space-y-3 font-sans">
              {/* Search Bar */}
              <div className="relative">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#71717a]" />
                <input
                  type="text"
                  placeholder="Search clipboard history..."
                  readOnly
                  className="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg bg-[#141416] border border-white/[0.08] text-zinc-200 placeholder-[#636366] focus:outline-none"
                />
              </div>

              {/* Segmented Control Pills */}
              <div className="flex items-center gap-1 text-[11px] font-mono select-none">
                <button
                  onClick={() => setWinVFilter("all")}
                  className={`px-2.5 py-0.5 rounded-md transition-colors ${
                    winVFilter === "all"
                      ? "bg-white/[0.1] text-white font-medium"
                      : "text-[#86868b] hover:text-white"
                  }`}
                >
                  All (48)
                </button>
                <button
                  onClick={() => setWinVFilter("pinned")}
                  className={`px-2.5 py-0.5 rounded-md transition-colors flex items-center gap-1 ${
                    winVFilter === "pinned"
                      ? "bg-white/[0.1] text-white font-medium"
                      : "text-[#86868b] hover:text-white"
                  }`}
                >
                  <Pin className="w-2.5 h-2.5" />
                  <span>Pinned (5)</span>
                </button>
                <button
                  onClick={() => setWinVFilter("colors")}
                  className={`px-2.5 py-0.5 rounded-md transition-colors ${
                    winVFilter === "colors"
                      ? "bg-white/[0.1] text-white font-medium"
                      : "text-[#86868b] hover:text-white"
                  }`}
                >
                  Colors
                </button>
                <button
                  onClick={() => setWinVFilter("code")}
                  className={`px-2.5 py-0.5 rounded-md transition-colors ${
                    winVFilter === "code"
                      ? "bg-white/[0.1] text-white font-medium"
                      : "text-[#86868b] hover:text-white"
                  }`}
                >
                  Code
                </button>
              </div>

              {/* Simulated Clipboard Rows */}
              <div className="space-y-1.5">
                {/* Row 1 */}
                <div className="p-2.5 rounded-lg bg-[#141416] border border-white/[0.06] hover:border-white/[0.15] transition-all flex items-center justify-between text-xs cursor-pointer group">
                  <div className="flex items-center gap-2.5">
                    <span className="w-4 h-4 rounded bg-[#30d158] border border-white/20 shadow-sm shrink-0" />
                    <div>
                      <span className="font-mono text-zinc-200 font-semibold">#30d158</span>
                      <span className="text-[10px] text-[#86868b] ml-2 font-mono">Apple Green Swatch</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="key-badge">⌥ 1</span>
                    <Pin className="w-3 h-3 text-amber-400 fill-amber-400" />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="p-2.5 rounded-lg bg-[#141416] border border-white/[0.06] hover:border-white/[0.15] transition-all flex items-center justify-between text-xs cursor-pointer group">
                  <div className="flex items-center gap-2.5 truncate max-w-[280px]">
                    <Code2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span className="font-mono text-zinc-300 truncate">
                      git commit -m &quot;feat: carbon event hotkey&quot;
                    </span>
                  </div>
                  <span className="key-badge">⌥ 2</span>
                </div>

                {/* Row 3 */}
                <div className="p-2.5 rounded-lg bg-[#141416] border border-white/[0.06] hover:border-white/[0.15] transition-all flex items-center justify-between text-xs cursor-pointer group">
                  <div className="flex items-center gap-2.5 truncate max-w-[280px]">
                    <ExternalLink className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    <span className="font-mono text-zinc-300 truncate">
                      https://caducodes.com
                    </span>
                  </div>
                  <span className="key-badge">⌥ 3</span>
                </div>
              </div>

              {/* Status footer */}
              <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-[#71717a]">
                <span>Anchored at Cursor (X, Y)</span>
                <span>LSUIElement (No Dock icon)</span>
              </div>
            </div>
          </MacWindowMockup>

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
