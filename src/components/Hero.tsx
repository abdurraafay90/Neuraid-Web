"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  Brain,
  Cpu,
  Database,
  Headphones,
  Lock,
  MapPin,
  Mic,
  ShieldCheck,
} from "lucide-react";
import VoiceVisualizer from "@/components/VoiceVisualizer";

const signalCards = [
  { label: "Capture", value: "FBT-AS18", icon: Headphones, accent: "text-cyan-300" },
  { label: "STT", value: "Distil-Whisper", icon: Mic, accent: "text-fuchsia-300" },
  { label: "Memory", value: "ChromaDB", icon: Database, accent: "text-purple-300" },
  { label: "Recall", value: "Gemma-3", icon: Brain, accent: "text-yellow-300" },
];

const statLine = [
  ["100%", "Local-first recall"],
  ["Pi 5", "Edge target"],
  ["Voice", "Owner gated"],
  ["GPS", "Context tags"],
];

export default function Hero() {
  return (
    <section id="about" className="relative min-h-[92vh] flex flex-col items-center pt-28 pb-14 overflow-hidden bg-[#050507] text-white px-6 border-b border-white/10">
      <div className="absolute inset-0 pointer-events-none opacity-45 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:72px_72px]" />
      <div className="absolute inset-x-0 top-0 h-56 pointer-events-none bg-[linear-gradient(110deg,rgba(34,211,238,0.14),transparent_34%,rgba(244,114,182,0.12)_70%,transparent)] animated-surface" />
      
      <div className="z-10 max-w-6xl mx-auto text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg glass text-xs font-medium text-white/70 mb-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 animate-pulse" />
          Private edge memory assistant
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-semibold text-transparent bg-clip-text bg-[linear-gradient(180deg,#ffffff_0%,#e8fbff_42%,#f7b7ff_100%)]"
        >
          Wearable Memory <br /> for Real Conversations.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed font-light"
        >
          NEURAID captures speech, enriches it with time and location, stores it locally, and lets the owner ask spoken questions against their own memory.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
        >
          <a href="#architecture" className="px-6 py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition-colors shadow-[0_0_24px_rgba(255,255,255,0.24)] inline-flex items-center gap-2">
            View Architecture <ArrowRight className="h-4 w-4" />
          </a>
          <div className="px-6 py-3 rounded-lg glass text-white font-medium flex items-center gap-2" title="Query access is protected by owner voice verification">
            <Lock className="w-4 h-4" />
            Owner Verified
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
        className="mt-14 relative w-full max-w-6xl mx-auto rounded-lg glass overflow-hidden shadow-2xl min-h-[420px] md:min-h-[500px]"
      >
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(34,211,238,0.13),transparent_35%,rgba(244,114,182,0.14)_70%,transparent)] pointer-events-none animated-surface" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-[#050507]/10 to-transparent z-10 pointer-events-none" />

        <VoiceVisualizer />

        <div className="absolute top-5 left-5 right-5 z-20 grid gap-3 md:grid-cols-4">
          {signalCards.map((card) => (
            <div key={card.label} className="glass rounded-lg px-4 py-3 flex items-center gap-3 min-w-0">
              <card.icon className={`h-4 w-4 shrink-0 ${card.accent}`} />
              <div className="min-w-0 text-left">
                <div className="text-[10px] font-mono uppercase text-white/35">{card.label}</div>
                <div className="text-sm font-medium truncate">{card.value}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute left-5 bottom-5 z-20 hidden lg:flex items-end gap-4">
          <div className="glass rounded-lg p-4 w-48">
            <div className="text-[10px] font-mono uppercase text-white/35 mb-3">Hardware Node</div>
            <Image src="/PI.png" alt="Raspberry Pi 5 processing board" width={2504} height={1560} className="w-full h-auto object-contain drop-shadow-[0_0_18px_rgba(255,255,255,0.18)]" />
          </div>
          <div className="glass rounded-lg p-4 w-36">
            <div className="text-[10px] font-mono uppercase text-white/35 mb-3">Input</div>
            <Image src="/Headphones.png" alt="Bluetooth headset" width={2164} height={1876} className="w-full h-auto object-contain drop-shadow-[0_0_18px_rgba(34,211,238,0.22)]" />
          </div>
        </div>

        <div className="absolute right-5 bottom-5 z-20 grid grid-cols-2 gap-3 w-[min(420px,calc(100%-40px))]">
          {statLine.map(([value, label]) => (
            <div key={label} className="glass rounded-lg px-4 py-3 text-left">
              <div className="text-xl font-semibold">{value}</div>
              <div className="text-[10px] font-mono uppercase text-white/40 mt-1">{label}</div>
            </div>
          ))}
        </div>

        <div className="absolute top-1/2 right-8 z-20 hidden xl:grid gap-3 -translate-y-1/2">
          <div className="glass rounded-lg px-4 py-3 flex items-center gap-3">
            <ShieldCheck className="h-4 w-4 text-emerald-300" />
            <span className="text-xs text-white/70">Voice access gate</span>
          </div>
          <div className="glass rounded-lg px-4 py-3 flex items-center gap-3">
            <MapPin className="h-4 w-4 text-blue-300" />
            <span className="text-xs text-white/70">Location metadata</span>
          </div>
          <div className="glass rounded-lg px-4 py-3 flex items-center gap-3">
            <Cpu className="h-4 w-4 text-yellow-300" />
            <span className="text-xs text-white/70">Local inference</span>
          </div>
        </div>

        <div className="absolute left-1/2 bottom-5 z-20 -translate-x-1/2 hidden md:flex items-center gap-2 text-xs font-mono uppercase text-white/35">
          <span className="h-px w-10 bg-white/20" />
          Scroll for live memory loop
          <span className="h-px w-10 bg-white/20" />
        </div>
      </motion.div>
    </section>
  );
}
