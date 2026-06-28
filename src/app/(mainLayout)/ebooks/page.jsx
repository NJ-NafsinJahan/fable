import EbookCard from "@/components/EbookCard";
import React from "react";
import { Input, Button } from "@heroui/react";
import { FaSearch, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
// import EbookCard from "./EbookCard";

const EbooksPage = async () => {
  const res = await fetch("http://localhost:8000/api/ebooks");
  const ebooks = await res.json();
  console.log(ebooks, "all ebooks");

  // search
  // const [searchQuery, setSearchQuery] = useState("");

  // const filteredEbooks = ebooks.filter(
  //   (ebook) =>
  //     ebook?.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //     ebook?.name?.toLowerCase().includes(searchQuery.toLowerCase()),
  // );
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-24 md:pt-28 pb-12 transition-colors duration-300">
      {/* header*/}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 bg-slate-900/50 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-md shadow-2xl">
          {/* বাম পাশে: ব্যাক বাটন ও টাইটেল */}
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
          {/* <div className="w-full md:w-80">
            <Input
              type="text"
              placeholder="Search by title or writer..."
              // value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              startContent={
                <FaSearch className="text-slate-400 text-sm shrink-0" />
              }
              isClearable
              // onClear={() => setSearchQuery("")}
              className="w-full text-white"
              classNames={{
                inputWrapper:
                  "bg-slate-950/60 border border-white/10 hover:border-cyan-500/50 focus-within:!border-cyan-500 rounded-xl h-12 shadow-inner",
                input: "text-slate-200 placeholder:text-slate-500 text-sm",
              }}
            />
          </div> */}
        </div>
      </div>

      {/* ebook cards */}
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
    </div>
  );
};

export default EbooksPage;
