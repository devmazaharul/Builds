"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { HiOutlinePlus, HiOutlineMinus } from "react-icons/hi2";

type FaqItem = {
  question: string;
  answer: string;
  category: string;
};

const faqs: FaqItem[] = [
  // ── General ──
  {
    question: "What services do you offer?",
    answer:
      "I build full-stack web applications using Next.js, React, Node.js, Prisma, and PostgreSQL. This includes SaaS dashboards, eCommerce platforms, custom APIs, admin panels, landing pages, and more.",
    category: "General",
  },
  {
    question: "Are you available for freelance work?",
    answer:
      "Yes! I'm currently open to freelance projects, contract work, and full-time remote positions. Feel free to reach out through the contact form or email me directly.",
    category: "General",
  },
  {
    question: "What is your typical response time?",
    answer:
      "I usually respond within 12–24 hours. For urgent projects, I try to get back even sooner. You can also reach me on LinkedIn for a quicker response.",
    category: "General",
  },

  // ── Technical ──
  {
    question: "What tech stack do you primarily use?",
    answer:
      "My core stack is Next.js (App Router), TypeScript, React, Tailwind CSS on the frontend, and Node.js, Express, Prisma ORM with PostgreSQL or MongoDB on the backend. I also use Redis, Docker, and AWS for deployment and caching.",
    category: "Technical",
  },
  {
    question: "Do you build RESTful APIs or GraphQL?",
    answer:
      "I primarily build RESTful APIs with Express.js or Next.js API routes. I also have experience with GraphQL and can work with either based on project requirements.",
    category: "Technical",
  },
  {
    question: "Can you work with existing codebases?",
    answer:
      "Absolutely. I'm comfortable jumping into existing projects, understanding the architecture, fixing bugs, adding new features, and refactoring code for better performance and maintainability.",
    category: "Technical",
  },
  {
    question: "Do you handle database design and optimization?",
    answer:
      "Yes. I design relational and NoSQL database schemas, write efficient queries, set up indexes, handle migrations with Prisma, and optimize for performance at scale.",
    category: "Technical",
  },

  // ── Process ──
  {
    question: "What does your development process look like?",
    answer:
      "I follow an agile approach: requirement gathering → wireframing → development in sprints → testing → deployment → feedback. I keep clients updated throughout with regular progress reports.",
    category: "Process",
  },
  {
    question: "How do you handle project communication?",
    answer:
      "I communicate through Slack, Discord, WhatsApp, or email — whatever works best for you. I provide regular updates, share progress on GitHub, and schedule calls when needed.",
    category: "Process",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Yes. I offer post-launch support including bug fixes, minor updates, and maintenance. For larger ongoing work, we can set up a retainer or maintenance agreement.",
    category: "Process",
  },

  // ── Pricing ──
  {
    question: "How do you charge for projects?",
    answer:
      "It depends on the project scope. I offer both fixed-price and hourly rates. For most projects, I provide a detailed quote after understanding the requirements. Small tasks can be hourly, while larger projects are usually fixed-price with milestones.",
    category: "Pricing",
  },
  {
    question: "Do you require upfront payment?",
    answer:
      "For fixed-price projects, I typically ask for 30–50% upfront, with the remainder due upon completion or at agreed milestones. This protects both parties and keeps the project moving smoothly.",
    category: "Pricing",
  },
];

const categories = ["All", "General", "Technical", "Process", "Pricing"];

/* ── Single FAQ Item ── */
const FaqCard = ({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={`rounded-xl border transition-colors duration-300 ${
        isOpen
          ? "border-cyan-400/15 bg-white/[0.04]"
          : "border-white/[0.06] bg-white/[0.02] hover:border-white/[0.1]"
      }`}
    >
      {/* Question */}
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <div className="flex items-center gap-3 min-w-0">
          {/* Number */}
          <span
            className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md
                       text-[10px] font-bold transition-colors duration-300 ${
                         isOpen
                           ? "bg-cyan-400/10 text-cyan-400 border border-cyan-400/20"
                           : "bg-white/[0.03] text-slate-600 border border-white/[0.06]"
                       }`}
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          <span
            className={`text-sm font-medium transition-colors duration-300 ${
              isOpen ? "text-white" : "text-slate-300"
            }`}
          >
            {item.question}
          </span>
        </div>

        {/* Toggle icon */}
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg
                     border transition-colors duration-300 ${
                       isOpen
                         ? "border-cyan-400/20 bg-cyan-400/10 text-cyan-400"
                         : "border-white/[0.06] bg-white/[0.03] text-slate-500"
                     }`}
        >
          {isOpen ? (
            <HiOutlineMinus className="h-3.5 w-3.5" />
          ) : (
            <HiOutlinePlus className="h-3.5 w-3.5" />
          )}
        </motion.span>
      </button>

      {/* Answer */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pl-14">
              <div className="h-px mb-3 bg-gradient-to-r from-white/[0.04] via-white/[0.08] to-white/[0.04]" />
              <p className="text-xs leading-relaxed text-slate-400">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

/* ══════════ Main Component ══════════ */
const Faq = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs =
    activeCategory === "All"
      ? faqs
      : faqs.filter((f) => f.category === activeCategory);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
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
      <div className="pointer-events-none absolute top-0 right-1/3 h-[450px] w-[450px] rounded-full bg-cyan-500/[0.03] blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-purple-500/[0.03] blur-[100px]" />

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <motion.div
              className="h-[1px] w-8 bg-cyan-400/60"
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/70 font-medium">
              FAQ
            </p>
            <motion.div
              className="h-[1px] w-8 bg-cyan-400/60"
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
          </div>

          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-100">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="mt-3 text-sm text-slate-500 leading-relaxed">
            Common questions about my work, process, and availability.
          </p>
        </motion.div>

        {/* ── Category Filter ── */}
        <motion.div
          className="mb-8 flex flex-wrap justify-center gap-2"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setOpenIndex(null);
              }}
              className={`rounded-full border px-3.5 py-1.5 text-[11px] font-medium
                         transition-all duration-300 ${
                           activeCategory === cat
                             ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-300"
                             : "border-white/[0.06] bg-white/[0.02] text-slate-500 hover:border-white/[0.12] hover:text-slate-300"
                         }`}
            >
              {cat}
              <span className="ml-1.5 text-[9px] text-slate-600">
                {cat === "All"
                  ? faqs.length
                  : faqs.filter((f) => f.category === cat).length}
              </span>
            </button>
          ))}
        </motion.div>

        {/* ── FAQ List ── */}
        <div className="space-y-3">
          {filteredFaqs.map((item, i) => (
            <FaqCard
              key={item.question}
              item={item}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => handleToggle(i)}
            />
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-6 py-8 backdrop-blur-sm">
            <p className="text-sm font-medium text-slate-300 mb-1">
              Still have questions?
            </p>
            <p className="text-xs text-slate-500 mb-5">
              Feel free to reach out — I&apos;m happy to help.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r
                         from-cyan-500 to-blue-500 px-5 py-2.5 text-xs font-semibold
                         text-slate-900 transition-shadow
                         hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]"
            >
              Get in Touch
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
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Faq;