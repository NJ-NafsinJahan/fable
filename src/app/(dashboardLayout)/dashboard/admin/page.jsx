import AnalyticsCharts from "@/components/AnalyticsCharts";
import React from "react";

const AdminPage = () => {
  return (
    <div className="w-full bg-slate-950 text-white">
      {/* header section*/}
      <div className="max-w-4xl mx-auto border-b border-gray-800">
        <h1 className="text-3xl text-cyan-400 font-bold mb-4">
          <span className="text-4xl ">Admin</span> Overview
        </h1>
        <p className="mb-4 font-mono text-gray-400 ">
          Get a quick overview fo your activity, reader, writer, purchases &
          payment.
        </p>
      </div>

      {/* Overview */}
      <div className="w-full bg-slate-950 p-6 rounded-2xl border border-white/5 space-y-4">
        <div>
          <h2 className="text-xl font-bold text-white tracking-wide">
            Overview
          </h2>
          <p className="text-xs text-slate-400">All activities & Summary</p>
        </div>

        <hr className="border-white/5" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="group flex items-center justify-between p-3.5 bg-slate-900/60 border border-white/5 rounded-xl transition-all duration-300 cursor-pointer hover:border-cyan-500/30">
            <div className="flex items-center gap-3.5">
              <div>
                <p className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                  Total Purchased
                </p>
                <p className="text-xs text-slate-400"> 1000 times</p>
              </div>
            </div>
          </div>

          <div className="group flex items-center justify-between p-3.5 bg-slate-900/60 border border-white/5 rounded-xl transition-all duration-300 cursor-pointer hover:border-pink-500/30">
            <div className="flex items-center gap-3.5">
              <div>
                <p className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                  Total EBooks
                </p>
                <p className="text-xs text-slate-400">400 Ebooks</p>
              </div>
            </div>
          </div>

          <div className="group flex items-center justify-between p-3.5 bg-slate-900/60 border border-white/5 rounded-xl transition-all duration-300 cursor-pointer hover:border-green-500/30">
            <div className="flex items-center gap-3.5">
              <div>
                <p className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                  Total Authors
                </p>
                <p className="text-xs text-slate-400">25 Authors</p>
              </div>
            </div>
          </div>

          <div className="group flex items-center justify-between p-3.5 bg-slate-900/60 border border-white/5 rounded-xl transition-all duration-300 cursor-pointer hover:border-purple-500/30">
            <div className="flex items-center gap-3.5">
              <div>
                <p className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                  Total Readers
                </p>
                <p className="text-xs text-slate-400">345 readers </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* charts */}
      <AnalyticsCharts></AnalyticsCharts>
    </div>
  );
};

export default AdminPage;
