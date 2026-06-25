"use client";
import { PiNotebookBold } from "react-icons/pi";

export default function Loading() {
  return (
    <div className="relative min-h-screen w-full bg-[#030712] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 blur-[80px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center gap-6">
        <div className="flex items-center gap-3 animate-pulse">
          <div className="w-12 h-12 bg-linear-to-r from-cyan-400 via-blue-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.4)]">
            <PiNotebookBold size="26px" color="white" />
          </div>
          <span className="font-semibold text-3xl text-white tracking-wider font-sans select-none">
            Fable
          </span>
        </div>

        <div className="w-40 h-0.75 bg-white/5 rounded-full overflow-hidden relative border border-white/5 shadow-inner">
          <div className="absolute top-0 left-0 h-full w-1/2 bg-linear-to-r from-cyan-400 via-blue-500 to-indigo-500 rounded-full animate-[loading_1.5s_infinite_ease-in-out]"></div>
        </div>

        <p className="text-slate-400 text-xs font-medium tracking-widest uppercase animate-pulse duration-1000">
          Opening the world of ebooks...
        </p>
      </div>

      <style jsx global>{`
        @keyframes loading {
          0% {
            left: -50%;
          }
          50% {
            left: 100%;
          }
          100% {
            left: -50%;
          }
        }
      `}</style>
    </div>
  );
}
