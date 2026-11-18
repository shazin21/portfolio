"use client";

import { skillCategories } from "@/data/portfolioData";
import {
  BrainCircuit,
  Code2,
  Cpu,
  Wrench,
  Database,
  Terminal,
  Sparkles,
  Layers,
} from "lucide-react";

const categoryIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  BrainCircuit,
  Code: Code2,
  Cpu,
  Wrench,
  Database,
};

export default function SkillsSection() {
  return (
    <section
      id="skills"
      aria-label="Technical Skills Section"
      className="relative py-20 lg:py-28 border-t border-slate-200 dark:border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-medium text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 border border-cyan-500/20">
            <BrainCircuit className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Technical Stack & Methodologies
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Curated engineering competencies organized across language models, frameworks, databases, and research operations.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => {
            const Icon = categoryIconMap[category.iconName] || Layers;
            return (
              <div
                key={idx}
                className="card-glass rounded-2xl p-6 bg-white dark:bg-[#10131c] border border-slate-200 dark:border-white/10 shadow-lg flex flex-col justify-between space-y-5 group hover:border-cyan-500/40 transition-all"
              >
                <div className="space-y-3">
                  {/* Category Header */}
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white">
                        {category.title}
                      </h3>
                      <span className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400">
                        {category.skills.length} Core Skills
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-200 dark:border-white/5">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 text-slate-700 dark:text-slate-300 hover:border-cyan-500/30 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
