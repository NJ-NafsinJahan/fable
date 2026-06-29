import EbookCard from "@/components/EbookCard";
import React, { Suspense } from "react";
import { Input, Button, Spinner } from "@heroui/react";
import { FaSearch, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import FilterPanel from "@/components/FilterPanel";
// import EbookCard from "./EbookCard";

const EbooksPage = async ({ searchParams }) => {
  // search filter
  const sParams = await searchParams;
  console.log(sParams);
  const page = sParams.page || "1";
  const search = sParams.search || "";
  const category = sParams.category || "";
  const sort = sParams.sort || "";

  const params = new URLSearchParams();
  params.set("page", page);
  params.set("limit", "6");
  if (search) {
    params.set("search", search);
  }
  if (category) {
    params.set("category", category);
  }
  if (sort) {
    params.set("sort", sort);
  }

  // data fetch
  // const res = await fetch("http://localhost:8000/api/ebooks");
  // const ebooks = await res.json();
  // console.log(ebooks, "all ebooks");

  const res = await fetch(
    `http://localhost:8000/api/ebooks?${params.toString()}`,
    {
      cache: "no-store",
    },
  );

  const data = await res.json();
  const ebooks = data.ebooks || data;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-24 md:pt-28 pb-12 transition-colors duration-300">
      {/* header*/}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 bg-slate-900/50 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-md shadow-2xl">
          <div className="space-y-3">
            <Link href="/" passHref>
              <Button
                size="sm"
                variant="light"
                startContent={<FaArrowLeft />}
                className="text-slate-400 hover:text-cyan-400 font-medium px-2"
              >
                Back to Home
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl md:text-4xl font-extrabold bg-linear-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent tracking-tight">
                Browse All Ebooks
              </h1>
              <p className="text-sm text-slate-400 mt-1">
                Explore our vast collection of digital books and starting
                reading instantly.
              </p>
            </div>
          </div>

          {/* Search  */}
          <Suspense
            fallback={
              <div className="h-28 w-full glass animate-pulse rounded-2xl" />
            }
          >
            <FilterPanel />
          </Suspense>
        </div>
      </div>

      {/* ebook cards */}
      <Suspense fallback={<Spinner size="lg"></Spinner>}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {ebooks.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
              {ebooks.map((ebook) => (
                <div
                  key={ebook?._id}
                  className="flex justify-center h-full w-full"
                >
                  <EbookCard ebook={ebook} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-slate-900/20 border border-white/5 rounded-3xl backdrop-blur-xs">
              <p className="text-slate-400 text-lg">
                No ebooks found matching your search.
              </p>
            </div>
          )}
        </div>
      </Suspense>
    </div>
  );
};

export default EbooksPage;
