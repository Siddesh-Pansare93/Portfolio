"use client";

import { useEffect, useRef } from "react";
import MagneticButton from "@/components/shared/MagneticButton";
import { registerGSAP } from "@/lib/utils";
import data from "@/data/portfolio.json";

export default function Hero() {
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        registerGSAP();
        const { gsap } = require("gsap");

        const ctx = gsap.context(() => {
            gsap.from(".reveal-text", { yPercent: 110, duration: 1.1, ease: "power4.out", stagger: 0.12, delay: 0.2 });
            gsap.from(".micro-label", { opacity: 0, y: 10, duration: 0.6, delay: 0, ease: "power3.out" });
            gsap.from(".role-line", { opacity: 0, y: 12, delay: 1.0, duration: 0.6, ease: "power3.out" });
            gsap.from(".hairline-divider", { scaleX: 0, transformOrigin: "left center", delay: 1.1, duration: 0.7, ease: "power3.out" });
            gsap.from(".hero-desc", { opacity: 0, y: 10, delay: 1.2, duration: 0.6, ease: "power3.out" });
            gsap.from(".hero-cta", { opacity: 0, y: 10, delay: 1.35, stagger: 0.1, duration: 0.6, ease: "power3.out" });
            gsap.from(".hero-right", { opacity: 0, x: 20, delay: 1.4, duration: 0.8, ease: "power3.out" });
            gsap.from(".hero-stats", { opacity: 0, y: 5, delay: 1.55, duration: 0.5, ease: "power3.out" });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative flex flex-col justify-center pt-[70px] px-6 md:px-[64px] pb-[64px] md:pb-[80px] bg-bg-base overflow-hidden" style={{ minHeight: "100svh" }}>
            <div className="absolute inset-0 z-0 bg-noise opacity-[0.03] pointer-events-none" />
            <div className="absolute inset-0 z-0 bg-grid opacity-20 pointer-events-none" />

            <div className="absolute inset-0 z-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 50% 40% at 0% 0%, var(--accent-glow), transparent)" }} />

            <div className="relative z-10 max-w-[1200px] w-full mx-auto flex items-end">
                <div className="w-full lg:w-[65%] flex flex-col items-start gap-4">
                    <div className="micro-label font-mono text-[11px] text-text-tertiary tracking-[0.15em] uppercase flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-success rounded-full flex-shrink-0" />
                        {data.hero.label}
                    </div>

                    <h1 className="flex flex-col font-display font-extrabold text-text-primary tracking-[-0.04em]" style={{ fontSize: "clamp(5rem, 13vw, 11rem)", lineHeight: 0.88 }}>
                        <span className="reveal-container block"><span className="reveal-text bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">{data.hero.firstName}</span></span>
                        <span className="reveal-container block"><span className="reveal-text bg-clip-text text-transparent bg-gradient-to-b from-white/90 to-white/30">{data.hero.lastName}</span></span>
                    </h1>

                    <h2 className="role-line font-display text-[20px] font-normal text-text-secondary mt-2">
                        {data.hero.role}
                    </h2>

                    <div className="hairline-divider h-[1px] w-full max-w-[480px] bg-border-subtle my-2" />
                    <p className="hero-desc font-body text-[18px] text-text-secondary" style={{ lineHeight: 1.7, maxWidth: "520px" }}>
                        {data.hero.description}
                    </p>

                    <div className="flex items-center gap-3 mt-4">
                        <MagneticButton href="#projects" className="hero-cta h-[48px] px-7 rounded-[10px] text-bg-base font-display text-[15px] font-semibold border border-transparent shadow-[0_4px_20px_rgba(255,255,255,0.15)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.25)] transition-shadow duration-300" style={{ background: "var(--accent-gradient)" }}>
                            {data.hero.ctaPrimary}
                        </MagneticButton>
                        <MagneticButton href={data.contact.githubUrl} target="_blank" className="hero-cta h-[48px] px-7 rounded-[10px] text-text-secondary font-display text-[15px] font-medium border border-border-subtle hover:border-border-hover hover:text-text-primary transition-colors duration-300">
                            {data.hero.ctaSecondary}
                        </MagneticButton>
                    </div>

                    <div className="hero-stats flex items-center gap-4 mt-8 font-mono text-[13px] text-text-tertiary">
                        {data.hero.stats.map((stat, idx) => (
                            <div key={idx} className="flex gap-2 items-baseline">
                                <div className="flex gap-2 items-baseline">
                                    <span className="text-[16px] font-medium text-text-primary">{stat.value}</span>
                                    <span className="text-[11px] text-text-tertiary uppercase tracking-wider">{stat.label}</span>
                                </div>
                                {idx < data.hero.stats.length - 1 && <span className="opacity-50 ml-4">·</span>}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="hero-right hidden lg:block w-[35%] ml-auto max-w-[380px] z-10">
                    <div className="w-[380px] bg-[#111111]/40 backdrop-blur-2xl border border-white/10 rounded-[14px] overflow-hidden shadow-2xl">
                        <div className="px-4 py-3 bg-white/5 border-b border-white/5 flex items-center gap-4">
                            <div className="flex gap-1.5 flex-shrink-0">
                                <div className="w-3 h-3 rounded-full bg-ui-close opacity-90 shadow-[0_0_10px_rgba(255,95,87,0.4)]"></div>
                                <div className="w-3 h-3 rounded-full bg-ui-min opacity-90 shadow-[0_0_10px_rgba(254,188,46,0.4)]"></div>
                                <div className="w-3 h-3 rounded-full bg-ui-max opacity-90 shadow-[0_0_10px_rgba(40,200,64,0.4)]"></div>
                            </div>
                            <div className="font-mono text-[12px] text-text-tertiary mx-auto mr-auto pl-4">{data.hero.codeSnippet.filename}</div>
                        </div>

                        <div className="p-5 font-mono text-[12px] leading-[1.8] whitespace-pre-wrap flex flex-col">
                            <div className="text-text-tertiary">{data.hero.codeSnippet.comment1}</div>
                            <div className="h-[21px]"></div>
                            <div>
                                <span className="text-accent-secondary">const </span>
                                <span className="text-accent-primary">socket</span>
                                <span className="text-text-primary"> = io(process.env.</span>
                                <span className="text-warning">SERVER_URL</span>
                                <span className="text-text-primary">)</span>
                            </div>
                            <div>
                                <span className="text-accent-secondary">const </span>
                                <span className="text-accent-primary">peer</span>
                                <span className="text-text-primary"> = </span>
                                <span className="text-accent-secondary">new </span>
                                <span className="text-accent-primary">RTCPeerConnection</span>
                                <span className="text-text-primary">(</span>
                                <span className="text-warning">config</span>
                                <span className="text-text-primary">)</span>
                            </div>
                            <div className="h-[21px]"></div>
                            <div className="text-text-tertiary">{data.hero.codeSnippet.comment2}</div>
                            <div>
                                <span className="text-text-primary">socket.</span>
                                <span className="text-accent-primary">on</span>
                                <span className="text-text-primary">(</span>
                                <span className="text-success">&apos;match&apos;</span>
                                <span className="text-text-primary">, </span>
                                <span className="text-accent-secondary">async </span>
                                <span className="text-text-primary">({'{'} </span>
                                <span className="text-warning">peerId</span>
                                <span className="text-text-primary"> {'}'}) =&gt; {'{'}</span>
                            </div>
                            <div className="pl-4">
                                <span className="text-accent-secondary">const </span>
                                <span className="text-accent-primary">offer</span>
                                <span className="text-text-primary"> = </span>
                                <span className="text-accent-secondary">await </span>
                                <span className="text-text-primary">peer.</span>
                                <span className="text-accent-primary">createOffer</span>
                                <span className="text-text-primary">()</span>
                            </div>
                            <div className="pl-4">
                                <span className="text-accent-secondary">await </span>
                                <span className="text-text-primary">peer.</span>
                                <span className="text-accent-primary">setLocalDescription</span>
                                <span className="text-text-primary">(offer)</span>
                            </div>
                            <div className="pl-4">
                                <span className="text-text-primary">socket.</span>
                                <span className="text-accent-primary">emit</span>
                                <span className="text-text-primary">(</span>
                                <span className="text-success">&apos;offer&apos;</span>
                                <span className="text-text-primary">, {'{'} to: peerId, offer {'}'})</span>
                            </div>
                            <div>
                                <span className="text-text-primary">{'}'})</span>
                                <span className="inline-block w-[1px] h-[1em] bg-accent-primary ml-1 align-middle animate-[pulse_1.2s_infinite]"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-[32px] left-1/2 -translate-x-1/2 flex flex-col items-center z-10 opacity-60">
                <div className="w-[1px] h-[32px] bg-border-subtle overflow-hidden relative">
                    <div className="absolute top-0 left-0 w-full h-[8px] bg-text-primary animate-[translateY_1.5s_infinite_ease-in-out]"></div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `@keyframes translateY { 0% { transform: translateY(-8px); opacity: 0; } 30% { opacity: 1; } 100% { transform: translateY(32px); opacity: 0; } }` }} />
        </section>
    );
}
