"use client";

import { motion } from "framer-motion";
import { staggerContainer, scaleIn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/data";

export default function Projects() {
    const projects = PORTFOLIO_DATA.projects;
    const featured = projects[0];
    const defi = projects[1];
    const skill = projects[2];
    const smart = projects[3];
    const kisaan = projects[4];

    return (
        <section id="projects" className="py-[120px] px-6 max-w-[1200px] mx-auto overflow-hidden">
            <div className="font-mono text-[11px] text-text-tertiary mb-8">03</div>

            {/* FEATURED PROJECT */}
            <motion.div
                variants={scaleIn}
                initial="initial"
                whileInView="animate"
                viewport={scaleIn.viewport}
                className="group relative w-full min-h-[480px] bg-bg-surface border border-border-subtle hover:border-border-hover hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all duration-[800ms] rounded-[20px] overflow-hidden flex flex-col md:flex-row mb-12"
            >
                {/* Left Panel */}
                <div className="w-full md:w-[55%] p-10 md:p-[56px] flex flex-col justify-between shrink-0 z-10 bg-bg-surface relative">
                    <div>
                        <div className="font-mono text-[11px] text-text-tertiary tracking-[0.08em] mb-6 inline-block uppercase">
                            PRODUCTION · 1,000+ DAU
                        </div>
                        <h3 className="font-display text-[32px] md:text-[36px] font-bold text-text-primary leading-[1.1] mb-6">
                            {featured.title}
                        </h3>
                        <p className="font-body text-[16px] text-text-secondary leading-relaxed mb-8 max-w-[500px]">
                            {featured.description}
                        </p>
                    </div>

                    <div>
                        <div className="font-mono text-[12px] text-text-tertiary pt-[24px] border-t border-border-subtle uppercase">
                            {featured.tech}
                        </div>
                        <div className="flex items-center gap-2 mt-8 font-body text-[14px]">
                            <a href={featured.link} target="_blank" rel="noreferrer" className="text-text-primary underline decoration-accent-primary hover:text-accent-primary transition-colors hover:decoration-solid">View Project →</a>
                            <span className="text-text-tertiary">/</span>
                            <a href={featured.github} target="_blank" rel="noreferrer" className="text-text-primary underline decoration-border-subtle hover:text-text-secondary transition-colors hover:decoration-solid">GitHub →</a>
                        </div>
                    </div>
                </div>

                {/* Right Panel Visual */}
                <div className="w-full md:w-[45%] bg-[#0A0E17] relative overflow-hidden hidden md:flex items-center justify-center shrink-0">

                    {/* SVG Network Graph */}
                    <svg className="w-full h-full absolute inset-0 transform scale-100 group-hover:scale-[1.04] transition-transform duration-800 ease-[cubic-bezier(0.25,1,0.5,1)]" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" style={{ animation: "drift 6s infinite ease-in-out" }}>
                        <defs>
                            <style dangerouslySetInnerHTML={{
                                __html: `
                    @keyframes drift { 0% { transform: translateY(0); } 50% { transform: translateY(-8px); } 100% { transform: translateY(0); } }
                    @keyframes peerPulse { 0% { opacity: 0.4; } 50% { opacity: 1; } 100% { opacity: 0.4; } }
                 `}} />
                        </defs>
                        <g stroke="var(--border-subtle)" strokeWidth="0.5">
                            <line x1="30" y1="40" x2="50" y2="50" />
                            <line x1="50" y1="50" x2="70" y2="30" />
                            <line x1="50" y1="50" x2="60" y2="70" />
                            <line x1="30" y1="40" x2="20" y2="60" />
                            <line x1="50" y1="50" x2="80" y2="60" />
                        </g>
                        <g fill="#FFF">
                            <circle cx="30" cy="40" r="1.5" />
                            <circle cx="50" cy="50" r="1.5" style={{ animation: "peerPulse 2s infinite" }} />
                            <circle cx="70" cy="30" r="1.5" />
                            <circle cx="60" cy="70" r="1.5" style={{ animation: "peerPulse 2.5s infinite 0.5s" }} />
                            <circle cx="20" cy="60" r="1.5" />
                            <circle cx="80" cy="60" r="1.5" />
                        </g>
                        <text x="32" y="38" fill="var(--text-tertiary)" fontFamily="var(--font-mono)" fontSize="3">YOU</text>
                        <text x="72" y="28" fill="var(--text-tertiary)" fontFamily="var(--font-mono)" fontSize="3">PEER</text>
                    </svg>

                    {/* Counter Terminal */}
                    <div className="absolute bottom-6 right-8 font-mono text-[10px] text-success">
                        <span className="opacity-75">&gt; peers connected: </span><span className="font-bold">1,247</span>
                    </div>
                </div>
            </motion.div>

            {/* BENTO GRID */}
            <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >

                {/* Row 1: DeFi Agents Full Width */}
                <motion.div
                    variants={{
                        initial: { opacity: 0, y: 24 },
                        animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                    }}
                    className="col-span-1 md:col-span-2 relative group min-h-[200px] flex flex-col md:flex-row rounded-[16px] overflow-hidden"
                    style={{
                        backgroundClip: 'padding-box',
                        border: '1px solid transparent',
                        background: 'linear-gradient(var(--bg-elevated), var(--bg-elevated)) padding-box, linear-gradient(135deg, rgba(255,255,255,0.1), rgba(0,0,0,0)) border-box'
                    }}
                >
                    <div className="w-full md:w-[60%] p-[32px] flex flex-col justify-center relative z-10 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-y-1">
                        <div className="font-mono text-[10px] text-text-tertiary uppercase mb-4 tracking-wider">{defi.badge}</div>
                        <h3 className="font-display font-semibold text-[22px] text-text-primary mb-3 leading-tight flex items-center">
                            <span className="mr-2 hidden sm:inline-block">⚡</span> {defi.title.replace(' ⚡', '')}
                        </h3>
                        <p className="font-body text-[15px] text-text-secondary leading-relaxed mb-4">{defi.description}</p>
                        <div className="font-mono text-[11px] text-text-tertiary uppercase mt-auto flex items-center justify-between">
                            <span>{defi.tech.split(' / ').join(' · ')}</span>
                            <a href={defi.github} target="_blank" rel="noreferrer" className="shrink-0 p-2 hover:bg-bg-surface rounded-md transition-colors text-text-secondary hover:text-text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-primary focus-visible:outline-offset-4 focus-visible:rounded"><ArrowUpRight size={16} /></a>
                        </div>
                    </div>

                    <div className="w-full md:w-[40%] bg-[#0f141d] relative overflow-hidden flex items-center justify-center p-8 shrink-0">
                        {/* SVG Visualization */}
                        <svg viewBox="0 0 200 100" className="w-full h-full opacity-60">
                            <g stroke="var(--text-tertiary)" strokeWidth="1" fill="none">
                                <rect x="20" y="40" width="30" height="20" rx="4" />
                                <line x1="50" y1="50" x2="80" y2="50" strokeDasharray="2,2" />
                                <polygon points="80,50 76,47 76,53" fill="var(--text-tertiary)" />

                                <rect x="85" y="40" width="30" height="20" rx="4" />
                                <line x1="115" y1="50" x2="145" y2="50" strokeDasharray="2,2" />
                                <polygon points="145,50 141,47 141,53" fill="var(--text-tertiary)" />

                                <rect x="150" y="40" width="30" height="20" rx="4" />
                            </g>
                            <g fill="var(--text-tertiary)" fontFamily="var(--font-mono)" fontSize="5" textAnchor="middle">
                                <text x="35" y="52">Analyzer</text>
                                <text x="100" y="52">Decision</text>
                                <text x="165" y="52">Executor</text>
                            </g>
                        </svg>
                    </div>
                </motion.div>

                {/* Row 2: Two Standard Cards */}
                <motion.div
                    variants={{
                        initial: { opacity: 0, y: 24 },
                        animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                    }}
                    className="group bg-bg-elevated border border-border-subtle rounded-[16px] p-[32px] flex flex-col transition-all duration-[280ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1 hover:border-border-hover relative"
                >
                    <div className="font-mono text-[10px] text-text-tertiary uppercase tracking-wider mb-4">{skill.badge}</div>
                    <h3 className="font-display font-semibold text-[20px] text-text-primary mb-3 leading-tight">{skill.title}</h3>
                    <p className="font-body text-[14px] text-text-secondary leading-relaxed mb-6">{skill.description}</p>
                    <div className="mt-auto font-mono text-[11px] text-text-tertiary uppercase">
                        {skill.tech.split(' / ').join(' · ')}
                    </div>
                    <a href={skill.github} target="_blank" rel="noreferrer" className="absolute top-6 right-6 p-2 shrink-0 text-text-tertiary hover:text-text-primary transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-primary focus-visible:outline-offset-4 focus-visible:rounded">
                        <ArrowUpRight size={16} />
                        <span className="sr-only">View on Github</span>
                    </a>
                </motion.div>

                <motion.div
                    variants={{
                        initial: { opacity: 0, y: 24 },
                        animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                    }}
                    className="group bg-bg-elevated border border-border-subtle rounded-[16px] p-[32px] flex flex-col transition-all duration-[280ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1 hover:border-border-hover relative"
                >
                    <div className="font-mono text-[10px] text-text-tertiary uppercase tracking-wider mb-4">{smart.badge}</div>
                    <h3 className="font-display font-semibold text-[20px] text-text-primary mb-3 leading-tight">{smart.title}</h3>
                    <p className="font-body text-[14px] text-text-secondary leading-relaxed mb-6">{smart.description}</p>
                    <div className="mt-auto font-mono text-[11px] text-text-tertiary uppercase">
                        {smart.tech.split(' / ').join(' · ')}
                    </div>
                    <a href={smart.github} target="_blank" rel="noreferrer" className="absolute top-6 right-6 p-2 shrink-0 text-text-tertiary hover:text-text-primary transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-primary focus-visible:outline-offset-4 focus-visible:rounded">
                        <ArrowUpRight size={16} />
                        <span className="sr-only">View on Github</span>
                    </a>
                </motion.div>

                {/* Row 3: ML Pipeline Full width shorter */}
                <motion.div
                    variants={{
                        initial: { opacity: 0, y: 24 },
                        animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                    }}
                    className="col-span-1 md:col-span-2 group bg-bg-elevated border border-border-subtle rounded-[16px] overflow-hidden flex flex-col md:flex-row transition-all duration-[280ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1 hover:border-border-hover"
                >
                    <div className="w-full md:w-1/2 p-[32px] flex flex-col relative">
                        <div className="font-mono text-[10px] text-text-tertiary uppercase tracking-wider mb-4">{kisaan.badge}</div>
                        <h3 className="font-display font-semibold text-[20px] text-text-primary mb-3 leading-tight">{kisaan.title}</h3>
                        <p className="font-body text-[14px] text-text-secondary leading-relaxed mb-6">{kisaan.description}</p>
                        <div className="mt-auto font-mono text-[11px] text-text-tertiary uppercase">
                            {kisaan.tech.split(' / ').join(' · ')}
                        </div>
                        <a href={kisaan.github} target="_blank" rel="noreferrer" className="absolute top-6 right-6 p-2 shrink-0 text-text-tertiary hover:text-text-primary transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-primary focus-visible:outline-offset-4 focus-visible:rounded">
                            <ArrowUpRight size={16} />
                            <span className="sr-only">View on Github</span>
                        </a>
                    </div>
                    <div className="w-full md:w-1/2 p-6 flex flex-col items-center justify-center bg-[#0d1219]">
                        {/* ML Diagram CSS layout */}
                        <div className="flex items-center justify-center w-full max-w-[400px] h-full gap-2 font-mono text-[9px] sm:text-[10px] text-text-tertiary uppercase tracking-wider overflow-x-auto">
                            <div className="px-3 py-2 border border-border-subtle rounded-md bg-bg-surface shrink-0">Raw Data</div>
                            <div className="shrink-0 text-text-secondary">→</div>
                            <div className="px-3 py-2 border border-border-subtle rounded-md bg-bg-surface shrink-0">Python Pipeline</div>
                            <div className="shrink-0 text-text-secondary">→</div>
                            <div className="px-3 py-2 border border-border-subtle rounded-md bg-bg-surface shrink-0 text-accent-primary border-accent-primary/20 bg-accent-primary/5">Prediction</div>
                            <div className="shrink-0 text-text-secondary">→</div>
                            <div className="px-3 py-2 border border-border-subtle rounded-md bg-bg-surface shrink-0">API</div>
                        </div>
                    </div>
                </motion.div>

            </motion.div>

            <div className="w-full flex justify-center mt-16 pb-[32px]">
                <a href="https://github.com/Siddesh-Pansare93" target="_blank" rel="noreferrer" className="font-body text-[14px] text-text-tertiary hover:text-text-primary underline decoration-text-tertiary hover:decoration-accent-primary transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-primary focus-visible:outline-offset-4 focus-visible:rounded">
                    View all 48 repositories on GitHub →
                </a>
            </div>
        </section>
    );
}
