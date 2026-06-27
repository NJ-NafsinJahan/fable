import React from "react";
import { FiEye, FiEdit2, FiBarChart2, FiTrash2 } from "react-icons/fi";

const ManageEbook = () => {
  const ebooks = [
    {
      id: 1,
      title: "The Art of Fable",
      category: "Sci-Fi",
      writerName: "Apurbo",
      price: "$15.00",
      sales: 120,
      status: "Pending",
    },
    {
      id: 2,
      title: "Mystery of the Old Clock",
      category: "Mystery",
      writerName: "Siddik",
      price: "$12.50",
      sales: 45,
      status: "Available",
    },
    {
      id: 3,
      title: "Mastering Habits 2026",
      category: "Self-Help",
      writerName: "Zayan",
      price: "$20.00",
      sales: 310,
      status: "Available",
    },
  ];

  return (
    <div className="p-6 bg-slate-950 min-h-screen text-slate-300">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-white">Manage Your Ebooks</h2>
          <p className="text-xs text-slate-500">
            View, edit, and track your published ebooks status.
          </p>
        </div>

        <div className="w-full rounded-xl border border-white/5 bg-slate-900/20 p-4 min-w-[760px] overflow-x-auto">
          <div className="grid grid-cols-12 gap-4 border-b border-white/5 pb-4 pt-2 text-slate-500 font-medium text-xs tracking-wider uppercase">
            <div className="col-span-4">Title</div>
            <div className="col-span-2">Writer</div>
            <div className="col-span-2">Price</div>
            <div className="col-span-1">Sales</div>
            <div className="col-span-2">Status</div>
            <div className="col-span-1 text-right">Actions</div>
          </div>

          <div className="divide-y divide-white/5">
            {ebooks.map((book) => (
              <div
                key={book.id}
                className="grid grid-cols-12 gap-4 items-center py-4 hover:bg-white/[0.02] transition-colors text-sm text-slate-300"
              >
                <div className="col-span-4 pr-4">
                  <div className="font-semibold text-white text-[15px]">
                    {book.title}
                  </div>
                  <div className="text-xs text-emerald-500/80 mt-0.5">
                    Category: {book.category}
                  </div>
                </div>

                <div className="col-span-2 text-slate-400 truncate">
                  {book.writerName}
                </div>

                <div className="col-span-2 font-medium text-slate-200">
                  {book.price}
                </div>

                <div className="col-span-1 font-semibold text-slate-300">
                  {book.sales}
                </div>

                <div className="col-span-2">
                  {book.status === "Available" ? (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      Available
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border border-amber-500/20 bg-amber-500/10 text-amber-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                      Pending
                    </span>
                  )}
                </div>

                <div className="col-span-1 flex items-center justify-end gap-3 text-slate-400">
                  <button
                    className="hover:text-white transition-colors"
                    title="View"
                  >
                    <FiEye size={17} />
                  </button>
                  <button
                    className="hover:text-cyan-400 transition-colors"
                    title="Edit"
                  >
                    <FiEdit2 size={15} />
                  </button>

                  <button
                    className="hover:text-rose-500 transition-colors"
                    title="Delete"
                  >
                    <FiTrash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageEbook;
