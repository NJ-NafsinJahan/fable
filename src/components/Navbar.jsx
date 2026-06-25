"use client";
import React from "react";
import { Button } from "@heroui/react";
import Link from "next/link";
import { PiNotebookBold } from "react-icons/pi";

const Navbar = () => {
  return (
    <div className="w-full flex justify-center pt-6 fixed top-0 left-0 z-50 px-4">
      <nav className="flex items-center justify-between bg-[#111827]/60 backdrop-blur-md border border-gray-700/50 px-6 py-2.5 rounded-full max-w-4xl w-full text-white shadow-lg">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8  bg-linear-to-r from-cyan-400 via-blue-600 to-indigo-700 rounded-lg flex items-center justify-center font-bold text-lg shadow-[0_0_15px_rgba(59,130,246,0.5)]">
            <PiNotebookBold size="20px" />
          </div>
          <span className="font-semibold text-2xl tracking-wider">Fable</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6 text-sm text-gray-300">
          <Link href="#docs" className="hover:text-white transition">
            Home
          </Link>
          <a href="#resources" className="hover:text-white transition">
            Browse Ebooks
          </a>
          <a
            href="#playground"
            className="hover:text-white transition relative"
          >
            Dashboard
            {/* <span className="absolute -top-3 -right-6 bg-blue-500 text-[9px] font-bold px-1 rounded-sm uppercase tracking-wide scale-75">
              New
            </span> */}
          </a>
        </div>

        {/* Right Action / Search Simulation */}
        <div className="flex items-center gap-3">
          <Button className="px-6 py-3 font-semibold text-white bg-linear-to-r from-cyan-400 via-blue-600 to-indigo-700 rounded-lg  hover:from-cyan-500 hover:via-blue-700 hover:to-indigo-800 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-[0_4px_15px_rgba(30,144,255,0.3)]">
            logIn
          </Button>
          <Button className="px-6 py-3 font-semibold text-white bg-linear-to-r from-cyan-400 via-blue-600 to-indigo-700 rounded-lg  hover:from-cyan-500 hover:via-blue-700 hover:to-indigo-800 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-[0_4px_15px_rgba(30,144,255,0.3)]">
            logOut
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
