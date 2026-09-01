"use client";

import React from "react";
import Image from "next/image";
import { Github, Linkedin, Mail, ArrowDown, Terminal } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        {/* Profile Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-8">
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border border-white/[0.12] bg-[#1a1a1e] shadow-lg shrink-0">
            <Image
              src="https://github.com/carloseorsantos.png"
              alt="Carlos Santos"
              width={96}
              height={96}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Carlos Santos
              </h1>
              <span className="text-xs font-mono text-[#86868b] bg-white/[0.06] border border-white/[0.08] px-2 py-0.5 rounded-full">
                @caducodes
              </span>
            </div>
            <p className="text-sm sm:text-base font-medium text-[#a1a1a6]">
              Software Engineer & macOS Developer
            </p>
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#86868b] pt-0.5">
              <span>📍 Campinas, Brazil</span>
              <span>•</span>
              <span className="text-emerald-400">● Open to remote roles</span>
            </div>
          </div>
        </div>

        {/* Narrative & Bio */}
        <div className="space-y-4 max-w-3xl">
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
            I craft native macOS utilities in pure <span className="text-white font-medium">Swift 6 & SwiftUI</span> leveraging direct <span className="text-white font-medium">Mach Kernel APIs</span> and low-level system events. Concurrently, I build enterprise web platforms and distributed services at <span className="text-white font-medium">CI&T</span> using <span className="text-white font-medium">Next.js, TypeScript, and Java / Spring Boot</span>.
          </p>

          {/* Quick Action Links */}
          <div className="flex flex-wrap items-center gap-2.5 pt-2">
            <a
              href="#apps"
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-full bg-white text-black hover:bg-zinc-200 transition-colors shadow-sm"
            >
              <span>Explore macOS Apps</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://github.com/carloseorsantos"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded-full bg-[#18181b] hover:bg-[#27272a] text-zinc-300 hover:text-white border border-white/[0.08] transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/carloseorsantos/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded-full bg-[#18181b] hover:bg-[#27272a] text-zinc-300 hover:text-white border border-white/[0.08] transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>

            <a
              href="mailto:carloseorsantos@gmail.com"
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded-full bg-[#18181b] hover:bg-[#27272a] text-zinc-300 hover:text-white border border-white/[0.08] transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
