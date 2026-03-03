"use client";

import { useEffect, useRef } from "react";
import { registerGSAP } from "@/lib/utils";
import data from "@/data/portfolio.json";

export default function Experience() {
    const containerRef = useRef<HTMLElement>(null);
    const spineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        registerGSAP();
        const { gsap } = require("gsap");
        const { ScrollTrigger } = require("gsap/ScrollTrigger");

        const ctx = gsap.context(() => {
            gsap.fromTo(spineRef.current,
                { scaleY: 0 },
                {
                    scaleY: 1,
                    ease: "none",
                    transformOrigin: "top center",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 60%",
                        end: "bottom 80%",
                        scrub: 1.2,
                    }
                }
            );

            gsap.utils.toArray('.exp-card').forEach((card: any, index: number) => {
                gsap.from(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: "top 80%",
                        once: true
                    },
                    x: -32,
                    opacity: 0,
                    duration: 0.8,
                    delay: index * 0.15,
                    ease: "power3.out"
                });
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="experience" ref={containerRef} className="py-[120px] px-6 max-w-[900px] mx-auto overflow-x-hidden">
            <div className="font-mono text-[11px] text-text-tertiary mb-12">{data.experience.sectionNumber}</div>

            <div className="flex">
                <div className="w-[24px] relative flex-shrink-0 flex justify-center mt-2">
                    <div className="absolute top-0 bottom-0 w-[1px] overflow-hidden items-center flex justify-center">
                        <div ref={spineRef} className="w-full h-full bg-border-subtle origin-top" />
                    </div>

                    <div className="absolute top-8 w-[10px] h-[10px] rounded-full bg-accent-primary" />
                    {data.experience.items.length > 1 && (
                        <div className={`absolute w-[10px] h-[10px] rounded-full border border-border-subtle bg-bg-base z-10`} style={{ top: '400px' }} />
                    )}
                    <div className="absolute top-full -translate-y-4 font-mono text-[10px] text-text-tertiary -rotate-90 transform origin-left whitespace-nowrap left-[12px]">Started Here</div>
                </div>

                <div className="flex-1 pl-8 pb-[80px]">
                    {data.experience.items.map((job, index) => (
                        <div key={job.id} className={`exp-card bg-bg-surface border-l-2 border-border-subtle hover:border-accent-primary p-[32px] rounded-r-2xl flex flex-col transition-colors duration-300 max-w-[650px] ${index > 0 ? 'mt-12 md:mt-24' : 'mb-16'}`}>
                            <div className="flex justify-between items-start mb-2 flex-col sm:flex-row gap-2">
                                <h3 className="text-[20px] font-display font-bold text-text-primary">{job.company}</h3>
                                <span className="font-mono text-[12px] text-text-tertiary shrink-0">{job.period}</span>
                            </div>
                            <div className="text-[14px] font-medium text-accent-primary mb-2">{job.role}</div>
                            <div className="font-mono text-[12px] text-text-tertiary pt-[8px] mb-6">{job.tech}</div>

                            <ul className="flex flex-col gap-4">
                                {job.highlights.map((item, i) => (
                                    <li key={i} className="flex gap-3 text-text-secondary text-[15px] leading-[1.6]">
                                        <span className="w-1 h-1 bg-accent-primary shrink-0 mt-[10px]"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
