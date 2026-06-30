import React from "react";

import Link from "next/link";
import { Button } from "@heroui/react";
import { FiBookOpen } from "react-icons/fi";

const Payments = () => {
  return (
    <div>
      <div className="min-h-screen bg-slate-950 text-white p-8">
        {/* header section*/}
        <div className="max-w-4xl mx-auto border-b border-gray-800">
          <h1 className="text-3xl text-cyan-400 font-bold mb-4">My Payments</h1>
          <p className="mb-4 font-mono text-gray-400 ">
            Keep an organized record of your payments
          </p>
        </div>

        {/* main section */}
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
          <p className="text-slate-400 text-lg font-medium mb-5">
            There is no payment Yet..!
          </p>
          <Link href="/ebooks">
            <Button
              color="primary"
              variant="shadow"
              className="font-bold tracking-wide bg-linear-to-r from-cyan-500 to-blue-600 hover:opacity-90 transition-opacity cursor-pointer"
              startContent={<FiBookOpen size={20} />}
            >
              Browse Ebooks
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Payments;
