"use client";
import React, { useState } from "react";
import { Button } from "@heroui/react";
import { FiBookmark } from "react-icons/fi";
import { useSession } from "@/lib/auth-client";
import { baseURL } from "@/lib/api/baseUrl";
import toast from "react-hot-toast";

const BookmarkButton = ({ ebookDetails }) => {
  const { data: session } = useSession();
  console.log(session, "bookmark btn");
  const [loading, setLoading] = useState(false);

  const handleBookmark = async () => {
    if (!session?.user) {
      toast.error("Login first!");
      return;
    }
    try {
      setLoading(true);
      const res = await fetch(`${baseURL}/api/bookmarks`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userEmail: session.user.email,
          bookId: ebookDetails._id,
          title: ebookDetails.title,
          coverImage: ebookDetails.coverImage,
          price: ebookDetails.price,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        toast.error(" The book is not Bookmarked ! ");
      }

      toast.success("Bookmark successful 🎉");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      onClick={handleBookmark}
      isLoading={loading}
      variant="outline"
      size="lg"
      className="font-semibold text-green-400 border-zinc-700 hover:bg-zinc-900 hover:text-white transition-colors"
    >
      <FiBookmark size={18} /> Bookmark
    </Button>
  );
};

export default BookmarkButton;
