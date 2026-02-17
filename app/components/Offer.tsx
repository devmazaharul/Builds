"use client";

import { motion } from "framer-motion";
import {
  HiOutlineCodeBracket,
  HiOutlineServerStack,
  HiOutlineDevicePhoneMobile,
  HiOutlinePaintBrush,
  HiOutlineRocketLaunch,
  HiOutlineWrenchScrewdriver,
  HiOutlineCircleStack,
  HiOutlineCpuChip,
  HiOutlineShieldCheck,
} from "react-icons/hi2";
import { useState } from "react";

type Service = {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
  category: string;
  highlight?: boolean;
};

const services: Service[] = [
  {
    title: "Full-Stack Web Development",
    description:
      "End-to-end web applications built with Next.js, React, Node.js, and modern databases. From concept to deployment.",
    icon: HiOutlineCodeBracket,
    features: [
      "Next.js App Router",
      "TypeScript",
      "Server Components",
      "Authentication & Authorization",
    ],
    category: "Development",
    highlight: true,
  },
  {
    title: "RESTful API Development",
    description:
      "Scalable, well-documented APIs with Express.js or Next.js API routes. Clean architecture with proper error handling.",
    icon: HiOutlineServerStack,
    features: [
      "Express.js / Next.js Routes",
      "JWT & OAuth",
      "Rate Limiting",
      "Swagger Documentation",
    ],
    category: "Development",
  },
  {
    title: "Database Design & Management",
    description:
      "Efficient database architecture with Prisma ORM, PostgreSQL, MongoDB, or MySQL. Optimized queries and migrations.",
    icon: HiOutlineCircleStack,
    features: [
      "Prisma ORM",
      "PostgreSQL / MongoDB",
      "Schema Design",
      "Query Optimization",
    ],
    category: "Development",
  },
  {
    title: "SaaS & Dashboard Development",
    description:
      "Custom SaaS platforms and admin dashboards with role-based access, analytics, charts, and real-time data.",
    icon: HiOutlineCpuChip,
    features: [
      "Admin Panels",
      "Role-Based Access",
      "Charts & Analytics",
      "Real-Time Updates",
    ],
    category: "Solutions",
    highlight: true,
  },
  {
    title: "Responsive UI / Frontend",
    description:
      "Pixel-perfect, responsive interfaces using React, Tailwind CSS, and Framer Motion. Mobile-first approach.",
    icon: HiOutlineDevicePhoneMobile,
    features: [
      "Tailwind CSS",
      "Framer Motion",
      "Mobile-First",
      "Cross-Browser",
    ],
    category: "Design",
  },
  {
    title: "UI/UX Implementation",
    description:
      "Turning Figma or Adobe XD designs into clean, performant code. Attention to detail with smooth animations.",
    icon: HiOutlinePaintBrush,
    features: [
      "Figma to Code",
      "Design Systems",
      "Micro-Interactions",
      "Accessibility",
    ],
    category: "Design",
  },
  {
    title: "Deployment & DevOps",
    description:
      "Setting up CI/CD pipelines, Docker containers, and deploying to Vercel, AWS, or VPS with Nginx.",
    icon: HiOutlineRocketLaunch,
    features: [
      "Vercel / AWS",
      "Docker & Nginx",
      "GitHub Actions",
      "SSL & Domain Setup",
    ],
    category: "Infrastructure",
  },
  {
    title: "Maintenance & Support",
    description:
      "Ongoing bug fixes, performance optimization, security patches, and feature additions for existing projects.",
    icon: HiOutlineWrenchScrewdriver,
    features: [
      "Bug Fixes",
      "Performance Tuning",
      "Code Refactoring",
      "Feature Updates",
    ],
    category: "Infrastructure",
  },
  {
    title: "Security & Authentication",
    description:
      "Implementing secure authentication flows, data encryption, input validation, and protection against common vulnerabilities.",
    icon: HiOutlineShieldCheck,
    features: [
      "NextAuth / Clerk",
      "JWT & Sessions",
      "Input Validation",
      "CSRF & XSS Protection",
    ],
    category: "Infrastructure",
  },
];

const categories = ["All", "Development", "Solutions", "Design", "Infrastructure"];

const Services = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredServices =
    activeCategory === "All"
      ? services
      : services.filter((s) => s.category === activeCategory);

  return (
    <section
      id="services"
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
      <div className="pointer-events-none absolute top-1/4 left-0 h-[450px] w-[450px] rounded-full bg-cyan-500/[0.03] blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-purple-500/[0.03] blur-[100px]" />

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
              Services
            </p>
          </div>

          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-100">
            What I{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Offer
            </span>
          </h2>
          <p className="mt-3 max-w-lg text-sm text-slate-500 leading-relaxed">
            From frontend interfaces to backend systems — here&apos;s how I can
            help bring your ideas to life.
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
              className={`rounded-full cursor-pointer border cursor-pointer px-3.5 py-1.5 text-[11px] font-medium
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

        {/* ── Services Grid ── */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className={`group relative flex flex-col rounded-xl border p-5 backdrop-blur-sm
                         transition-colors duration-300 ${
                           service.highlight
                             ? "border-cyan-400/10 bg-cyan-400/[0.02] hover:border-cyan-400/20 hover:bg-cyan-400/[0.04]"
                             : "border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12] hover:bg-white/[0.04]"
                         }`}
            >
              {/* Popular badge */}
              {service.highlight && (
                <span
                  className="absolute -top-2.5 right-4 rounded-full border border-cyan-400/20
                             bg-cyan-400/10 px-2.5 py-0.5 text-[9px] font-semibold
                             uppercase tracking-[0.15em] text-cyan-300"
                >
                  Popular
                </span>
              )}

              {/* Icon */}
              <div
                className={`mb-4 flex h-11 w-11 items-center justify-center rounded-lg border
                           transition-colors duration-300 ${
                             service.highlight
                               ? "border-cyan-400/15 bg-cyan-400/[0.06] text-cyan-400 group-hover:border-cyan-400/25"
                               : "border-white/[0.06] bg-white/[0.03] text-slate-400 group-hover:border-white/[0.12] group-hover:text-slate-200"
                           }`}
              >
                <service.icon className="h-5 w-5" />
              </div>

              {/* Title */}
              <h3 className="mb-2 text-sm font-semibold text-slate-200 transition-colors group-hover:text-white">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mb-5 flex-1 text-xs leading-relaxed text-slate-500 transition-colors group-hover:text-slate-400">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-2">
                <p className="text-[10px] uppercase tracking-[0.2em] text-slate-600 font-medium">
                  Includes
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-md border border-white/[0.04] bg-white/[0.02]
                                 px-2 py-1 text-[10px] text-slate-500 transition-colors
                                 group-hover:text-slate-400"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Bottom Process Section ── */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="mb-8 text-center text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            How I Work
          </h3>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Discovery",
                desc: "Understanding your requirements, goals, and project scope.",
              },
              {
                step: "02",
                title: "Planning",
                desc: "Defining architecture, tech stack, timeline, and milestones.",
              },
              {
                step: "03",
                title: "Development",
                desc: "Building in sprints with regular updates and feedback loops.",
              },
              {
                step: "04",
                title: "Delivery",
                desc: "Testing, deployment, handover, and post-launch support.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group relative rounded-xl border border-white/[0.06] bg-white/[0.02]
                           p-5 backdrop-blur-sm transition-colors duration-300
                           hover:border-white/[0.1] hover:bg-white/[0.04]"
              >
                {/* Step number */}
                <span
                  className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-lg
                             border border-white/[0.06] bg-white/[0.03] text-[11px] font-bold
                             text-slate-600 transition-colors group-hover:border-cyan-400/20
                             group-hover:bg-cyan-400/[0.06] group-hover:text-cyan-400"
                >
                  {item.step}
                </span>

                <h4 className="mb-1.5 text-sm font-semibold text-slate-300 transition-colors group-hover:text-white">
                  {item.title}
                </h4>
                <p className="text-[11px] leading-relaxed text-slate-600 transition-colors group-hover:text-slate-400">
                  {item.desc}
                </p>

                {/* Connector line (except last) */}
                {i < 3 && (
                  <div className="absolute -right-2 top-1/2 hidden h-[1px] w-4 bg-white/[0.06] lg:block" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── CTA ── */}
        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-6 py-8 backdrop-blur-sm">
            <p className="text-sm font-medium text-slate-300 mb-1">
              Have a project in mind?
            </p>
            <p className="text-xs text-slate-500 mb-5">
              Let&apos;s discuss how I can help you build something great.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <motion.a
                href="#contact"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r
                           from-cyan-500 to-blue-500 px-5 py-2.5 text-xs font-semibold
                           text-slate-900 transition-shadow
                           hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]"
              >
                Start a Project
                <svg
                  className="h-3.5 w-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </motion.a>

              <motion.a
                href="#projects"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-lg border border-white/[0.06]
                           bg-white/[0.02] px-5 py-2.5 text-xs font-medium text-slate-400
                           transition-colors hover:border-white/[0.12] hover:text-slate-200"
              >
                View My Work
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;