"use client";

import { motion, type Variants } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FiLinkedin, FiFacebook, FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import { source, personalInfo } from "@/utils/common";
import { FaWhatsapp } from "react-icons/fa";

/* ───────────────────────── Design Tokens ────────────────────────── */
const surface = {
  card: `rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm`,
  badge: `inline-flex items-center gap-2 rounded-full border border-white/[0.06]
          bg-white/[0.02] px-4 py-1.5 text-xs font-medium text-slate-400 backdrop-blur-sm`,
  socialIcon: `flex h-10 w-10 items-center justify-center rounded-lg border
               border-white/[0.06] bg-white/[0.02] text-slate-500
               transition-all duration-300 hover:border-cyan-400/20
               hover:bg-white/[0.04] hover:text-cyan-400`,
  techPill: `rounded-full border border-white/[0.06] bg-white/[0.02]
             px-3 py-1 text-[11px] font-medium text-slate-400
             transition-colors duration-300 hover:border-cyan-400/15
             hover:text-slate-300`,
  divider: `h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent`,
} as const;

/* ───────────────────── Animation Variants ───────────────── */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/* ───────────────────────── Background ───────────────────────────── */
const Background = () => (
  <>
    <div
      className="pointer-events-none absolute inset-0 opacity-40"
      aria-hidden="true"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(148,163,184,0.06) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }}
    />
    <div
      className="pointer-events-none absolute -top-32 left-1/4
                 h-[500px] w-[500px] rounded-full bg-cyan-500/[0.04]
                 blur-[120px]"
      aria-hidden="true"
    />
    <div
      className="pointer-events-none absolute top-1/3 right-1/4
                 h-[400px] w-[400px] rounded-full bg-purple-500/[0.03]
                 blur-[100px]"
      aria-hidden="true"
    />
    <div
      className="pointer-events-none absolute bottom-0 left-1/2
                 h-[300px] w-[300px] rounded-full bg-blue-500/[0.03]
                 blur-[100px]"
      aria-hidden="true"
    />
  </>
);

/* ───────────────────────── Live Dot ─────────────────────────────── */
const LiveDot = () => (
  <span className="relative flex h-3 w-3">
    <span
      className="absolute inline-flex h-full w-full animate-ping
                 rounded-full bg-emerald-400 opacity-70"
    />
    <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
  </span>
);

/* ───────────────────────── Social Links ─────────────────────────── */
const socials = [
  { icon: FaWhatsapp, href: personalInfo.whatapps, label: "Whatsapp" },
  { icon: FiLinkedin, href: personalInfo.linkdine, label: "LinkedIn" },
  { icon: FiFacebook, href: personalInfo.facebook, label: "Facebook" },
];

/* ───────────────── Profile Image Component ──────────────────────── */
const ProfileImage = ({ className = "" }: { className?: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
    className={`relative ${className}`}
  >
    {/* Outer glow ring */}
    <div
      className="absolute -inset-3 rounded-full bg-gradient-to-br
                 from-cyan-400/20 via-purple-400/10 to-blue-400/20
                 blur-xl opacity-60"
      aria-hidden="true"
    />

    {/* Rotating gradient border */}
    <motion.div
      className="absolute -inset-[2px] rounded-full border-2 border-gray-500/30"
      
      animate={{ rotate: 360 }}
      transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
    />

    {/* Image container */}
    <div
      className="relative overflow-hidden rounded-full border-2
                 border-[#030712] bg-[#030712]"
    >
      <Image
        src="/IMG_6403.PNG"
        height={300}
        width={300}
        alt="Mazaharul Islam — Full Stack Developer"
        className="h-full w-full object-cover"
        priority
      />

      {/* Subtle overlay */}
      <div
        className="pointer-events-none absolute inset-0 rounded-full
                   bg-gradient-to-t from-[#030712]/30 via-transparent to-transparent"
        aria-hidden="true"
      />
    </div>

    {/* Status badge — bottom */}
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="absolute -bottom-4 left-1/2 -translate-x-1/2"
    >
      <span
        className="inline-flex items-center gap-1.5 rounded-full border
                   border-white/[0.08] bg-[#0a0f1e]/90 px-3 py-1
                   text-[10px] font-medium text-emerald-400 backdrop-blur-sm"
      >
        <span className="relative flex h-2 w-2">
    <span
      className="absolute inline-flex h-full w-full animate-ping
                 rounded-full bg-emerald-400 opacity-70"
    />
    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
  </span>
        Open
      </span>
    </motion.div>
  </motion.div>
);

/* ───────── Mobile Image + Mini Info (shows on sm/md) ────────────── */
const MobileProfileSection = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.15 }}
    className="flex flex-col items-center gap-5 pb-6 lg:hidden"
  >
    <ProfileImage className="h-32 w-32 sm:h-40 sm:w-40" />

    {/* Mini info row */}
    <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
      {[
        { label: source.experience, sub: "Exp." },
        { label: "25+", sub: "Projects" },
        { label: "35+", sub: "Clients" },
      ].map((s) => (
        <div
          key={s.sub}
          className="flex items-center gap-2 rounded-full border border-white/[0.06]
                     bg-white/[0.02] px-3 py-1.5 backdrop-blur-sm"
        >
          <span className="text-xs font-bold text-slate-200">{s.label}</span>
          <span className="text-[10px] text-slate-500">{s.sub}</span>
        </div>
      ))}
    </div>
  </motion.div>
);

/* ───────────────────────── Info Card (Desktop) ──────────────────── */
const InfoCard = () => {
  const techStack = [
    "Next.js",
    "TypeScript",
    "React",
    "Node.js",
    "Prisma",
    "PostgreSQL",
    "MongoDB",
    "Tailwind",
    "Express",
  ];

  const quickInfo = [
    { label: "Experience", value: source.experience, highlight: true },
    {
      label: "Location",
      value: `${source.contactInfo.distric}, ${source.contactInfo.country}`,
      highlight: false,
    },
    { label: "Focus", value: "Full Stack · SaaS", highlight: false },
    { label: "Status", value: source.current, highlight: true },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
      className="relative hidden lg:block"
    >
      <div
        className="absolute -inset-4 rounded-3xl bg-gradient-to-br
                   from-cyan-400/[0.05] via-transparent to-purple-400/[0.05]
                   blur-xl"
        aria-hidden="true"
      />

      <div
        className="relative overflow-hidden rounded-2xl border
                   border-white/[0.06] bg-white/[0.02] p-7 backdrop-blur-sm"
      >
        {/* Top border glow line */}
        <div
          className="pointer-events-none absolute top-0 left-0 right-0 h-[1px]
                     bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"
          aria-hidden="true"
        />

        <div className="relative space-y-6">
          {/* Avatar Row — with beautiful image */}
          <div className="flex items-center gap-5">
            <ProfileImage className="h-20 w-20" />
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-cyan-400/60 font-medium">
                {source.title.split(" ").slice(0, 2).join(" ")}
              </p>
              <p className="text-lg font-semibold text-slate-100 capitalize">
                {source.name}
              </p>
            </div>
          </div>

          <div className={surface.divider} />

          {/* Quick Info */}
          <div className="grid grid-cols-2 gap-4">
            {quickInfo.map((item) => (
              <div key={item.label} className="space-y-1">
                <p className="text-[10px] uppercase tracking-[0.25em] text-slate-600">
                  {item.label}
                </p>
                <p
                  className={`text-xs font-medium ${
                    item.highlight ? "text-cyan-400/80" : "text-slate-400"
                  }`}
                >
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          <div className={surface.divider} />

          {/* Tech Stack */}
          <div className="space-y-3">
            <p className="text-[10px] uppercase tracking-[0.3em] text-slate-600">
              Core Stack
            </p>
            <div className="flex flex-wrap gap-1.5">
              {techStack.map((tech) => (
                <span key={tech} className={surface.techPill}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className={surface.divider} />

          {/* Status */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <LiveDot />
              <span className="text-xs text-emerald-400/80 font-medium">
                Available for work
              </span>
            </div>
            <span className="text-[10px] text-slate-600 tracking-wider">
              Remote · Full-time
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* ═══════════════════════ HERO COMPONENT ═════════════════════════ */
const Hero = () => {
  const [text] = useTypewriter({
    words: [
      "Next.js & TypeScript Apps",
      "Scalable RESTful APIs",
      "SaaS Dashboards & Panels",
      "Prisma + PostgreSQL Backends",
    ],
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 60,
    deleteSpeed: 40,
  });

  const stats = [
    { value: source.experience, label: "Experience" },
    { value: "25+", label: "Projects" },
    { value: "35+", label: "Clients" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#030712]"
    >
      <Background />

      <div
        className="relative z-10 mx-auto flex min-h-screen max-w-6xl
                   items-center px-4 sm:px-6 lg:px-8"
      >
        <div className="w-full py-20">
          {/* ── Mobile Profile Image (visible on sm/md) ── */}
          <MobileProfileSection />

          <div className="grid w-full gap-12 lg:grid-cols-[1.3fr_1fr] items-center">
            {/* ── LEFT ── */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              {/* Badge */}
              <motion.div variants={itemVariants}>
                <span className={surface.badge}>
                  <LiveDot />
                  <span className="text-slate-400">
                    Available for Remote Work
                  </span>
                </span>
              </motion.div>

              {/* Heading */}
              <motion.div variants={itemVariants} className="space-y-2">
                <h1
                  className="text-3xl font-bold tracking-tight text-slate-100
                             sm:text-4xl lg:text-[3.5rem] lg:leading-[1.1]"
                >
                  Hey, I&apos;m
                  <br />
                  <span
                    className="bg-gradient-to-r from-cyan-400 to-purple-400
                               bg-clip-text text-transparent"
                  >
                    Mazaharul Islam
                  </span>
                </h1>

                <motion.div
                  className="h-[2px] w-16 rounded-full bg-gradient-to-r
                             from-cyan-400/60 to-purple-400/60"
                  initial={{ width: 0 }}
                  animate={{ width: 64 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                />
              </motion.div>

              {/* Role */}
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-3"
              >
                <div className="h-[1px] w-6 bg-cyan-400/40" />
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-cyan-300/60">
                  {source.title}
                </p>
              </motion.div>

              {/* Description */}
              <motion.p
                variants={itemVariants}
                className="max-w-lg text-sm leading-relaxed text-slate-500 sm:text-base"
              >
                Engineering scalable software solutions backed by strong{" "}
                <span className="text-slate-300 font-medium">
                  Data Structures & Algorithms (DSA)
                </span>{" "}
                fundamentals. I build optimized architectures using Next.js,
                Node.js, and PostgreSQL.
              </motion.p>

              {/* Typewriter */}
              <motion.div variants={itemVariants} className="space-y-1.5">
                <p className="text-[11px] uppercase tracking-[0.2em] text-slate-600">
                  I specialize in
                </p>
                <p className="text-lg font-semibold sm:text-xl">
                  <span
                    className="bg-gradient-to-r from-cyan-400 to-purple-400
                               bg-clip-text text-transparent"
                  >
                    {text}
                  </span>
                  <Cursor cursorColor="#22d3ee" />
                </p>
              </motion.div>

              {/* Stats — desktop only (mobile stats shown above) */}
              <motion.div
                variants={itemVariants}
                className="hidden gap-8 border-y border-white/[0.06] py-5 lg:flex"
              >
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-xl font-bold text-slate-100 sm:text-2xl">
                      {stat.value}
                    </p>
                    <p className="mt-0.5 text-[10px] uppercase tracking-[0.2em] text-slate-600">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </motion.div>

              {/* Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap items-center gap-3"
              >
                <Link href="#projects">
                  <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group inline-flex cursor-pointer items-center gap-2
                               rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500
                               px-6 py-2.5 text-sm font-semibold text-slate-900
                               transition-shadow duration-300
                               hover:shadow-[0_0_24px_rgba(34,211,238,0.3)]"
                  >
                    View Projects
                    <FiArrowRight
                      className="h-4 w-4 transition-transform duration-300
                                 group-hover:translate-x-0.5"
                    />
                  </motion.button>
                </Link>

                <Link href="#contact">
                  <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex cursor-pointer items-center gap-2
                               rounded-lg border border-white/[0.06] bg-white/[0.02]
                               px-6 py-2.5 text-sm font-semibold text-slate-300
                               backdrop-blur-sm transition-all duration-300
                               hover:border-cyan-400/20 hover:text-white"
                  >
                    Contact Me
                  </motion.button>
                </Link>
              </motion.div>

              {/* Socials */}
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-4 pt-2"
              >
                <span className="text-[10px] uppercase tracking-[0.25em] text-slate-600">
                  Find me
                </span>
                <div className="flex items-center gap-2">
                  {socials.map(({ icon: Icon, href, label }) => (
                    <Link
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                    >
                      <motion.span
                        whileHover={{ y: -2 }}
                        className={surface.socialIcon}
                      >
                        <Icon className="h-4 w-4" />
                      </motion.span>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* ── RIGHT (Desktop Info Card) ── */}
            <InfoCard />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-slate-600">
            Scroll
          </span>
          <div
            className="flex h-7 w-[18px] items-start justify-center rounded-full
                       border border-white/[0.08] p-1"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-1.5 w-1 rounded-full bg-cyan-400/60"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;