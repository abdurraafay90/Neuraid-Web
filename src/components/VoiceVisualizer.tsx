"use client";

import { motion } from "framer-motion";

export default function VoiceVisualizer() {
  return (
    <div className="relative flex items-center justify-center w-full h-full min-h-[400px] md:min-h-[500px] overflow-hidden">
      {/* Ambient Deep Glow */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-72 h-72 bg-green-500/20 rounded-full blur-[80px] pointer-events-none"
      />

      {/* Orbiting Dashed Rings */}
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

      {/* Active Audio Waveform Bars */}
      <div className="flex items-center gap-1.5 md:gap-2.5 z-10 h-32">
        {[...Array(32)].map((_, i) => {
          // Create a bell-curve effect so middle bars are taller than edge bars
          const distance = Math.abs(16 - i);
          const maxHeight = 100 - (distance * 5); 
          const minHeight = 15;

          return (
            <motion.div
              key={i}
              animate={{
                height: [`${minHeight}%`, `${Math.max(minHeight, Math.random() * maxHeight)}%`, `${minHeight}%`],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: Math.random() * 0.5 + 0.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 0.2,
              }}
              className="w-1.5 md:w-2 bg-gradient-to-t from-green-500 to-white rounded-full drop-shadow-[0_0_10px_rgba(74,222,128,0.6)]"
              style={{ height: "15%" }} // Initial fallback height
            />
          );
        })}
      </div>

      {/* Center Label */}
      <div className="absolute top-[65%] text-xs font-mono text-green-400/80 tracking-[0.3em] uppercase">
        ACTIVE_LISTENING
      </div>
    </div>
  );
}
