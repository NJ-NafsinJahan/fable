"use client";

import { useState } from "react";
import {
  Card,
  Input,
  Button,
  Label,
  Select,
  SelectTrigger,
  SelectValue,
  SelectIndicator,
  SelectPopover,
  ListBox,
  ListBoxItem,
} from "@heroui/react";
import { FaSearch, FaSlidersH, FaHistory } from "react-icons/fa";
import { useRouter } from "next/navigation";

const CATEGORIES = [
  "Fiction",
  "Sci-Fi",
  "Mystery",
  "Biography",
  "Poetry",
  "Business",
  "Self-Help",
  "Other",
];

const SORT_OPTIONS = [
  { label: "Price: Low to High", value: "low-to-high" },
  { label: "Price: High to Low", value: "high-to-low" },
];

export default function FilterPanel() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");
  const router = useRouter();

  const handleApplyFilters = () => {
    const params = new URLSearchParams();
    params.set("page", "1");

    if (search.trim()) {
      params.set("search", search);
    }
    if (category) {
      params.set("category", category);
    }
    if (sort) {
      params.set("sort", sort);
    }

    router.push(`/ebooks?${params.toString()}`);
  };

  const handleResetFilters = () => {
    setSearch("");
    setCategory("");
    setSort("");
    router.push("/ebooks?page=1");
  };

  return (
    <Card
      className="relative overflow-hidden bg-slate-950/40 border border-white/10 backdrop-blur-2xl p-8 shadow-2xl rounded-3xl"
      radius="none"
    >
      {/* Decorative gradient glow behind the panel */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-linear-to-br from-cyan-500/10 via-purple-600/5 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-linear-to-tr from-indigo-500/10 via-indigo-600/5 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="gap-6 grid grid-cols-1 md:grid-cols-4 items-end">
        {/* Search Input */}
        <div className="flex flex-col gap-2">
          <Label
            htmlFor="search-title"
            className="text-xs font-bold uppercase tracking-wider text-slate-400"
          >
            Search Title
          </Label>
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            id="search-title"
            placeholder="Search keyword..."
            // startContent={<FaSearch className="text-cyan-500 text-sm mr-1" />}
            variant="bordered"
            className="w-full bg-slate-900/60 border border-white/10 rounded-xl p-3 focus:outline-none focus:border-cyan-500 hover:border-white/20 text-white text-sm cursor-pointer h-12 flex items-center transition-all duration-300"
          />
        </div>

        {/* Category Selector */}
        <div className="flex flex-col gap-2">
          <Label
            htmlFor="filter-category"
            className="text-xs font-bold uppercase tracking-wider text-slate-400"
          >
            Category
          </Label>

          <div className="relative group">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full h-12 bg-slate-900/60 border border-white/10 rounded-xl px-3 text-gray-200 text-sm outline-none focus:border-cyan-500"
            >
              <option value="">All Categories</option>
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Price Selector */}
        <div className="flex flex-col gap-2">
          <Label
            htmlFor="filter-sort"
            className="text-xs font-bold uppercase tracking-wider text-slate-400"
          >
            Sort By Price
          </Label>
          <div className="relative group">
            <Select
              aria-label="Sort By Price"
              placeholder="Default Sorting"
              selectedKeys={sort ? new Set([sort]) : new Set()}
              onSelectionChange={(keys) => {
                const selectedValue = Array.from(keys)[0];
                setSort(String(selectedValue || ""));
              }}
              className="w-full"
            >
              <SelectTrigger className="w-full flex items-center justify-between bg-slate-900/60 border border-white/10 rounded-xl px-3 h-12 text-white text-sm">
                <SelectValue />
                <SelectIndicator />
              </SelectTrigger>
              <SelectPopover className="bg-slate-950 border border-white/10 rounded-xl shadow-2xl p-1 min-w-50">
                <ListBox className="outline-none">
                  {SORT_OPTIONS.map((opt) => (
                    <ListBoxItem
                      key={opt.value}
                      id={opt.value}
                      textValue={opt.label}
                      className="p-2 text-white hover:bg-cyan-500/20 rounded-lg cursor-pointer"
                    >
                      {opt.label}
                    </ListBoxItem>
                  ))}
                </ListBox>
              </SelectPopover>
            </Select>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 w-full">
          <Button
            onClick={handleApplyFilters}
            className="grow bg-linear-to-r from-cyan-400 via-blue-600 to-indigo-700 text-white font-bold h-12 shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 hover:scale-[1.02] active:scale-95 transition-all duration-200"
            startContent={<FaSlidersH size={13} />}
          >
            Apply Filters
          </Button>
          <Button
            onClick={handleResetFilters}
            variant="bordered"
            className="border-white/10 hover:border-white/20 hover:bg-white/5 text-white font-semibold h-12 transition-all duration-200 px-4 min-w-0"
            title="Reset Filters"
          >
            <FaHistory size={13} className="text-slate-400 hover:text-white" />
          </Button>
        </div>
      </div>
    </Card>
  );
}
