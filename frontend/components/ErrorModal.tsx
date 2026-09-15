"use client";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  message: string | null;
  onDismiss: () => void;
}

function classify(message: string): { icon: string; title: string } {
  const m = message.toLowerCase();
  if (m.includes("too many") || m.includes("throttled") || m.includes("wait")) {
    return { icon: "⏳", title: "Slow down a bit" };
  }
  if (m.includes("not found")) {
    return { icon: "🔍", title: "Room not found" };
  }
  if (m.includes("full")) {
    return { icon: "🪑", title: "Room is full" };
  }
  if (m.includes("required")) {
    return { icon: "✍️", title: "Missing info" };
  }
  return { icon: "⚠️", title: "Something went wrong" };
}

export default function ErrorModal({ message, onDismiss }: Props) {
  const info = message ? classify(message) : null;
  return (
    <AnimatePresence>
      {message && info && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onDismiss}
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gray-900 border border-red-500/30 rounded-2xl p-6 w-full max-w-sm shadow-2xl text-center"
          >
            <div className="text-4xl mb-3">{info.icon}</div>
            <h3 className="text-white font-bold text-lg mb-2">{info.title}</h3>
            <p className="text-gray-400 text-sm mb-6">{message}</p>
            <button
              onClick={onDismiss}
              className="w-full bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold py-2.5 rounded-xl text-sm transition-all"
            >
              Got it
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
