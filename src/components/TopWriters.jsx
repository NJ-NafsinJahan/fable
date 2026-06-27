"use client";

import React from "react";

import { Card, Chip } from "@heroui/react";
import { FaCrown, FaMedal } from "react-icons/fa";

const TopWriters = () => {
  const topWriters = [
    {
      id: 1,
      name: "Kishor Pasha",
      sales: "310 Sales",
      description:
        "Specializes in deep self-help and psychological growth books.",

      image: "https://i.pravatar.cc/150?u=a04258114e29026708c",
    },
    {
      id: 2,
      name: "Musa Anan",
      sales: "120 Sales",
      description:
        "Passionate thriller writer known for mind-bending plot twists.",

      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    },
    {
      id: 3,
      name: "Robin Milford",
      sales: "45 Sales",
      description:
        "Crafts beautiful contemporary drama and life-centric stories.",

      image: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    },
  ];

  const getRankBadge = (index) => {
    if (index === 0)
      return {
        icon: <FaCrown className="text-amber-400 text-lg" />,
        borderColor: "border-amber-400",
      };
    if (index === 1)
      return {
        icon: <FaMedal className="text-slate-300 text-base" />,
        borderColor: "border-slate-300",
      };
    return {
      icon: <FaMedal className="text-amber-600 text-base" />,
      borderColor: "border-amber-600",
    };
  };

  return (
    <div className="w-full mx-auto p-4 md:p-6 bg-slate-950 text-slate-300 min-h-screen">
      <div className="mb-8 text-center">
        <h3 className="text-2xl font-bold text-white tracking-wide">
          Top Ebook Writers
        </h3>
        <p className="text-sm text-slate-500 mt-2 max-w-md mx-auto">
          Meet our most successful authors based on total ebook sales.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topWriters.map((writer, index) => {
          const rank = getRankBadge(index);

          return (
            <Card
              key={writer.id}
              shadow="none"
              className="bg-slate-900 border border-white/5 rounded-2xl transition-all duration-300 hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/5 group"
            >
              <div className="p-6 flex flex-col items-center h-full text-center">
                <div className="w-full flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1.5">
                    {rank.icon}
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Rank #{index + 1}
                    </span>
                  </div>

                  <Chip
                    size="sm"
                    variant="flat"
                    className="text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                  >
                    {writer.sales}
                  </Chip>
                </div>

                <div
                  className={`relative w-24 h-24 mb-4 rounded-full border-4 ${rank.borderColor} p-1 overflow-hidden group-hover:scale-105 transition-transform duration-300`}
                >
                  <img
                    src={writer.image}
                    alt={writer.name}
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://via.placeholder.com/150?text=No+Image";
                    }}
                  />
                </div>

                <h4 className="text-xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">
                  {writer.name}
                </h4>

                <p className="text-sm text-slate-400 leading-relaxed px-2 border-t border-white/5 pt-4">
                  "{writer.description}"
                </p>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default TopWriters;
