"use client";
import React from "react";

import DashboardSidebar from "@/components/DashboardSidebar";
// import { Toaster } from "react-hot-toast";

const DashboardLayout = ({ children }) => {
  return (
    <div className="bg-[#030712] min-h-screen w-full flex  pb-16 px-4 md:px-6 relative overflow-hidden">
      {/* dashboard ar main Layout , based on role  children section will chang*/}

      <DashboardSidebar></DashboardSidebar>

      {/* children */}
      <main className="flex-1 flex flex-col min-w-0">
        <div className="flex-1 p-4 sm:p-6 md:p-8 lg:p-10 text-white">
          {children}
        </div>
      </main>
      {/* <Toaster /> */}
    </div>
  );
};

export default DashboardLayout;
