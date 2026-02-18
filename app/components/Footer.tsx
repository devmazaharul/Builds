// components/Footer.tsx
"use client";

import { motion } from "framer-motion";
import { source, personalInfo } from "@/utils/common";
import Link from "next/link";
import {
  FiGithub,
  FiLinkedin,
  FiFacebook,
  FiMail,
  FiMapPin,
  FiPhone,
  FiArrowUpRight,
  FiHeart,
  FiArrowUp,
} from "react-icons/fi";
import Image from "next/image";

/* ───────────────────────── Design Tokens ────────────────────────── */
const surface = {
  card: `rounded-xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm`,
  divider: `h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent`,
  socialIcon: `flex h-9 w-9 items-center justify-center rounded-lg border
               border-white/[0.06] bg-white/[0.02] text-slate-500
               transition-all duration-300 hover:border-cyan-400/20
               hover:bg-white/[0.04] hover:text-cyan-400 hover:-translate-y-0.5`,
  navLink: `text-sm text-slate-500 transition-colors duration-300
            hover:text-slate-200 inline-flex items-center gap-1 group`,
  contactItem: `flex items-start gap-3 text-sm text-slate-500`,
} as const;

/* ───────────────────────── Navigation Data ──────────────────────── */
const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: personalInfo.github,
    icon: FiGithub,
  },
  {
    label: "LinkedIn",
    href: personalInfo.linkdine,
    icon: FiLinkedin,
  },
  {
    label: "Facebook",
    href: personalInfo.facebook,
    icon: FiFacebook,
  },
  {
    label: "Email",
    href: `mailto:${personalInfo.email}`,
    icon: FiMail,
  },
];

/* ───────────────────────── Sub-components ───────────────────────── */
const DotPattern = () => (
  <div
    className="pointer-events-none absolute inset-0 opacity-30"
    aria-hidden="true"
    style={{
      backgroundImage:
        "radial-gradient(circle, rgba(148,163,184,0.06) 1px, transparent 1px)",
      backgroundSize: "32px 32px",
    }}
  />
);

const BackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.95 }}
      className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl
                 border border-white/[0.06] bg-white/[0.02] text-slate-500
                 backdrop-blur-sm transition-all duration-300
                 hover:border-cyan-400/20 hover:text-cyan-400"
      aria-label="Back to top"
    >
      <FiArrowUp className="h-4 w-4" />
    </motion.button>
  );
};

const StatusBadge = () => (
  <div className="flex items-center gap-2">
    <span className="relative flex h-2 w-2">
      <span
        className="absolute inline-flex h-full w-full animate-ping
                   rounded-full bg-emerald-400 opacity-40"
      />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
    </span>
    <span className="text-xs text-slate-500">Available for work</span>
  </div>
);

/* ───────────────────────── Main Footer ──────────────────────────── */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#030712] pt-20 pb-8">
      {/* ── Background ── */}
      <DotPattern />
      <div
        className="pointer-events-none absolute bottom-0 left-1/4
                   h-[400px] w-[400px] rounded-full bg-cyan-500/[0.03]
                   blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-0 right-1/3
                   h-[300px] w-[300px] rounded-full bg-purple-500/[0.03]
                   blur-[100px]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* ══════════════════ Top Divider ══════════════════ */}
        <div className={surface.divider} />

        {/* ══════════════════ Main Grid ══════════════════ */}
        <motion.div
          className="grid gap-12 pt-14 sm:grid-cols-2 lg:grid-cols-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          {/* ── Column 1: Brand ── */}
          <div className="lg:col-span-5">
            {/* Logo / Name */}
            <Link href="#home" className="gap-2 group flex">
            <div>
              <Image src={"/binary.png"} alt="image" width={200} height={300} className="w-6 h-6 object-contain"/>
            </div>
              <i className="text-xl capitalize font-bold text-slate-100 tracking-tight">
                <span
                  className="bg-gradient-to-r  from-cyan-400 to-purple-400
                             bg-clip-text text-transparent"
                >
                  Maza
                </span>
                <span className="text-slate-300">
                  {" "}
                 IT
                </span>
              </i>
            </Link>

            {/* Title */}
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-cyan-400/50 font-medium">
              {source.title}
            </p>

            {/* Description */}
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-500">
              {source.description.length > 160
                ? source.description.slice(0, 160) + "..."
                : source.description}
            </p>

            {/* Status */}
            <div className="mt-5">
              <StatusBadge />
            </div>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-2">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <motion.span
                    whileHover={{ y: -2 }}
                    className={surface.socialIcon}
                  >
                    <social.icon className="h-4 w-4" />
                  </motion.span>
                </Link>
              ))}
            </div>
          </div>

          {/* ── Column 2: Quick Links ── */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-2 mb-5">
              <div className="h-[1px] w-4 bg-cyan-400/40" />
              <h4 className="text-xs uppercase tracking-[0.25em] text-slate-400 font-medium">
                Navigation
              </h4>
            </div>

            <ul className="space-y-3">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  <Link href={link.href} className={surface.navLink}>
                    <span className="text-cyan-400/40 text-xs mr-1">
                      0{i + 1}.
                    </span>
                    {link.label}
                    <FiArrowUpRight
                      className="h-3 w-3 opacity-0 -translate-y-0.5
                                 translate-x-0 transition-all duration-300
                                 group-hover:opacity-100 group-hover:translate-y-0"
                    />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* ── Column 3: Contact ── */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-5">
              <div className="h-[1px] w-4 bg-cyan-400/40" />
              <h4 className="text-xs uppercase tracking-[0.25em] text-slate-400 font-medium">
                Get in Touch
              </h4>
            </div>

            <div className="space-y-4">
              {/* Email */}
              <div className={surface.contactItem}>
                <div
                  className="mt-0.5 flex h-8 w-8 shrink-0 items-center
                             justify-center rounded-lg border border-white/[0.06]
                             bg-white/[0.03] text-cyan-400/60"
                >
                  <FiMail className="h-3.5 w-3.5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-slate-600 mb-0.5">
                    Email
                  </p>
                  <Link
                    href={`mailto:${source.contactInfo.email}`}
                    className="text-sm text-slate-400 transition-colors
                               duration-300 hover:text-cyan-400"
                  >
                    {source.contactInfo.email}
                  </Link>
                </div>
              </div>

              {/* Phone */}
              <div className={surface.contactItem}>
                <div
                  className="mt-0.5 flex h-8 w-8 shrink-0 items-center
                             justify-center rounded-lg border border-white/[0.06]
                             bg-white/[0.03] text-cyan-400/60"
                >
                  <FiPhone className="h-3.5 w-3.5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-slate-600 mb-0.5">
                    Phone
                  </p>
                  <Link
                    href={`tel:${source.contactInfo.number}`}
                    className="text-sm text-slate-400 transition-colors
                               duration-300 hover:text-cyan-400"
                  >
                    +88 {source.contactInfo.number}
                  </Link>
                </div>
              </div>

              {/* Location */}
              <div className={surface.contactItem}>
                <div
                  className="mt-0.5 flex h-8 w-8 shrink-0 items-center
                             justify-center rounded-lg border border-white/[0.06]
                             bg-white/[0.03] text-cyan-400/60"
                >
                  <FiMapPin className="h-3.5 w-3.5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-slate-600 mb-0.5">
                    Location
                  </p>
                  <p className="text-sm text-slate-400">
                    {source.contactInfo.distric},{" "}
                    {source.contactInfo.division}
                    <br />
                    <span className="text-slate-600">
                      {source.contactInfo.country}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ══════════════════ Bottom Bar ══════════════════ */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {/* Divider */}
          <div className={surface.divider} />

          <div
            className="mt-6 flex flex-col items-center justify-between
                       gap-4 sm:flex-row"
          >
            {/* Copyright */}
        <p className="flex items-center gap-2 text-xs text-slate-500 font-medium">
  © {currentYear} 
  <span className="text-slate-300">|</span> 
  <span className="capitalize tracking-wide text-slate-700">
    {source.name}
  </span>
  <span className="text-slate-300">·</span>
  <span className="text-slate-500">Full Stack Engineer</span>
</p>
            {/* Right side: status + back to top */}
            <div className="flex items-center gap-4">
<div className="hidden sm:flex items-center gap-1.5">
  {["Remote", "Full-time", "Available"].map((status) => (
    <span
      key={status}
      className="flex items-center gap-1.5 rounded-full border border-green-500/10 
                 bg-green-500/5 px-2.5 py-0.5 text-[10px] text-gray-400/80 font-medium"
    >
      {status === "Available" && (
        <span className="h-1 w-1 rounded-full bg-gray-500 animate-pulse" />
      )}
      {status}
    </span>
  ))}
</div>

              <BackToTop />
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;