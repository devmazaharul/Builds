"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import Link from "next/link";
import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

/* ─────────── Particle Canvas Background ─────────── */
const ParticleCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
      pulse: number;
      pulseSpeed: number;
    }> = [];

    const colors = [
      "rgba(34, 211, 238, ",
      "rgba(168, 85, 247, ",
      "rgba(56, 189, 248, ",
      "rgba(139, 92, 246, ",
      "rgba(236, 72, 153, ",
    ];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const count = Math.min(Math.floor(window.innerWidth / 12), 120);
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.6 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.02 + 0.01,
      }));
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += p.pulseSpeed;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        const currentOpacity = p.opacity * (0.5 + 0.5 * Math.sin(p.pulse));

        ctx.beginPath();
        const gradient = ctx.createRadialGradient(
          p.x, p.y, 0,
          p.x, p.y, p.size * 4
        );
        gradient.addColorStop(0, p.color + currentOpacity + ")");
        gradient.addColorStop(1, p.color + "0)");
        ctx.fillStyle = gradient;
        ctx.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = p.color + currentOpacity + ")";
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        particles.forEach((p2, j) => {
          if (j <= i) return;
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(34, 211, 238, ${0.08 * (1 - dist / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(drawParticles);
    };

    resize();
    createParticles();
    drawParticles();

    const handleResize = () => {
      resize();
      createParticles();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0"
      style={{ opacity: 0.7 }}
    />
  );
};

/* ─────────── Floating Orb ─────────── */
const FloatingOrb = ({
  size,
  color,
  top,
  left,
  delay,
  duration,
}: {
  size: number;
  color: string;
  top: string;
  left: string;
  delay: number;
  duration: number;
}) => (
  <motion.div
    className="pointer-events-none absolute rounded-full blur-3xl"
    style={{ width: size, height: size, background: color, top, left }}
    animate={{
      y: [0, -30, 10, -20, 0],
      x: [0, 15, -10, 20, 0],
      scale: [1, 1.15, 0.95, 1.1, 1],
      opacity: [0.3, 0.5, 0.25, 0.45, 0.3],
    }}
    transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
  />
);

/* ─────────── Animated Counter ─────────── */
const AnimatedCounter = ({
  target,
  suffix = "",
}: {
  target: number;
  suffix?: string;
}) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.floor(v));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const controls = animate(count, target, { duration: 2, ease: "easeOut" });
    const unsubscribe = rounded.on("change", (v) => setDisplay(v));
    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [count, rounded, target]);

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
};

/* ─────────── Shooting Star ─────────── */
const ShootingStar = ({ delay }: { delay: number }) => (
  <motion.div
    className="pointer-events-none absolute h-[1px] w-20"
    style={{
      background:
        "linear-gradient(90deg, transparent, rgba(34,211,238,0.8), transparent)",
      top: `${Math.random() * 50}%`,
      left: `${Math.random() * 100}%`,
    }}
    initial={{ x: -100, y: -50, opacity: 0 }}
    animate={{ x: 400, y: 200, opacity: [0, 1, 0] }}
    transition={{
      duration: 1.5,
      delay,
      repeat: Infinity,
      repeatDelay: Math.random() * 8 + 5,
      ease: "easeIn",
    }}
  />
);

/* ═════════════ HERO COMPONENT ═════════════ */
const Hero = () => {
  const [text] = useTypewriter({
    words: [
      "Next.js & TypeScript Apps",
      "Scalable RESTful APIs",
      "SaaS Dashboards & Admin Panels",
      "Prisma + PostgreSQL Backends",
    ],
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 60,
    deleteSpeed: 40,
  });

  // ✅ FIX: Use `as const` on the ease tuple so TypeScript
  //    sees [number, number, number, number] instead of number[]
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#030712] text-white"
    >
      {/* ── Multi-layer Background ── */}
      <div className="pointer-events-none absolute inset-0 -z-30 bg-[#030712]" />

      {/* Aurora effect */}
      <div
        className="pointer-events-none absolute -top-1/2 left-1/2 -z-20
                    h-[120vh] w-[120vw] -translate-x-1/2"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 40% 20%, rgba(34,211,238,0.12) 0%, transparent 60%),
            radial-gradient(ellipse 60% 40% at 65% 30%, rgba(168,85,247,0.1) 0%, transparent 55%),
            radial-gradient(ellipse 50% 30% at 30% 50%, rgba(56,189,248,0.08) 0%, transparent 50%),
            radial-gradient(ellipse 40% 35% at 75% 60%, rgba(236,72,153,0.07) 0%, transparent 50%)
          `,
        }}
      />

      {/* Animated aurora band */}
      <motion.div
        className="pointer-events-none absolute -z-20"
        style={{
          top: "-10%",
          left: "-20%",
          width: "140%",
          height: "60%",
          background: `
            linear-gradient(
              120deg,
              transparent 20%,
              rgba(34,211,238,0.06) 30%,
              rgba(168,85,247,0.08) 45%,
              rgba(56,189,248,0.05) 55%,
              rgba(139,92,246,0.07) 65%,
              transparent 80%
            )
          `,
          filter: "blur(60px)",
        }}
        animate={{ x: ["-5%", "5%", "-5%"], rotate: [-2, 2, -2] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(148,163,184,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(148,163,184,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Dot pattern */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(148,163,184,0.15) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Vignette */}
      <div
        className="pointer-events-none absolute inset-0 -z-[5]"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(3,7,18,0.7) 100%)",
        }}
      />

      <ParticleCanvas />

      {/* Floating orbs */}
      <FloatingOrb
        size={300}
        color="radial-gradient(circle, rgba(34,211,238,0.15), transparent 70%)"
        top="-5%" left="10%" delay={0} duration={12}
      />
      <FloatingOrb
        size={350}
        color="radial-gradient(circle, rgba(168,85,247,0.12), transparent 70%)"
        top="30%" left="75%" delay={2} duration={14}
      />
      <FloatingOrb
        size={250}
        color="radial-gradient(circle, rgba(236,72,153,0.1), transparent 70%)"
        top="60%" left="5%" delay={4} duration={16}
      />
      <FloatingOrb
        size={200}
        color="radial-gradient(circle, rgba(56,189,248,0.12), transparent 70%)"
        top="10%" left="55%" delay={1} duration={10}
      />
      <FloatingOrb
        size={180}
        color="radial-gradient(circle, rgba(139,92,246,0.1), transparent 70%)"
        top="70%" left="60%" delay={3} duration={13}
      />

      <ShootingStar delay={2} />
      <ShootingStar delay={7} />
      <ShootingStar delay={12} />

      {/* ── Main Content ── */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="grid w-full gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center">
          {/* LEFT — Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-7"
          >
            {/* Status badge */}
            <motion.div variants={itemVariants}>
              <span
                className="inline-flex items-center gap-2.5 rounded-full border border-cyan-400/20
                           bg-cyan-400/5 px-4 py-1.5 text-xs font-medium text-cyan-300
                           shadow-[0_0_20px_rgba(34,211,238,0.1)] backdrop-blur-sm"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Available for Remote Work
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div variants={itemVariants} className="space-y-3">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Hey, I&apos;m
                <br />
                <span
                  className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500
                             bg-clip-text text-transparent
                             drop-shadow-[0_0_30px_rgba(34,211,238,0.3)]"
                >
                  Mazaharul Islam
                </span>
              </h1>

              <motion.div
                className="h-1 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
                initial={{ width: 0 }}
                animate={{ width: 96 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              />
            </motion.div>

            {/* Role */}
            <motion.p
              variants={itemVariants}
              className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300/70"
            >
              Frontend-Oriented Full Stack Engineer
            </motion.p>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="max-w-xl text-base leading-relaxed text-slate-300/80 sm:text-lg"
            >
              I build scalable, modern web apps with{" "}
              <span className="font-semibold text-cyan-300">
                Next.js, Node.js, Prisma &amp; PostgreSQL
              </span>{" "}
              — from SaaS dashboards and eCommerce platforms to custom APIs
              and real-time systems.
            </motion.p>

            {/* Typewriter */}
            <motion.div variants={itemVariants} className="space-y-1">
              <p className="text-sm font-medium text-slate-400">
                I specialize in →
              </p>
              <p className="text-xl font-bold sm:text-2xl">
                <span
                  className="bg-gradient-to-r from-cyan-300 via-sky-300 to-purple-400
                             bg-clip-text text-transparent"
                >
                  {text}
                </span>
                <Cursor cursorColor="#22d3ee" />
              </p>
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={itemVariants}
              className="flex gap-8 border-y border-white/5 py-5"
            >
              {[
                { value: 4, suffix: "+", label: "Years Exp." },
                { value: 30, suffix: "+", label: "Projects" },
                { value: 15, suffix: "+", label: "Happy Clients" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl font-bold text-white sm:text-3xl">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-0.5 text-[11px] uppercase tracking-[0.2em] text-slate-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4"
            >
              <Link href="#projects">
                <motion.button
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="group relative inline-flex items-center justify-center gap-2 overflow-hidden
                             rounded-full bg-gradient-to-r from-cyan-500 to-blue-500
                             px-7 py-3 text-sm font-bold text-slate-900
                             shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all
                             hover:shadow-[0_0_50px_rgba(34,211,238,0.5)]"
                >
                  <span
                    className="absolute inset-0 -translate-x-full bg-gradient-to-r
                               from-transparent via-white/30 to-transparent
                               transition-transform duration-700 group-hover:translate-x-full"
                  />
                  <span className="relative">View Projects</span>
                  <svg
                    className="relative h-4 w-4 transition-transform group-hover:translate-x-1"
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
                </motion.button>
              </Link>

              <Link href="#contact">
                <motion.button
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="group relative inline-flex items-center justify-center gap-2
                             rounded-full px-7 py-3 text-sm font-bold text-slate-100 transition-all"
                >
                  <span
                    className="absolute inset-0 rounded-full bg-gradient-to-r
                               from-cyan-500 via-purple-500 to-pink-500 p-[1.5px]"
                  >
                    <span className="flex h-full w-full rounded-full bg-[#030712]" />
                  </span>
                  <span className="relative">Contact Me</span>
                </motion.button>
              </Link>
            </motion.div>

            {/* Social icons */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-5"
            >
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-500">
                Find me on
              </span>
              <div className="flex items-center gap-3">
                {[
                  { icon: FaGithub, href: "https://github.com/devmazaharul" },
                  {
                    icon: FaLinkedin,
                    href: "https://www.linkedin.com/in/mazaharul-islam-0948a333a",
                  },
                  {
                    icon: FaFacebook,
                    href: "https://www.facebook.com/themazaharul",
                  },
                ].map(({ icon: Icon, href }) => (
                  <Link key={href} href={href} target="_blank">
                    <motion.span
                      whileHover={{ scale: 1.15, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex h-10 w-10 items-center justify-center rounded-full
                                 border border-white/10 bg-white/5 text-slate-300 transition-all
                                 hover:border-cyan-400/50 hover:bg-cyan-500/10 hover:text-cyan-300
                                 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]"
                    >
                      <Icon className="h-4 w-4" />
                    </motion.span>
                  </Link>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT — Glass Info Card */}
          <motion.div
            initial={{ opacity: 0, x: 60, rotateY: -8 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
              delay: 0.3,
            }}
            className="relative hidden lg:flex justify-end"
          >
            <div className="relative w-full max-w-md">
              {/* Outer glow border */}
              <motion.div
                className="absolute -inset-[2px] -z-10 rounded-3xl opacity-70 blur-lg"
                style={{
                  background:
                    "conic-gradient(from 0deg, #22d3ee, #a855f7, #ec4899, #3b82f6, #22d3ee)",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />

              {/* Glass card */}
              <div
                className="relative overflow-hidden rounded-3xl border border-white/[0.08]
                           bg-slate-900/70 p-8 shadow-2xl backdrop-blur-xl"
              >
                <motion.div
                  className="pointer-events-none absolute -top-20 left-1/2 h-40 w-[200%]
                             -translate-x-1/2 rotate-12 bg-gradient-to-r
                             from-transparent via-white/[0.03] to-transparent"
                  animate={{ x: ["-50%", "-30%", "-50%"] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <div
                  className="pointer-events-none absolute inset-0 opacity-40"
                  style={{
                    backgroundImage:
                      "linear-gradient(to bottom, rgba(148,163,184,0.04) 1px, transparent 0)",
                    backgroundSize: "100% 28px",
                  }}
                />

                <div className="relative space-y-6">
                  {/* Avatar & name */}
                  <div className="flex items-center gap-4">
                    <motion.div
                      whileHover={{ rotate: 6, scale: 1.05 }}
                      className="flex h-14 w-14 items-center justify-center rounded-2xl
                                 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500
                                 text-xl font-extrabold text-white
                                 shadow-[0_0_25px_rgba(34,211,238,0.4)]"
                    >
                      <Image src={'https://www.mazaharul.site/_next/image?url=%2FImage_mw970imw970imw97.png&w=256&q=75'} height={200} alt="heor" width={200} className="rounded-full object-cover" />
                    </motion.div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.35em] text-slate-400">
                        Full Stack Engineer
                      </p>
                      <p className="text-lg font-bold text-white">
                        Mazaharul Islam
                      </p>
                    </div>
                  </div>

                  <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                  {/* Quick info grid */}
                  <div className="grid grid-cols-2 gap-5">
                    {[
                      { label: "Experience", value: "4+ Years", highlight: true },
                      { label: "Location", value: "Jessore, Bangladesh", highlight: false },
                      { label: "Focus", value: "Next.js · TypeScript · Prisma", highlight: false },
                      { label: "Status", value: "Open to offers", highlight: true },
                    ].map((item) => (
                      <div key={item.label} className="space-y-1">
                        <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
                          {item.label}
                        </p>
                        <p
                          className={`text-xs font-medium ${
                            item.highlight ? "text-cyan-300" : "text-slate-300"
                          }`}
                        >
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                  {/* Tech pills */}
                  <div className="space-y-3">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500">
                      Core Stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { name: "Next.js", color: "from-cyan-400/20 to-cyan-400/5 border-cyan-400/20 text-cyan-300" },
                        { name: "TypeScript", color: "from-blue-400/20 to-blue-400/5 border-blue-400/20 text-blue-300" },
                        { name: "React", color: "from-sky-400/20 to-sky-400/5 border-sky-400/20 text-sky-300" },
                        { name: "Node.js", color: "from-emerald-400/20 to-emerald-400/5 border-emerald-400/20 text-emerald-300" },
                        { name: "Prisma", color: "from-violet-400/20 to-violet-400/5 border-violet-400/20 text-violet-300" },
                        { name: "PostgreSQL", color: "from-indigo-400/20 to-indigo-400/5 border-indigo-400/20 text-indigo-300" },
                        { name: "MongoDB", color: "from-green-400/20 to-green-400/5 border-green-400/20 text-green-300" },
                        { name: "Tailwind", color: "from-teal-400/20 to-teal-400/5 border-teal-400/20 text-teal-300" },
                        { name: "Express", color: "from-amber-400/20 to-amber-400/5 border-amber-400/20 text-amber-300" },
                      ].map((tech) => (
                        <motion.span
                          key={tech.name}
                          whileHover={{ scale: 1.08, y: -1 }}
                          className={`cursor-default rounded-full border bg-gradient-to-b px-3 py-1
                                     text-[11px] font-medium backdrop-blur-sm transition-all
                                     hover:shadow-lg ${tech.color}`}
                        >
                          {tech.name}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                  {/* Bottom status */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
                      </span>
                      <span className="text-xs font-semibold text-emerald-300">
                        Open for remote roles
                      </span>
                    </div>
                    <span className="text-[10px] tracking-wider text-slate-500">
                      Next.js · SaaS · Dashboards
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500">
            Scroll
          </span>
          <div className="flex h-8 w-5 items-start justify-center rounded-full border border-white/10 p-1">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-1.5 w-1 rounded-full bg-cyan-400"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;