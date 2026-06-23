"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useState, useEffect } from "react";
import { Download } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Problem", href: "#problem" },
  { name: "Features", href: "#features" },
  { name: "Workflow", href: "#workflow" },
  { name: "Architecture", href: "#architecture" },
  { name: "Team", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.2 });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#050507]/78 backdrop-blur-xl border-b border-white/10 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#about" className="text-xl font-bold hover:text-white/80 transition-colors">
          NEURAID<span className="text-cyan-300">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/60 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/NEURAID%20Report.pdf"
            download
            className="inline-flex items-center gap-1.5 rounded-lg border border-cyan-300/25 bg-cyan-300/10 px-3 py-1.5 text-sm font-medium text-cyan-100 hover:bg-cyan-300/18 transition-colors"
          >
            Report
            <Download className="h-3.5 w-3.5" />
          </a>
        </nav>
      </div>
      <motion.div
        className="absolute bottom-0 left-0 h-px origin-left bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-yellow-200"
        style={{ scaleX: progress }}
      />
    </motion.header>
  );
}
