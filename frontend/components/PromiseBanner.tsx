"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PromiseBanner() {
  return (
    <Link href="/our-promise">
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="flex items-center gap-2 bg-sky-500/10 hover:bg-sky-500/20 border border-sky-400/30 rounded-full px-4 py-2 cursor-pointer transition-colors"
      >
        <span className="text-base">🛡️</span>
        <span className="text-sky-300 text-xs font-semibold">
          Our Promise: Always Free, No Betting
        </span>
        <span className="text-sky-400 text-xs">→</span>
      </motion.div>
    </Link>
  );
}
