import {
  AlertTriangle,
  CheckCircle2,
  Cpu,
  Database,
  HelpCircle,
  Lock,
  MapPin,
  Mic,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  Volume2,
} from "lucide-react";

const useCases = [
  "Recall conversations, tasks, and instructions.",
  "Help students and professionals remember spoken details.",
  "Support elderly users with memory difficulties.",
  "Ask natural voice questions about stored memories.",
];

const workflow = [
  "Capture speech from a headset or microphone.",
  "Transcribe useful audio locally.",
  "Store searchable memory chunks in ChromaDB.",
  "Verify the owner before recall.",
  "Retrieve relevant memories for a question.",
  "Generate and speak the answer locally.",
];

const hardware = [
  "Raspberry Pi 5 prototype.",
  "Bluetooth headset for hands-free control.",
  "Local storage for recordings and memory.",
  "Future version can move to compact wearable hardware.",
];

const software = [
  "Local Distil-Whisper speech-to-text.",
  "Resemblyzer owner voice verification.",
  "mxbai GGUF embeddings with ChromaDB.",
  "Gemma 3 local answer generation.",
  "Piper TTS for spoken output.",
];

const privacyFeatures = [
  "Local memory storage.",
  "Voice authentication before access.",
  "Local answer generation.",
  "User-controlled reset and retention.",
];

const results = [
  "Speech detection, storage, retrieval, and TTS are working.",
  "Voice authentication gates private memory access.",
  "Gemma 3 answers from retrieved memory context.",
  "Prototype runs on edge hardware.",
];

const challenges = [
  "Keeping local AI fast on Raspberry Pi 5.",
  "Handling noisy real-world audio.",
  "Avoiding unnecessary recording.",
  "Keeping answers grounded in stored memory.",
  "Balancing privacy, consent, and retention.",
];

const futureScope = [
  "Smaller wearable hardware.",
  "Mobile app and memory timeline.",
  "Improved speaker identification.",
  "Multilingual support.",
  "Caregiver and elderly-care features.",
  "Real GPS integration.",
];

const faqs = [
  {
    question: "Is it cloud-based?",
    answer:
      "No. The core prototype uses local STT, storage, retrieval, LLM response generation, and TTS.",
  },
  {
    question: "Can others access memories?",
    answer:
      "Voice authentication blocks recall when the speaker does not match the enrolled owner.",
  },
  {
    question: "Can it work offline?",
    answer:
      "Yes, when the required local models are installed on the device.",
  },
  {
    question: "Is this final hardware?",
    answer:
      "No. Raspberry Pi 5 proves the prototype; the product can later move to compact wearable hardware.",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <div className="text-xs font-mono uppercase text-cyan-200/80 mb-4">
        {eyebrow}
      </div>
      <h2 className="text-2xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
        {title}
      </h2>
      {description ? (
        <p className="text-white/50 text-sm md:text-lg leading-relaxed mt-4 md:mt-5">{description}</p>
      ) : null}
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-relaxed text-white/55">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-200/80" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ProjectDetails() {
  return (
    <>
      <section id="problem" className="relative py-16 md:py-28 px-4 sm:px-6 bg-[#050507] text-white border-t border-white/10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-8 md:gap-12 items-start">
          <SectionHeading
            eyebrow="Project Context"
            title="A private memory layer for everyday conversations."
            description="NEURAID turns real conversations into private, searchable memory."
          />

          <div className="grid gap-6">
            <article className="glass rounded-lg p-5 md:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-10 w-10 rounded-2xl bg-white/5 flex items-center justify-center">
                  <AlertTriangle className="h-5 w-5 text-yellow-300" />
                </div>
                <h3 className="text-xl font-medium">Problem Statement</h3>
              </div>
              <div className="space-y-3 text-sm md:text-base text-white/55 leading-relaxed">
                <p>
                  People forget tasks, promises, meeting details, and daily instructions.
                </p>
                <p>
                  For elderly users or people with memory difficulties, missing those details can be much more serious.
                </p>
              </div>
            </article>

            <article className="glass rounded-lg p-5 md:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-10 w-10 rounded-2xl bg-white/5 flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-fuchsia-300" />
                </div>
                <h3 className="text-xl font-medium">Proposed Solution</h3>
              </div>
              <div className="space-y-3 text-sm md:text-base text-white/55 leading-relaxed">
                <p>
                  NEURAID captures useful speech, stores it locally, and lets the owner ask voice questions later.
                </p>
                <p>
                  It verifies the user, retrieves relevant memories, and speaks back a concise answer.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="use-cases" className="py-16 md:py-24 px-4 sm:px-6 bg-[#050507] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-8 mb-8 md:mb-12">
            <SectionHeading
              eyebrow="Use Cases"
              title="Built for hands-free recall."
            description="Fast recall for conversations, classes, meetings, and care routines."
            />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {useCases.map((item) => (
              <div key={item} className="glass rounded-lg p-4 md:p-5 min-h-0 md:min-h-28 flex items-start gap-3 md:gap-4">
                <Mic className="h-5 w-5 text-cyan-200/80 shrink-0 mt-1" />
                <p className="text-sm text-white/60 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="workflow" className="py-16 md:py-28 px-4 sm:px-6 bg-[#050507] text-white border-y border-white/10">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            eyebrow="System Workflow"
            title="From captured speech to spoken answer."
            description="Six steps from speech capture to spoken answer."
          />

          <div className="mt-8 md:mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {workflow.map((step, index) => (
              <div key={step} className="relative glass rounded-lg p-4 md:p-5 min-h-0 md:min-h-28">
                <div className="text-xs font-mono text-white/30 mb-3 md:mb-5">
                  STEP {String(index + 1).padStart(2, "0")}
                </div>
                <p className="text-sm leading-relaxed text-white/65">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="implementation" className="py-16 md:py-28 px-4 sm:px-6 bg-[#050507] text-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6">
          <article className="glass rounded-lg p-5 md:p-8">
            <div className="flex items-center gap-3 mb-5 md:mb-7">
              <div className="h-10 w-10 rounded-2xl bg-white/5 flex items-center justify-center">
                <Cpu className="h-5 w-5 text-blue-300" />
              </div>
              <div>
                <div className="text-xs font-mono uppercase text-white/35">Hardware Setup</div>
                <h3 className="text-xl md:text-2xl font-medium mt-1">Edge prototype stack</h3>
              </div>
            </div>
            <BulletList items={hardware} />
          </article>

          <article className="glass rounded-lg p-5 md:p-8">
            <div className="flex items-center gap-3 mb-5 md:mb-7">
              <div className="h-10 w-10 rounded-2xl bg-white/5 flex items-center justify-center">
                <Database className="h-5 w-5 text-purple-300" />
              </div>
              <div>
                <div className="text-xs font-mono uppercase text-white/35">Software Architecture</div>
                <h3 className="text-xl md:text-2xl font-medium mt-1">Local-first AI pipeline</h3>
              </div>
            </div>
            <BulletList items={software} />
          </article>
        </div>
      </section>

      <section id="privacy" className="py-16 md:py-28 px-4 sm:px-6 bg-[#050507] text-white border-y border-white/10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-8 md:gap-12">
          <SectionHeading
            eyebrow="Privacy & Security"
            title="Designed around controlled access to personal memory."
            description="Local memory plus owner voice verification before recall."
          />

          <div className="space-y-6">
            <div className="glass rounded-lg p-5 md:p-8">
              <div className="flex items-center gap-3 mb-5 md:mb-7">
                <ShieldCheck className="h-6 w-6 text-emerald-300" />
                <h3 className="text-xl font-medium">Privacy Features</h3>
              </div>
              <BulletList items={privacyFeatures} />
            </div>

            <div className="rounded-lg border border-yellow-300/20 bg-yellow-300/[0.04] p-5 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="h-5 w-5 text-yellow-300" />
                <h3 className="text-lg font-medium">Current Prototype Limitation</h3>
              </div>
              <p className="text-sm leading-relaxed text-white/60">
                Current prototype supports owner-versus-other attribution. Full multi-person diarization is a future upgrade.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="results" className="py-16 md:py-28 px-4 sm:px-6 bg-[#050507] text-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6">
          <article className="glass rounded-lg p-5 md:p-8">
            <div className="flex items-center gap-3 mb-5 md:mb-7">
              <Volume2 className="h-6 w-6 text-fuchsia-300" />
              <div>
                <div className="text-xs font-mono uppercase text-white/35">Performance / Results</div>
                <h3 className="text-xl md:text-2xl font-medium mt-1">Working prototype validation</h3>
              </div>
            </div>
            <p className="text-sm md:text-base text-white/55 leading-relaxed mb-5 md:mb-7">
              The Raspberry Pi 5 prototype demonstrates speech capture, memory storage, secure recall, and spoken answers.
            </p>
            <BulletList items={results} />
            <p className="text-xs font-mono text-white/35 mt-7">
              Measured values such as response time, transcription accuracy, authentication accuracy, and storage usage can be added after final testing.
            </p>
          </article>

          <article className="glass rounded-lg p-5 md:p-8">
            <div className="flex items-center gap-3 mb-5 md:mb-7">
              <MapPin className="h-6 w-6 text-blue-300" />
              <div>
                <div className="text-xs font-mono uppercase text-white/35">Challenges Faced</div>
                <h3 className="text-xl md:text-2xl font-medium mt-1">Engineering constraints</h3>
              </div>
            </div>
            <BulletList items={challenges} />
          </article>
        </div>
      </section>

      <section id="future-scope" className="py-16 md:py-28 px-4 sm:px-6 bg-[#050507] text-white border-y border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8 md:gap-12 items-start">
            <SectionHeading
              eyebrow="Future Scope"
              title="Clear upgrades beyond the prototype."
              description="The prototype proves the pipeline; the product can become smaller, smarter, and easier to wear."
            />
            <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
              {futureScope.map((item) => (
                <div key={item} className="glass rounded-lg p-4 md:p-5 flex gap-3">
                  <RotateCcw className="h-4 w-4 text-yellow-200/80 shrink-0 mt-1" />
                  <p className="text-sm leading-relaxed text-white/60">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-16 md:py-28 px-4 sm:px-6 bg-[#050507] text-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            eyebrow="FAQ"
            title="Evaluator questions, answered directly."
          />

          <div className="mt-8 md:mt-14 grid md:grid-cols-2 gap-3 md:gap-4">
            {faqs.map((faq) => (
              <article key={faq.question} className="glass rounded-lg p-5 md:p-6">
                <div className="flex gap-3 mb-4">
                  <HelpCircle className="h-5 w-5 text-cyan-200/80 shrink-0 mt-0.5" />
                  <h3 className="font-medium text-white/90">{faq.question}</h3>
                </div>
                <p className="text-sm leading-relaxed text-white/55">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
