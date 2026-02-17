"use client";

import { motion } from "framer-motion";
import {
  FaAws,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaNpm,
  FaLinux,
  FaFigma,
  FaSlack,
  FaTrello,
  FaJira,
} from "react-icons/fa";
import {
  SiPostman,
  SiSwagger,
  SiCloudinary,
  SiNginx,
  SiVercel,
  SiNetlify,
  SiVite,
  SiWebpack,
  SiEslint,
  SiPrettier,
  SiJest,
  SiFirebase,
  SiSupabase,
  SiRedis,
  SiGraphql,
  SiInsomnia,
  SiNotion,
  SiRender,
  SiCloudflare,
  SiGithubactions,
  SiYarn,
  SiPnpm,
  SiBun,
} from "react-icons/si";
import { VscTerminalBash } from "react-icons/vsc";
import { useState } from "react";

type Tool = {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  category: string;
};

const tools: Tool[] = [
  // ── DevOps & Cloud ──
  { name: "AWS", icon: FaAws, color: "text-amber-400", category: "Cloud & DevOps" },
  { name: "Docker", icon: FaDocker, color: "text-blue-400", category: "Cloud & DevOps" },
  { name: "Nginx", icon: SiNginx, color: "text-green-500", category: "Cloud & DevOps" },
  { name: "Vercel", icon: SiVercel, color: "text-white", category: "Cloud & DevOps" },
  { name: "Render", icon: SiRender, color: "text-emerald-400", category: "Cloud & DevOps" },
  { name: "Cloudflare", icon: SiCloudflare, color: "text-orange-400", category: "Cloud & DevOps" },
  { name: "GitHub Actions", icon: SiGithubactions, color: "text-blue-300", category: "Cloud & DevOps" },
  { name: "Firebase", icon: SiFirebase, color: "text-yellow-400", category: "Cloud & DevOps" },
  { name: "Supabase", icon: SiSupabase, color: "text-emerald-400", category: "Cloud & DevOps" },

  // ── Version Control ──
  { name: "Git", icon: FaGitAlt, color: "text-orange-500", category: "Version Control" },
  { name: "GitHub", icon: FaGithub, color: "text-slate-200", category: "Version Control" },

  // ── API & Testing ──
  { name: "Postman", icon: SiPostman, color: "text-orange-400", category: "API & Testing" },
  { name: "Swagger", icon: SiSwagger, color: "text-green-400", category: "API & Testing" },
  { name: "Jest", icon: SiJest, color: "text-red-400", category: "API & Testing" },
  { name: "GraphQL", icon: SiGraphql, color: "text-pink-500", category: "API & Testing" },

  // ── Services ──
  { name: "Cloudinary", icon: SiCloudinary, color: "text-blue-400", category: "Services" },
  { name: "Redis", icon: SiRedis, color: "text-red-500", category: "Services" },

  // ── Package Managers ──
  { name: "npm", icon: FaNpm, color: "text-red-500", category: "Package Managers" },

  // ── Build & Lint ──
  { name: "Vite", icon: SiVite, color: "text-purple-400", category: "Build Tools" },
  { name: "Webpack", icon: SiWebpack, color: "text-blue-400", category: "Build Tools" },
  { name: "ESLint", icon: SiEslint, color: "text-violet-400", category: "Build Tools" },
  { name: "Prettier", icon: SiPrettier, color: "text-pink-400", category: "Build Tools" },

  // ── Editors & Productivity ──
  { name: "Bash", icon: VscTerminalBash, color: "text-green-400", category: "Productivity" },
  { name: "Linux", icon: FaLinux, color: "text-yellow-400", category: "Productivity" },
  { name: "Notion", icon: SiNotion, color: "text-slate-200", category: "Productivity" },
  { name: "Slack", icon: FaSlack, color: "text-purple-400", category: "Productivity" },
  { name: "Trello", icon: FaTrello, color: "text-blue-400", category: "Productivity" },
  { name: "Jira", icon: FaJira, color: "text-blue-500", category: "Productivity" },
];

const categories = [
  "All",
  "Cloud & DevOps",
  "Version Control",
  "API & Testing",
  "Services",
  "Package Managers",
  "Build Tools",
  "Productivity",
];

const Tools = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTools =
    activeCategory === "All"
      ? tools
      : tools.filter((t) => t.category === activeCategory);

  return (
    <section
      id="tools"
      className="relative overflow-hidden bg-[#030712] py-20 sm:py-28"
    >
      {/* ── Subtle background ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(148,163,184,0.06) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="pointer-events-none absolute top-1/3 left-0 h-[450px] w-[450px] rounded-full bg-cyan-500/[0.03] blur-[120px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-0 h-[400px] w-[400px] rounded-full bg-purple-500/[0.03] blur-[100px]" />

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <motion.div
              className="h-[1px] w-8 bg-cyan-400/60"
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/70 font-medium">
              Tools
            </p>
          </div>

          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-100">
            Tools &{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="mt-3 max-w-lg text-sm text-slate-500 leading-relaxed">
            The tools, platforms, and services I use daily for development,
            deployment, and productivity.
          </p>
        </motion.div>

        {/* ── Category Filter ── */}
        <motion.div
          className="mb-10 flex flex-wrap gap-2"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full cursor-pointer border px-3.5 py-1.5 text-[11px] font-medium
                         transition-all duration-300 ${
                           activeCategory === cat
                             ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-300"
                             : "border-white/[0.06] bg-white/[0.02] text-slate-500 hover:border-white/[0.12] hover:text-slate-300"
                         }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* ── Tools Grid ── */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
        >
          {filteredTools.map((tool, i) => (
            <motion.div
              key={tool.name}
              layout
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: i * 0.03 }}
              whileHover={{ y: -3 }}
              className="group flex items-center gap-3 rounded-xl border border-white/[0.06]
                         bg-white/[0.02] px-4 py-3.5 backdrop-blur-sm transition-colors
                         duration-300 hover:border-cyan-400/15 hover:bg-white/[0.04]"
            >
              {/* Icon */}
              <div
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg
                           border border-white/[0.06] bg-white/[0.03] transition-all
                           duration-300 group-hover:border-white/[0.1] ${tool.color}`}
              >
                <tool.icon className="h-4 w-4" />
              </div>

              {/* Name & category */}
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-slate-300 transition-colors
                              group-hover:text-white">
                  {tool.name}
                </p>
                <p className="truncate text-[10px] text-slate-600 transition-colors
                              group-hover:text-slate-500">
                  {tool.category}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Bottom Stats ── */}
        <motion.div
          className="mt-14 flex flex-wrap justify-center gap-8 border-t border-white/[0.04] pt-10"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {[
            { label: "Total Tools", value: `${tools.length}+` },
            { label: "Categories", value: `${categories.length - 1}` },
            { label: "Cloud Platforms", value: "5+" },
            { label: "Daily Use", value: "15+" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-xl font-bold text-slate-200 sm:text-2xl">
                {stat.value}
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-slate-600">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Tools;