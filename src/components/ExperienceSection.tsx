"use client";

import { experiences } from "@/data/portfolioData";
import { Briefcase, Building2, Calendar, MapPin, CheckCircle2, ShieldCheck, Tag } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-label="Professional Experience Section"
      className="relative py-20 lg:py-28 border-t border-slate-200 dark:border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-medium text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 border border-cyan-500/20">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Professional Experience
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Hands-on technical research, prompt engineering, and LLM output evaluation.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l-2 border-slate-200 dark:border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Node Point */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-slate-900 border-2 border-cyan-400 flex items-center justify-center shadow-md shadow-cyan-500/20">
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
              </div>

              {/* Experience Card */}
              <div className="card-glass rounded-2xl p-6 sm:p-8 bg-white dark:bg-[#10131c] border border-slate-200 dark:border-white/10 shadow-xl space-y-6">
                {/* Header row: Position & Period */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-6">
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                        {exp.periodBadge}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      {exp.position}
                    </h3>

                    {/* Employer and Client Engagement Notice */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-600 dark:text-slate-300 font-medium pt-1">
                      <div className="flex items-center gap-1.5 text-slate-900 dark:text-white">
                        <Building2 className="w-4 h-4 text-cyan-500" />
                        <span>Employer: <strong>{exp.company}</strong></span>
                      </div>

                      {exp.clientEngagement && (
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20 text-xs font-mono">
                          <ShieldCheck className="w-3.5 h-3.5" />
                          <span>{exp.clientEngagement}</span>
                        </div>
                      )}

                      <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-mono">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-700 dark:text-slate-300 self-start lg:self-auto">
                    <Calendar className="w-3.5 h-3.5 text-cyan-500" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {/* Professional Description */}
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed italic bg-slate-50 dark:bg-white/[0.02] p-4 rounded-xl border border-slate-200 dark:border-white/5">
                  &ldquo;{exp.description}&rdquo;
                </p>

                {/* Key Responsibilities */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Key Contributions & Responsibilities
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <div
                        key={rIdx}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/5 text-xs text-slate-700 dark:text-slate-300 leading-relaxed hover:border-cyan-500/30 transition-colors"
                      >
                        <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills Used Badges */}
                <div className="pt-2 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1 mr-1">
                    <Tag className="w-3 h-3" />
                    Focus:
                  </span>
                  {exp.skillsUsed.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
