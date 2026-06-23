import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ExperienceReel from "@/components/ExperienceReel";
import ProjectDetails from "@/components/ProjectDetails";
import Overview from "@/components/Overview";
import TechStack from "@/components/TechStack";
import Architecture from "@/components/Architecture";
import Team from "@/components/Team";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050507] text-white selection:bg-white/30 selection:text-white">
      <Navbar />
      <Hero />
      <ExperienceReel />
      <ProjectDetails />
      <Overview />
      <Architecture />
      <Team />
      <TechStack />
      
      <footer className="py-10 text-center text-white/35 text-sm font-mono border-t border-white/10 bg-[#050507]">
        NEURAID // LOCAL MEMORY // BUILT FOR THE EDGE
      </footer>
    </main>
  );
}
