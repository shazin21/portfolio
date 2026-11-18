"use client";

import Link from "next/link";
import { ArrowDown, FileText, Send, Sparkles, Terminal, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import { personalInfo } from "@/data/portfolioData";
import HeroNetworkCanvas from "./HeroNetworkCanvas";

interface HeroSectionProps {
  onOpenResume: () => void;
}

export default function HeroSection({ onOpenResume }: HeroSectionProps) {
  return (
    <section
      id="hero"
      aria-label="Hero Section"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden ai-grid-pattern"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 hero-glow pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Bio & Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 text-xs font-mono tracking-tight shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="w-1.5 h-1.5 -ml-3.5 rounded-full bg-emerald-400" />
              <span>AI Engineer @ Togle Labs (Dubai) • Open to Inquiries</span>
            </div>

            {/* Identity & Subtitle */}
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-semibold tracking-wider uppercase text-slate-500 dark:text-slate-400 font-mono">
                  {personalInfo.name}
                </span>
                <span className="text-slate-400 dark:text-slate-600">•</span>
                <span className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 font-mono">
                  {personalInfo.role}
                </span>
              </div>
              <div className="text-xs sm:text-sm font-mono text-slate-600 dark:text-slate-400">
                {personalInfo.specialties}
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
              Building{" "}
              <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                Intelligent Systems
              </span>{" "}
              with AI.
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              {personalInfo.heroDescription}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:opacity-95 shadow-lg shadow-cyan-500/20 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View My Projects</span>
                <ArrowDown className="w-4 h-4" />
              </Link>

              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold border border-slate-300 dark:border-white/10 bg-white/80 dark:bg-white/5 text-slate-800 dark:text-slate-200 hover:border-cyan-500/50 hover:text-cyan-500 transition-all hover:-translate-y-0.5 active:translate-y-0 shadow-sm"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </button>

              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold border border-slate-300 dark:border-white/10 bg-white/40 dark:bg-white/[0.02] text-slate-700 dark:text-slate-300 hover:text-white hover:bg-slate-900 dark:hover:bg-white/10 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <Send className="w-4 h-4" />
                <span>Contact Me</span>
              </Link>
            </div>

            {/* Social Links & Trust Indicators */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 p-2 rounded-lg border border-slate-300 dark:border-white/10 bg-white/60 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                  aria-label="Shazin Ansari GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span className="text-xs font-mono">GitHub</span>
                </a>

                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 p-2 rounded-lg border border-slate-300 dark:border-white/10 bg-white/60 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                  aria-label="Shazin Ansari LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#0077b5]" />
                  <span className="text-xs font-mono">LinkedIn</span>
                </a>
              </div>

              <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span>LangChain • FAISS • RLHF • FastAPI</span>
              </div>
            </div>
          </div>

          {/* Right Column: Subtle AI Network / Pipeline Visualization */}
          <div className="lg:col-span-5 relative">
            <HeroNetworkCanvas />

            {/* Floating Info Badges */}
            <div className="absolute -top-3 -right-3 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 bg-[#121520]/90 backdrop-blur-md text-xs font-mono text-slate-200 shadow-xl">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Grounded RAG & Evaluation</span>
            </div>

            <div className="absolute -bottom-3 -left-3 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 bg-[#121520]/90 backdrop-blur-md text-xs font-mono text-slate-200 shadow-xl">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Structured & CoT Prompting</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
