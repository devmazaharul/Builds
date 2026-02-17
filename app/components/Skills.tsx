"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { source } from "@/utils/common";
import { useEffect, useRef, useState, useCallback } from "react";

// ─── Animated Background Particles ───────────────────────────────
const Particle = ({ index }: { index: number }) => {
  const randomX = Math.random() * 100;
  const randomDelay = Math.random() * 5;
  const randomDuration = 8 + Math.random() * 12;
  const randomSize = 2 + Math.random() * 4;

  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        left: `${randomX}%`,
        width: randomSize,
        height: randomSize,
        background:
          index % 3 === 0
            ? "rgba(34,211,238,0.4)"
            : index % 3 === 1
            ? "rgba(168,85,247,0.35)"
            : "rgba(59,130,246,0.3)",
        filter: `blur(${randomSize > 4 ? 1 : 0}px)`,
      }}
      initial={{ y: "110vh", opacity: 0 }}
      animate={{
        y: "-10vh",
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: randomDuration,
        delay: randomDelay,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
};

// ─── Floating Orb ────────────────────────────────────────────────
const FloatingOrb = ({
  size,
  color,
  top,
  left,
  delay,
}: {
  size: number;
  color: string;
  top: string;
  left: string;
  delay: number;
}) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    style={{
      width: size,
      height: size,
      top,
      left,
      background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
      filter: "blur(40px)",
    }}
    animate={{
      y: [0, -30, 0, 30, 0],
      x: [0, 20, 0, -20, 0],
      scale: [1, 1.2, 1, 0.9, 1],
      opacity: [0.3, 0.5, 0.3, 0.5, 0.3],
    }}
    transition={{
      duration: 10 + delay,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

// ─── Grid Background ────────────────────────────────────────────
const GridBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }}
    />
    <motion.div
      className="absolute inset-0 opacity-[0.05]"
      style={{
        backgroundImage: `
          linear-gradient(rgba(34,211,238,0.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(34,211,238,0.3) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }}
      animate={{ opacity: [0.03, 0.07, 0.03] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>
);

// ─── Glowing Border Card ─────────────────────────────────────────
const GlowCard = ({
  children,
  index,
  className = "",
}: {
  children: React.ReactNode;
  index: number;
  className?: string;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const rect = cardRef.current?.getBoundingClientRect();
      if (!rect) return;
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    },
    [mouseX, mouseY]
  );

  const gradientX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const gradientY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  const background = useTransform(
    [gradientX, gradientY],
    ([x, y]) =>
      `radial-gradient(300px circle at ${x}px ${y}px, rgba(34,211,238,0.12), rgba(168,85,247,0.06), transparent 70%)`
  );

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.5,
        delay: index * 0.07,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ y: -6, scale: 1.03 }}
      className={`group relative rounded-2xl p-[1px] ${className}`}
    >
      {/* Animated border gradient */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "linear-gradient(135deg, rgba(34,211,238,0.5), rgba(168,85,247,0.5), rgba(59,130,246,0.5))",
          backgroundSize: "200% 200%",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />

      {/* Static subtle border */}
      <div className="absolute inset-0 rounded-2xl border border-white/[0.08] group-hover:border-transparent transition-colors duration-500" />

      {/* Card inner */}
      <motion.div
        className="relative h-full rounded-2xl bg-slate-900/90 backdrop-blur-xl overflow-hidden"
        style={{ background }}
      >
        {/* Inner glow on hover */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-cyan-500/[0.05] via-transparent to-purple-500/[0.05]" />

        <div className="relative z-10">{children}</div>
      </motion.div>
    </motion.div>
  );
};

// ─── Skill Level Indicator ───────────────────────────────────────
const SkillBar = ({ delay }: { delay: number }) => (
  <div className="mt-3 h-[2px] w-full rounded-full bg-white/[0.06] overflow-hidden">
    <motion.div
      className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400"
      initial={{ width: 0 }}
      whileInView={{ width: `${65 + Math.random() * 35}%` }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, delay: delay * 0.07 + 0.3, ease: "easeOut" }}
    />
  </div>
);

// ─── Other Skill Chip ────────────────────────────────────────────
const SkillChip = ({
  title,
  index,
}: {
  title: string;
  index: number;
}) => (
  <motion.span
    initial={{ opacity: 0, scale: 0.8, y: 15 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{
      duration: 0.4,
      delay: index * 0.04,
      ease: [0.25, 0.46, 0.45, 0.94],
    }}
    whileHover={{
      y: -3,
      scale: 1.08,
      boxShadow: "0 0 20px rgba(34,211,238,0.15), 0 0 40px rgba(168,85,247,0.08)",
    }}
    className="group relative cursor-default rounded-full border border-white/[0.08] 
               bg-white/[0.03] px-4 py-2 text-xs font-medium text-slate-300
               hover:border-cyan-400/30 hover:text-slate-100 
               transition-colors duration-300 backdrop-blur-sm"
  >
    {/* Hover glow dot */}
    <span className="absolute -top-[2px] -right-[2px] h-2 w-2 rounded-full 
                      bg-cyan-400 opacity-0 group-hover:opacity-100 
                      transition-opacity duration-300 shadow-[0_0_6px_rgba(34,211,238,0.8)]" />
    {title}
  </motion.span>
);

// ─── Main Component ──────────────────────────────────────────────
const Skills = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.section
      id="skills"
      className="relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
    >
      {/* ── Dark Background Layers ── */}
      <div className="absolute inset-0 bg-[#030712]" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-[#0a0f1e] to-[#030712]" />

      {/* Radial gradient spots */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/[0.03] rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/[0.04] rounded-full blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-500/[0.02] rounded-full blur-[120px]" />

      {/* Grid */}
      <GridBackground />

      {/* Floating orbs */}
      <FloatingOrb size={200} color="rgba(34,211,238,0.15)" top="10%" left="5%" delay={0} />
      <FloatingOrb size={160} color="rgba(168,85,247,0.12)" top="60%" left="80%" delay={2} />
      <FloatingOrb size={120} color="rgba(59,130,246,0.1)" top="30%" left="60%" delay={4} />

      {/* Particles */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 30 }).map((_, i) => (
            <Particle key={i} index={i} />
          ))}
        </div>
      )}

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        {/* Header */}
        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <motion.div
              className="h-[1px] w-10 bg-gradient-to-r from-cyan-400 to-transparent"
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/80 font-medium">
              Skills & Expertise
            </p>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-slate-100">Tech stack I </span>
            <span className="relative">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                work with
              </span>
              {/* Underline animation */}
              <motion.span
                className="absolute -bottom-2 left-0 h-[2px] bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
            </span>
          </motion.h2>

          <motion.p
            className="mt-4 max-w-lg text-sm text-slate-400/80 leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Technologies and tools I use to bring ideas to life — from frontend
            frameworks to backend services and everything in between.
          </motion.p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] items-start">
          {/* ── Core Skills ── */}
          <div>
            <motion.div
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-400/10 border border-cyan-400/20">
                <svg
                  className="h-3.5 w-3.5 text-cyan-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                  />
                </svg>
              </div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
                Core Skills
              </h3>
              <div className="flex-1 h-[1px] bg-gradient-to-r from-white/[0.06] to-transparent" />
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {source.main_skills.map((skill, i) => (
                <GlowCard key={skill.id + skill.title} index={i}>
                  <div className="px-4 py-4">
                    <div className="flex items-start justify-between">
                      <p className="font-semibold text-sm text-slate-100 group-hover:text-white transition-colors">
                        {skill.title}
                      </p>
                      {/* Subtle glow indicator */}
                      <motion.div
                        className="h-1.5 w-1.5 rounded-full bg-cyan-400/60 mt-1.5"
                        animate={{
                          boxShadow: [
                            "0 0 0px rgba(34,211,238,0)",
                            "0 0 8px rgba(34,211,238,0.6)",
                            "0 0 0px rgba(34,211,238,0)",
                          ],
                        }}
                        transition={{
                          duration: 2,
                          delay: i * 0.2,
                          repeat: Infinity,
                        }}
                      />
                    </div>
                    <p className="mt-1.5 text-[11px] text-cyan-300/70 font-medium">
                      {skill.exp} experience
                    </p>
                    <SkillBar delay={i} />
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>

          {/* ── Other Skills ── */}
          <div>
            <motion.div
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-purple-400/10 border border-purple-400/20">
                <svg
                  className="h-3.5 w-3.5 text-purple-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                  />
                </svg>
              </div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
                Other Skills
              </h3>
              <div className="flex-1 h-[1px] bg-gradient-to-r from-white/[0.06] to-transparent" />
            </motion.div>

            <div className="flex flex-wrap gap-2.5">
              {source.others_skills.map((skill, i) => (
                <SkillChip
                  key={skill.id + skill.title}
                  title={skill.title}
                  index={i}
                />
              ))}
            </div>

            {/* Stats box */}
            <motion.div
              className="mt-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] 
                         backdrop-blur-sm p-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Technologies", value: `${source.main_skills.length + source.others_skills.length}+` },
                  { label: "Years Coding", value: "3+" },
                ].map((stat, i) => (
                  <div key={stat.label} className="text-center">
                    <motion.p
                      className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: 0.7 + i * 0.15,
                        type: "spring",
                        stiffness: 200,
                      }}
                    >
                      {stat.value}
                    </motion.p>
                    <p className="mt-1 text-[11px] text-slate-500 uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#030712] to-transparent pointer-events-none" />
    </motion.section>
  );
};

export default Skills;