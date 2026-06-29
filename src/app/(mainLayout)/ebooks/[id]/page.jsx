import React from "react";
import Link from "next/link";
import { Button, Card, Chip } from "@heroui/react";
import {
  FiArrowLeft,
  FiBookmark,
  FiShoppingBag,
  FiCalendar,
  FiBookOpen,
} from "react-icons/fi";
import PurchaseButton from "@/components/PurchaseButton";

const EbookDetailsPage = async ({ params }) => {
  const { id } = await params;

  // API Fetching
  const res = await fetch(`http://localhost:8000/api/ebooks/${id}`, {
    cache: "no-store",
  });
  const ebookDetails = await res.json();
  console.log(ebookDetails, "ebook details");

  const {
    _id,
    coverImage,
    title,
    name,
    price,
    status,
    category,
    description,
    uploadedDate,
  } = ebookDetails;

  const formattedDate = new Date(uploadedDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // ****** payment

  // const handlePurchaseEbook = async () => {
  //   const updateToPurchased = async () => {
  //     const paymentData = {
  //       type: "payment",
  //       totalAmount,
  //       ebookId: _id,
  //       ebookTitle: title,
  //       quantity,
  //       ebookPrice: price,
  //     };
  //     const res = await fetch("/api/checkout_sessions", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ type: "payment" }),
  //     });
  //     const data = await res.json();
  //     console.log(data, "book payment");

  //     if (data?.url) {
  //       window.location.href = data.url;
  //     }
  //   };
  // };

  // ****** payment

  return (
    <div className="min-h-screen bg-slate-900 text-zinc-100 pt-28 pb-16 px-4  mx-auto selection:bg-primary selection:text-white">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-10 pb-5 border-b border-zinc-800/80">
        <Link href="/ebooks" passHref>
          <Button
            variant="flat"
            className="font-medium bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800"
          >
            <FiArrowLeft size={18} color="white" /> Browse Ebooks
          </Button>
        </Link>

        <div className="flex flex-col justify-between items-center gap-2 text-zinc-300 text-2xl font-medium">
          <div className=" flex items-center gap-4">
            <FiBookOpen size={30} />
            <span>Ebook Library</span>
          </div>
          <p className="text-cyan-500 text-sm">
            Beyond the pages, into the infinite world of your favorite stories
          </p>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
        {/* Left: Sticky Book Cover */}
        <div className="md:col-span-5 lg:col-span-4 md:sticky md:top-28">
          <Card className="bg-zinc-900 border border-zinc-800 shadow-2xl shadow-black/50 overflow-hidden group">
            <div className="p-0">
              <img
                src={coverImage || "https://via.placeholder.com/400x600"}
                alt={title}
                className="w-full h-auto object-cover aspect-3/4 group-hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>
          </Card>
        </div>

        {/* Right: Premium Dark Details */}
        <div className="md:col-span-7 lg:col-span-8 space-y-6">
          <div>
            {/* Tag & Status */}
            <div className="flex flex-wrap gap-2 mb-4">
              <Chip
                variant="flat"
                className="bg-primary/10 text-primary border border-primary/20 font-medium"
                size="sm"
              >
                {category}
              </Chip>
              <Chip
                variant="dot"
                color={status === "Available" ? "success" : "danger"}
                size="xl"
                className="bg-green-500 border border-green-800 text-gray-800"
              >
                {status}
              </Chip>
            </div>

            {/* Title & Author */}
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-3">
              {title}
            </h1>
            <p className="text-lg text-zinc-400">
              By{" "}
              <span className="text-primary font-semibold hover:underline cursor-pointer">
                {name}
              </span>
            </p>
          </div>

          {/* Price Tag (Dark Theme Styled) */}
          <div className="p-5 bg-linear-to-br from-gray-600 to-zinc-900/40 border border-zinc-800 rounded-2xl inline-block min-w-45 shadow-inner">
            <p className="text-xs text-white uppercase tracking-widest font-bold">
              Price
            </p>
            <p className="text-3xl font-black text-white mt-1 flex items-baseline gap-1">
              <span className="text-2xl font-medium text-zinc-200">$</span>{" "}
              {price}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center items-center sm:flex-row gap-4 pt-4">
            {/* ***** */}
            <PurchaseButton
              title={ebookDetails.title}
              price={ebookDetails.price}
              bookWriterEmail={ebookDetails.writerEmail}
            />

            {/* <PurchaseButton></PurchaseButton> */}
            {/* <Button
              size="lg"
              className="font-bold flex-1 bg-linear-to-r from-cyan-400 via-blue-600 to-indigo-700  text-white shadow-xl shadow-primary/20 bg-primary hover:opacity-80 transition-opacity"
            >
              <FiShoppingBag size={20} /> Purchase Now
            </Button> */}

            {/* ***** */}
            <Button
              variant="outline"
              size="lg"
              className="font-semibold text-green-400 border-zinc-700 hover:bg-zinc-900 hover:text-white transition-colors"
            >
              <FiBookmark size={20} /> Bookmark
            </Button>
          </div>

          <hr className="border-zinc-800/80 my-8" />

          {/* Description */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-zinc-200 tracking-wide">
              Description
            </h3>
            <p className="text-zinc-400 leading-relaxed text-justify font-normal antialiased">
              {description}
            </p>
          </div>

          {/* Uploaded Date */}
          <div className="flex items-center gap-2 text-sm text-zinc-500 pt-6 border-t border-zinc-900">
            <FiCalendar size={16} className="text-zinc-600" />
            <span>
              Published on:{" "}
              <b className="text-zinc-400 font-medium">{formattedDate}</b>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EbookDetailsPage;
