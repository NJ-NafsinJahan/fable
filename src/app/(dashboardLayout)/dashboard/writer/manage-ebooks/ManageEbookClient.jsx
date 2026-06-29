"use client";

import React, { useState } from "react";

import { FiEye, FiEdit2, FiTrash2 } from "react-icons/fi";
import { Button } from "@heroui/react";
import { FaEdit, FaTrash } from "react-icons/fa";
import DeleteEbookModal from "@/components/DeleteEbookModal";
import EditEbookModal from "@/components/EditEbookModal";

const ManageEbookClient = ({ ebooks }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingEbook, setEditingEbook] = useState(null);
  const [isDeleteOpen, setIsDeleteOpen] = useState(null);
  const [deleteId, setDeletedId] = useState(null);
  const [loadingEvents, setLoadingEvents] = useState(false);

  return (
    <div>
      {/* body */}
      <div className="">
        <div className="w-full rounded-xl border border-white/5 bg-slate-900/20 p-4 min-w-190 overflow-x-auto">
          <div className="grid grid-cols-12 gap-4 border-b border-white/5 pb-4 pt-2 text-slate-500 font-medium text-xs tracking-wider uppercase">
            <div className="col-span-4">Title</div>
            <div className="col-span-2">Writer</div>
            <div className="col-span-2">Price</div>
            {/* <div className="col-span-1">Publish Date</div> */}
            <div className="col-span-2">Status</div>
            <div className="col-span-1 text-right">Actions</div>
          </div>

          <div className="divide-y divide-white/5">
            {ebooks.map((book) => (
              <div
                key={book._id || book.id}
                className="grid grid-cols-12 gap-4 items-center py-4 hover:bg-white/2 transition-colors text-sm text-slate-300"
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
                  {book.name}
                </div>
                {/* <div className="col-span-2 text-slate-400 truncate">
                              {book.uploadedDate}
                            </div> */}

                <div className="col-span-2 font-medium text-slate-200">
                  {book.price}
                </div>

                {/* <div className="col-span-1 font-semibold text-slate-300">
                              {book.sales}
                            </div> */}

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
                  {/* view btn */}
                  <button
                    className="hover:text-white transition-colors"
                    title="View"
                  >
                    <FiEye size={17} />
                  </button>

                  {/* edit btn */}
                  {/* <button
                                className="hover:text-cyan-400 transition-colors"
                                title="Edit"
                              >
                                <FiEdit2 size={15} />
                              </button> */}

                  <div className="group relative flex items-center justify-center w-fit">
                    <Button
                      isIconOnly
                      size="sm"
                      radius="full"
                      className="h-8 w-8 min-w-0 p-0 border border-indigo-500/20 bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20 hover:scale-[1.03] transition-all duration-200"
                      onPress={() => {
                        setEditingEbook({ ...book });
                        setIsModalOpen(true);
                      }}
                    >
                      <FaEdit size={12} />
                    </Button>
                    <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 scale-0 transition-all duration-150 rounded-lg bg-slate-950 border border-white/10 px-2 py-1 text-[10px] text-white group-hover:scale-100 font-semibold z-30 whitespace-nowrap shadow-xl">
                      Edit
                    </span>
                  </div>

                  {/* delete btn */}

                  <div className="group relative flex items-center justify-center w-fit">
                    <Button
                      isIconOnly
                      size="sm"
                      radius="full"
                      className="h-8 w-8 min-w-0 p-0 border border-red-500/20 bg-red-500/10 text-red-400 hover:bg-red-500/20 hover:scale-[1.03] transition-all duration-200"
                      onPress={() => {
                        setDeletedId(book._id);
                        setIsDeleteOpen(true);
                      }}
                    >
                      <FaTrash size={12} />
                    </Button>
                    <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 scale-0 transition-all duration-150 rounded-lg bg-slate-950 border border-white/10 px-2 py-1 text-[10px] text-white group-hover:scale-100 font-semibold z-30 whitespace-nowrap shadow-xl">
                      Delete
                    </span>
                  </div>
                  {/* <button
                                className="hover:text-rose-500 transition-colors"
                                title="Delete"
                              >
                                <FiTrash2 size={16} />
                              </button> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MODALS */}

      {/* Edit Modal */}
      <EditEbookModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        editingEbook={editingEbook}
      ></EditEbookModal>

      {/* DELETE MODAL */}
      <DeleteEbookModal
        isDeleteOpen={isDeleteOpen}
        setIsDeleteOpen={setIsDeleteOpen}
        id={deleteId}
      ></DeleteEbookModal>
    </div>
  );
};

export default ManageEbookClient;
