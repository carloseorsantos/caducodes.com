"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FeaturedSpotlight } from "@/components/FeaturedSpotlight";
import { BentoProjects } from "@/components/BentoProjects";
import { ExperienceSection } from "@/components/ExperienceSection";
import { TechStackSection } from "@/components/TechStackSection";
import { ContactFooter } from "@/components/ContactFooter";
import { ProjectModal } from "@/components/ProjectModal";
import { projects, Project } from "@/data/projects";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <main className="relative min-h-screen bg-black text-[#f5f5f7]">
      {/* Header Navigation */}
      <Header />

      {/* Main Single-Page Sections */}
      <div>
        <Hero />
        <FeaturedSpotlight
          projects={projects}
          onSelectProject={(project) => setSelectedProject(project)}
        />
        <BentoProjects
          projects={projects}
          onSelectProject={(project) => setSelectedProject(project)}
        />
        <ExperienceSection />
        <TechStackSection />
        <ContactFooter />
      </div>

      {/* Deep-Dive Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </main>
  );
}
