import React from "react";
import { Button } from "@heroui/react";
import { PiNotebookBold } from "react-icons/pi";

const Hero = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#030712] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/*(Radial Gradient) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 h-75 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Big Glow Logo */}
        <div className="flex items-center gap-3 justify-center">
          <div className="w-14 h-14  bg-linear-to-r from-cyan-400 via-blue-600 to-indigo-700 rounded-lg flex items-center justify-center font-bold text-lg shadow-[0_0_15px_rgba(59,130,246,0.5)]">
            <PiNotebookBold size="40px" color="white" />
          </div>
          <h1 className="text-white text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-4">
            Fable
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-gray-300 text-xl md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed my-10">
          "Discover & Read Original Ebooks-" Smooth, Fast, Everywhere
        </p>

        {/* Footer Version Tag */}
        <Button className="px-6 py-3  mt-7 font-semibold text-white bg-linear-to-r from-cyan-400 via-blue-600 to-indigo-700 rounded-lg  hover:from-cyan-500 hover:via-blue-700 hover:to-indigo-800 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-[0_4px_15px_rgba(30,144,255,0.3)]">
          Browse Ebooks
        </Button>
      </div>
    </div>
  );
};

export default Hero;
