"use client";

import { motion } from "framer-motion";

const technologies = [
  { name: "Python", category: "Core Backend" },
  { name: "Gemma-3", category: "Local LLM" },
  { name: "ChromaDB", category: "Vector Storage" },
  { name: "Distil-Whisper", category: "Local STT" },
  { name: "mxbai GGUF", category: "Local Embeddings" },
  { name: "Piper", category: "Local TTS" },
  { name: "Resemblyzer", category: "Voice Auth" },
  { name: "Linux evdev", category: "Hardware I/O" },
];

export default function TechStack() {
  // Duplicate array for seamless infinite scrolling
  const duplicatedTech = [...technologies, ...technologies];

  return (
    <section id="tech-stack" className="py-16 md:py-24 bg-[#050507] text-white border-t border-white/10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-sm font-mono text-white/40 uppercase mb-4">
            Powered by the Edge
          </h2>
        </div>
      </div>

      <div className="relative flex overflow-x-hidden group py-4">
        {/* Left and Right Fade Overlays */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-[#050507] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-[#050507] to-transparent z-10 pointer-events-none" />
        
        <motion.div
          className="flex whitespace-nowrap gap-6 px-3"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        >
          {duplicatedTech.map((tech, index) => (
            <div
              key={index}
              className="glass min-w-[190px] md:min-w-[240px] p-4 md:p-6 rounded-lg flex flex-col items-center justify-center text-center hover:bg-white/[0.05] transition-colors shrink-0"
            >
              <span className="text-lg font-medium text-white/90 mb-1">
                {tech.name}
              </span>
              <span className="text-xs font-mono text-white/40">
                {tech.category}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
