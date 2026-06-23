"use client";

import { motion } from "framer-motion";
import { ExternalLink, User, GraduationCap } from "lucide-react";
import TiltCard from "@/components/TiltCard";

const teamMembers = [
  {
    name: "Abdur Raafay",
    role: "Hardware Integration & Local SLM Quantization",
    links: [
      { name: "Email", url: "mailto:araafaycs@gmail.com" },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/abdur-raafay-359b01252/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BMMPM6qsmRmarxOozTrNGIA%3D%3D" },
      { name: "GitHub", url: "https://github.com/abdurraafay90" }
    ]
  },
  {
    name: "Muhammad",
    role: "Memory Ingestion & RAG Pipeline",
    links: [
      { name: "Email", url: "mailto:muhammad86762@gmail.com" },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/muhammad-a69936292?utm_source=share_via&utm_content=profile&utm_medium=member_android" }
    ]
  },
  {
    name: "Muhammad Maaz",
    role: "Vector Search & Audio Processing",
    links: [
      { name: "Email", url: "mailto:maaz24400@gmail.com" },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/muhammad-maaz-836853292/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B8QJlhGoiR2OTP%2BDkaosHfQ%3D%3D" }
    ]
  },
  {
    name: "Hasan Ahmed",
    role: "Frontend Architecture & System Orchestration",
    links: [
      { name: "Email", url: "mailto:ahmedshamsi2021@gmail.com" },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/hasan-shamsi/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B0JMLpOgLRIOrSBjEdG3SiQ%3D%3D" }
    ]
  },
];

export default function Team() {
  return (
    <section id="contact" className="py-24 px-6 bg-[#050507] text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 mb-6">
            The Team Behind NEURAID
          </h2>
          <p className="text-white/50 text-lg">
            Final Year Project Group
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="h-full"
            >
              <TiltCard className="glass p-6 rounded-3xl flex flex-col items-start group hover:bg-white/[0.05] transition-colors h-full">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <User className="w-5 h-5 text-white/80" />
                </div>
                <h3 className="text-xl font-medium mb-1">{member.name}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-4 flex-1">
                  {member.role}
                </p>
                <div className="flex flex-wrap gap-4 mt-auto pt-4 border-t border-white/5 w-full">
                  {member.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-white/40 hover:text-white transition-colors inline-flex items-center gap-1.5"
                    >
                      {link.name}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  ))}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Supervisor Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="h-full max-w-2xl mx-auto"
        >
          <TiltCard className="glass p-6 md:p-8 rounded-3xl flex items-center gap-6 w-full">
            <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center shrink-0">
              <GraduationCap className="w-6 h-6 text-white/80" />
            </div>
            <div>
              <h4 className="text-xs font-mono text-white/40 uppercase mb-1">
                Project Supervisor
              </h4>
              <h3 className="text-xl font-medium text-white/90">
                Syed Abbas Ali
              </h3>
              <a
                href="mailto:saaj@neduet.edu.pk"
                className="text-sm text-white/50 hover:text-white transition-colors mt-3 inline-flex items-center gap-1.5"
              >
                saaj@neduet.edu.pk
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <a
                href="https://cis.neduet.edu.pk/dr-syed-abbas-ali-phd-approved-supervisor"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/50 hover:text-white transition-colors mt-1 inline-flex items-center gap-1.5"
              >
                Faculty Profile
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
}
