"use client";

import React from "react";
import { Project } from "@/data/projects";
import {
  Volume2,
  Radio,
  TrendingUp,
  Github,
  ExternalLink,
  ArrowUpRight,
} from "lucide-react";

interface BentoProjectsProps {
  onSelectProject: (project: Project) => void;
  projects: Project[];
}

export function BentoProjects({
  onSelectProject,
  projects,
}: BentoProjectsProps) {
  const secondaryProjects = projects.filter((p) => !p.isPinned);

  const getProjectIcon = (id: string) => {
    switch (id) {
      case "hit-mac-hard-n-soft":
        return <Volume2 className="w-4 h-4 text-orange-400" />;
      case "heeey":
        return <Radio className="w-4 h-4 text-purple-400" />;
      default:
        return <TrendingUp className="w-4 h-4 text-blue-400" />;
    }
  };

  return (
    <section id="projects" className="py-12 border-t border-white/[0.08]">
      <div className="max-w-4xl mx-auto px-4 md:px-6 space-y-6">
        <div className="space-y-1">
          <h2 className="text-xl font-bold text-white tracking-tight">
            Other Software & Utilities
          </h2>
          <p className="text-sm text-[#86868b]">
            Sensor-based experiments, real-time WebSocket tools, and full-stack web simulators.
          </p>
        </div>

        {/* Clean Studio Rows */}
        <div className="rounded-2xl border border-white/[0.08] bg-[#121214] divide-y divide-white/[0.06] overflow-hidden">
          {secondaryProjects.map((project) => (
            <div
              key={project.id}
              className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors group"
            >
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#1c1c1e] border border-white/[0.08] flex items-center justify-center shrink-0 mt-0.5">
                  {getProjectIcon(project.id)}
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-semibold text-white group-hover:text-zinc-200">
                      {project.title}
                    </h3>
                    <span className="text-[10px] font-mono text-[#71717a]">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-xs text-[#a1a1a6] leading-relaxed max-w-xl">
                    {project.tagline}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1 font-mono text-[10px]">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-white/[0.04] text-[#86868b] border border-white/[0.04]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-zinc-200 transition-colors"
                  >
                    <span>Visit</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-zinc-200 transition-colors"
                  >
                    <Github className="w-3 h-3" />
                    <span>Source</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
