"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { registerGSAP } from "@/lib/utils";
import data from "@/data/portfolio.json";

export default function About() {
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        registerGSAP();
        const { gsap } = require("gsap");
        const { ScrollTrigger } = require("gsap/ScrollTrigger");

        const ctx = gsap.context(() => {
            gsap.from(".about-right", {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 75%",
                    once: true
                },
                opacity: 0,
                x: 30,
                duration: 0.8,
                ease: "power3.out"
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <section id="about" ref={containerRef} className="py-[120px] px-6 max-w-[1200px] mx-auto overflow-hidden">
            <div className="flex flex-col md:flex-row gap-16 lg:gap-24 items-start">
                {/* Left Column (60%) */}
                <div className="w-full md:w-[60%] flex flex-col">
                    <div className="font-mono text-[11px] text-text-tertiary mb-8">{data.about.sectionNumber}</div>

                    <h2 className="text-[32px] md:text-[40px] font-display font-bold leading-tight mb-8 text-text-primary">
                        {data.about.title}
                    </h2>

                    <div className="flex flex-col gap-6 text-text-secondary leading-relaxed font-body text-[16px]">
                        {data.about.paragraphs.map((para, i) => (
                            <p key={i}>{para}</p>
                        ))}
                    </div>

                    <div className="flex flex-col gap-3 mt-10">
                        {data.about.highlights.map((item) => (
                            <div key={item} className="flex items-center group font-display text-[14px] text-text-secondary hover:text-text-primary transition-colors cursor-default w-fit">
                                <span className="mr-2 opacity-50 transition-transform group-hover:translate-x-1">→</span>
                                {item}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column (40%) */}
                <div className="about-right w-full md:w-[40%] flex justify-center md:justify-end">

                    {/* Terminal Stat Card */}
                    <div className="w-full max-w-[380px] bg-bg-elevated border border-border-subtle rounded-[14px] overflow-hidden">
                        <div className="px-4 py-3 bg-[#0d1219] border-b border-border-subtle font-mono text-[12px] text-text-tertiary flex items-center">
                            ~/stats <span className="ml-[1px] w-[6px] h-[14px] bg-text-tertiary animate-pulse inline-block" />
                        </div>
                        <div className="p-6 font-mono text-[13px] text-text-secondary leading-[2]">
                            {data.about.terminalStats.map((stat, i) => (
                                <div key={i}>
                                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.1, delay: 0.1 * (i + 1) }}>
                                        <span className="text-text-primary">$</span> {stat.command.replace("$ ", "")}<br />
                                        <span className="text-accent-primary">{stat.result}</span>
                                    </motion.div>
                                    {i < data.about.terminalStats.length - 1 && <br />}
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
