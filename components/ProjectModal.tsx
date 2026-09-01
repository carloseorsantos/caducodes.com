"use client";

import React, { useState } from "react";
import { Project } from "@/data/projects";
import {
  X,
  Github,
  Download,
  ExternalLink,
  Terminal,
  Check,
  Copy,
  Cpu,
  Sparkles,
} from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [copied, setCopied] = useState(false);

  if (!project) return null;

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-150">
      {/* Backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl bg-[#121214] border border-white/[0.1] shadow-2xl z-10 text-zinc-200">
        {/* Top Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-5 py-3.5 bg-[#18181b]/95 backdrop-blur-md border-b border-white/[0.08]">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 text-[11px] font-mono font-medium rounded bg-white/[0.06] text-zinc-300 border border-white/[0.06]">
              {project.category}
            </span>
            {project.featuredBadge && (
              <span className="px-2 py-0.5 text-[11px] font-mono rounded bg-white/[0.04] text-[#86868b]">
                {project.featuredBadge}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-[#86868b] hover:text-white hover:bg-white/[0.06] transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Header */}
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-[#a1a1a6] font-medium leading-snug">
              {project.tagline}
            </p>
            <p className="text-xs sm:text-sm text-[#86868b] leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-2.5 pt-1">
            {project.downloadUrl && (
              <a
                href={project.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white text-black font-semibold text-xs transition-colors shadow-sm hover:bg-zinc-200"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download DMG</span>
              </a>
            )}

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-zinc-200 border border-white/[0.06] text-xs font-medium transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub Repository</span>
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-zinc-200 border border-white/[0.06] text-xs font-medium transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Visit Live</span>
              </a>
            )}
          </div>

          {/* Source Install Command */}
          {project.installCommand && (
            <div className="rounded-xl border border-white/[0.06] bg-black/50 p-3.5 space-y-2">
              <div className="flex items-center justify-between text-xs text-[#86868b] font-mono">
                <span className="flex items-center gap-1.5">
                  <Terminal className="w-3 h-3 text-zinc-400" />
                  <span>Build & Install from Source</span>
                </span>
                <span className="text-[10px]">Terminal</span>
              </div>
              <div className="flex items-center justify-between gap-3 font-mono text-xs bg-black/60 px-3 py-2 rounded-lg border border-white/[0.04]">
                <span className="truncate text-zinc-300">{project.installCommand}</span>
                <button
                  onClick={() => handleCopy(project.installCommand!)}
                  className="flex items-center gap-1 px-2 py-0.5 text-[11px] rounded bg-white/[0.08] hover:bg-white/[0.15] text-[#86868b] hover:text-white transition-colors shrink-0"
                >
                  {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copied ? "Copied" : "Copy"}</span>
                </button>
              </div>
            </div>
          )}

          {/* Architecture Details */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white flex items-center gap-2">
              <Cpu className="w-4 h-4 text-emerald-400" />
              <span>{project.architecture.title}</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.architecture.details.map((detail, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-[#18181b] border border-white/[0.04] text-xs text-[#a1a1a6] flex items-start gap-2"
                >
                  <span className="text-zinc-500 mt-0.5">•</span>
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Features Matrix */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span>Core Features</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.keyFeatures.map((feature, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-[#18181b] border border-white/[0.04] space-y-1"
                >
                  <h4 className="text-xs font-semibold text-white">
                    {feature.title}
                  </h4>
                  <p className="text-[11px] text-[#86868b] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="space-y-2 pt-2 border-t border-white/[0.06]">
            <h4 className="text-[11px] font-mono uppercase text-[#71717a]">
              Stack & APIs
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-[11px] font-mono rounded bg-white/[0.04] text-[#86868b] border border-white/[0.04]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
