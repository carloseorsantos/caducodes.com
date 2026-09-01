"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, Menu, X, Command } from "lucide-react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Apps", href: "#apps" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Stack", href: "#stack" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-3.5 pointer-events-none">
      <div
        className={`pointer-events-auto flex items-center justify-between w-full max-w-4xl px-4 md:px-5 py-2 rounded-full border transition-all duration-200 ${
          scrolled
            ? "bg-[#141416]/80 backdrop-blur-xl border-white/[0.1] shadow-2xl"
            : "bg-[#141416]/50 backdrop-blur-md border-white/[0.06]"
        }`}
      >
        {/* Brand Monogram */}
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-semibold text-white tracking-tight group"
        >
          <span className="w-6 h-6 rounded-lg bg-[#27272a] border border-white/10 flex items-center justify-center text-[11px] font-mono font-bold text-zinc-200 group-hover:border-zinc-500 transition-colors">
            CS
          </span>
          <span className="text-zinc-200 font-medium">
            caducodes<span className="text-zinc-500 font-normal">.com</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-0.5 text-xs font-medium text-[#a1a1a6]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 rounded-full hover:text-white hover:bg-white/[0.06] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls & Socials */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href="https://github.com/carloseorsantos"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-full text-[#86868b] hover:text-white hover:bg-white/[0.06] transition-colors"
            title="GitHub Profile"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/carloseorsantos/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-full text-[#86868b] hover:text-white hover:bg-white/[0.06] transition-colors"
            title="LinkedIn Profile"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="px-3 py-1 text-xs font-medium rounded-full bg-white text-black hover:bg-zinc-200 transition-colors ml-1"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-1 rounded-full text-zinc-400 hover:text-white"
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="pointer-events-auto absolute top-16 left-4 right-4 p-4 rounded-2xl bg-[#141416]/95 backdrop-blur-2xl border border-white/10 shadow-2xl flex flex-col gap-2 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="px-3 py-2 text-sm text-zinc-300 hover:text-white rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="h-px bg-white/10 my-1" />
          <div className="flex items-center justify-between px-2 pt-1">
            <div className="flex items-center gap-3 text-zinc-400">
              <a href="https://github.com/carloseorsantos" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/in/carloseorsantos/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="px-3 py-1 text-xs font-medium rounded-full bg-white text-black"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
