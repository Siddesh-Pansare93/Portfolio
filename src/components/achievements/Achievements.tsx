"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { animateCounter } from "@/lib/utils";

export default function Achievements() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    const num1Ref = useRef<HTMLDivElement>(null);
    const num2Ref = useRef<HTMLDivElement>(null);
    const num3Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isInView) {
            if (num1Ref.current) animateCounter(num1Ref.current, 2, 1200);
            if (num2Ref.current) animateCounter(num2Ref.current, 5, 1200);
            if (num3Ref.current) setTimeout(() => {
                if (num3Ref.current) num3Ref.current.textContent = "9.0";
            }, 1200); // Decimals require a floating logic or simple immediate assignment, using delayed finish
        }
    }, [isInView]);

    return (
        <section ref={sectionRef} className="py-[80px] bg-bg-surface border-y border-border-subtle">
            <div className="w-full flex flex-col md:flex-row items-center justify-evenly gap-12 md:gap-0 px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-center text-center"
                >
                    <div className="font-display font-extrabold text-[80px] text-gradient leading-none tracking-tighter" ref={num1Ref}>
                        0
                    </div>
                    <div className="font-body text-[14px] text-text-secondary mt-2 uppercase tracking-wide">Hackathon Wins</div>
                </motion.div>

                <div className="hidden md:block w-[1px] h-20 bg-border-subtle"></div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                    className="flex flex-col items-center text-center"
                >
                    <div className="font-display font-extrabold text-[80px] text-gradient leading-none tracking-tighter" ref={num2Ref}>
                        0
                    </div>
                    <div className="font-body text-[14px] text-text-secondary mt-2 uppercase tracking-wide">Finalist Positions</div>
                </motion.div>

                <div className="hidden md:block w-[1px] h-20 bg-border-subtle"></div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    className="flex flex-col items-center text-center"
                >
                    <div className="font-display font-extrabold text-[80px] text-gradient leading-none tracking-tighter" ref={num3Ref}>
                        0.0
                    </div>
                    <div className="font-body text-[14px] text-text-secondary mt-2 uppercase tracking-wide">CGPA</div>
                </motion.div>
            </div>
        </section>
    );
}
