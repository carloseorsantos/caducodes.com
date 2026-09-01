"use client";

import React from "react";
import { experiences } from "@/data/experience";
import { ExternalLink, Building2, Terminal } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-12 border-t border-white/[0.08]">
      <div className="max-w-4xl mx-auto px-4 md:px-6 space-y-6">
        <div className="space-y-1">
          <h2 className="text-xl font-bold text-white tracking-tight">
            Work Experience
          </h2>
          <p className="text-sm text-[#86868b]">
            Professional engineering history delivering enterprise systems and desktop software.
          </p>
        </div>

        {/* Experience Rows */}
        <div className="rounded-2xl border border-white/[0.08] bg-[#121214] divide-y divide-white/[0.06] overflow-hidden">
          {experiences.map((exp, idx) => (
            <div key={idx} className="p-5 sm:p-6 space-y-4">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-semibold text-white">
                      {exp.role}
                    </h3>
                    {exp.companyUrl ? (
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-[#fa5a50] hover:underline inline-flex items-center gap-0.5"
                      >
                        <span>@{exp.company}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <span className="text-xs font-mono text-zinc-400">
                        @{exp.company}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-[#86868b]">
                  <span>{exp.period}</span>
                  <span>•</span>
                  <span>{exp.location}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#a1a1a6] leading-relaxed">
                {exp.description}
              </p>

              {/* Achievements */}
              <ul className="space-y-1.5 text-xs text-zinc-300">
                {exp.achievements.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-zinc-500 mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1 font-mono text-[10px]">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 rounded bg-white/[0.04] text-[#86868b] border border-white/[0.04]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
