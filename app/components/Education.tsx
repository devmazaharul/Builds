'use client';

import { motion } from 'framer-motion';
import {
    HiOutlineAcademicCap,
    HiOutlineCalendar,
    HiOutlineTrophy,
    HiOutlineMapPin,
} from 'react-icons/hi2';

type Education = {
    degree: string;
    institution: string;
    year: string;
    gpa: string;
    highlight?: boolean;
    achievements?: string[];
};

const educationData: Education[] = [
    {
        degree: 'Higher Secondary Certificate (HSC)',
        institution: 'Rupdia Shahid Smrity College',
        year: '2023',
        gpa: '4.90',
        highlight: true,
        achievements: ['Science Group', 'Outstanding GPA', 'Top Performer'],
    },
    {
        degree: 'Secondary School Certificate (SSC)',
        institution: 'Rupdia Welfare Academy',
        year: '2021',
        gpa: '4.42',
        achievements: ['Science Group', 'Strong Academic Record'],
    },
];

const Education = () => {
    return (
        <section id="education" className="relative overflow-hidden bg-[#030712] py-20 sm:py-28">
            {/* ── Subtle background ── */}
            <div
                className="pointer-events-none absolute inset-0 opacity-40"
                style={{
                    backgroundImage:
                        'radial-gradient(circle, rgba(148,163,184,0.06) 1px, transparent 1px)',
                    backgroundSize: '32px 32px',
                }}
            />
            <div className="pointer-events-none absolute top-0 left-1/3 h-[450px] w-[450px] rounded-full bg-cyan-500/[0.03] blur-[120px]" />
            <div className="pointer-events-none absolute bottom-0 right-1/3 h-[400px] w-[400px] rounded-full bg-purple-500/[0.03] blur-[100px]" />

            {/* ── Content ── */}
            <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
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
                            Education
                        </p>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-semibold text-slate-100">
                        My{' '}
                        <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                            Education
                        </span>
                    </h2>
                    <p className="mt-3 max-w-lg text-sm text-slate-500 leading-relaxed">
                        Strong foundation in science and tech, with a passion for learning and
                        problem-solving — shaping my journey as a developer.
                    </p>
                </motion.div>

                {/* ── Timeline ── */}
                <div className="relative">
                    {/* Vertical line */}
                    <motion.div
                        className="absolute left-[23px] top-0 w-[1px] bg-gradient-to-b from-cyan-400/20 via-white/[0.06] to-transparent sm:left-1/2 sm:-translate-x-[0.5px]"
                        initial={{ height: 0 }}
                        whileInView={{ height: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                    />

                    <div className="space-y-8 sm:space-y-12">
                        {educationData.map((edu, i) => (
                            <motion.div
                                key={edu.degree}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.5, delay: i * 0.15 }}
                                className={`relative flex flex-col sm:flex-row sm:items-start ${
                                    i % 2 === 0
                                        ? 'sm:flex-row'
                                        : 'sm:flex-row-reverse sm:text-right'
                                }`}
                            >
                                {/* ── Timeline dot ── */}
                                <div className="absolute left-[15px] top-1 z-10 sm:left-1/2 sm:-translate-x-1/2">
                                    <motion.div
                                        whileHover={{ scale: 1.2 }}
                                        className={`flex h-[18px] w-[18px] items-center justify-center rounded-full
                               border-2 transition-colors duration-300 ${
                                   edu.highlight
                                       ? 'border-cyan-400/40 bg-cyan-400/10'
                                       : 'border-white/[0.1] bg-white/[0.03]'
                               }`}
                                    >
                                        <span
                                            className={`h-2 w-2 rounded-full ${
                                                edu.highlight ? 'bg-cyan-400' : 'bg-slate-500'
                                            }`}
                                        />
                                    </motion.div>
                                </div>

                                {/* ── Card ── */}
                                <div
                                    className={`ml-12 sm:ml-0 sm:w-[calc(50%-32px)] ${
                                        i % 2 === 0 ? 'sm:pr-4' : 'sm:pl-4'
                                    }`}
                                >
                                    <motion.div
                                        whileHover={{ y: -3 }}
                                        className={`group rounded-xl border p-5 backdrop-blur-sm
                               transition-colors duration-300 ${
                                   edu.highlight
                                       ? 'border-cyan-400/10 bg-cyan-400/[0.02] hover:border-cyan-400/20 hover:bg-cyan-400/[0.04]'
                                       : 'border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12] hover:bg-white/[0.04]'
                               }`}
                                    >
                                        {/* Year badge */}
                                        <div
                                            className={`mb-4 inline-flex items-center gap-1.5 rounded-full border
                                 px-2.5 py-1 text-[10px] font-medium ${
                                     edu.highlight
                                         ? 'border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-300'
                                         : 'border-white/[0.06] bg-white/[0.02] text-slate-500'
                                 }`}
                                        >
                                            <HiOutlineCalendar className="h-3 w-3" />
                                            Passing Year: {edu.year}
                                        </div>

                                        {/* Icon + Degree */}
                                        <div className="flex items-start gap-3 mb-3">
                                            <div
                                                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg
                                   border transition-colors duration-300 ${
                                       edu.highlight
                                           ? 'border-cyan-400/15 bg-cyan-400/[0.06] text-cyan-400 group-hover:border-cyan-400/25'
                                           : 'border-white/[0.06] bg-white/[0.03] text-slate-400 group-hover:border-white/[0.12] group-hover:text-slate-200'
                                   }`}
                                            >
                                                <HiOutlineAcademicCap className="h-5 w-5" />
                                            </div>

                                            <div>
                                                <h3 className="text-sm font-semibold text-slate-200 transition-colors group-hover:text-white">
                                                    {edu.degree}
                                                </h3>

                                                {/* Institution */}
                                                <div className="mt-1 flex items-center gap-1.5">
                                                    <HiOutlineMapPin className="h-3 w-3 text-slate-600" />
                                                    <p className="text-xs text-slate-500">
                                                        {edu.institution}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* GPA */}
                                        <div
                                            className={`mb-4 flex items-center gap-2 rounded-lg border p-3
                                 transition-colors duration-300 ${
                                     edu.highlight
                                         ? 'border-cyan-400/10 bg-cyan-400/[0.03]'
                                         : 'border-white/[0.04] bg-white/[0.02]'
                                 }`}
                                        >
                                            <HiOutlineTrophy
                                                className={`h-4 w-4 shrink-0 ${
                                                    edu.highlight
                                                        ? 'text-cyan-400'
                                                        : 'text-slate-500'
                                                }`}
                                            />
                                            <div>
                                                <p className="text-[10px] uppercase tracking-[0.2em] text-slate-600">
                                                    Grade Point Average
                                                </p>
                                                <p
                                                    className={`text-lg font-bold ${
                                                        edu.highlight
                                                            ? 'text-cyan-300'
                                                            : 'text-slate-300'
                                                    }`}
                                                >
                                                    {edu.gpa}
                                                    <span className="ml-1 text-xs font-normal text-slate-600">
                                                        / 5.00
                                                    </span>
                                                </p>
                                            </div>
                                        </div>

                                        {/* GPA bar */}
                                        <div className="mb-4 h-[3px] w-full rounded-full bg-white/[0.04] overflow-hidden">
                                            <motion.div
                                                className={`h-full rounded-full ${
                                                    edu.highlight
                                                        ? 'bg-gradient-to-r from-cyan-400 to-blue-400'
                                                        : 'bg-gradient-to-r from-slate-500 to-slate-400'
                                                }`}
                                                initial={{ width: 0 }}
                                                whileInView={{
                                                    width: `${(parseFloat(edu.gpa) / 5) * 100}%`,
                                                }}
                                                viewport={{ once: true }}
                                                transition={{
                                                    duration: 1,
                                                    delay: 0.4 + i * 0.2,
                                                    ease: 'easeOut',
                                                }}
                                            />
                                        </div>

                                        {/* Achievement tags */}
                                        {edu.achievements && (
                                            <div className="flex flex-wrap gap-1.5">
                                                {edu.achievements.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="rounded-md border border-white/[0.04] bg-white/[0.02]
                                       px-2 py-1 text-[10px] text-slate-500 transition-colors
                                       group-hover:text-slate-400"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* ── Bottom Note ── */}
                <motion.div
                    className="mt-14"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                >
                    <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-6 py-6 backdrop-blur-sm">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                            {/* Left */}
                            <div className="flex items-center gap-3">
                                <div
                                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg
                             border border-cyan-400/15 bg-cyan-400/[0.06] text-cyan-400"
                                >
                                    <HiOutlineAcademicCap className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-slate-200">
                                        Self-Driven Software Engineer
                                    </p>
                                    <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                                        I built my engineering skills through{' '}
                                        <span className="text-cyan-400">online resources</span>,
                                        official documentation, and building real-world projects. My
                                        passion drives me to learn and master new technologies
                                        independently.
                                    </p>
                                </div>
                            </div>

                            {/* Right — Learning pills */}
                            <div className="flex flex-wrap gap-1.5 sm:ml-auto sm:shrink-0">
                                {['YouTube', 'Udemy', 'Docs', 'Open Source'].map((src) => (
                                    <span
                                        key={src}
                                        className="rounded-md border border-white/[0.04] bg-white/[0.02]
                               px-2 py-1 text-[10px] text-slate-500"
                                    >
                                        {src}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
