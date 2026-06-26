import React from "react";

const DashboardHeader = ({ title, description, badge }) => {
  return (
    <div>
      {/* HEADER SECTION */}
      <div className="border-b border-white/10 pb-5 md:pb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 w-full">
        <div className="space-y-1 sm:space-y-1.5 min-w-0">
          <h1 className="font-extrabold text-2xl sm:text-3xl bg-linear-to-r from-cyan-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent tracking-tight">
            {title}
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm font-medium tracking-wide">
            {description}
          </p>
        </div>

        <div className="self-start sm:self-center shrink-0">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-inner">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            {badge}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
