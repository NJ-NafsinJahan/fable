"use client";
import React from "react";

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
  FaUserCircle,
  FaTicketAlt,
  FaHistory,
  FaUserShield,
} from "react-icons/fa";
import { FaBookBookmark } from "react-icons/fa6";
import { TbReportMoney } from "react-icons/tb";

const DashboardSidebar = ({ children }) => {
  const { data: session } = useSession();
  console.log(session, "from dashboard sidebar");

  //   for logout
  const handleLogout = () => {};

  //   Writer sidebar menu
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
      href: "/dashboard/writer/writer-profile",
    },
    {
      key: "add-ebook",
      label: "Add Ebook",
      icon: FaPlus,
      href: "/dashboard/writer/add-ebook",
    },
    {
      key: "manage-ebooks",
      label: "Manage Ebooks",
      icon: FaCalendarAlt,
      href: "/dashboard/writer/manage-ebooks",
    },
    {
      key: "sales",
      label: "Sales",
      icon: FaUsers,
      href: "/dashboard/writer/sales",
    },
  ];

  //   Reader sidebar menu
  const readerMenu = [
    {
      key: "overview",
      label: "Overview",
      icon: FaUserCircle,
      href: "/dashboard/reader",
    },
    {
      key: "purchased-ebook",
      label: "Purchased Ebooks",
      icon: FaTicketAlt,
      href: "/dashboard/reader/purchased-ebook",
    },
    {
      key: "payments",
      label: "Payments",
      icon: FaHistory,
      href: "/dashboard/reader/payments",
    },
    {
      key: "bookmark",
      label: "Bookmarks",
      icon: FaBookBookmark,
      href: "/dashboard/reader/bookmarks",
    },
  ];

  // Admin sidebar Menu
  const adminMenu = [
    {
      key: "overview",
      label: "Overview",
      icon: FaUserCircle,
      href: "/dashboard/admin",
    },
    {
      key: "manage-users",
      label: "Manage Users",
      icon: FaUserShield,
      href: "/dashboard/admin/manage-users",
    },
    {
      key: "manage-all-ebooks",
      label: "Manage all ebooks",
      icon: FaCalendarAlt,
      href: "/dashboard/admin/manage-all-ebooks",
    },
    {
      key: "transactions",
      label: "All Transaction ",
      icon: TbReportMoney,
      href: "/dashboard/admin/transactions",
    },
  ];

  //   const role = "admin";
  //   const role = "reader";
  const role = session?.user?.role;
  console.log(role, " role from dashboard sidebar");

  const menuItems =
    role === "writer"
      ? writerMenu
      : role === "reader"
        ? readerMenu
        : role === "admin"
          ? adminMenu
          : null;

  return (
    <div className="w-64 h-screen sticky top-0 p-4 shrink-0 hidden md:block">
      {" "}
      <aside className=" md:flex md:w-64 flex-col bg-slate-950/40 backdrop-blur-xl border-r border-white/5 h-screen sticky top-0">
        {/* LOGO SECTION */}
        <Logo></Logo>

        {/* side bar section */}
        <div className="h-full flex flex-col bg-slate-950/80 backdrop-blur-xl">
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

            {menuItems?.map(({ key, label, icon: Icon, href }) => {
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
    </div>
  );
};

export default DashboardSidebar;
