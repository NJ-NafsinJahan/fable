import React from "react";

import Link from "next/link";
import { motion } from "motion/react";
import { PiNotebookBold } from "react-icons/pi";

const Logo = () => {
  return (
    <div>
      {" "}
      {/* LOGO SECTION */}
      <Link href="/">
        <div className="flex items-center gap-3 border-b py-7 border-white/5">
          <div className="w-8 h-8 bg-linear-to-r from-cyan-400 via-blue-600 to-indigo-700 rounded-lg flex items-center justify-center font-bold text-lg shadow-[0_0_15px_rgba(59,130,246,0.5)]">
            <PiNotebookBold size="24px" color="white" />
          </div>
          <motion.span
            animate={{
              opacity: [0.5, 1, 0.5],
              scale: [0.92, 1.05, 0.92],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="font-semibold text-2xl tracking-wider text-white select-none"
          >
            Fable
          </motion.span>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
