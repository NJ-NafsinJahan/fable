"use client";
import React, { useState } from "react";
import { Button } from "@heroui/react";
import { FiShoppingBag } from "react-icons/fi";
import { useSession } from "@/lib/auth-client";
import toast from "react-hot-toast";

const PurchaseButton = ({ title, price, bookWriterEmail }) => {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const currentUser = session?.user;

  const isOwner = currentUser && currentUser.email === bookWriterEmail;
  const handlePurchase = async () => {
    if (!session) {
      toast.error("Log in to purchase");
      return;
    }

    if (!price || !title) {
      toast.error("Info no found");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/checkout_sessions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ title, price }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "payment session failed");
      }

      if (data?.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error("Purchase Error:", error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (isOwner) {
    return null;
  }

  return (
    <Button
      onClick={handlePurchase}
      isLoading={loading}
      size="lg"
      className="font-bold flex-1 bg-linear-to-r from-cyan-400 via-blue-600 to-indigo-700 text-white shadow-xl shadow-primary/20 hover:opacity-90 transition-opacity cursor-pointer w-full"
    >
      {!loading && <FiShoppingBag size={20} className="mr-2" />}
      {loading ? "Processing..." : "Purchase Now"}
    </Button>
  );
};

export default PurchaseButton;
