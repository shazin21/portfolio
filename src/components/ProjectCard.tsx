"use client";

import { Project } from "@/types/portfolio";
import { ExternalLink, CheckCircle2, ChevronRight } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";
import ArchitectureDiagram from "./ArchitectureDiagram";

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

export default function ProjectCard({ project, onOpenDetails }: ProjectCardProps) {
  return (
    <article className="card-glass rounded-2xl p-6 sm:p-7 flex flex-col justify-between bg-white dark:bg-[#10131c] border border-slate-200 dark:border-white/10 shadow-lg group relative">
      <div className="space-y-4">
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2">
          <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
            {project.badge}
          </span>
          <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
            {project.category}
          </span>
        </div>

        {/* Project Name */}
        <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
          {project.name}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Special Highlight notice if DocuMind */}
        {project.highlightNotice && (
          <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-900 dark:text-cyan-200 text-xs">
            <span className="font-semibold">Key Focus:</span> {project.highlightNotice}
          </div>
        )}

        {/* Disclaimer if Mental Health */}
        {project.disclaimer && (
          <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-900 dark:text-amber-200 text-[11px]">
            <span className="font-semibold">Notice:</span> {project.disclaimer}
          </div>
        )}

        {/* Metrics if Detectify or Face Recognition */}
        {project.metrics && (
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-xs font-mono">
            <span>{project.metrics.label}:</span>
            <strong className="font-bold">{project.metrics.value}</strong>
          </div>
        )}

        {/* Architecture Pipeline Preview */}
        <div className="pt-2">
          <ArchitectureDiagram
            title={project.architecture.title}
            description={project.architecture.description}
            nodes={project.architecture.nodes}
            compact
          />
        </div>

        {/* Key Features (first 3) */}
        <div className="space-y-1.5 pt-1">
          <span className="text-[11px] font-mono font-semibold uppercase text-slate-500 dark:text-slate-400">
            Core Features:
          </span>
          <div className="space-y-1">
            {project.keyFeatures.slice(0, 3).map((feat, fIdx) => (
              <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                <span className="truncate">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Pills */}
        <div className="pt-2 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 6).map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 text-slate-700 dark:text-slate-300"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 6 && (
            <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-slate-400">
              +{project.technologies.length - 6} more
            </span>
          )}
        </div>
      </div>

      {/* Card Actions Footer */}
      <div className="pt-6 mt-6 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
        <button
          type="button"
          onClick={() => onOpenDetails(project)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 group/btn"
        >
          <span>Architecture & Deep Dive</span>
          <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </button>

        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-slate-200 dark:border-white/10 bg-slate-100/70 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:text-cyan-500 transition-colors"
              aria-label={`${project.name} GitHub Repository`}
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-slate-200 dark:border-white/10 bg-slate-100/70 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:text-cyan-500 transition-colors"
              aria-label={`${project.name} Live Demo`}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
