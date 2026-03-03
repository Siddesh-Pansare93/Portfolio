"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { animateCounter } from "@/lib/utils";
import data from "@/data/portfolio.json";

export default function Achievements() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    const numRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        if (isInView) {
            data.achievements.stats.forEach((stat, idx) => {
                const el = numRefs.current[idx];
                if (!el) return;

                if (stat.value.includes('.')) {
                    setTimeout(() => {
                        el.textContent = stat.value;
                    }, 1200);
                } else {
                    animateCounter(el, parseInt(stat.value, 10), 1200);
                }
            });
        }
    }, [isInView]);

    return (
        <section ref={sectionRef} className="py-[80px] bg-bg-surface border-y border-border-subtle">
            <div className="w-full flex flex-col md:flex-row items-center justify-evenly gap-12 md:gap-0 px-6">
                {data.achievements.stats.map((stat, idx) => (
                    <div key={idx} className="flex flex-col md:flex-row items-center justify-evenly gap-12 md:gap-0 relative">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.8, delay: idx * 0.15, ease: "easeOut" }}
                            className="flex flex-col items-center text-center px-12"
                        >
                            <div
                                className="font-display font-extrabold text-[80px] text-gradient leading-none tracking-tighter"
                                ref={el => { numRefs.current[idx] = el; }}
                            >
                                {stat.value.includes('.') ? '0.0' : '0'}
                            </div>
                            <div className="font-body text-[14px] text-text-secondary mt-2 uppercase tracking-wide">{stat.label}</div>
                        </motion.div>
                        {idx < data.achievements.stats.length - 1 && (
                            <div className="hidden md:block absolute right-0 w-[1px] h-20 bg-border-subtle" style={{ right: '-24px' }}></div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
