"use client";

import { motion, Variants } from "framer-motion";
import { Mic, Search, Brain, Volume2, MapPin, ShieldCheck, Waves } from "lucide-react";
import TiltCard from "@/components/TiltCard";

const features = [
  {
    title: "Continuous Audio Capture",
    description: "Headset audio capture with VAD filtering.",
    icon: Mic,
  },
  {
    title: "Local Speech-to-Text",
    description: "Distil-Whisper turns speech into local text.",
    icon: Waves,
  },
  {
    title: "Owner-Gated Recall",
    description: "Voice verification protects private recall.",
    icon: ShieldCheck,
  },
  {
    title: "Vector Retrieval (ChromaDB)",
    description: "Stored memories become searchable context.",
    icon: Search,
  },
  {
    title: "Gemma-3 Edge Inference",
    description: "Local model answers from retrieved memories.",
    icon: Brain,
  },
  {
    title: "Instant Local TTS",
    description: "Piper speaks answers back through audio.",
    icon: Volume2,
  },
  {
    title: "Location Context",
    description: "Memories can include place and time metadata.",
    icon: MapPin,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Overview() {
  return (
    <section id="features" className="relative py-16 md:py-32 px-4 sm:px-6 bg-[#050507] text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-10 md:mb-20"
        >
          <h2 className="text-2xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 mb-4 md:mb-6">
            A Second Brain, Completely Offline.
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-sm md:text-lg">
            A private edge-AI pipeline for capturing, searching, and recalling spoken memory.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants} className="h-full">
              <TiltCard className="glass p-5 md:p-8 rounded-lg flex flex-col items-start group hover:bg-white/[0.02] transition-colors h-full">
                <div className="p-2.5 md:p-3 bg-white/5 rounded-lg mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-white/80" />
                </div>
                <h3 className="text-lg md:text-xl font-medium mb-2 md:mb-3">{feature.title}</h3>
                <p className="text-white/50 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
