"use client";
import React from "react";

import { motion } from "motion/react";
import { PiNotebookBold } from "react-icons/pi";
import Logo from "@/components/Logo";
import { useSession } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import {
  FaBuilding,
  FaCalendarAlt,
  FaHome,
  FaPlus,
  FaSignOutAlt,
  FaUsers,
} from "react-icons/fa";

const DashboardLayout = ({ children }) => {
  const { data: session } = useSession();
  console.log(session, "from dashboard layout");
  //   const { data } = useSession();
  //   console.log(data, "full data object");
  //   const session = data?.session;
  //   const user = data?.user;
  //   const role = data?.user?.role;

  const role = session?.user?.role;
  console.log(role, " role from dashboard layout");

  //   for logout
  const handleLogout = () => {};

  const writerMenu = [
    {
      key: "overview",
      label: "Overview",
      icon: FaUsers,
      href: "/dashboard/writer",
    },
    {
      key: "writer-profile",
      label: "Writer Profile",
      icon: FaBuilding,
      href: "/dashboard/writer-profile",
    },
    {
      key: "add-ebook",
      label: "Add Ebook",
      icon: FaPlus,
      href: "/dashboard/add-ebook",
    },
    {
      key: "manage-ebooks",
      label: "Manage Ebooks",
      icon: FaCalendarAlt,
      href: "/dashboard/manage-ebooks",
    },
    {
      key: "attendees",
      label: "Attendees",
      icon: FaUsers,
      href: "/dashboard/writer",
    },
  ];

  return (
    <div className="bg-[#030712] min-h-screen w-full flex items-center justify-center  pb-16 px-4 md:px-6 relative overflow-hidden">
      {/* dashboard ar main Layout , based on role children section will chang*/}

      <aside className=" md:flex md:w-64 flex-col bg-slate-950/40 backdrop-blur-xl border-r border-white/5 h-screen sticky top-0">
        {/* LOGO SECTION */}
        <Logo></Logo>

        {/* side bar section */}
        <div className="h-full flex flex-col bg-slate-950/80 backdrop-blur-xl">
          {/* Brand / Logo */}
          {/* <div className="px-6 py-5 border-b border-white/5">
            <Logo />
          </div> */}

          {/* User Profile */}
          <div className="px-6 py-5 border-b border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-cyan-500 shrink-0">
                <Image
                  width={40}
                  height={40}
                  src={
                    session?.user?.image ||
                    `https://ui-avatars.com/api/?name=${encodeURIComponent("Jane Doe")}&background=7c3aed&color=fff&bold=true`
                  }
                  alt="Avatar"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="overflow-hidden">
                <p className="text-white text-sm font-bold truncate leading-tight">
                  {session?.user?.name}
                </p>
                <span
                  className={`text-[10px] font-bold uppercase tracking-wider ${role === "admin" ? "text-yellow-400" : role === "writer" ? "text-indigo-400" : "text-pink-400"}`}
                >
                  {role}
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="grow overflow-y-auto px-3 py-4 space-y-1">
            <p className="text-[10px] text-slate-600 font-bold uppercase tracking-widest px-3 pb-2">
              Navigation
            </p>

            {/* {writerMenu?.map((item) => {
              return (
                <button key={item?.key} className="text-white">
                  {item?.label}
                </button>
              );
            })} */}

            {writerMenu.map(({ key, label, icon: Icon, href }) => {
              //   const targetPath = getPath(key);
              //   const isActive =
              //     pathname === targetPath ||
              //     (role === "admin" &&
              //       pathname === "/dashboard/admin" &&
              //       key === "users");
              return (
                <Link
                  key={key}
                  href={href}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all duration-150 text-left cursor-pointer  text-slate-400 hover:text-white hover:bg-white/5
                  `}
                >
                  <span
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors bg-white/5 text-slate-400`}
                  >
                    <Icon size={14} />
                  </span>
                  <span>{label}</span>
                  {/* {isActive && (
                    <span className="ml-auto w-1.5 h-1.5 rounded-full bg-pink-400" />
                  )} */}
                </Link>
              );
            })}
          </nav>

          {/* Bottom Links */}
          <div className="px-3 py-4 border-t border-white/5 space-y-1">
            <Link
              href="/"
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-150"
            >
              <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                <FaHome size={13} />
              </span>
              Back to Site
            </Link>
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-400 hover:text-red-400 hover:bg-red-500/5 transition-all duration-150 cursor-pointer"
            >
              <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                <FaSignOutAlt size={13} />
              </span>
              Sign Out
            </button>
          </div>
        </div>
      </aside>

      {/* children */}
      <main className="flex-1 flex flex-col min-w-0">
        <div className="flex-1 p-4 sm:p-6 md:p-8 lg:p-10 text-white">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
