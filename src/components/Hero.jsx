"use client";
import React from "react";
import { Button } from "@heroui/react";
import { PiNotebookBold } from "react-icons/pi";
import { motion } from "motion/react";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      className="relative min-h-screen w-full flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(3, 7, 18, 0.85), rgba(3, 7, 18, 0.9)), url('/assets/heroBook.png')`,
      }}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 h-75 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Big Glow Logo */}
        <div className="flex items-center gap-4 justify-center">
          <motion.div
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-14 h-14 bg-linear-to-r from-cyan-400 via-blue-600 to-indigo-700 rounded-lg flex items-center justify-center font-bold text-lg shadow-[0_0_15px_rgba(59,130,246,0.5)]"
          >
            <PiNotebookBold size="40px" color="white" />
          </motion.div>
          <motion.h1
            animate={{
              opacity: [0.5, 1, 0.5],
              scale: [0.92, 1.05, 0.92],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-white text-4xl md:text-6xl font-bold tracking-tight leading-tight"
          >
            Fable
          </motion.h1>
        </div>

        {/* Subtitle */}
        <p className="text-gray-200 text-xl md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed my-10 italic drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          "Discover & Read Original Ebooks-" Smooth, Fast, Everywhere
        </p>

        {/* Action Button */}
        <Link href="/ebooks">
          <Button className="px-6 py-3 mt-4 font-semibold text-white bg-linear-to-r from-cyan-400 via-blue-600 to-indigo-700 rounded-lg hover:from-cyan-500 hover:via-blue-700 hover:to-indigo-800 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-[0_4px_15px_rgba(30,144,255,0.3)]">
            Browse Ebooks
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
