"use client";

import { ArrowRight, Cpu, Database, Eye, FileText, Layers, Sparkles, Terminal } from "lucide-react";

interface Node {
  label: string;
  detail: string;
  role: string;
}

interface ArchitectureDiagramProps {
  title: string;
  description: string;
  nodes: Node[];
  compact?: boolean;
}

export default function ArchitectureDiagram({
  title,
  description,
  nodes,
  compact = false,
}: ArchitectureDiagramProps) {
  return (
    <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50/80 dark:bg-[#0c0e17] p-4 sm:p-5 space-y-4">
      {/* Title & Pipeline Summary */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
            <Cpu className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
              {title}
            </h4>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">{description}</p>
          </div>
        </div>
        <span className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20 self-start sm:self-auto">
          {nodes.length} Stages
        </span>
      </div>

      {/* Nodes Flow */}
      <div className={`grid ${compact ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"} gap-3`}>
        {nodes.map((node, idx) => (
          <div key={idx} className="relative group">
            <div className="h-full p-3.5 rounded-xl border border-slate-200 dark:border-white/5 bg-white dark:bg-[#121522] hover:border-cyan-500/40 hover:bg-cyan-500/[0.02] transition-all flex flex-col justify-between space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-semibold uppercase px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400">
                  {node.role}
                </span>
                <span className="text-[10px] font-mono text-cyan-500/80">#{idx + 1}</span>
              </div>

              <div>
                <div className="text-xs font-semibold text-slate-900 dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-300 transition-colors">
                  {node.label}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug mt-1">
                  {node.detail}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
