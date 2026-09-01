"use client";

import React, { useState } from "react";
import { Mail, Github, Linkedin, Copy, Check, ArrowUp } from "lucide-react";

export function ContactFooter() {
  const [copied, setCopied] = useState(false);
  const email = "carloseorsantos@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="py-16 border-t border-white/[0.08]">
      <div className="max-w-4xl mx-auto px-4 md:px-6 space-y-10">
        {/* Contact Card */}
        <div className="p-6 sm:p-8 rounded-2xl border border-white/[0.08] bg-[#121214] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <h2 className="text-lg font-bold text-white tracking-tight">
              Get in Touch
            </h2>
            <p className="text-xs sm:text-sm text-[#a1a1a6] max-w-md leading-relaxed">
              Available for native macOS desktop development, full-stack systems engineering, or technical consulting.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <button
              onClick={handleCopyEmail}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg bg-white text-black hover:bg-zinc-200 transition-colors shadow-sm"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? "Copied to Clipboard" : "Copy Email"}</span>
            </button>

            <a
              href={`mailto:${email}`}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded-lg bg-[#18181b] hover:bg-[#27272a] text-zinc-300 hover:text-white border border-white/[0.08] transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{email}</span>
            </a>
          </div>
        </div>

        {/* Footer Meta Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#71717a] font-mono pt-2">
          <div className="flex items-center gap-3">
            <span>caducodes.com • Carlos Santos</span>
            <span>•</span>
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/carloseorsantos"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                GitHub
              </a>
              <span>/</span>
              <a
                href="https://www.linkedin.com/in/carloseorsantos/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-[#86868b] hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
