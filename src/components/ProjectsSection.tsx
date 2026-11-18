"use client";

import { useState } from "react";
import { projects } from "@/data/portfolioData";
import { Project } from "@/types/portfolio";
import { FolderGit2, Sparkles, Filter } from "lucide-react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const filterCategories = [
  { label: "All Systems", value: "all" },
  { label: "Generative AI & RAG", value: "generative-ai" },
  { label: "Machine Learning", value: "machine-learning" },
  { label: "Computer Vision", value: "computer-vision" },
  { label: "Web & Applications", value: "web-apps" },
];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.categoryFilter === activeFilter);

  return (
    <section
      id="projects"
      aria-label="Featured Projects Section"
      className="relative py-20 lg:py-28 border-t border-slate-200 dark:border-white/5 bg-slate-50/30 dark:bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-medium text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 border border-cyan-500/20">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>FEATURED WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Engineered AI Projects
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-400">
              Production architectures, RAG pipelines, computer vision systems, and supervised ML implementations.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {filterCategories.map((cat) => (
              <button
                key={cat.value}
                type="button"
                onClick={() => setActiveFilter(cat.value)}
                className={`whitespace-nowrap px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  activeFilter === cat.value
                    ? "bg-cyan-500 text-white shadow-md shadow-cyan-500/20"
                    : "bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* Project Deep Dive Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
