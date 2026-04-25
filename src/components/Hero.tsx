"use client";

import { motion } from "framer-motion";
import { Mic, Brain, Lock } from "lucide-react";
import VoiceVisualizer from "@/components/VoiceVisualizer";

export default function Hero() {
  return (
    <section id="about" className="relative min-h-screen flex flex-col items-center pt-32 pb-20 overflow-hidden bg-black text-white px-6">
      {/* Background Subtle Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/[0.03] rounded-full blur-[120px] pointer-events-none" />
      
      {/* Main Content */}
      <div className="z-10 max-w-5xl mx-auto text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-medium text-white/70 mb-4"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          Always Listening. Locally Processed.
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50"
        >
          Your Photographic <br /> Audio Memory.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed font-light"
        >
          NEURAID seamlessly records, transcribes, and locally embeds your entire day. Securely query your memories at the edge with zero cloud dependency.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
        >
          <a href="#architecture" className="px-8 py-3.5 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)] cursor-none">
            View Architecture
          </a>
          <div className="px-8 py-3.5 rounded-full glass text-white font-medium flex items-center gap-2 cursor-none" title="All processing happens on-device">
            <Lock className="w-4 h-4" />
            100% Private
          </div>
        </motion.div>
      </div>

      {/* Dynamic Voice Visualizer Mockup */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
        className="mt-24 relative w-full max-w-5xl mx-auto rounded-[2rem] glass p-2 overflow-hidden shadow-2xl flex items-center justify-center min-h-[400px] md:min-h-[500px]"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 pointer-events-none" />
        
        {/* Animated AI Audio Visualizer */}
        <VoiceVisualizer />
        
        {/* HUD Elements Overlay */}
        <div className="absolute bottom-8 left-8 z-20 flex flex-col sm:flex-row gap-4">
            <div className="glass px-4 py-3 rounded-xl flex items-center gap-3">
              <Mic className="w-5 h-5 text-white/80" />
              <div className="flex flex-col text-left">
                <span className="text-[10px] text-white/50 font-mono tracking-wider">INPUT SOURCE</span>
                <span className="text-sm font-medium">Capturing Context...</span>
              </div>
            </div>
            <div className="glass px-4 py-3 rounded-xl flex items-center gap-3">
              <Brain className="w-5 h-5 text-white/80" />
              <div className="flex flex-col text-left">
                <span className="text-[10px] text-white/50 font-mono tracking-wider">LOCAL LLM</span>
                <span className="text-sm font-medium">Gemma-3 Edge</span>
              </div>
            </div>
        </div>
      </motion.div>
    </section>
  );
}
