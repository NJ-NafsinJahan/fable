"use client";
import React from "react";

import { Card, Button } from "@heroui/react";
import { FaCalendarAlt, FaCrown, FaDollarSign, FaUsers } from "react-icons/fa";
import DashboardHeader from "@/components/DashboardHeader";

const WriterDashboard = () => {
  const stats = {
    totalEvents: 15,
    totalAttendees: 450,
    totalRevenue: 25000,
    totalSoldTickets: 780,
  };

  const isPremium = false;

  return (
    <div className="space-y-6 mt-6 w-full max-w-7xl mx-auto px-1">
      {/* HEADER SECTION */}
      <DashboardHeader
        title="Welcome Back, Creator"
        description="Here's a quick look at your writing empire. Track your growth, earnings, and engagement in real-time."
        badge="Dashboard Overview"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* Card 1 - Total Ebooks */}
        <Card
          radius="lg"
          className="bg-slate-950/40 backdrop-blur-md border border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300 shadow-xl shadow-black/20"
        >
          <div className="p-5 sm:p-6 flex items-center justify-between gap-4">
            <div className="space-y-1.5 min-w-0">
              <span className="text-slate-400 text-[10px] sm:text-xs font-bold uppercase tracking-wider block truncate">
                Total Ebooks
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {stats.totalEvents}
              </h2>
            </div>
            <div className="p-3 bg-pink-500/10 text-pink-400 rounded-2xl border border-pink-500/20 shrink-0 shadow-inner">
              <FaCalendarAlt className="text-xl sm:text-2xl" />
            </div>
          </div>
        </Card>

        {/* Card 2 - Total Sales */}
        <Card
          radius="lg"
          className="bg-slate-950/40 backdrop-blur-md border border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300 shadow-xl shadow-black/20"
        >
          <div className="p-5 sm:p-6 flex items-center justify-between gap-4">
            <div className="space-y-1.5 min-w-0">
              <span className="text-slate-400 text-[10px] sm:text-xs font-bold uppercase tracking-wider block truncate">
                Total Sales
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {stats.totalAttendees}
              </h2>
            </div>
            <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-2xl border border-indigo-500/20 shrink-0 shadow-inner">
              <FaUsers className="text-xl sm:text-2xl" />
            </div>
          </div>
        </Card>

        {/* Card 3 - Accumulated Revenue */}

        <Card
          radius="lg"
          className="bg-slate-950/40 backdrop-blur-md border border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300 shadow-xl shadow-black/20 sm:col-span-2 lg:col-span-1"
        >
          <div className="p-5 sm:p-6 flex items-center justify-between gap-4">
            <div className="space-y-1.5 min-w-0">
              <span className="text-slate-400 text-[10px] sm:text-xs font-bold uppercase tracking-wider block truncate">
                Accumulated Revenue
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight truncate">
                {`$${stats.totalRevenue.toFixed(2)}`}
              </h2>
            </div>
            <div className="p-3 bg-green-500/10 text-green-400 rounded-2xl border border-green-500/20 shrink-0 shadow-inner">
              <FaDollarSign className="text-xl sm:text-2xl" />
            </div>
          </div>
        </Card>
      </div>

      {/* Premium CTA Section */}
      {!isPremium && (
        <Card
          radius="lg"
          className="border border-yellow-500/10 bg-slate-950 bg-linear-to-br from-yellow-500/5 via-amber-600/5 to-slate-950/50 shadow-2xl relative overflow-hidden"
        >
          <div className="p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                <FaCrown className="text-yellow-400 shrink-0" />
                <span>Unlock Unlimited Creations</span>
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm max-w-xl leading-relaxed">
                Standard creator accounts are limited to{" "}
                <strong className="text-slate-200">3 ebooks</strong>. Upgrade to
                our Premium Package for{" "}
                <strong className="text-yellow-400/90">$49.00</strong> to manage
                and publish unlimited creations.
              </p>
            </div>

            <Button
              radius="lg"
              className="w-full md:w-auto bg-linear-to-r from-yellow-500 to-amber-500 hover:from-yellow-400 hover:to-amber-400 text-slate-950 font-bold h-11 px-6 shadow-lg shadow-yellow-500/10 transition-all active:scale-98 cursor-pointer"
            >
              Upgrade to Premium
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
};

export default WriterDashboard;
