"use client";

import { motion } from "framer-motion";
import { blurToFocus } from "@/lib/utils";

export default function Philosophy() {
    const principles = [
        {
            id: "01",
            title: "Systems Over Symptoms",
            text: "Quick fixes create technical debt. I focus on building resilient pipelines and architectures that prevent problems rather than treating them after they appear."
        },
        {
            id: "02",
            title: "Latency is the Enemy",
            text: "Whether it's WebRTC peer connections or AI agent thought loops, sub-100ms response times aren't a luxury—they are the baseline for immersive experiences."
        },
        {
            id: "03",
            title: "Autonomous by Default",
            text: "Using tools like LangChain and MCP isn't about slapping an LLM wrapper on an API. It's about orchestration, dynamic context handling, and building tools that reason."
        }
    ];

    return (
        <section className="py-[140px] px-6 bg-bg-surface overflow-hidden">
            <div className="max-w-[1200px] mx-auto flex flex-col items-center relative">

                {/* TOP QUOTE */}
                <motion.div
                    {...blurToFocus}
                    viewport={{ once: true, margin: "-100px" }}
                    className="w-full flex flex-col items-center text-center"
                >
                    <div className="font-mono text-[11px] text-text-tertiary mb-10 w-full text-center">05</div>
                    <h2
                        className="font-display font-bold text-text-primary max-w-[700px] tracking-tight leading-[1.1]"
                        style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
                    >
                        Engineering is the art of making the complex feel inevitable.
                    </h2>
                    <div className="w-[120px] h-[1px] bg-border-subtle mt-12 mb-20" />
                </motion.div>

                {/* THREE PRINCIPLES */}
                <div className="w-full max-w-[760px] mx-auto flex flex-col">
                    {principles.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, filter: "blur(8px)", y: 16 }}
                            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                            className="w-full flex flex-col pb-12 mb-12 border-b border-border-subtle last:border-0 last:pb-0 last:mb-0"
                        >
                            <div className="font-mono text-[11px] text-text-tertiary mb-4">{item.id}</div>
                            <h3 className="font-display text-[20px] font-semibold text-text-primary mb-3">
                                {item.title}
                            </h3>
                            <p className="font-body text-[16px] text-text-secondary leading-[1.7] max-w-[560px]">
                                {item.text}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
