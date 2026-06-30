import { baseURL } from "@/lib/api/baseUrl";
import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";
import EbookCard from "./EbookCard";

import { FaArrowRight } from "react-icons/fa";

const FeaturedPage = async () => {
  const res = await fetch(`${baseURL}/api/featured`, {
    cache: "no-store",
  });

  const featuredEbooks = await res.json();
  console.log(featuredEbooks, "featured Ebooks");

  return (
    <div className="w-full p-12 bg-slate-900 ">
      {/* Header */}
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-4">
            Featured Collection
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Featured Ebooks
          </h2>

          <p className="mt-3 max-w-2xl text-slate-400 text-sm md:text-base leading-relaxed">
            Start your next reading journey with our featured collection.
            Discover handpicked ebooks from talented authors.
          </p>
        </div>

        <Link href="/ebooks">
          <Button
            radius="full"
            className="bg-cyan-600 hover:bg-cyan-500 text-white font-medium px-6"
          >
            All Ebooks
            <FaArrowRight className="ml-2 text-sm" />
          </Button>
        </Link>
      </div>

      {/* Ebook Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        {featuredEbooks.map((ebook) => (
          <EbookCard key={ebook._id} ebook={ebook} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedPage;

// ******
