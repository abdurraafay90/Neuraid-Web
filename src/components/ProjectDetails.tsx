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
  "Remembering past conversations and discussions.",
  "Finding where and when a topic was discussed.",
  "Helping users recall tasks, commitments, and spoken instructions.",
  "Supporting elderly users or people with memory difficulties.",
  "Hands-free recall while studying, working, or moving.",
  "Creating a private personal knowledge base from daily conversations.",
  "Searching personal memory using natural spoken questions.",
];

const workflow = [
  "Audio is captured from the headset or microphone.",
  "Speech activity is detected using voice activity detection.",
  "Meaningful audio segments are saved for processing.",
  "Audio segments are transcribed locally.",
  "Owner and other speakers are attributed when speaker analysis is enabled.",
  "Transcript chunks are generated.",
  "Text chunks are converted into local GGUF embeddings.",
  "Memories are stored in ChromaDB with time and location metadata.",
  "The user asks a spoken query.",
  "Voice authentication verifies the enrolled owner.",
  "Relevant memories are retrieved from ChromaDB.",
  "The local Gemma 3 model generates a memory-based answer.",
  "Piper TTS converts the answer into speech.",
];

const hardware = [
  "Raspberry Pi 5 as the main processing device.",
  "Bluetooth headset for hands-free control and audio interaction.",
  "Microphone or audio input for capturing user speech.",
  "Local storage for recorded audio, embeddings, and ChromaDB memory.",
  "Optional GPS module for real-world location tagging.",
  "Current prototype uses fixed demo coordinates and a hardcoded label such as CIS Department for evaluation clarity.",
];

const software = [
  "Python backend for orchestration and processing.",
  "WebRTC VAD for speech activity detection.",
  "Local Distil-Whisper speech transcription for converting speech into text.",
  "Resemblyzer for voice authentication.",
  "Local mxbai GGUF embeddings through llama.cpp for semantic memory representation.",
  "ChromaDB as the local vector database.",
  "Gemma 3 local LLM served through llama.cpp for answer generation.",
  "Piper TTS for local text-to-speech output.",
  "Bluetooth headset controls using Linux input events.",
  "Next.js website for project presentation and evaluator-facing documentation.",
];

const privacyFeatures = [
  "Local ChromaDB memory storage.",
  "Voice authentication before memory access.",
  "User-controlled memory reset and storage.",
  "Local answer generation using Gemma 3.",
  "No public sharing of memory data by default.",
];

const results = [
  "Speech detection works using WebRTC VAD and an energy threshold.",
  "Stored memories can be retrieved using natural language questions.",
  "Voice authentication prevents unknown users from accessing memory.",
  "Gemma 3 generates concise answers from retrieved memory context.",
  "Time and location metadata improve contextual recall.",
  "The system can run on edge hardware, though latency depends on model size and audio processing load.",
];

const challenges = [
  "Managing limited CPU and memory resources on Raspberry Pi 5.",
  "Running local LLM inference with acceptable latency.",
  "Handling noisy audio environments.",
  "Detecting speech accurately without recording unnecessary silence.",
  "Performing speaker diarization reliably.",
  "Preventing the LLM from answering using general knowledge instead of stored memory.",
  "Managing Bluetooth headset controls for hands-free interaction.",
  "Adding contextual metadata such as time and location.",
  "Balancing privacy, consent, and useful long-term memory retention.",
  "Maintaining stable long-running background threads for listening and processing.",
];

const futureScope = [
  "Optional fully offline speaker diarization.",
  "Mobile application for memory browsing and control.",
  "Improved speaker identification.",
  "Multilingual conversation support.",
  "Memory timeline with date, time, and location filters.",
  "Calendar and reminder integration.",
  "On-device summarization of long conversations.",
  "Emergency or healthcare mode for elderly users.",
  "Better privacy controls for consent-based recording.",
  "Cloud sync as an optional encrypted backup.",
  "Real GPS module integration for accurate location tagging.",
];

const faqs = [
  {
    question: "Does NEURAID upload audio to the cloud?",
    answer:
      "The current prototype uses local speech-to-text on the device. Memory storage, retrieval, local LLM response generation, and TTS are handled locally.",
  },
  {
    question: "Can other people access my memories?",
    answer:
      "No. Query access is protected using voice authentication. If the speaker does not match the enrolled owner, the assistant denies access.",
  },
  {
    question: "What happens if voice authentication fails?",
    answer:
      "NEURAID refuses the query and does not retrieve or speak stored memories.",
  },
  {
    question: "Can NEURAID work offline?",
    answer:
      "Local speech transcription, memory retrieval, ChromaDB, Gemma 3, and Piper TTS can work offline when the required models are already installed on the device.",
  },
  {
    question: "How much storage does it need?",
    answer:
      "Storage depends on how much audio is recorded and how many memories are stored. Text embeddings are compact, but raw audio recordings and local AI models require more space.",
  },
  {
    question: "Is continuous recording legal or ethical?",
    answer:
      "Continuous recording must be used responsibly. Users should follow local laws, obtain consent where required, and clearly disclose when conversations are being recorded. NEURAID is intended as a personal assistive memory system, not a surveillance tool.",
  },
  {
    question: "Why use a local LLM?",
    answer:
      "A local LLM improves privacy, reduces dependency on cloud-based answer generation, and allows the assistant to answer from personal memory stored on the device.",
  },
  {
    question: "What makes NEURAID different from normal note-taking?",
    answer:
      "NEURAID does not require manual typing. It captures spoken context automatically and lets the user retrieve memories later using natural voice questions.",
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
      <div className="text-xs font-mono tracking-[0.24em] uppercase text-green-400/80 mb-4">
        {eyebrow}
      </div>
      <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
        {title}
      </h2>
      {description ? (
        <p className="text-white/50 text-lg leading-relaxed mt-5">{description}</p>
      ) : null}
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-relaxed text-white/55">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-400/80" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ProjectDetails() {
  return (
    <>
      <section id="problem" className="relative py-28 px-6 bg-black text-white border-t border-white/5">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
          <SectionHeading
            eyebrow="Project Context"
            title="A private memory layer for everyday conversations."
            description="NEURAID focuses on the details people lose after real conversations: what was said, who said it, where it happened, and when it occurred."
          />

          <div className="grid gap-6">
            <article className="glass rounded-3xl p-7 md:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-10 w-10 rounded-2xl bg-white/5 flex items-center justify-center">
                  <AlertTriangle className="h-5 w-5 text-yellow-300" />
                </div>
                <h3 className="text-xl font-medium">Problem Statement</h3>
              </div>
              <div className="space-y-4 text-white/55 leading-relaxed">
                <p>
                  People often forget important details from daily conversations, including what was discussed, who said it, where it happened, and when it occurred. This becomes a serious issue for students, professionals, elderly users, and people who manage many daily tasks or meetings.
                </p>
                <p>
                  Traditional note-taking requires manual effort and is easy to forget during real conversations. Cloud assistants can answer general questions, but they usually do not maintain a private, searchable memory of the user&apos;s own spoken interactions.
                </p>
              </div>
            </article>

            <article className="glass rounded-3xl p-7 md:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-10 w-10 rounded-2xl bg-white/5 flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-green-300" />
                </div>
                <h3 className="text-xl font-medium">Proposed Solution</h3>
              </div>
              <div className="space-y-4 text-white/55 leading-relaxed">
                <p>
                  NEURAID is a personal cognitive memory assistant designed to help users recall past conversations through voice. It listens for meaningful speech, transcribes conversations locally, stores memories in a vector database, and allows the user to ask natural spoken questions later.
                </p>
                <p>
                  When the user asks a question, NEURAID verifies the user&apos;s voice, retrieves relevant stored memories, generates a concise answer using a locally deployed Gemma language model, and speaks the response using text-to-speech.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="use-cases" className="py-24 px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
            <SectionHeading
              eyebrow="Use Cases"
              title="Built for hands-free recall."
              description="The assistant turns spoken daily context into a searchable private memory base."
            />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {useCases.map((item) => (
              <div key={item} className="glass rounded-2xl p-5 min-h-32 flex items-start gap-4">
                <Mic className="h-5 w-5 text-green-400/80 shrink-0 mt-1" />
                <p className="text-sm text-white/60 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="workflow" className="py-28 px-6 bg-black text-white border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            eyebrow="System Workflow"
            title="From captured speech to spoken answer."
            description="The prototype follows a complete ingestion, retrieval, verification, and response loop."
          />

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {workflow.map((step, index) => (
              <div key={step} className="relative glass rounded-2xl p-5 min-h-36">
                <div className="text-xs font-mono text-white/30 mb-5">
                  STEP {String(index + 1).padStart(2, "0")}
                </div>
                <p className="text-sm leading-relaxed text-white/65">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="implementation" className="py-28 px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6">
          <article className="glass rounded-3xl p-7 md:p-8">
            <div className="flex items-center gap-3 mb-7">
              <div className="h-10 w-10 rounded-2xl bg-white/5 flex items-center justify-center">
                <Cpu className="h-5 w-5 text-blue-300" />
              </div>
              <div>
                <div className="text-xs font-mono tracking-[0.2em] uppercase text-white/35">Hardware Setup</div>
                <h3 className="text-2xl font-medium mt-1">Edge prototype stack</h3>
              </div>
            </div>
            <BulletList items={hardware} />
          </article>

          <article className="glass rounded-3xl p-7 md:p-8">
            <div className="flex items-center gap-3 mb-7">
              <div className="h-10 w-10 rounded-2xl bg-white/5 flex items-center justify-center">
                <Database className="h-5 w-5 text-purple-300" />
              </div>
              <div>
                <div className="text-xs font-mono tracking-[0.2em] uppercase text-white/35">Software Architecture</div>
                <h3 className="text-2xl font-medium mt-1">Local-first AI pipeline</h3>
              </div>
            </div>
            <BulletList items={software} />
          </article>
        </div>
      </section>

      <section id="privacy" className="py-28 px-6 bg-black text-white border-y border-white/5">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-12">
          <SectionHeading
            eyebrow="Privacy & Security"
            title="Designed around controlled access to personal memory."
            description="The memory database is stored locally, and access to stored memories is protected using voice authentication."
          />

          <div className="space-y-6">
            <div className="glass rounded-3xl p-7 md:p-8">
              <div className="flex items-center gap-3 mb-7">
                <ShieldCheck className="h-6 w-6 text-green-300" />
                <h3 className="text-xl font-medium">Privacy Features</h3>
              </div>
              <BulletList items={privacyFeatures} />
            </div>

            <div className="rounded-3xl border border-yellow-300/20 bg-yellow-300/[0.04] p-7 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="h-5 w-5 text-yellow-300" />
                <h3 className="text-lg font-medium">Current Prototype Limitation</h3>
              </div>
              <p className="text-sm leading-relaxed text-white/60">
                Speech transcription now runs locally on the device. Speaker attribution is available for owner-versus-other labeling, while full multi-person diarization remains a future upgrade.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="results" className="py-28 px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6">
          <article className="glass rounded-3xl p-7 md:p-8">
            <div className="flex items-center gap-3 mb-7">
              <Volume2 className="h-6 w-6 text-green-300" />
              <div>
                <div className="text-xs font-mono tracking-[0.2em] uppercase text-white/35">Performance / Results</div>
                <h3 className="text-2xl font-medium mt-1">Working prototype validation</h3>
              </div>
            </div>
            <p className="text-white/55 leading-relaxed mb-7">
              NEURAID was tested as a working prototype on Raspberry Pi 5. The system successfully performs speech detection, memory ingestion, semantic retrieval, voice authentication, local LLM response generation, and spoken output.
            </p>
            <BulletList items={results} />
            <p className="text-xs font-mono text-white/35 mt-7">
              Measured values such as response time, transcription accuracy, authentication accuracy, and storage usage can be added after final testing.
            </p>
          </article>

          <article className="glass rounded-3xl p-7 md:p-8">
            <div className="flex items-center gap-3 mb-7">
              <MapPin className="h-6 w-6 text-blue-300" />
              <div>
                <div className="text-xs font-mono tracking-[0.2em] uppercase text-white/35">Challenges Faced</div>
                <h3 className="text-2xl font-medium mt-1">Engineering constraints</h3>
              </div>
            </div>
            <BulletList items={challenges} />
          </article>
        </div>
      </section>

      <section id="future-scope" className="py-28 px-6 bg-black text-white border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 items-start">
            <SectionHeading
              eyebrow="Future Scope"
              title="Clear upgrades beyond the prototype."
              description="The next milestones focus on stronger privacy, richer browsing, better speech intelligence, and real-world deployment."
            />
            <div className="grid sm:grid-cols-2 gap-4">
              {futureScope.map((item) => (
                <div key={item} className="glass rounded-2xl p-5 flex gap-3">
                  <RotateCcw className="h-4 w-4 text-green-400/80 shrink-0 mt-1" />
                  <p className="text-sm leading-relaxed text-white/60">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-28 px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            eyebrow="FAQ"
            title="Evaluator questions, answered directly."
          />

          <div className="mt-14 grid md:grid-cols-2 gap-4">
            {faqs.map((faq) => (
              <article key={faq.question} className="glass rounded-2xl p-6">
                <div className="flex gap-3 mb-4">
                  <HelpCircle className="h-5 w-5 text-green-400/80 shrink-0 mt-0.5" />
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
