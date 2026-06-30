import React from "react";
import {
  FiBookOpen,
  FiShoppingBag,
  FiBookmark,
  FiClock,
  FiCheckCircle,
  FiUser,
} from "react-icons/fi";

const ReaderPage = () => {
  return (
    <div>
      <div className="min-h-screen bg-slate-950 text-white p-8">
        {/* header section*/}
        <div className="max-w-4xl mx-auto border-b border-gray-800">
          <h1 className="text-3xl text-cyan-400 font-bold mb-4">
            Welcome Back <span className="text-4xl ">Reader 👋</span>
          </h1>
          <p className="mb-4 font-mono text-gray-400 ">
            Get a quick overview fo your activity, bookmarks, purchases &
            payment.
          </p>
        </div>

        {/*  */}
        <div className="w-full bg-slate-950 p-6 rounded-2xl border border-white/5 space-y-4">
          <div>
            <h2 className="text-xl font-bold text-white tracking-wide">
              Library Overview
            </h2>
            <p className="text-xs text-slate-400">
              Manage your ebooks and activities
            </p>
          </div>

          <hr className="border-white/5" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Purchased Books */}
            <div className="group flex items-center justify-between p-3.5 bg-slate-900/60 border border-white/5 rounded-xl transition-all duration-300 cursor-pointer hover:border-cyan-500/30">
              <div className="flex items-center gap-3.5">
                <div>
                  <p className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                    Purchased Books
                  </p>
                  <p className="text-xs text-slate-400">0 Books</p>
                </div>
              </div>
            </div>

            {/* Bookmark */}
            <div className="group flex items-center justify-between p-3.5 bg-slate-900/60 border border-white/5 rounded-xl transition-all duration-300 cursor-pointer hover:border-pink-500/30">
              <div className="flex items-center gap-3.5">
                <div>
                  <p className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                    My Bookmarks
                  </p>
                  <p className="text-xs text-slate-400">12 Saved</p>
                </div>
              </div>
            </div>

            {/* Followed Authors */}
            <div className="group flex items-center justify-between p-3.5 bg-slate-900/60 border border-white/5 rounded-xl transition-all duration-300 cursor-pointer hover:border-green-500/30">
              <div className="flex items-center gap-3.5">
                <div>
                  <p className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                    Followed Authors
                  </p>
                  <p className="text-xs text-slate-400">5 Authors</p>
                </div>
              </div>
            </div>

            {/* Reading Stack */}
            <div className="group flex items-center justify-between p-3.5 bg-slate-900/60 border border-white/5 rounded-xl transition-all duration-300 cursor-pointer hover:border-purple-500/30">
              <div className="flex items-center gap-3.5">
                <div>
                  <p className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                    Reading Stack
                  </p>
                  <p className="text-xs text-slate-400">2 Active</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6 bg-slate-950 p-6 text-slate-200">
          {/*Activity Stats Section*/}
          <div className="lg:col-span-1 bg-slate-900 border border-white/5 rounded-2xl p-5 flex flex-col justify-between space-y-4 shadow-xl">
            <div>
              <h3 className="text-base font-semibold text-white mb-4 tracking-wide">
                Activity Stats
              </h3>

              <div className="space-y-3">
                {/* Books Read */}
                <div className="flex items-center justify-between p-3 bg-blue-500/10 border border-blue-500/20 rounded-xl transition-all hover:bg-blue-500/15">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-blue-500/20 text-blue-400 rounded-lg flex items-center justify-center">
                      <FiBookOpen size={18} strokeWidth={2.5} />
                    </div>
                    <span className="text-sm font-medium text-slate-300">
                      Books Read
                    </span>
                  </div>
                  <span className="text-base font-bold text-blue-400">24</span>
                </div>

                {/* Purchased */}
                <div className="flex items-center justify-between p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl transition-all hover:bg-emerald-500/15">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-emerald-500/20 text-emerald-400 rounded-lg flex items-center justify-center">
                      <FiShoppingBag size={18} strokeWidth={2.5} />
                    </div>
                    <span className="text-sm font-medium text-slate-300">
                      Purchased
                    </span>
                  </div>
                  <span className="text-base font-bold text-emerald-400">
                    18
                  </span>
                </div>

                {/* Bookmarks */}
                <div className="flex items-center justify-between p-3 bg-rose-500/10 border border-rose-500/20 rounded-xl transition-all hover:bg-rose-500/15">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-rose-500/20 text-rose-400 rounded-lg flex items-center justify-center">
                      <FiBookmark size={18} strokeWidth={2.5} />
                    </div>
                    <span className="text-sm font-medium text-slate-300">
                      Bookmarks
                    </span>
                  </div>
                  <span className="text-base font-bold text-rose-400">7</span>
                </div>

                {/* Last Active */}
                <div className="flex items-center justify-between p-3 bg-purple-500/10 border border-purple-500/20 rounded-xl transition-all hover:bg-purple-500/15">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-purple-500/20 text-purple-400 rounded-lg flex items-center justify-center">
                      <FiClock size={18} strokeWidth={2.5} />
                    </div>
                    <span className="text-sm font-medium text-slate-300">
                      Last Active
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-purple-400">
                    2 hours ago
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity Section */}
          <div className="lg:col-span-2 bg-slate-900 border border-white/5 rounded-2xl p-5 shadow-xl">
            <h3 className="text-base font-semibold text-white mb-5 tracking-wide">
              Recent Activity
            </h3>

            <div className="space-y-4">
              {/* Activity 1 */}
              <div className="flex items-center justify-between p-2 rounded-xl hover:bg-white/2 transition-colors">
                <div className="flex items-center gap-4.5">
                  <div className="p-2 bg-emerald-500/15 text-emerald-400 rounded-full flex items-center justify-center">
                    <FiShoppingBag size={16} strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-200">
                      Purchased{" "}
                      <span className="text-white font-semibold">
                        "The Silent Echo"
                      </span>
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">2 days ago</p>
                  </div>
                </div>
                <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20">
                  Purchase
                </span>
              </div>

              {/* Activity 2 */}
              <div className="flex items-center justify-between p-2 rounded-xl hover:bg-white/2 transition-colors">
                <div className="flex items-center gap-4.5">
                  <div className="p-2 bg-rose-500/15 text-rose-400 rounded-full flex items-center justify-center">
                    <FiBookmark size={16} strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-200">
                      Bookmarked{" "}
                      <span className="text-white font-semibold">
                        "Whispers in the Dark"
                      </span>
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">3 days ago</p>
                  </div>
                </div>
                <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 bg-rose-500/10 text-rose-400 rounded-full border border-rose-500/20">
                  Bookmark
                </span>
              </div>

              {/* Activity 3 */}
              <div className="flex items-center justify-between p-2 rounded-xl hover:bg-white/2 transition-colors">
                <div className="flex items-center gap-4.5">
                  <div className="p-2 bg-blue-500/15 text-blue-400 rounded-full flex items-center justify-center">
                    <FiBookOpen size={16} strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-200">
                      Started reading{" "}
                      <span className="text-white font-semibold">
                        "The Last Chapter"
                      </span>
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">5 days ago</p>
                  </div>
                </div>
                <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">
                  Read
                </span>
              </div>

              {/* Activity 4 */}
              <div className="flex items-center justify-between p-2 rounded-xl hover:bg-white/2 transition-colors">
                <div className="flex items-center gap-4.5">
                  <div className="p-2 bg-purple-500/15 text-purple-400 rounded-full flex items-center justify-center">
                    <FiUser size={16} strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-200">
                      Reviewed{" "}
                      <span className="text-white font-semibold">
                        "Midnight Tales"
                      </span>
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">1 week ago</p>
                  </div>
                </div>
                <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/20">
                  Review
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReaderPage;
