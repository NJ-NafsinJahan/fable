"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "@/lib/auth-client";
import { Card } from "@heroui/react";
import Link from "next/link";
import { baseURL } from "@/lib/api/baseUrl";

const BookmarkPage = () => {
  const { data: session, isPending } = useSession();
  console.log(session, "bookmark");
  const [bookmarks, setBookmarks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isPending && session?.user?.email) {
      fetch(`${baseURL}/api/bookmarks/${session.user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setBookmarks(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching bookmarks:", err);
          setLoading(false);
        });
    } else if (!isPending && !session?.user) {
      setLoading(false);
    }
  }, [session, isPending]);

  if (isPending || loading) {
    return (
      <div className="text-white text-center p-10">Loading Bookmarks...</div>
    );
  }

  if (!session?.user) {
    return <div className="text-white text-center p-10"> Login first</div>;
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">
          My Bookmarked Books ({bookmarks.length})
        </h1>

        {bookmarks.length === 0 ? (
          <p className="text-slate-400">There is no Bookmarked book..!</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {bookmarks.map((item) => (
              <Card
                key={item._id}
                className="bg-slate-900 border border-white/5 p-4 rounded-xl"
              >
                <div className="p-0 space-y-3">
                  {item.coverImage && (
                    <img
                      src={item.coverImage}
                      alt={item.title}
                      className="w-full h-40 object-cover rounded-lg"
                    />
                  )}
                  <h3 className="text-lg font-bold text-white line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-green-400 font-semibold">${item.price}</p>

                  <Link
                    href={`/ebooks/${item.bookId}`}
                    className="block text-center bg-cyan-600 hover:bg-cyan-700 text-white text-sm font-medium py-2 rounded-lg transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BookmarkPage;
