"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/utils";
import data from "@/data/portfolio.json";
import SpotlightCard from "@/components/shared/SpotlightCard";

export default function Skills() {
    // Premium Vercel-style glass physics
    const glassCardClasses = "bg-white/[0.02] backdrop-blur-md border border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] transition-all duration-300 hover:bg-white/[0.04] hover:border-white/20 hover:shadow-[0_8px_32px_rgba(255,255,255,0.04)]";
    const commonCardStyles = `h-full rounded-[16px] p-6 lg:p-8 flex flex-col items-start focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-primary focus-visible:outline-offset-4 focus-visible:rounded ${glassCardClasses}`;

    // Glass Pill Tags
    const pillBadgeClass = "px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-white/70 font-mono tracking-[0.05em] text-[11px] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]";

    return (
        <section id="skills" className="py-[120px] px-6 max-w-[1200px] mx-auto overflow-hidden">
            <div className="font-mono text-[11px] text-text-tertiary mb-8 uppercase tracking-[0.15em]">{data.skills.sectionNumber}</div>

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
                    className="lg:col-span-3 h-full"
                >
                    <SpotlightCard className={commonCardStyles}>
                        <div className="absolute bottom-0 right-0 w-full h-[60%] pointer-events-none" style={{ background: "linear-gradient(to top left, rgba(255,255,255,0.03), transparent)" }}></div>
                        <h3 className="font-display text-[17px] font-semibold tracking-[-0.02em] text-text-primary mb-5 z-10">{data.skills.categories.ai.title}</h3>
                        <div className="flex flex-wrap gap-2 mb-6 z-10 w-full">
                            {data.skills.categories.ai.tags.map((tag) => (
                                <span key={tag} className={pillBadgeClass}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <p className="mt-auto font-body italic text-text-tertiary text-[13px] z-10">
                            {data.skills.categories.ai.description}
                        </p>
                    </SpotlightCard>
                </motion.div>

                {/* Blockchain (Cols 4-5) */}
                <motion.div
                    variants={{
                        initial: { opacity: 0, y: 20 },
                        animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                    }}
                    className="lg:col-span-2 h-full"
                >
                    <SpotlightCard className={`relative ${commonCardStyles}`}>
                        <svg className="absolute top-6 right-6 w-5 h-5 text-white/20 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                        </svg>
                        <h3 className="font-display text-[17px] font-semibold tracking-[-0.02em] text-text-primary mb-5 pr-8 relative z-10">{data.skills.categories.blockchain.title}</h3>
                        <div className="flex flex-wrap gap-2 mb-6 w-full z-10">
                            {data.skills.categories.blockchain.tags.map((tag) => (
                                <span key={tag} className={pillBadgeClass}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <p className="mt-auto font-body italic text-text-tertiary text-[13px] relative z-10">
                            {data.skills.categories.blockchain.description}
                        </p>
                    </SpotlightCard>
                </motion.div>


                {/* ROW 2 */}
                {/* Languages (Cols 1-2) */}
                <motion.div variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } } }} className="lg:col-span-2 h-full">
                    <SpotlightCard className={commonCardStyles}>
                        <h3 className="font-display text-[17px] font-semibold tracking-[-0.02em] text-text-primary mb-5 relative z-10">{data.skills.categories.languages.title}</h3>
                        <div className="flex flex-wrap gap-2 mb-6 w-full relative z-10">
                            {data.skills.categories.languages.tags.map((tag) => (
                                <span key={tag} className={pillBadgeClass}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <p className="mt-auto font-mono italic text-white/40 tracking-[0.05em] text-[11px] relative z-10">{data.skills.categories.languages.note}</p>
                    </SpotlightCard>
                </motion.div>

                {/* Frontend (Cols 3-4) */}
                <motion.div variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } } }} className="lg:col-span-2 h-full">
                    <SpotlightCard className={commonCardStyles}>
                        <h3 className="font-display text-[17px] font-semibold tracking-[-0.02em] text-text-primary mb-5 relative z-10">{data.skills.categories.frontend.title}</h3>
                        <div className="flex flex-wrap gap-2 w-full relative z-10">
                            {data.skills.categories.frontend.tags.map((tag) => (
                                <span key={tag} className={pillBadgeClass}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </SpotlightCard>
                </motion.div>

                {/* Backend & APIs (Col 5) */}
                <motion.div variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } } }} className="lg:col-span-1 h-full">
                    <SpotlightCard className={commonCardStyles}>
                        <h3 className="font-display text-[17px] font-semibold tracking-[-0.02em] text-text-primary mb-5 relative z-10">{data.skills.categories.backend.title}</h3>
                        <div className="flex flex-wrap gap-2 w-full relative z-10">
                            {data.skills.categories.backend.tags.map((tag) => (
                                <span key={tag} className={pillBadgeClass}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </SpotlightCard>
                </motion.div>


                {/* ROW 3 */}
                {/* Databases (Cols 1-2) */}
                <motion.div variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } } }} className="lg:col-span-2 h-full">
                    <SpotlightCard className={commonCardStyles}>
                        <h3 className="font-display text-[17px] font-semibold tracking-[-0.02em] text-text-primary mb-5 relative z-10">{data.skills.categories.databases.title}</h3>
                        <div className="flex flex-wrap gap-2 w-full relative z-10">
                            {data.skills.categories.databases.tags.map((tag) => (
                                <span key={tag} className={pillBadgeClass}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </SpotlightCard>
                </motion.div>

                {/* Cloud (Cols 3-5) */}
                <motion.div variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } } }} className="lg:col-span-3 h-full">
                    <SpotlightCard className={commonCardStyles}>
                        <h3 className="font-display text-[17px] font-semibold tracking-[-0.02em] text-text-primary mb-5 relative z-10">{data.skills.categories.cloud.title}</h3>
                        <div className="flex flex-wrap gap-2 w-full relative z-10">
                            {data.skills.categories.cloud.tags.map((tag) => (
                                <span key={tag} className={pillBadgeClass}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </SpotlightCard>
                </motion.div>

                {/* ROW 4 - Marquee (Full width) */}
                <motion.div
                    variants={{
                        initial: { opacity: 0, y: 20 },
                        animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                    }}
                    className="col-span-1 md:col-span-2 lg:col-span-5 h-[56px]"
                >
                    <SpotlightCard className={`h-full w-full overflow-hidden relative flex items-center rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-primary focus-visible:outline-offset-4 focus-visible:rounded ${glassCardClasses}`}>
                        {/* Left and Right Fade Masks */}
                        <div className="absolute top-0 left-0 w-8 md:w-16 h-full bg-gradient-to-r from-bg-base to-transparent z-10 pointer-events-none"></div>
                        <div className="absolute top-0 right-0 w-8 md:w-16 h-full bg-gradient-to-l from-bg-base to-transparent z-10 pointer-events-none"></div>

                        <div className="flex whitespace-nowrap overflow-hidden py-4 w-full relative z-0" aria-hidden="true" style={{ width: '200%' }}>
                            <div className="flex items-center justify-around w-1/2 min-w-max px-4 animate-[marquee_30s_linear_infinite]">
                                {data.skills.marquee.map((tag, i) => (
                                    <span key={i} className="font-display tracking-[0.05em] text-[14px] font-medium text-white/50 mx-6">{tag}</span>
                                ))}
                            </div>
                            <div className="flex items-center justify-around w-1/2 min-w-max px-4 animate-[marquee_30s_linear_infinite]">
                                {data.skills.marquee.map((tag, i) => (
                                    <span key={`dup-${i}`} className="font-display tracking-[0.05em] text-[14px] font-medium text-white/50 mx-6">{tag}</span>
                                ))}
                            </div>
                        </div>

                        <style dangerouslySetInnerHTML={{
                            __html: `
                  @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-100%); } }
               `}} />
                    </SpotlightCard>
                </motion.div>

            </motion.div>
        </section>
    );
}
