import React from "react";

const ManageAllEbooks = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      {/* header section*/}
      <div className="max-w-4xl mx-auto border-b border-gray-800">
        <h1 className="text-3xl text-cyan-400 font-bold mb-4">
          📃 Manage All Ebooks
        </h1>
        <p className="mb-4 font-mono text-gray-400 ">
          All categories and Writers Ebooks are here .
        </p>
      </div>

      <div className="w-full bg-slate-950 p-6 rounded-2xl border border-white/5 space-y-4">
        <div>
          <h2 className="text-xl font-bold text-white tracking-wide">
            All Ebook Overview
          </h2>
          <p className="text-xs text-slate-400">Manage all ebooks</p>
        </div>

        <hr className="border-white/5" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="group flex items-center justify-between p-3.5 bg-slate-900/60 border border-white/5 rounded-xl transition-all duration-300 cursor-pointer hover:border-cyan-500/30">
            <div className="flex items-center gap-3.5">
              <div>
                <p className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                  Published
                </p>
                <p className="text-xs text-slate-400">400 eBooks</p>
              </div>
            </div>
          </div>

          <div className="group flex items-center justify-between p-3.5 bg-slate-900/60 border border-white/5 rounded-xl transition-all duration-300 cursor-pointer hover:border-pink-500/30">
            <div className="flex items-center gap-3.5">
              <div>
                <p className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                  Pending
                </p>
                <p className="text-xs text-slate-400">12 pending</p>
              </div>
            </div>
          </div>

          <div className="group flex items-center justify-between p-3.5 bg-slate-900/60 border border-white/5 rounded-xl transition-all duration-300 cursor-pointer hover:border-green-500/30">
            <div className="flex items-center gap-3.5">
              <div>
                <p className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                  Premium Authors
                </p>
                <p className="text-xs text-slate-400">10 Authors</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* table */}
      <div className="w-full bg-slate-950 p-6 rounded-2xl border border-white/5 space-y-4 text-white">
        {/* Header Section */}
        <div>
          <h2 className="text-xl font-bold tracking-wide">All Users</h2>
        </div>

        {/* Table Header Row (Hidden on mobile) */}
        <div className="hidden sm:grid grid-cols-12 gap-4 px-6 py-3 border-b border-white/5 text-slate-400 text-sm font-semibold">
          <div className="col-span-4">Book Name</div>
          <div className="col-span-2">Author</div>
          <div className="col-span-2">Price</div>
          <div className="col-span-2">Date</div>
          <div className="col-span-2 text-right">Actions</div>
        </div>

        <div className="space-y-2">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center px-6 py-4 bg-slate-900/40 border border-white/5 rounded-xl hover:bg-slate-900/60 transition-colors">
            <div className="col-span-1 sm:col-span-4 flex flex-col">
              <span className="font-bold text-slate-200"> Map of Bones</span>
              <span className="text-xs text-slate-400">Fiction</span>
            </div>
            <div className="col-span-1 sm:col-span-2">
              <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-950/40 text-blue-400 border border-blue-500/10 min-w-18.75">
                James Rollins
              </span>
            </div>
            <div className="col-span-1 sm:col-span-2">
              <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950/40 text-emerald-400 border border-emerald-500/10 min-w-18.75">
                Published
              </span>
            </div>
            <div className="col-span-1 sm:col-span-2 text-sm text-slate-400">
              Jun 12, 2026
            </div>
            <div className="col-span-1 sm:col-span-2 sm:text-right">
              <button className="px-4 py-1.5 bg-rose-600 hover:bg-rose-700 active:scale-95 text-white font-medium text-xs rounded-lg transition-all min-w-18.75">
                Delete
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center px-6 py-4 bg-slate-900/40 border border-white/5 rounded-xl hover:bg-slate-900/60 transition-colors">
            <div className="col-span-1 sm:col-span-4 flex flex-col">
              <span className="font-bold text-slate-200">Becoming</span>
              <span className="text-xs text-slate-400">Biography</span>
            </div>
            <div className="col-span-1 sm:col-span-2">
              <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-semibold bg-purple-950/40 text-purple-400 border border-purple-500/10 min-w-18.75">
                Michelle Obama
              </span>
            </div>
            <div className="col-span-1 sm:col-span-2">
              <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-semibold bg-rose-950/40 text-rose-400 border border-rose-500/10 min-w-18.75">
                Unpublished
              </span>
            </div>
            <div className="col-span-1 sm:col-span-2 text-sm text-slate-400">
              May 2, 2022
            </div>
            <div className="col-span-1 sm:col-span-2 sm:text-right">
              <button className="px-4 py-1.5 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-medium text-xs rounded-lg transition-all min-w-18.75">
                Publish
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center px-6 py-4 bg-slate-900/40 border border-white/5 rounded-xl hover:bg-slate-900/60 transition-colors">
            <div className="col-span-1 sm:col-span-4 flex flex-col">
              <span className="font-bold text-slate-200">
                Behind Closed Doors
              </span>
              <span className="text-xs text-slate-400">Mystery</span>
            </div>
            <div className="col-span-1 sm:col-span-2">
              <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-950/40 text-blue-400 border border-blue-500/10 min-w-18.75">
                B.A. Paris
              </span>
            </div>
            <div className="col-span-1 sm:col-span-2">
              <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950/40 text-emerald-400 border border-emerald-500/10 min-w-18.75">
                Published
              </span>
            </div>
            <div className="col-span-1 sm:col-span-2 text-sm text-slate-400">
              july 20, 2000
            </div>
            <div className="col-span-1 sm:col-span-2 sm:text-right">
              <button className="px-4 py-1.5 bg-rose-600 hover:bg-rose-700 active:scale-95 text-white font-medium text-xs rounded-lg transition-all min-w-18.75">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageAllEbooks;
