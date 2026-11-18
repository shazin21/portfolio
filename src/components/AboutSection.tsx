"use client";

import { personalInfo } from "@/data/portfolioData";
import {
  Brain,
  Cpu,
  Layers,
  Sparkles,
  GitBranch,
  Search,
  CheckCircle,
  FileSearch,
  Workflow,
} from "lucide-react";

const highlightIcons = [
  Layers, // AI model enhancement and evaluation
  Brain, // Prompt engineering and LLM workflows
  Search, // Retrieval-Augmented Generation
  Cpu, // Machine Learning
  Workflow, // AI application development
  FileSearch, // Technical research and experimentation
];

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-label="About Me Section"
      className="relative py-20 lg:py-28 border-t border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-medium text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 border border-cyan-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>BACKGROUND & INTERESTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            {personalInfo.aboutHeading}
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Bridging foundational machine learning, prompt architecture, and end-to-end RAG systems.
          </p>
        </div>

        {/* Two Column Layout: Detailed Story & Highlights Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Editorial Description */}
          <div className="lg:col-span-6 space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed text-base">
            {personalInfo.aboutParagraphs.map((paragraph, idx) => (
              <p
                key={idx}
                className="p-4 rounded-xl card-glass border border-slate-200 dark:border-white/5 bg-white dark:bg-[#10131c]/60 hover:border-cyan-500/30 transition-all"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Right Column: Compact Professional Highlights */}
          <div className="lg:col-span-6 space-y-4">
            <div className="p-1 rounded-2xl bg-gradient-to-b from-cyan-500/20 via-indigo-500/10 to-transparent">
              <div className="p-6 rounded-2xl bg-white dark:bg-[#0e111a] border border-slate-200 dark:border-white/10 space-y-6">
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-4">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white font-mono flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-cyan-400" />
                    Core Competencies
                  </h3>
                  <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400">
                    6 Key Focus Areas
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {personalInfo.aboutHighlights.map((highlight, index) => {
                    const IconComponent = highlightIcons[index % highlightIcons.length];
                    return (
                      <div
                        key={index}
                        className="group flex items-start gap-3 p-3.5 rounded-xl border border-slate-200/80 dark:border-white/5 bg-slate-50 dark:bg-white/[0.02] hover:bg-cyan-500/5 hover:border-cyan-500/30 transition-all"
                      >
                        <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 group-hover:scale-105 transition-transform">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <div className="flex-1">
                          <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors block">
                            {highlight}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Engineering Philosophy Banner */}
                <div className="pt-2">
                  <div className="p-4 rounded-xl bg-slate-100 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 text-xs text-slate-600 dark:text-slate-400 font-mono space-y-1.5">
                    <div className="text-cyan-600 dark:text-cyan-400 font-semibold flex items-center gap-1.5">
                      <GitBranch className="w-3.5 h-3.5" />
                      <span>ENGINEERING PHILOSOPHY</span>
                    </div>
                    <p className="leading-relaxed">
                      Prioritizing deterministic grounding, empirical evaluation metrics, and low-latency retrieval pipelines over unbounded LLM completions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
