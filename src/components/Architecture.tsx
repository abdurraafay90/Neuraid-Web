"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Terminal, Database, Brain, Waves, Shield, ArrowRight } from "lucide-react";

const logs = [
  "[Orchestrator] 🧠 Starting Personal Cognitive Memory Assistant...",
  "[Pipeline] Initializing local STT and vector clients in background...",
  "[Engine] Loading Voice Authentication...",
  "[Engine] Connecting to local LLM and ChromaDB...",
  "🚀 Booting up local LLM server on port 8000...",
  "✅ Local Server is live!",
  "\n[Orchestrator] 🎧 Device is ready. Waiting for Bluetooth trigger...",
  "[Bluetooth] Grabbed FBT-AS18",
  "[State] QUERY initiated...",
  "[Orchestrator] 🎤 Recording Query...",
  "\n🔒 Verifying voice identity...",
  "✅ ACCESS GRANTED. Transcribing...",
  "🗣️ You said: What was the idea for the landing page again?",
  "🧠 Thinking...",
  "🤖 Assistant: We decided on a sleek, Apple/OpenAI hardware aesthetic using Next.js and Tailwind.",
];

const pipelineStages = [
  { label: "Listen", detail: "Headset audio enters VAD and recorder workers." },
  { label: "Transcribe", detail: "Distil-Whisper turns accepted segments into text." },
  { label: "Remember", detail: "mxbai GGUF embeddings are stored in ChromaDB." },
  { label: "Recall", detail: "Owner voice auth gates retrieval and Gemma-3 answers." },
];

export default function Architecture() {
  const [displayedLogs, setDisplayedLogs] = useState<string[]>([]);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < logs.length) {
        const cleanedLog = logs[currentIndex].replace(/[^\n\x20-\x7E]/g, "").trimStart();
        setDisplayedLogs((prev) => [...prev, cleanedLog]);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="architecture" className="py-32 px-6 bg-[#050507] text-white overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col gap-24">
        
        {/* Top: Explanation & Terminal */}
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-mono text-white/70 mb-6">
                <Terminal className="w-3.5 h-3.5" />
                SYSTEM_ARCHITECTURE
              </div>
              <h2 className="text-3xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 mb-6">
                Multi-Threaded <br /> Edge Pipeline.
              </h2>
              <p className="text-white/50 text-lg leading-relaxed">
                NEURAID operates completely independent of the cloud for retrieval. Audio is processed via dedicated background workers, embedded using a local mxbai GGUF model, and stored in a local ChromaDB instance.
              </p>
              <p className="text-white/50 text-lg leading-relaxed mt-4">
                When queried, voice authentication verifies the owner before a local Gemma-3 LLM synthesizes the context and Piper TTS delivers the answer directly to the headset.
              </p>
              <div className="grid sm:grid-cols-2 gap-3 mt-8">
                {pipelineStages.map((stage, index) => (
                  <div key={stage.label} className="glass rounded-lg p-4">
                    <div className="text-[10px] font-mono text-white/35 mb-2">
                      STAGE {String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="text-sm font-semibold text-white/90">{stage.label}</div>
                    <p className="text-xs leading-relaxed text-white/45 mt-1">{stage.detail}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full"
          >
            <div className="rounded-2xl border border-white/10 bg-[#0A0A0A] shadow-2xl overflow-hidden font-mono text-sm">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-[#111111]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-300/80" />
                </div>
                <div className="ml-4 text-xs text-white/30">system@neuraid: ~/core</div>
              </div>
              <div className="p-6 h-[400px] overflow-y-auto text-cyan-200/90 whitespace-pre-wrap flex flex-col justify-end">
                <div className="mt-auto">
                  {displayedLogs.map((log, index) => (
                    <motion.div key={index} initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="mb-1.5">
                      {log}
                    </motion.div>
                  ))}
                  <motion.div
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="inline-block w-2 h-4 bg-cyan-200/90 ml-1 translate-y-1"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom: End-to-End Visual Hardware Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative w-full glass rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-16">
            <h3 className="text-xl font-medium">End-to-End Data Flow</h3>
            <p className="text-white/40 text-sm mt-2">From raw audio capture to synthesized response.</p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
            
            {/* Step 1: Input (Headphones & GPS) */}
            <div className="flex flex-col items-center gap-4 w-full lg:w-1/4">
              <div className="relative w-32 h-32 flex items-center justify-center glass rounded-full overflow-hidden">
                <Image src="/Headphones.png" alt="Headphones" width={2164} height={1876} className="w-20 h-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" />
              </div>
              <div className="text-center">
                <div className="font-semibold text-sm">FBT-AS18 Headset</div>
                <div className="text-xs text-white/50">Bluetooth Audio Capture</div>
              </div>
              {/* GPS Addon */}
              <div className="flex items-center gap-3 glass px-4 py-2 rounded-full mt-2">
                 <Image src="/GPS.png" alt="GPS" width={2112} height={1850} className="w-6 h-6 object-contain" />
                 <div className="text-xs text-white/50">Geo-Metadata</div>
              </div>
            </div>

            <ArrowRight className="hidden lg:block w-8 h-8 text-white/20 shrink-0" />

            {/* Step 2: The Core (Raspberry Pi / Edge Device) */}
            <div className="flex flex-col items-center gap-6 w-full lg:w-2/4 relative">
              {/* Central Processing Node */}
              <div className="relative w-48 h-48 flex items-center justify-center glass rounded-full overflow-hidden border-2 border-white/20 bg-white/5 shadow-[0_0_40px_rgba(255,255,255,0.05)]">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent animate-pulse" />
                <Image src="/PI.png" alt="Processing Unit" width={2504} height={1560} className="w-32 h-auto object-contain relative z-10 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]" />
              </div>
              
              {/* Logical Microservices inside the Core */}
              <div className="grid grid-cols-2 gap-4 w-full max-w-sm mt-4">
                <div className="glass p-3 rounded-xl flex items-center gap-3 border-white/5">
                  <Shield className="w-4 h-4 text-emerald-300" />
                  <div className="text-left"><div className="text-xs font-bold">Resemblyzer</div><div className="text-[10px] text-white/40">Voice Auth</div></div>
                </div>
                <div className="glass p-3 rounded-xl flex items-center gap-3 border-white/5">
                  <Waves className="w-4 h-4 text-blue-400" />
                  <div className="text-left"><div className="text-xs font-bold">Distil-Whisper</div><div className="text-[10px] text-white/40">Local STT</div></div>
                </div>
                <div className="glass p-3 rounded-xl flex items-center gap-3 border-white/5">
                  <Database className="w-4 h-4 text-purple-400" />
                  <div className="text-left"><div className="text-xs font-bold">ChromaDB</div><div className="text-[10px] text-white/40">Vector RAG</div></div>
                </div>
                <div className="glass p-3 rounded-xl flex items-center gap-3 border-white/5">
                  <Brain className="w-4 h-4 text-yellow-400" />
                  <div className="text-left"><div className="text-xs font-bold">Gemma-3</div><div className="text-[10px] text-white/40">Local LLM</div></div>
                </div>
              </div>
            </div>

            <ArrowRight className="hidden lg:block w-8 h-8 text-white/20 shrink-0" />

            {/* Step 3: Output (Headphones TTS) */}
            <div className="flex flex-col items-center gap-4 w-full lg:w-1/4">
              <div className="relative w-32 h-32 flex items-center justify-center glass rounded-full overflow-hidden">
                <Image src="/Headphones.png" alt="Headphones" width={2164} height={1876} className="w-20 h-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" />
              </div>
              <div className="text-center">
                <div className="font-semibold text-sm">Piper TTS</div>
                <div className="text-xs text-white/50">Instant Audio Response</div>
              </div>
            </div>

          </div>

          {/* Background Connecting Lines (Visual Sugar) */}
          <div className="absolute top-1/2 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -z-10" />

        </motion.div>
      </div>
    </section>
  );
}
