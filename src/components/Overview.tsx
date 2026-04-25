"use client";

import { motion } from "framer-motion";
import { Mic, Users, Search, Brain, Volume2, MapPin } from "lucide-react";
import TiltCard from "@/components/TiltCard";

const features = [
  {
    title: "Continuous Audio Capture",
    description: "Always-on edge recording managed by a Bluetooth trigger, capturing your environment without missing a beat.",
    icon: Mic,
  },
  {
    title: "Speaker Diarization",
    description: "Intelligently separates and tags different speakers in real-time to maintain perfect conversational context.",
    icon: Users,
  },
  {
    title: "Vector Retrieval (ChromaDB)",
    description: "Transcripts are embedded and stored locally, allowing for blazing-fast semantic search of your past memories.",
    icon: Search,
  },
  {
    title: "Gemma-3 Edge Inference",
    description: "Locally hosted 1B parameter model processes your queries securely, synthesizing context without internet access.",
    icon: Brain,
  },
  {
    title: "Instant Local TTS",
    description: "Answers are spoken back to you instantly using Piper TTS for a seamless, hands-free auditory experience.",
    icon: Volume2,
  },
  {
    title: "Geospatial Tagging",
    description: "Every memory is metadata-tagged with your GPS coordinates, adding spatial context to what you remember.",
    icon: MapPin,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Overview() {
  return (
    <section id="features" className="relative py-32 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 mb-6">
            A Second Brain, Completely Offline.
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            NEURAID integrates advanced edge computing with state-of-the-art local AI models to build a comprehensive, private database of your life.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants} className="h-full">
              <TiltCard className="glass p-8 rounded-3xl flex flex-col items-start group hover:bg-white/[0.02] transition-colors h-full cursor-none">
                <div className="p-3 bg-white/5 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white/80" />
                </div>
                <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
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
