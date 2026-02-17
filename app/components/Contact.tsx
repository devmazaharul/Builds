"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { HiOutlineMail, HiOutlineLocationMarker, HiOutlinePhone } from "react-icons/hi";
import { IoSendSharp } from "react-icons/io5";
import Link from "next/link";
import { useState, FormEvent } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    // your submit logic here
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: HiOutlineMail,
      label: "Email",
      value: "mazaharul@example.com",
      href: "mailto:mazaharul@example.com",
    },
    {
      icon: HiOutlinePhone,
      label: "Phone",
      value: "+880 1XXX-XXXXXX",
      href: "tel:+8801XXXXXXXXX",
    },
    {
      icon: HiOutlineLocationMarker,
      label: "Location",
      value: "Jessore, Bangladesh",
      href: null,
    },
  ];

  const socials = [
    { icon: FaGithub, href: "https://github.com/devmazaharul", label: "GitHub" },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/mazaharul-islam-0948a333a",
      label: "LinkedIn",
    },
    {
      icon: FaFacebook,
      href: "https://www.facebook.com/themazaharul",
      label: "Facebook",
    },
  ];

  return (
    <section
      id="contact"
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
      <div className="pointer-events-none absolute top-1/4 right-0 h-[400px] w-[400px] rounded-full bg-cyan-500/[0.03] blur-[120px]" />
      <div className="pointer-events-none absolute bottom-1/4 left-0 h-[350px] w-[350px] rounded-full bg-purple-500/[0.03] blur-[100px]" />

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
              Contact
            </p>
          </div>

          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-100">
            Let&apos;s{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              work together
            </span>
          </h2>
          <p className="mt-3 max-w-lg text-sm text-slate-500 leading-relaxed">
            Have a project in mind or want to discuss an opportunity? Feel free
            to reach out — I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-start">
          {/* ── Left: Contact Form ── */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-5"
          >
            {/* Name & Email row */}
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-[11px] uppercase tracking-[0.2em] text-slate-500 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Your name"
                  className="w-full rounded-lg border border-white/[0.06] bg-white/[0.02]
                             px-4 py-3 text-sm text-slate-200 placeholder-slate-600
                             outline-none backdrop-blur-sm transition-colors duration-300
                             focus:border-cyan-400/30 focus:bg-white/[0.04]"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[11px] uppercase tracking-[0.2em] text-slate-500 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-white/[0.06] bg-white/[0.02]
                             px-4 py-3 text-sm text-slate-200 placeholder-slate-600
                             outline-none backdrop-blur-sm transition-colors duration-300
                             focus:border-cyan-400/30 focus:bg-white/[0.04]"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="space-y-2">
              <label className="text-[11px] uppercase tracking-[0.2em] text-slate-500 font-medium">
                Subject
              </label>
              <input
                type="text"
                required
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                placeholder="What's this about?"
                className="w-full rounded-lg border border-white/[0.06] bg-white/[0.02]
                           px-4 py-3 text-sm text-slate-200 placeholder-slate-600
                           outline-none backdrop-blur-sm transition-colors duration-300
                           focus:border-cyan-400/30 focus:bg-white/[0.04]"
              />
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="text-[11px] uppercase tracking-[0.2em] text-slate-500 font-medium">
                Message
              </label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Tell me about your project..."
                className="w-full resize-none rounded-lg border border-white/[0.06] bg-white/[0.02]
                           px-4 py-3 text-sm text-slate-200 placeholder-slate-600
                           outline-none backdrop-blur-sm transition-colors duration-300
                           focus:border-cyan-400/30 focus:bg-white/[0.04]"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={sending}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-2.5 rounded-lg
                         bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3
                         text-sm font-semibold text-slate-900 transition-shadow
                         hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]
                         disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {sending ? (
                <>
                  <svg
                    className="h-4 w-4 animate-spin"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="3"
                      className="opacity-25"
                    />
                    <path
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      className="opacity-75"
                    />
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <IoSendSharp className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </>
              )}
            </motion.button>
          </motion.form>

          {/* ── Right: Contact Info ── */}
          <div className="space-y-8">
            {/* Info cards */}
            <div className="space-y-3">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  whileHover={{ y: -2 }}
                  className="group flex items-center gap-4 rounded-xl border border-white/[0.06]
                             bg-white/[0.02] px-5 py-4 backdrop-blur-sm transition-colors
                             duration-300 hover:border-cyan-400/20 hover:bg-white/[0.04]"
                >
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg
                               border border-white/[0.06] bg-white/[0.03] text-slate-400
                               transition-colors duration-300 group-hover:border-cyan-400/20
                               group-hover:text-cyan-400"
                  >
                    <item.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-slate-600">
                      {item.label}
                    </p>
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="text-sm text-slate-300 transition-colors hover:text-cyan-300"
                      >
                        {item.value}
                      </Link>
                    ) : (
                      <p className="text-sm text-slate-300">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-white/[0.04] via-white/[0.08] to-white/[0.04]" />

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="space-y-4"
            >
              <p className="text-[11px] uppercase tracking-[0.25em] text-slate-600 font-medium">
                Find me on
              </p>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <Link key={s.href} href={s.href} target="_blank">
                    <motion.div
                      whileHover={{ y: -2 }}
                      className="flex h-10 w-10 items-center justify-center rounded-lg
                                 border border-white/[0.06] bg-white/[0.02] text-slate-400
                                 transition-colors duration-300 hover:border-cyan-400/20
                                 hover:bg-white/[0.04] hover:text-cyan-300"
                    >
                      <s.icon className="h-4 w-4" />
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Availability card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5
                         backdrop-blur-sm"
            >
              <div className="flex items-center gap-2.5 mb-3">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <p className="text-xs font-medium text-emerald-400">
                  Available for work
                </p>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                I&apos;m currently open to freelance projects, full-time remote
                roles, and interesting collaborations. Response time is usually
                within 24 hours.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;