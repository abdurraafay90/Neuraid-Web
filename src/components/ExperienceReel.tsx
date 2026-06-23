"use client";

import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { Brain, Fingerprint, Headphones, MapPin, MessageCircle, Radio, ShieldCheck, Volume2 } from "lucide-react";

const reelSteps = [
  {
    kicker: "01 / Capture",
    title: "A conversation becomes a memory stream.",
    description:
      "The headset listens for useful speech, VAD cuts dead air, and the Pi starts shaping raw audio into searchable context.",
    icon: Headphones,
    accent: "from-cyan-300 to-emerald-300",
    status: "ACTIVE_LISTENING",
    chips: ["VAD armed", "Bluetooth trigger", "Audio segment saved"],
  },
  {
    kicker: "02 / Verify",
    title: "Private recall starts with the owner voice.",
    description:
      "Before a query can touch memory, the assistant checks the enrolled speaker and blocks unknown voices.",
    icon: Fingerprint,
    accent: "from-emerald-300 to-yellow-200",
    status: "ACCESS_GRANTED",
    chips: ["Resemblyzer", "Owner match", "Memory gate open"],
  },
  {
    kicker: "03 / Retrieve",
    title: "The right moments surface from local storage.",
    description:
      "Transcripts are embedded, ranked, and paired with time plus location metadata so answers stay grounded.",
    icon: Brain,
    accent: "from-fuchsia-300 to-cyan-300",
    status: "RAG_CONTEXT_READY",
    chips: ["mxbai GGUF", "ChromaDB", "GPS label attached"],
  },
  {
    kicker: "04 / Respond",
    title: "The answer comes back through the headset.",
    description:
      "Gemma-3 synthesizes the retrieved evidence and Piper turns it into a spoken response without a cloud round trip.",
    icon: Volume2,
    accent: "from-yellow-200 to-fuchsia-300",
    status: "SPOKEN_RESPONSE",
    chips: ["Gemma-3", "Piper TTS", "Hands-free reply"],
  },
];

export default function ExperienceReel() {
  const ref = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const deviceY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const waveformScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1.12, 0.92]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const nextStep = Math.min(reelSteps.length - 1, Math.floor(latest * reelSteps.length));
    setActiveStep(nextStep);
  });

  const active = reelSteps[activeStep];
  const ActiveIcon = active.icon;

  return (
    <section ref={ref} id="experience" className="relative bg-[#050507] text-white lg:h-[360vh]">
      <div className="relative lg:sticky top-0 min-h-screen overflow-hidden px-6 py-28 flex items-center">
        <div className="absolute inset-0 pointer-events-none opacity-60 bg-[linear-gradient(115deg,rgba(34,211,238,0.12),transparent_32%,rgba(244,114,182,0.12)_62%,transparent)] animated-surface" />
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:100%_54px] scan-mask" />

        <div className="relative z-10 max-w-6xl mx-auto w-full grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 glass rounded-lg px-3 py-1.5 text-xs font-mono uppercase text-white/60">
              <Radio className="h-3.5 w-3.5 text-cyan-300" />
              Scroll the memory loop
            </div>

            <div className="min-h-[280px]">
              <motion.div
                key={active.kicker}
                initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              >
                <div className={`text-sm font-mono uppercase text-transparent bg-clip-text bg-gradient-to-r ${active.accent}`}>
                  {active.kicker}
                </div>
                <h2 className="mt-5 text-4xl md:text-6xl font-semibold leading-[0.95] text-white">
                  {active.title}
                </h2>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/55">
                  {active.description}
                </p>
              </motion.div>
            </div>

            <div className="relative pl-7">
              <div className="absolute left-0 top-0 h-full w-px bg-white/10">
                <motion.div
                  className="w-px origin-top bg-gradient-to-b from-cyan-300 via-fuchsia-300 to-yellow-200"
                  style={{ height: progressHeight }}
                />
              </div>
              <div className="grid gap-3">
                {reelSteps.map((step, index) => (
                  <button
                    key={step.title}
                    type="button"
                    onClick={() => setActiveStep(index)}
                    className={`text-left rounded-lg px-4 py-3 transition-colors ${
                      index === activeStep ? "bg-white/10 text-white" : "text-white/38 hover:bg-white/[0.04] hover:text-white/70"
                    }`}
                  >
                    <span className="text-xs font-mono uppercase">{step.kicker}</span>
                    <span className="block text-sm mt-1">{step.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <motion.div style={{ y: deviceY }} className="relative">
            <div className="relative rounded-lg border border-white/12 bg-[#0b0b10]/90 p-4 shadow-[0_30px_100px_rgba(0,0,0,0.5)] overflow-hidden">
              <div className={`absolute inset-0 opacity-20 bg-gradient-to-br ${active.accent}`} />
              <div className="relative rounded-lg border border-white/10 bg-[#050507]/55 min-h-[560px] overflow-hidden">
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
                  </div>
                  <div className="text-xs font-mono text-white/35">neuraid.live/session</div>
                </div>

                <div className="grid md:grid-cols-[0.85fr_1.15fr] min-h-[510px]">
                  <div className="border-r border-white/10 p-5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-5">
                        <div className={`h-11 w-11 rounded-lg bg-gradient-to-br ${active.accent} flex items-center justify-center text-black`}>
                          <ActiveIcon className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="text-[10px] font-mono uppercase text-white/35">Current state</div>
                          <div className="text-sm font-medium">{active.status}</div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        {active.chips.map((chip) => (
                          <div key={chip} className="glass rounded-lg px-4 py-3 flex items-center gap-3">
                            <ShieldCheck className="h-4 w-4 text-emerald-300" />
                            <span className="text-sm text-white/70">{chip}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
                      <div className="flex items-center gap-2 text-xs font-mono uppercase text-white/35 mb-3">
                        <MapPin className="h-3.5 w-3.5" />
                        Memory metadata
                      </div>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div>
                          <div className="text-white/35 text-xs">Time</div>
                          <div>10:42 AM</div>
                        </div>
                        <div>
                          <div className="text-white/35 text-xs">Place</div>
                          <div>CIS Dept</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative p-6 flex flex-col justify-between">
                    <motion.div style={{ scale: waveformScale }} className="absolute inset-x-8 top-16 h-56 rounded-lg border border-white/10 bg-[#050507]/45 overflow-hidden">
                      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.12),transparent)] animated-surface" />
                      <div className="absolute inset-0 flex items-center justify-center gap-2">
                        {Array.from({ length: 28 }, (_, index) => (
                          <motion.span
                            key={index}
                            animate={{ height: ["18%", `${32 + ((index * 13) % 58)}%`, "18%"] }}
                            transition={{ duration: 0.6 + (index % 5) * 0.08, repeat: Infinity, ease: "easeInOut", delay: index * 0.025 }}
                            className="w-1.5 rounded-full bg-gradient-to-t from-cyan-300 via-emerald-300 to-white"
                          />
                        ))}
                      </div>
                    </motion.div>

                    <div className="relative z-10 mt-auto grid gap-4">
                      <motion.div
                        key={`${active.status}-query`}
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                        className="ml-auto max-w-[78%] rounded-lg bg-white text-black p-4"
                      >
                        <div className="text-xs font-mono uppercase text-black/45 mb-2">Owner query</div>
                        What did we decide about the final prototype?
                      </motion.div>

                      <motion.div
                        key={`${active.status}-answer`}
                        initial={{ opacity: 0, x: -24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.08 }}
                        className="max-w-[82%] rounded-lg border border-white/10 bg-white/[0.06] p-4"
                      >
                        <div className="flex items-center gap-2 text-xs font-mono uppercase text-cyan-200 mb-2">
                          <MessageCircle className="h-3.5 w-3.5" />
                          Assistant
                        </div>
                        Store conversations locally, verify the owner, retrieve from ChromaDB, and answer through Piper TTS.
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-10 left-10 right-10 hidden md:grid grid-cols-3 gap-4">
              <Image src="/Headphones.png" alt="Bluetooth headset" width={2164} height={1876} className="glass rounded-lg p-3 h-24 w-full object-contain" />
              <Image src="/PI.png" alt="Raspberry Pi 5" width={2504} height={1560} className="glass rounded-lg p-3 h-24 w-full object-contain" />
              <Image src="/GPS.png" alt="GPS module" width={2112} height={1850} className="glass rounded-lg p-3 h-24 w-full object-contain" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
