"use client";
import React from "react";

import { Button } from "@heroui/react";

const UpgradePremiumButton = () => {
  const upgradeToPremium = async () => {
    const res = await fetch("/api/checkout_sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    if (data?.url) {
      window.location.href = data.url;
    }
  };
  return (
    <div>
      {" "}
      <Button
        onClick={upgradeToPremium}
        radius="lg"
        className="w-full md:w-auto bg-linear-to-r from-yellow-500 to-amber-500 hover:from-yellow-400 hover:to-amber-400 text-slate-950 font-bold h-11 px-6 shadow-lg shadow-yellow-500/10 transition-all active:scale-98 cursor-pointer"
      >
        Upgrade to Premium
      </Button>
    </div>
  );
};

export default UpgradePremiumButton;
