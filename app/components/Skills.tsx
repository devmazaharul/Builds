"use client";

import { motion, type Variants } from "framer-motion";
import { source } from "@/utils/common";
import {
  SiNextdotjs,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiDocker,
  SiGithub,
  SiRedux,
  SiPrisma,
  SiJavascript,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import {
  FiGitBranch,
  FiTerminal,
  FiShield,
  FiRefreshCw,
} from "react-icons/fi";
import { HiOutlineCommandLine, HiOutlineSparkles } from "react-icons/hi2";
import { type IconType } from "react-icons";

/* ───────────────────────── Design Tokens ────────────────────────── */
const surface = {
  card: `rounded-xl border border-white/[0.06] bg-white/[0.02]
         backdrop-blur-sm transition-all duration-300
         hover:border-cyan-400/15 hover:bg-white/[0.04]`,
  chip: `inline-flex items-center gap-2 rounded-full border border-white/[0.06]
         bg-white/[0.02] px-4 py-2 text-xs font-medium text-slate-400
         backdrop-blur-sm transition-all duration-300
         hover:border-cyan-400/15 hover:text-slate-300`,
  statCard: `rounded-xl border border-white/[0.06] bg-white/[0.02]
             backdrop-blur-sm p-5`,
  iconBox: `flex items-center justify-center rounded-lg border
            border-white/[0.06] bg-white/[0.03] transition-all duration-300`,
  divider: `h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent`,
} as const;

/* ───────────────────────── Skill Icon Map ───────────────────────── */
const skillIconMap: Record<string, { icon: IconType; color: string }> = {
  "Next.js": { icon: SiNextdotjs, color: "text-white" },
  "T.Script": { icon: SiTypescript, color: "text-blue-400" },
  "React.js": { icon: SiReact, color: "text-sky-400" },
  "Node.js": { icon: SiNodedotjs, color: "text-emerald-400" },
  Express: { icon: SiExpress, color: "text-slate-300" },
  MongoDB: { icon: SiMongodb, color: "text-green-400" },
  Postgres: { icon: SiPostgresql, color: "text-blue-300" },
  PostgreSQL: { icon: SiPostgresql, color: "text-blue-300" },
  Tailwind: { icon: SiTailwindcss, color: "text-teal-400" },
  Docker: { icon: SiDocker, color: "text-blue-400" },
  Github: { icon: SiGithub, color: "text-slate-300" },
  Redux: { icon: SiRedux, color: "text-purple-400" },
  Prisma: { icon: SiPrisma, color: "text-violet-400" },
  "REST Full API": { icon: TbApi, color: "text-amber-400" },
  JavaScript: { icon: SiJavascript, color: "text-yellow-400" },
};

const otherSkillIconMap: Record<string, { icon: IconType; color: string }> = {
  "Git & GitHub": { icon: FiGitBranch, color: "text-orange-400" },
  Docker: { icon: SiDocker, color: "text-blue-400" },
  "Linux (Basic CLI)": { icon: FiTerminal, color: "text-emerald-400" },
  "JWT Authentication": { icon: FiShield, color: "text-cyan-400" },
  "CI/CD (Basic)": { icon: FiRefreshCw, color: "text-purple-400" },
};

/* ───────────────────────── Animation Variants ───────────────────── */
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

/* ───────────────────────── Background ───────────────────────────── */
const Background = () => (
  <>
    {/* Dot pattern */}
    <div
      className="pointer-events-none absolute inset-0 opacity-40"
      aria-hidden="true"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(148,163,184,0.06) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }}
    />

    {/* Ambient glows */}
    <div
      className="pointer-events-none absolute top-0 left-1/4
                 h-[500px] w-[500px] rounded-full bg-cyan-500/[0.03]
                 blur-[120px]"
      aria-hidden="true"
    />
    <div
      className="pointer-events-none absolute bottom-0 right-1/4
                 h-[400px] w-[400px] rounded-full bg-purple-500/[0.03]
                 blur-[100px]"
      aria-hidden="true"
    />
    <div
      className="pointer-events-none absolute top-1/2 left-1/2
                 -translate-x-1/2 -translate-y-1/2
                 h-[300px] w-[600px] rounded-full bg-blue-500/[0.02]
                 blur-[100px]"
      aria-hidden="true"
    />
  </>
);

/* ───────────────────────── Skill Bar ────────────────────────────── */
const SkillBar = ({ index }: { index: number }) => (
  <div className="mt-3 h-[2px] w-full rounded-full bg-white/[0.06] overflow-hidden">
    <motion.div
      className="h-full rounded-full bg-gradient-to-r from-cyan-400/60 to-purple-400/60"
      initial={{ width: 0 }}
      whileInView={{ width: `${70 + Math.random() * 30}%` }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.05 + 0.2, ease: "easeOut" }}
    />
  </div>
);

/* ───────────────────────── Skill Card ───────────────────────────── */
const SkillCard = ({
  skill,
  index,
}: {
  skill: { id: number; title: string; exp: string };
  index: number;
}) => {
  const iconData = skillIconMap[skill.title];
  const Icon = iconData?.icon;
  const iconColor = iconData?.color || "text-cyan-400/60";

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -3 }}
      className={`group relative p-4 ${surface.card}`}
    >
      {/* Hover corner glow */}
      <div
        className="pointer-events-none absolute -top-px -right-px h-16 w-16
                   rounded-tr-xl bg-gradient-to-bl from-cyan-400/[0.08]
                   to-transparent opacity-0 transition-opacity duration-500
                   group-hover:opacity-100"
        aria-hidden="true"
      />

      <div className="relative">
        {/* Icon + Title row */}
        <div className="flex items-center gap-3">
          <div
            className={`h-9 w-9 ${surface.iconBox}
                        group-hover:border-cyan-400/20`}
          >
            {Icon ? (
              <Icon className={`h-4 w-4 ${iconColor}`} />
            ) : (
              <HiOutlineCommandLine className="h-4 w-4 text-cyan-400/60" />
            )}
          </div>

          <div className="flex-1 min-w-0">
            <p
              className="text-sm font-semibold text-slate-200 truncate
                         transition-colors duration-300 group-hover:text-white"
            >
              {skill.title}
            </p>
          </div>
        </div>

        {/* Experience */}
        <div className="mt-3 flex items-center justify-between">
          <span className="text-[11px] text-cyan-400/60 font-medium">
            {skill.exp} experience
          </span>
          <span className="text-[10px] text-slate-600">
            ●
          </span>
        </div>

        {/* Skill bar */}
        <SkillBar index={index} />
      </div>
    </motion.div>
  );
};

/* ───────────────────────── Other Skill Chip ─────────────────────── */
const OtherSkillChip = ({
  skill,
}: {
  skill: { id: number; title: string };
}) => {
  const iconData = otherSkillIconMap[skill.title];
  const Icon = iconData?.icon;
  const iconColor = iconData?.color || "text-slate-500";

  return (
    <motion.span
      variants={itemVariants}
      whileHover={{ y: -2 }}
      className={surface.chip}
    >
      {Icon ? (
        <Icon className={`h-3.5 w-3.5 ${iconColor}`} />
      ) : (
        <HiOutlineSparkles className="h-3.5 w-3.5 text-slate-500" />
      )}
      {skill.title}
    </motion.span>
  );
};

/* ───────────────────────── Section Header ────────────────────────── */
const SectionHeader = () => (
  <motion.div
    className="mb-14"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5 }}
  >
    {/* Label */}
    <div className="flex items-center gap-3 mb-3">
      <motion.div
        className="h-[1px] bg-cyan-400/60"
        initial={{ width: 0 }}
        whileInView={{ width: 32 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      />
      <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/70 font-medium">
        Skills & Expertise
      </p>
    </div>

    {/* Title */}
    <h2 className="text-2xl sm:text-3xl font-semibold text-slate-100">
      Tech stack I{" "}
      <span
        className="bg-gradient-to-r from-cyan-400 to-purple-400
                   bg-clip-text text-transparent"
      >
        work with
      </span>
    </h2>

    {/* Subtitle */}
    <p className="mt-3 max-w-lg text-sm text-slate-500 leading-relaxed">
      Technologies and tools I use to bring ideas to life — from frontend
      frameworks to backend services and everything in between.
    </p>

    {/* Count badge */}
    <div className="mt-4 flex items-center gap-2">
      <span
        className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.06]
                   bg-white/[0.02] px-3 py-1 text-[11px] text-slate-400"
      >
        <HiOutlineCommandLine className="h-3 w-3 text-cyan-400/60" />
        {source.main_skills.length + source.others_skills.length}+ technologies
      </span>
    </div>
  </motion.div>
);

/* ───────────────────────── Sub Section Title ────────────────────── */
const SubSectionTitle = ({
  icon: Icon,
  iconColor,
  iconBg,
  title,
  delay = 0,
}: {
  icon: IconType;
  iconColor: string;
  iconBg: string;
  title: string;
  delay?: number;
}) => (
  <motion.div
    className="flex items-center gap-3 mb-6"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
  >
    <div
      className={`flex h-7 w-7 items-center justify-center rounded-lg
                  border ${iconBg}`}
    >
      <Icon className={`h-3.5 w-3.5 ${iconColor}`} />
    </div>
    <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
      {title}
    </h3>
    <div
      className="flex-1 h-[1px] bg-gradient-to-r from-white/[0.06]
                 to-transparent"
    />
  </motion.div>
);

/* ═══════════════════════ SKILLS COMPONENT ═══════════════════════ */
const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#030712] py-20 sm:py-28"
    >
      <Background />

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader />

        {/* ── Layout Grid ── */}
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] items-start">
          {/* ── Core Skills ── */}
          <div>
            <SubSectionTitle
              icon={HiOutlineCommandLine}
              iconColor="text-cyan-400"
              iconBg="bg-cyan-400/10 border-cyan-400/20"
              title="Core Skills"
            />

            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 gap-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {source.main_skills.map((skill, i) => (
                <SkillCard key={skill.id} skill={skill} index={i} />
              ))}
            </motion.div>
          </div>

          {/* ── Right Column ── */}
          <div className="space-y-8">
            {/* Other Skills */}
            <div>
              <SubSectionTitle
                icon={HiOutlineSparkles}
                iconColor="text-purple-400"
                iconBg="bg-purple-400/10 border-purple-400/20"
                title="Other Skills"
                delay={0.2}
              />

              <motion.div
                className="flex flex-wrap gap-2"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                {source.others_skills.map((skill) => (
                  <OtherSkillChip key={skill.id} skill={skill} />
                ))}
              </motion.div>
            </div>

            {/* Stats */}
            <motion.div
              className={surface.statCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {/* Top highlight */}
              <div
                className="pointer-events-none absolute top-0 left-0 right-0
                           h-[1px] bg-gradient-to-r from-transparent
                           via-cyan-400/20 to-transparent"
                aria-hidden="true"
              />

              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    label: "Technologies",
                    value: `${source.main_skills.length + source.others_skills.length}+`,
                  },
                  {
                    label: "Years Coding",
                    value: source.experience,
                  },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p
                      className="text-2xl font-bold bg-gradient-to-r from-cyan-400
                                 to-purple-400 bg-clip-text text-transparent"
                    >
                      {stat.value}
                    </p>
                    <p className="mt-1 text-[11px] text-slate-500 uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Note Card */}
            <motion.div
              className={`relative overflow-hidden ${surface.statCard}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span
                      className="absolute inline-flex h-full w-full animate-ping
                                 rounded-full bg-emerald-400 opacity-40"
                    />
                    <span
                      className="relative inline-flex h-2 w-2 rounded-full
                                 bg-emerald-400"
                    />
                  </span>
                  <span className="text-xs font-medium text-emerald-400/80">
                    Always learning
                  </span>
                </div>

                <p className="text-xs leading-relaxed text-slate-500">
                  Currently exploring{" "}
                  <span className="text-slate-400 font-medium">
                    Docker, CI/CD pipelines
                  </span>{" "}
                  and deepening my expertise in{" "}
                  <span className="text-slate-400 font-medium">
                    system design & scalability
                  </span>
                  .
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;