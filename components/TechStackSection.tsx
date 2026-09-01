"use client";

import React from "react";
import { skillCategories } from "@/data/skills";

export function TechStackSection() {
  return (
    <section id="stack" className="py-12 border-t border-white/[0.08]">
      <div className="max-w-4xl mx-auto px-4 md:px-6 space-y-6">
        <div className="space-y-1">
          <h2 className="text-xl font-bold text-white tracking-tight">
            Technical Stack & Capabilities
          </h2>
          <p className="text-sm text-[#86868b]">
            Technologies, frameworks, and system APIs used across desktop and cloud projects.
          </p>
        </div>

        {/* 4-Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl border border-white/[0.08] bg-[#121214] space-y-3"
            >
              <div>
                <h3 className="text-sm font-semibold text-white">
                  {category.title}
                </h3>
                <p className="text-xs text-[#86868b]">{category.subtitle}</p>
              </div>

              <div className="space-y-2 pt-1">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="p-2.5 rounded-lg bg-black/40 border border-white/[0.04] space-y-0.5"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-medium text-zinc-200">{skill.name}</span>
                      {skill.level && (
                        <span className="text-[10px] font-mono text-[#71717a]">
                          {skill.level}
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-[#86868b] leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
