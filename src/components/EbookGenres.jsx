"use client";

import React from "react";
import Link from "next/link";
import { Card } from "@heroui/react";

import {
  FaBook,
  FaUserSecret,
  FaHeart,
  FaRocket,
  FaDragon,
  FaGhost,
} from "react-icons/fa";

const EbookGenres = () => {
  const genres = [
    {
      id: "fiction",
      name: "Fiction",
      count: "120+ Ebooks",
      icon: <FaBook className="text-blue-400 text-2xl" />,
      bgHover: "hover:border-blue-500/30 hover:shadow-blue-500/5",
    },
    {
      id: "mystery",
      name: "Mystery",
      count: "85+ Ebooks",
      icon: <FaUserSecret className="text-purple-400 text-2xl" />,
      bgHover: "hover:border-purple-500/30 hover:shadow-purple-500/5",
    },
    {
      id: "romance",
      name: "Romance",
      count: "150+ Ebooks",
      icon: <FaHeart className="text-pink-400 text-2xl" />,
      bgHover: "hover:border-pink-500/30 hover:shadow-pink-500/5",
    },
    {
      id: "sci-fi",
      name: "Sci-Fi",
      count: "64+ Ebooks",
      icon: <FaRocket className="text-cyan-400 text-2xl" />,
      bgHover: "hover:border-cyan-500/30 hover:shadow-cyan-500/5",
    },
    {
      id: "fantasy",
      name: "Fantasy",
      count: "92+ Ebooks",
      icon: <FaDragon className="text-amber-400 text-2xl" />,
      bgHover: "hover:border-amber-500/30 hover:shadow-amber-500/5",
    },
    {
      id: "horror",
      name: "Horror",
      count: "40+ Ebooks",
      icon: <FaGhost className="text-red-400 text-2xl" />,
      bgHover: "hover:border-red-500/30 hover:shadow-red-500/5",
    },
  ];

  return (
    <div className="w-full mx-auto p-4 py-12 md:py-16 bg-slate-950 text-slate-300">
      <div className=" text-center">
        <h3 className="text-2xl font-bold text-white tracking-wide md:text-3xl">
          Explore Ebook Genres
        </h3>
        <p className="text-sm text-slate-500 mt-2 max-w-md mx-auto">
          Find your next favorite read by browsing through our top categories.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto w-full">
        {genres.map((genre) => (
          <Link
            key={genre.id}
            href={`/ebooks?genre=${genre.id}`}
            className="block h-full"
          >
            <Card
              shadow="none"
              isPressable
              className={`w-full h-full bg-slate-900 border border-white/5 rounded-2xl p-5 transition-all duration-300 flex flex-col items-center justify-center text-center group ${genre.bgHover}`}
            >
              <div className="p-3 bg-slate-950 rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {genre.icon}
              </div>

              <h4 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                {genre.name}
              </h4>

              <span className="text-xs text-slate-500 mt-1">{genre.count}</span>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EbookGenres;
