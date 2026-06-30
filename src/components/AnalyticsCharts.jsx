"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { FiTrendingUp, FiPieChart } from "react-icons/fi";

//  Sales Data
const salesData = [
  { name: "Jan", sales: 4000 },
  { name: "Feb", sales: 3000 },
  { name: "Mar", sales: 5000 },
  { name: "Apr", sales: 2780 },
  { name: "May", sales: 1890 },
  { name: "Jun", sales: 2390 },
];

// Ebook data
const genreData = [
  { name: "Thriller", value: 400 },
  { name: "Sci-Fi", value: 300 },
  { name: "Romance", value: 300 },
  { name: "History", value: 200 },
];

const COLORS = ["#06b6d4", "#ec4899", "#10b981", "#a855f7"];

export default function AnalyticsCharts() {
  return (
    <div className="w-full bg-slate-950 p-6 space-y-8 text-white min-h-screen">
      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Monthly Sales */}
        <div className="lg:col-span-2 p-6 bg-slate-900/60 border border-white/5 rounded-xl flex flex-col justify-between">
          <div className="flex items-center gap-2 mb-4">
            <FiTrendingUp className="text-cyan-400 text-lg" />
            <h3 className="text-base font-semibold text-slate-200">
              Monthly Sales Overview
            </h3>
          </div>

          <div className="w-full h-60">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={salesData}
                margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#334155"
                  opacity={0.3}
                />
                <XAxis
                  dataKey="name"
                  stroke="#94a3b8"
                  fontSize={12}
                  tickLine={false}
                />
                <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#0f172a",
                    borderColor: "rgba(255,255,255,0.1)",
                    borderRadius: "8px",
                  }}
                  labelStyle={{ color: "#94a3b8" }}
                />
                <Bar dataKey="sales" fill="#06b6d4" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart*/}
        <div className="p-6 bg-slate-900/60 border border-white/5 rounded-xl flex flex-col justify-between">
          <div className="flex items-center gap-2 mb-2">
            <FiPieChart className="text-pink-400 text-lg" />
            <h3 className="text-base font-semibold text-slate-200">
              Books by Genre
            </h3>
          </div>

          <div className="w-full h-60 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={genreData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {genreData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#0f172a",
                    borderColor: "rgba(255,255,255,0.1)",
                    borderRadius: "8px",
                  }}
                />
                <Legend
                  verticalAlign="bottom"
                  height={36}
                  iconType="circle"
                  iconSize={8}
                  wrapperStyle={{ fontSize: "12px", color: "#94a3b8" }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
