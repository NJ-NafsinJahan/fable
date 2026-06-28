import Image from "next/image";
import React from "react";
import { Card, CardFooter, Button, Chip } from "@heroui/react";
import { FaUser, FaRegEye } from "react-icons/fa";

const EbookCard = ({ ebook }) => {
  const { coverImage, title, name, price, status, category } = ebook;

  // Status Badge
  const isSold = status?.toLowerCase() === "sold";

  return (
    <Card className="w-full bg-slate-900 border border-white/10 backdrop-blur-md hover:scale-[1.02] transition-transform duration-300 rounded-2xl overflow-hidden shadow-xl">
      {/* Cover Image Section */}
      <div className="relative w-full aspect-3/4 bg-slate-800 flex items-center justify-center overflow-hidden">
        {coverImage ? (
          <Image
            src={coverImage}
            alt={title || "Ebook Cover"}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover"
            priority={false}
          />
        ) : (
          <span className="text-slate-500 text-sm">No Cover Available</span>
        )}

        {/* Dynamic Status Badge */}
        <div className="absolute top-3 right-3 z-10">
          <Chip
            color={isSold ? "danger" : "success"}
            variant="flat"
            className="capitalize font-semibold backdrop-blur-md"
            size="sm"
          >
            {status || "Available"}
          </Chip>
        </div>

        {/* Category Badge */}
        {category && (
          <div className="absolute bottom-3 left-3 z-10">
            <Chip
              className="bg-slate-950/60 text-cyan-400 text-xs border border-cyan-500/30"
              size="sm"
            >
              {category}
            </Chip>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col gap-1.5 justify-between">
        <div>
          <h3
            className="text-white font-bold text-base md:text-lg line-clamp-1"
            title={title}
          >
            {title}
          </h3>
          <p className="text-slate-400 text-sm flex items-center gap-1.5 mt-0.5">
            <FaUser className="text-xs text-slate-500" />
            <span className="line-clamp-1">{name}</span>
          </p>
        </div>
      </div>

      {/* Footer Section */}
      <CardFooter className="p-4 pt-0 flex items-center justify-between gap-2 border-t border-white/5 mt-2">
        <span className="text-cyan-400 font-extrabold text-lg">${price}</span>
        <Button
          size="sm"
          endContent={<FaRegEye />}
          className="bg-linear-to-r from-cyan-500 to-indigo-600 text-white font-medium rounded-xl shadow-lg shadow-cyan-500/20"
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EbookCard;
