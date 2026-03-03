"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/utils";
import data from "@/data/portfolio.json";

export default function Skills() {
    const commonCardStyles = "bg-bg-elevated border border-border-subtle rounded-[16px] p-6 lg:p-8 flex flex-col items-start focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-primary focus-visible:outline-offset-4 focus-visible:rounded";

    return (
        <section id="skills" className="py-[120px] px-6 max-w-[1200px] mx-auto overflow-hidden">
            <div className="font-mono text-[11px] text-text-tertiary mb-8">{data.skills.sectionNumber}</div>

            <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-100px" }}
                className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4"
            >

                {/* ROW 1 */}
                {/* AI & Agents FEATURED (Cols 1-3) */}
                <motion.div
                    variants={{
                        initial: { opacity: 0, y: 20 },
                        animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                    }}
                    className="lg:col-span-3 rounded-[16px] p-6 lg:p-8 flex flex-col relative overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-primary focus-visible:outline-offset-4 focus-visible:rounded"
                    style={{
                        background: "var(--bg-elevated)",
                        border: "1px solid rgba(110,142,255,0.25)"
                    }}
                >
                    <div className="absolute bottom-0 right-0 w-full h-[60%] pointer-events-none" style={{ background: "linear-gradient(to top left, rgba(110,142,255,0.04), transparent)" }}></div>
                    <h3 className="font-display text-[17px] font-semibold text-text-primary mb-5 z-10">{data.skills.categories.ai.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-6 z-10 w-full">
                        {data.skills.categories.ai.tags.map((tag) => (
                            <span key={tag} className="px-2.5 py-1.5 bg-bg-base border border-border-subtle rounded text-text-secondary font-mono text-[12px]">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <p className="mt-auto font-body italic text-text-tertiary text-[13px] z-10">
                        {data.skills.categories.ai.description}
                    </p>
                </motion.div>

                {/* Blockchain (Cols 4-5) */}
                <motion.div
                    variants={{
                        initial: { opacity: 0, y: 20 },
                        animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                    }}
                    className={`lg:col-span-2 relative ${commonCardStyles}`}
                >
                    <svg className="absolute top-6 right-6 w-5 h-5 text-text-tertiary opacity-30 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                    </svg>
                    <h3 className="font-display text-[17px] font-semibold text-text-primary mb-5 pr-8 relative z-10">{data.skills.categories.blockchain.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-6 w-full z-10">
                        {data.skills.categories.blockchain.tags.map((tag) => (
                            <span key={tag} className="px-2.5 py-1.5 bg-bg-base border border-border-subtle rounded text-text-secondary font-mono text-[12px]">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <p className="mt-auto font-body italic text-text-tertiary text-[13px]">
                        {data.skills.categories.blockchain.description}
                    </p>
                </motion.div>


                {/* ROW 2 */}
                {/* Languages (Cols 1-2) */}
                <motion.div variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } } }} className={`lg:col-span-2 ${commonCardStyles}`}>
                    <h3 className="font-display text-[17px] font-semibold text-text-primary mb-5">{data.skills.categories.languages.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-6 w-full">
                        {data.skills.categories.languages.tags.map((tag) => (
                            <span key={tag} className="px-2.5 py-1.5 bg-bg-base border border-border-subtle rounded text-text-secondary font-mono text-[12px]">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <p className="mt-auto font-mono italic text-text-tertiary text-[12px]">{data.skills.categories.languages.note}</p>
                </motion.div>

                {/* Frontend (Cols 3-4) */}
                <motion.div variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } } }} className={`lg:col-span-2 ${commonCardStyles}`}>
                    <h3 className="font-display text-[17px] font-semibold text-text-primary mb-5">{data.skills.categories.frontend.title}</h3>
                    <div className="flex flex-wrap gap-2 w-full">
                        {data.skills.categories.frontend.tags.map((tag) => (
                            <span key={tag} className="px-2.5 py-1.5 bg-bg-base border border-border-subtle rounded text-text-secondary font-mono text-[12px]">
                                {tag}
                            </span>
                        ))}
                    </div>
                </motion.div>

                {/* Backend & APIs (Col 5) */}
                <motion.div variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } } }} className={`lg:col-span-1 ${commonCardStyles}`}>
                    <h3 className="font-display text-[17px] font-semibold text-text-primary mb-5">{data.skills.categories.backend.title}</h3>
                    <div className="flex flex-wrap gap-2 w-full">
                        {data.skills.categories.backend.tags.map((tag) => (
                            <span key={tag} className="px-2.5 py-1.5 bg-bg-base border border-border-subtle rounded text-text-secondary font-mono text-[12px]">
                                {tag}
                            </span>
                        ))}
                    </div>
                </motion.div>


                {/* ROW 3 */}
                {/* Databases (Cols 1-2) */}
                <motion.div variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } } }} className={`lg:col-span-2 ${commonCardStyles}`}>
                    <h3 className="font-display text-[17px] font-semibold text-text-primary mb-5">{data.skills.categories.databases.title}</h3>
                    <div className="flex flex-wrap gap-2 w-full">
                        {data.skills.categories.databases.tags.map((tag) => (
                            <span key={tag} className="px-2.5 py-1.5 bg-bg-base border border-border-subtle rounded text-text-secondary font-mono text-[12px]">
                                {tag}
                            </span>
                        ))}
                    </div>
                </motion.div>

                {/* Cloud (Cols 3-5) */}
                <motion.div variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } } }} className={`lg:col-span-3 ${commonCardStyles}`}>
                    <h3 className="font-display text-[17px] font-semibold text-text-primary mb-5">{data.skills.categories.cloud.title}</h3>
                    <div className="flex flex-wrap gap-2 w-full">
                        {data.skills.categories.cloud.tags.map((tag) => (
                            <span key={tag} className="px-2.5 py-1.5 bg-bg-base border border-border-subtle rounded text-text-secondary font-mono text-[12px]">
                                {tag}
                            </span>
                        ))}
                    </div>
                </motion.div>

                {/* ROW 4 - Marquee (Full width) */}
                <motion.div
                    variants={{
                        initial: { opacity: 0, y: 20 },
                        animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                    }}
                    className="col-span-1 md:col-span-2 lg:col-span-5 bg-bg-surface border-y border-border-subtle overflow-hidden relative flex items-center h-[56px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-primary focus-visible:outline-offset-4 focus-visible:rounded"
                >
                    {/* Left and Right Fade Masks */}
                    <div className="absolute top-0 left-0 w-8 md:w-16 h-full bg-gradient-to-r from-bg-surface to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute top-0 right-0 w-8 md:w-16 h-full bg-gradient-to-l from-bg-surface to-transparent z-10 pointer-events-none"></div>

                    <div className="flex whitespace-nowrap overflow-hidden py-4 w-full" aria-hidden="true" style={{ width: '200%' }}>
                        <div className="flex items-center justify-around w-1/2 min-w-max px-4 animate-[marquee_30s_linear_infinite]">
                            {data.skills.marquee.map((tag, i) => (
                                <span key={i} className="font-display text-[14px] font-medium text-text-secondary mx-6">{tag}</span>
                            ))}
                        </div>
                        <div className="flex items-center justify-around w-1/2 min-w-max px-4 animate-[marquee_30s_linear_infinite]">
                            {data.skills.marquee.map((tag, i) => (
                                <span key={`dup-${i}`} className="font-display text-[14px] font-medium text-text-secondary mx-6">{tag}</span>
                            ))}
                        </div>
                    </div>

                    <style dangerouslySetInnerHTML={{
                        __html: `
              @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-100%); } }
           `}} />
                </motion.div>

            </motion.div>
        </section>
    );
}
