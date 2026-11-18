"use client";

import { educationInfo } from "@/data/portfolioData";
import { GraduationCap, Award, Calendar, BookOpen, CheckCircle } from "lucide-react";

export default function EducationSection() {
  return (
    <section
      id="education"
      aria-label="Education Section"
      className="relative py-20 lg:py-28 border-t border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-medium text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 border border-cyan-500/20">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Formal Education
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Rigorous undergraduate specialization in artificial intelligence, algorithmic foundations, and data science.
          </p>
        </div>

        {/* Education Card */}
        <div className="max-w-4xl card-glass rounded-2xl p-6 sm:p-8 bg-white dark:bg-[#10131c] border border-slate-200 dark:border-white/10 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-6">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded text-[11px] font-mono font-medium text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 border border-cyan-500/20">
                Accredited B.Tech Program
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                {educationInfo.degree}
              </h3>
              <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
                {educationInfo.institution} •{" "}
                <span className="text-cyan-600 dark:text-cyan-400">{educationInfo.university}</span>
              </p>
            </div>

            <div className="flex flex-col sm:items-end gap-1.5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-700 dark:text-slate-300">
                <Calendar className="w-3.5 h-3.5 text-cyan-500" />
                <span>{educationInfo.period}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                <Award className="w-3.5 h-3.5" />
                <span>CGPA: {educationInfo.cgpa}</span>
              </div>
            </div>
          </div>

          {/* Academic Highlights */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
              <BookOpen className="w-3.5 h-3.5 text-cyan-500" />
              Curriculum & Rigor
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {educationInfo.highlights.map((hl, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 text-xs text-slate-700 dark:text-slate-300 leading-relaxed flex items-start gap-2.5"
                >
                  <CheckCircle className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
