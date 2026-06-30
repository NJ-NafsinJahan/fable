"use client";
import { Button } from "@heroui/react";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaUser, FaSignOutAlt, FaThLarge } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { PiNotebookBold } from "react-icons/pi";
import { motion, AnimatePresence } from "motion/react";
import { useRouter } from "next/navigation";
import { authClient, useSession } from "@/lib/auth-client";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session } = useSession();
  //   const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setMobileMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    await authClient.signOut();
    router.push("/");
  };

  console.log(session, "session form navbar");

  // *******
  //href={`/dashboard/${session?.user?.role}`}

  //   const mockUser = {
  //     name: "Jane Doe",
  //     email: "jane@example.com",
  //     role: "reader",
  //     image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
  //   };

  return (
    <div className="w-full flex justify-center pt-4 fixed top-0 left-0 z-50 px-4 pointer-events-none">
      <nav className="pointer-events-auto relative flex items-center justify-between bg-linear-to-r from-cyan-950/80 via-blue-950/80 to-indigo-950/80 backdrop-blur-md border border-white/10 px-6 py-2.5 rounded-full max-w-4xl w-full text-white shadow-[0_8px_32px_rgba(6,182,212,0.15)]">
        <div className="w-full flex items-center justify-between">
          {/* LOGO SECTION */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-linear-to-r from-cyan-400 via-blue-600 to-indigo-700 rounded-lg flex items-center justify-center font-bold text-lg shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              <PiNotebookBold size="20px" />
            </div>
            <motion.span
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [0.92, 1.05, 0.92],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="font-semibold text-2xl tracking-wider select-none"
            >
              Fable
            </motion.span>
          </div>

          {/* DESKTOP NAVIGATION LINKS (hidden on mobile/tablet) */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors ${
                pathname === "/"
                  ? "text-cyan-400 font-semibold"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              Home
            </Link>
            <Link
              href="/ebooks"
              className={`text-sm font-medium transition-colors ${
                pathname.startsWith("/ebooks")
                  ? "text-cyan-400 font-semibold"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              Browse Ebooks
            </Link>
            {session && session?.user && (
              <Link
                href={`/dashboard/${session?.user?.role}`}
                className={`text-sm font-medium transition-colors ${
                  pathname.startsWith("/dashboard")
                    ? "text-cyan-400 font-semibold"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                Dashboard
              </Link>
            )}
          </div>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-3">
            {/* Login/Sign Up Buttons (Desktop Only) */}
            {!session && (
              <div className="hidden sm:flex items-center gap-3">
                <Link href="/login">
                  <Button className="inline-flex items-center justify-center font-semibold text-xs text-slate-300 hover:text-white h-9 px-4 rounded-xl hover:bg-white/5 transition">
                    Login
                  </Button>
                </Link>
                <Link
                  href="/register"
                  className="inline-flex items-center justify-center font-semibold text-xs bg-linear-to-r from-cyan-400 via-blue-600 to-indigo-900 text-white shadow-[0_4px_15px_rgba(30,144,255,0.3)] hover:from-cyan-500 hover:via-blue-700 hover:to-indigo-950 transition h-9 px-4 rounded-full"
                >
                  Sign Up
                </Link>
              </div>
            )}

            {/* Profile Dropdown (Both Desktop & Mobile) */}

            {session && session?.user && (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center transition-transform hover:scale-105 outline-none focus:outline-none cursor-pointer"
                >
                  <Image
                    width={20}
                    height={20}
                    className="w-9 h-9 rounded-full object-cover border border-cyan-400 shadow-md shadow-cyan-500/20"
                    src={session?.user?.image}
                    alt="avatar"
                  />
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 mt-3 w-56 bg-slate-950/95 border border-white/10 rounded-2xl shadow-2xl backdrop-blur-xl py-2 z-55 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="px-4 py-2.5 border-b border-white/5 mb-1.5 cursor-default">
                      <p className="text-[10px] text-cyan-400 font-bold uppercase tracking-wider">
                        {session?.user?.role} Account
                      </p>
                      <p className="font-bold text-white text-sm mt-0.5">
                        {session?.user?.name}
                      </p>
                      <p className="text-[11px] text-slate-400 truncate mt-0.5">
                        {session?.user?.email}
                      </p>
                    </div>
                    <Link
                      href={`/dashboard/${session?.user?.role}`}
                      onClick={() => setDropdownOpen(false)}
                      className="w-full flex items-center gap-2.5 px-4 py-2.5 text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/5 transition"
                    >
                      <FaThLarge className="text-slate-400 text-sm shrink-0" />
                      <span>My Dashboard</span>
                    </Link>
                    <Link
                      href={`/dashboard/${session?.user?.role}`}
                      onClick={() => setDropdownOpen(false)}
                      className="w-full flex items-center gap-2.5 px-4 py-2.5 text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/5 transition"
                    >
                      <FaUser className="text-slate-400 text-sm shrink-0" />
                      <span>Profile Settings</span>
                    </Link>
                    <div className="border-t border-white/5 my-1.5" />
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-2.5 px-4 py-2.5 text-xs font-semibold text-red-400 hover:text-red-300 hover:bg-red-500/5 transition"
                    >
                      <FaSignOutAlt className="text-sm shrink-0 text-red-400" />
                      <span>Log Out</span>
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* HAMBURGER BUTTON (Visible only on mobile/tablet) */}
            <div className="md:hidden" ref={mobileMenuRef}>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex items-center justify-center p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition cursor-pointer outline-none"
              >
                {mobileMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
              </button>

              {/* MOBILE DROPDOWN MENU */}
              <AnimatePresence>
                {mobileMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -15, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute right-0 top-full mt-4 w-56 bg-slate-950/95 border border-white/10 rounded-2xl shadow-2xl backdrop-blur-xl p-2 flex flex-col gap-1 z-50"
                  >
                    <Link
                      href="/"
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-4 py-2.5 rounded-xl text-sm font-medium transition ${
                        pathname === "/"
                          ? "bg-cyan-500/10 text-cyan-400 font-semibold"
                          : "text-slate-300 hover:bg-white/5"
                      }`}
                    >
                      Home
                    </Link>
                    <Link
                      href="/ebooks"
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-4 py-2.5 rounded-xl text-sm font-medium transition ${
                        pathname.startsWith("/ebooks")
                          ? "bg-cyan-500/10 text-cyan-400 font-semibold"
                          : "text-slate-300 hover:bg-white/5"
                      }`}
                    >
                      Browse Ebooks
                    </Link>
                    {session && session?.user && (
                      <Link
                        href={`/dashboard/${session?.user?.role}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`px-4 py-2.5 rounded-xl text-sm font-medium transition ${
                          pathname.startsWith("/dashboard")
                            ? "bg-cyan-500/10 text-cyan-400 font-semibold"
                            : "text-slate-300 hover:bg-white/5"
                        }`}
                      >
                        Dashboard
                      </Link>
                    )}

                    {!session && (
                      <>
                        <div className="border-t border-white/5 my-1" />
                        <Link href="/login">
                          <Button className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:bg-white/5 transition">
                            Login
                          </Button>
                        </Link>
                        <Link
                          href="/register"
                          onClick={() => setMobileMenuOpen(false)}
                          className="mx-2 my-1 text-center font-semibold text-xs bg-linear-to-r from-cyan-400 via-blue-600 to-indigo-900 text-white py-2 rounded-full transition block"
                        >
                          Sign Up
                        </Link>
                      </>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
