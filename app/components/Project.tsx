"use client";

import { motion } from "framer-motion";
import { source } from "@/utils/common";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { HiOutlineFolder } from "react-icons/hi2";
import Link from "next/link";
import { useState } from "react";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const projects = source.projects;
  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section
      id="projects"
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
      <div className="pointer-events-none absolute top-0 right-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/[0.03] blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-purple-500/[0.03] blur-[100px]" />

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-14"
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
              Projects
            </p>
          </div>

          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-100">
            Things I&apos;ve{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              built
            </span>
          </h2>
          <p className="mt-3 max-w-lg text-sm text-slate-500 leading-relaxed">
            A collection of projects I&apos;ve worked on — from full-stack SaaS
            apps to APIs and developer tools.
          </p>

          {/* Project count */}
          <div className="mt-4 flex items-center gap-2">
            <span
              className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.06]
                         bg-white/[0.02] px-3 py-1 text-[11px] text-slate-400"
            >
              <HiOutlineFolder className="h-3 w-3 text-cyan-400/60" />
              {projects.length} projects
            </span>
          </div>
        </motion.div>

        {/* ── Project Grid ── */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project, i) => (
            <motion.div
              key={project.name + i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className="group relative flex flex-col rounded-xl border border-white/[0.06]
                         bg-white/[0.02] p-5 backdrop-blur-sm transition-colors duration-300
                         hover:border-cyan-400/15 hover:bg-white/[0.04]"
            >
              {/* Top row: folder icon + links */}
              <div className="mb-4 flex items-center justify-between">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-lg
                             border border-white/[0.06] bg-white/[0.03] text-cyan-400/60
                             transition-colors duration-300 group-hover:border-cyan-400/20
                             group-hover:text-cyan-400"
                >
                  <HiOutlineFolder className="h-5 w-5" />
                </div>

                <div className="flex items-center gap-2">
                  {project.githubLink && (
                    <Link href={project.githubLink} target="_blank">
                      <motion.span
                        whileHover={{ y: -1 }}
                        className="flex h-8 w-8 items-center justify-center rounded-md
                                   text-slate-500 transition-colors duration-300
                                   hover:text-slate-200"
                      >
                        <FiGithub className="h-4 w-4" />
                      </motion.span>
                    </Link>
                  )}
                  {project.liveLink && (
                    <Link href={project.liveLink} target="_blank">
                      <motion.span
                        whileHover={{ y: -1 }}
                        className="flex h-8 w-8 items-center justify-center rounded-md
                                   text-slate-500 transition-colors duration-300
                                   hover:text-cyan-300"
                      >
                        <FiExternalLink className="h-4 w-4" />
                      </motion.span>
                    </Link>
                  )}
                </div>
              </div>

              {/* Project name */}
              <h3 className="mb-2 text-sm font-semibold text-slate-200 leading-snug
                             transition-colors duration-300 group-hover:text-white">
                {project.name.length > 50
                  ? project.name.slice(0, 50) + "..."
                  : project.name}
              </h3>

              {/* Description */}
              <p className="mb-5 flex-1 text-xs leading-relaxed text-slate-500
                            transition-colors duration-300 group-hover:text-slate-400">
                {project.description.length > 120
                  ? project.description.slice(0, 120) + "..."
                  : project.description}
              </p>

              {/* Bottom: live link indicator */}
              {project.liveLink && (
                <div className="flex items-center gap-1.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  </span>
                  <span className="text-[10px] text-slate-600">Live</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* ── Show More / Show Less ── */}
        {projects.length > 6 && (
          <motion.div
            className="mt-10 flex justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex cursor-pointer items-center gap-2 rounded-lg border border-white/[0.06]
                         bg-white/[0.02] px-5 py-2.5 text-xs font-medium text-slate-400
                         backdrop-blur-sm transition-colors duration-300
                         hover:border-cyan-400/20 hover:text-slate-200"
            >
              {showAll ? "Show Less" : `Show All ${projects.length} Projects`}
              <motion.svg
                animate={{ rotate: showAll ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="h-3 w-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </motion.svg>
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;