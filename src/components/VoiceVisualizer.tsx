"use client";

import { motion } from "framer-motion";

const visualizerBars = Array.from({ length: 32 }, (_, i) => {
  const distance = Math.abs(16 - i);
  const minHeight = 15;
  const maxHeight = 100 - distance * 5;
  const variance = ((i * 17) % 11) / 10;

  return {
    height: Math.max(minHeight, maxHeight * (0.58 + variance * 0.36)),
    duration: 0.42 + ((i * 7) % 8) * 0.06,
    delay: ((i * 5) % 7) * 0.035,
  };
});

export default function VoiceVisualizer() {
  return (
    <div className="relative flex items-center justify-center w-full h-full min-h-[400px] md:min-h-[500px] overflow-hidden">
      <motion.div
        animate={{ opacity: [0.22, 0.38, 0.22] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-12 pointer-events-none bg-[linear-gradient(90deg,transparent,rgba(74,222,128,0.16),transparent)]"
      />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full border border-white/10 border-dashed pointer-events-none"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute w-[400px] h-[400px] md:w-[550px] md:h-[550px] rounded-full border border-white/[0.03] border-dashed pointer-events-none"
      />

      <div className="flex items-center gap-1.5 md:gap-2.5 z-10 h-32">
        {visualizerBars.map((bar, i) => (
          <motion.div
            key={i}
            animate={{
              height: ["15%", `${bar.height}%`, "15%"],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: bar.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: bar.delay,
            }}
            className="w-1.5 md:w-2 bg-gradient-to-t from-cyan-400 via-green-400 to-white rounded-full drop-shadow-[0_0_10px_rgba(74,222,128,0.6)]"
            style={{ height: "15%" }}
          />
        ))}
      </div>

      <div className="absolute top-[65%] text-xs font-mono text-green-400/80 uppercase">
        ACTIVE_LISTENING
      </div>
    </div>
  );
}
