"use client";

import { useEffect, useRef } from "react";
import MagneticButton from "@/components/shared/MagneticButton";
import { registerGSAP } from "@/lib/utils";

export default function Hero() {
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        registerGSAP();
        const { gsap } = require("gsap");

        const ctx = gsap.context(() => {
            // Curtain reveal for name
            gsap.from(".reveal-text", {
                yPercent: 110,
                duration: 1.1,
                ease: "power4.out",
                stagger: 0.12,
                delay: 0.2,
            });

            // Micro-label
            gsap.from(".micro-label", {
                opacity: 0,
                y: 10,
                duration: 0.6,
                delay: 0, // 0ms delay after hero (sync with text reveal start)
                ease: "power3.out"
            });

            // Role line
            gsap.from(".role-line", {
                opacity: 0,
                y: 12,
                delay: 1.0,
                duration: 0.6,
                ease: "power3.out"
            });

            // Hairline divider
            gsap.from(".hairline-divider", {
                scaleX: 0,
                transformOrigin: "left center",
                delay: 1.1,
                duration: 0.7,
                ease: "power3.out"
            });

            // Description
            gsap.from(".hero-desc", {
                opacity: 0,
                y: 10,
                delay: 1.2,
                duration: 0.6,
                ease: "power3.out"
            });

            // CTA Row
            gsap.from(".hero-cta", {
                opacity: 0,
                y: 10,
                delay: 1.35,
                stagger: 0.1,
                duration: 0.6,
                ease: "power3.out"
            });

            // Right column
            gsap.from(".hero-right", {
                opacity: 0,
                x: 20,
                delay: 1.4,
                duration: 0.8,
                ease: "power3.out"
            });

            // Stats row
            gsap.from(".hero-stats", {
                opacity: 0,
                y: 5,
                delay: 1.55,
                duration: 0.5,
                ease: "power3.out"
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative flex flex-col justify-end px-6 md:px-[64px] pb-[64px] md:pb-[80px] bg-bg-base overflow-hidden"
            style={{ minHeight: "100svh" }}
        >
            {/* BACKGROUND */}
            <div
                className="absolute inset-0 z-0 bg-noise opacity-[0.03] pointer-events-none"
            />
            <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                    background: "radial-gradient(ellipse 50% 40% at 0% 0%, rgba(110, 142, 255, 0.07), transparent)"
                }}
            />

            <div className="relative z-10 max-w-[1200px] w-full mx-auto flex items-end">
                {/* LEFT COLUMN */}
                <div className="w-full lg:w-[65%] flex flex-col items-start gap-4">

                    <div className="micro-label font-mono text-[11px] text-text-tertiary tracking-[0.1em] flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-success rounded-full flex-shrink-0" />
                        SWE · AVAILABLE MAR 2026
                    </div>

                    <h1 className="flex flex-col font-display font-extrabold text-text-primary tracking-[-0.04em]" style={{ fontSize: "clamp(5rem, 13vw, 11rem)", lineHeight: 0.88 }}>
                        <span className="reveal-container block">
                            <span className="reveal-text">SIDDESH</span>
                        </span>
                        <span className="reveal-container block">
                            <span className="reveal-text">PANSARE</span>
                        </span>
                    </h1>

                    <h2 className="role-line font-display text-[20px] font-normal text-text-secondary mt-2">
                        AI-Native Full-Stack Engineer
                    </h2>

                    <div className="hairline-divider h-[1px] w-full max-w-[480px] bg-border-subtle my-2" />

                    <p className="hero-desc font-body text-[18px] text-text-secondary" style={{ lineHeight: 1.7, maxWidth: "520px" }}>
                        Building production systems at the intersection of real-time infrastructure and autonomous AI agents. Ships to 1000+ daily users. Deploys to production.
                    </p>

                    <div className="flex items-center gap-3 mt-4">
                        <MagneticButton
                            href="#projects"
                            className="hero-cta h-[48px] px-7 rounded-[10px] text-white font-display text-[15px] font-semibold border border-transparent shadow-[0_4px_20px_rgba(110,142,255,0.25)] hover:shadow-[0_8px_32px_rgba(110,142,255,0.4)] transition-shadow duration-300"
                            style={{ background: "linear-gradient(135deg, #6E8EFF, #A78BFA)" }}
                        >
                            View My Work
                        </MagneticButton>

                        <MagneticButton
                            href="https://github.com/Siddesh-Pansare93"
                            target="_blank"
                            className="hero-cta h-[48px] px-7 rounded-[10px] text-text-secondary font-display text-[15px] font-medium border border-border-subtle hover:border-border-hover hover:text-text-primary transition-colors duration-300"
                        >
                            GitHub ↗
                        </MagneticButton>
                    </div>

                    <div className="hero-stats flex items-center gap-4 mt-8 font-mono text-[13px] text-text-tertiary">
                        <div className="flex gap-2 items-baseline">
                            <span className="text-[16px] font-medium text-text-primary">48+</span>
                            <span className="text-[11px] text-text-tertiary uppercase tracking-wider">Repos</span>
                        </div>
                        <span className="opacity-50">·</span>
                        <div className="flex gap-2 items-baseline">
                            <span className="text-[16px] font-medium text-text-primary">1,000+</span>
                            <span className="text-[11px] text-text-tertiary uppercase tracking-wider">Daily Users</span>
                        </div>
                        <span className="opacity-50">·</span>
                        <div className="flex gap-2 items-baseline">
                            <span className="text-[16px] font-medium text-text-primary">9.0</span>
                            <span className="text-[11px] text-text-tertiary uppercase tracking-wider">CGPA</span>
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN */}
                <div className="hero-right hidden lg:block w-[35%] ml-auto max-w-[380px]">
                    <div className="w-[380px] bg-bg-elevated border border-border-subtle rounded-[14px] overflow-hidden shadow-2xl">
                        {/* Header */}
                        <div className="px-4 py-3 bg-[#0d1219] border-b border-border-subtle flex items-center gap-4">
                            <div className="flex gap-1.5 flex-shrink-0">
                                <div className="w-3 h-3 rounded-full bg-[#FF5F57]"></div>
                                <div className="w-3 h-3 rounded-full bg-[#FEBC2E]"></div>
                                <div className="w-3 h-3 rounded-full bg-[#28C840]"></div>
                            </div>
                            <div className="font-mono text-[12px] text-text-tertiary mx-auto mr-auto pl-4">peer-connect.ts</div>
                        </div>

                        {/* Body */}
                        <div className="p-5 font-mono text-[12px] leading-[1.8] whitespace-pre-wrap flex flex-col">
                            <div className="text-text-tertiary">// WebRTC signaling -1000+ concurrent peers</div>
                            <div className="h-[21px]"></div>
                            <div>
                                <span className="text-[#A78BFA]">const </span>
                                <span className="text-[#6E8EFF]">socket</span>
                                <span className="text-text-primary"> = io(process.env.</span>
                                <span className="text-[#FBBF24]">SERVER_URL</span>
                                <span className="text-text-primary">)</span>
                            </div>
                            <div>
                                <span className="text-[#A78BFA]">const </span>
                                <span className="text-[#6E8EFF]">peer</span>
                                <span className="text-text-primary"> = </span>
                                <span className="text-[#A78BFA]">new </span>
                                <span className="text-[#6E8EFF]">RTCPeerConnection</span>
                                <span className="text-text-primary">(</span>
                                <span className="text-[#FBBF24]">config</span>
                                <span className="text-text-primary">)</span>
                            </div>
                            <div className="h-[21px]"></div>
                            <div className="text-text-tertiary">// Match users anonymously</div>
                            <div>
                                <span className="text-text-primary">socket.</span>
                                <span className="text-[#6E8EFF]">on</span>
                                <span className="text-text-primary">(</span>
                                <span className="text-[#34D399]">&apos;match&apos;</span>
                                <span className="text-text-primary">, </span>
                                <span className="text-[#A78BFA]">async </span>
                                <span className="text-text-primary">({'{'} </span>
                                <span className="text-[#FBBF24]">peerId</span>
                                <span className="text-text-primary"> {'}'}) =&gt; {'{'}</span>
                            </div>
                            <div className="pl-4">
                                <span className="text-[#A78BFA]">const </span>
                                <span className="text-[#6E8EFF]">offer</span>
                                <span className="text-text-primary"> = </span>
                                <span className="text-[#A78BFA]">await </span>
                                <span className="text-text-primary">peer.</span>
                                <span className="text-[#6E8EFF]">createOffer</span>
                                <span className="text-text-primary">()</span>
                            </div>
                            <div className="pl-4">
                                <span className="text-[#A78BFA]">await </span>
                                <span className="text-text-primary">peer.</span>
                                <span className="text-[#6E8EFF]">setLocalDescription</span>
                                <span className="text-text-primary">(offer)</span>
                            </div>
                            <div className="pl-4">
                                <span className="text-text-primary">socket.</span>
                                <span className="text-[#6E8EFF]">emit</span>
                                <span className="text-text-primary">(</span>
                                <span className="text-[#34D399]">&apos;offer&apos;</span>
                                <span className="text-text-primary">, {'{'} to: peerId, offer {'}'})</span>
                            </div>
                            <div>
                                <span className="text-text-primary">{'}'})</span>
                                <span className="inline-block w-[1px] h-[1em] bg-[#6E8EFF] ml-1 align-middle animate-[pulse_1.2s_infinite]"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-[32px] left-1/2 -translate-x-1/2 flex flex-col items-center z-10 opacity-60">
                <div className="w-[1px] h-[32px] bg-border-subtle overflow-hidden relative">
                    <div className="absolute top-0 left-0 w-full h-[8px] bg-text-primary animate-[translateY_1.5s_infinite_ease-in-out]"></div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes translateY {
          0% { transform: translateY(-8px); opacity: 0; }
          30% { opacity: 1; }
          100% { transform: translateY(32px); opacity: 0; }
        }
      `}} />
        </section>
    );
}
