"use client";

import { useEffect, useState } from "react";
import { X, Download, Printer, Copy, Check, FileText } from "lucide-react";
import { personalInfo, experiences, projects, skillCategories, educationInfo } from "@/data/portfolioData";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const copyPlaintext = () => {
    const text = `
SHAZIN ANSARI
AI Engineer | Generative AI | LLM Applications | RAG | AI Research
Email: ${personalInfo.email}
LinkedIn: ${personalInfo.linkedinUrl}
GitHub: ${personalInfo.githubUrl}
Location: ${personalInfo.location}

PROFESSIONAL SUMMARY
${personalInfo.aboutParagraphs.join("\n\n")}

EXPERIENCE
${experiences
  .map(
    (exp) => `
${exp.position}
${exp.company} (${exp.clientEngagement}) — ${exp.location}
Duration: ${exp.duration}
Summary: ${exp.description}
Responsibilities:
${exp.responsibilities.map((r) => `- ${r}`).join("\n")}
`
  )
  .join("\n")}

EDUCATION
${educationInfo.degree}
${educationInfo.institution} (${educationInfo.university})
Period: ${educationInfo.period} | CGPA: ${educationInfo.cgpa}

KEY PROJECTS
${projects
  .map(
    (p) => `
* ${p.name} (${p.category})
  ${p.description}
  Key Technologies: ${p.technologies.join(", ")}
`
  )
  .join("\n")}

TECHNICAL SKILLS
${skillCategories
  .map((cat) => `${cat.title}: ${cat.skills.join(", ")}`)
  .join("\n")}
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-[#0d0f17] dark:bg-[#0d0f17] text-slate-100 border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#121520]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 id="resume-modal-title" className="text-base font-semibold text-white">
                Shazin Ansari – Resume Preview
              </h2>
              <p className="text-xs text-slate-400">
                AI Engineer • Generative AI & LLM Systems
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={copyPlaintext}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 transition-colors"
              title="Copy plain text"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Text</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 transition-colors"
              title="Print resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <button
              type="button"
              onClick={() => {
                const text = `
SHAZIN ANSARI
AI Engineer | Generative AI | LLM Applications | RAG | AI Research
Email: ${personalInfo.email}
LinkedIn: ${personalInfo.linkedinUrl}
GitHub: ${personalInfo.githubUrl}
Location: ${personalInfo.location}

PROFESSIONAL SUMMARY
${personalInfo.aboutParagraphs.join("\n\n")}

EXPERIENCE
${experiences
  .map(
    (exp) => `
${exp.position}
${exp.company} (${exp.clientEngagement}) — ${exp.location}
Duration: ${exp.duration}
Summary: ${exp.description}
Responsibilities:
${exp.responsibilities.map((r) => `- ${r}`).join("\n")}
`
  )
  .join("\n")}

EDUCATION
${educationInfo.degree}
${educationInfo.institution} (${educationInfo.university})
Period: ${educationInfo.period} | CGPA: ${educationInfo.cgpa}

KEY PROJECTS
${projects
  .map(
    (p) => `
* ${p.name} (${p.category})
  ${p.description}
  Key Technologies: ${p.technologies.join(", ")}
`
  )
  .join("\n")}

TECHNICAL SKILLS
${skillCategories
  .map((cat) => `${cat.title}: ${cat.skills.join(", ")}`)
  .join("\n")}
                `.trim();

                const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
                const url = URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = "Shazin_Ansari_AI_Engineer_Resume.txt";
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
              }}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:opacity-95 shadow-md shadow-cyan-500/20 transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download File</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 bg-[#090a0f] text-slate-300 text-sm leading-relaxed">
          {/* Header */}
          <div className="border-b border-white/10 pb-6 space-y-2">
            <h1 className="text-2xl font-bold tracking-tight text-white">{personalInfo.name}</h1>
            <p className="text-cyan-400 font-medium">{personalInfo.role} – {personalInfo.specialties}</p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-400 pt-1 font-mono">
              <span>Email: {personalInfo.email}</span>
              <span>•</span>
              <span>LinkedIn: {personalInfo.linkedinUrl}</span>
              <span>•</span>
              <span>Location: {personalInfo.location}</span>
            </div>
          </div>

          {/* Summary */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
              Professional Summary
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Artificial Intelligence and Data Science graduate with professional experience in AI model enhancement, RLHF workflows, prompt engineering, and LLM-based applications. Experienced with AI training and evaluation workflows, designing structured prompts, improving model responses, and collaborating on AI product research tasks.
            </p>
          </div>

          {/* Experience */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
              Professional Experience
            </h3>
            {experiences.map((exp, idx) => (
              <div key={idx} className="space-y-2.5 bg-[#121520] p-4 rounded-xl border border-white/5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h4 className="text-white font-semibold text-base">{exp.position}</h4>
                    <p className="text-slate-300 text-xs font-medium">
                      {exp.company} <span className="text-cyan-400">({exp.clientEngagement})</span> • {exp.location}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-slate-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/5 self-start sm:self-auto">
                    {exp.duration}
                  </span>
                </div>
                <p className="text-slate-300 text-xs italic">{exp.description}</p>
                <ul className="space-y-1.5 text-xs text-slate-300 list-disc list-inside">
                  {exp.responsibilities.map((r, rIdx) => (
                    <li key={rIdx}>{r}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
              Education
            </h3>
            <div className="bg-[#121520] p-4 rounded-xl border border-white/5 space-y-1.5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h4 className="text-white font-semibold text-sm">{educationInfo.degree}</h4>
                <span className="text-xs font-mono text-slate-400">{educationInfo.period}</span>
              </div>
              <p className="text-xs text-slate-300">
                {educationInfo.institution} • {educationInfo.university}
              </p>
              <p className="text-xs text-cyan-400 font-mono">CGPA: {educationInfo.cgpa}</p>
            </div>
          </div>

          {/* Key Projects */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
              Featured Technical Projects
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {projects.map((proj) => (
                <div key={proj.id} className="bg-[#121520] p-4 rounded-xl border border-white/5 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <h4 className="text-white font-semibold text-sm">{proj.name}</h4>
                    <span className="text-[11px] font-mono text-cyan-400">{proj.category}</span>
                  </div>
                  <p className="text-xs text-slate-300">{proj.description}</p>
                  <p className="text-[11px] font-mono text-slate-400 pt-1">
                    <strong className="text-slate-300">Tech:</strong> {proj.technologies.join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
              Technical Skills
            </h3>
            <div className="space-y-2">
              {skillCategories.map((cat, idx) => (
                <div key={idx} className="text-xs">
                  <span className="text-white font-medium">{cat.title}: </span>
                  <span className="text-slate-300">{cat.skills.join(", ")}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
