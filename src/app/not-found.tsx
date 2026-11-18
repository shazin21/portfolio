import Link from "next/link";
import { ArrowLeft, Terminal } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#090a0f] text-slate-100 p-6">
      <div className="max-w-md w-full bg-[#11131a] border border-white/10 rounded-2xl p-8 shadow-2xl text-center space-y-6">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
          <Terminal className="w-7 h-7" />
        </div>
        <div className="space-y-2">
          <p className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
            HTTP 404 // Node Not Found
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-white">Vector Out of Bounds</h1>
          <p className="text-sm text-slate-400 leading-relaxed">
            The requested embedding or page coordinate could not be resolved in this neural space.
          </p>
        </div>
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:opacity-95 transition-all shadow-lg shadow-cyan-500/20"
          >
            <ArrowLeft className="w-4 h-4" />
            Return to Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}
