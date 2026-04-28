import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectDetails from "@/components/ProjectDetails";
import Overview from "@/components/Overview";
import TechStack from "@/components/TechStack";
import Architecture from "@/components/Architecture";
import Team from "@/components/Team";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white/30 selection:text-white">
      <Navbar />
      <Hero />
      <ProjectDetails />
      <Overview />
      <Architecture />
      <Team />
      <TechStack />
      
      {/* Simple Footer */}
      <footer className="py-8 text-center text-white/30 text-sm font-mono border-t border-white/5">
        NEURAID // V1.0 // BUILT FOR THE EDGE
      </footer>
    </main>
  );
}
