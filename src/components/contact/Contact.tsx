"use client";

import { motion } from "framer-motion";
import { Copy, Github, Linkedin, Mail, Download } from "lucide-react";
import MagneticButton from "@/components/shared/MagneticButton";
import { slideInLeft, slideInRight } from "@/lib/utils";
import { useState } from "react";

export default function Contact() {
    const [copied, setCopied] = useState(false);

    const copyEmail = (e: React.MouseEvent) => {
        e.preventDefault();
        navigator.clipboard.writeText("siddeshpansare207@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" className="py-24 px-6 md:py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">

                {/* LEFT COLUMN */}
                <motion.div
                    {...slideInLeft}
                    className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left"
                >
                    <div className="font-mono text-[11px] text-text-tertiary tracking-[0.1em] mb-8">
                        06
                    </div>

                    <h2 className="font-display font-bold text-text-primary mb-4" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1.1 }}>
                        Let&apos;s build something.
                    </h2>

                    <p className="text-[20px] text-text-secondary leading-relaxed mb-8 max-w-lg">
                        I&apos;m open to roles, ideas, and interesting technical conversations.
                    </p>

                    <div className="flex items-center gap-3 font-mono text-[13px] text-text-secondary">
                        <div className="relative flex w-1.5 h-1.5 justify-center items-center">
                            <div className="absolute w-full h-full bg-success rounded-full animate-ping opacity-75" style={{ animationDuration: '2s' }}></div>
                            <div className="relative w-1.5 h-1.5 bg-success rounded-full"></div>
                        </div>
                        Open to full-time · Graduating May 2026
                    </div>
                </motion.div>

                {/* RIGHT COLUMN */}
                <motion.div
                    {...slideInRight}
                    className="w-full md:w-1/2 flex justify-center md:justify-end"
                >
                    <div className="w-full max-w-md p-[40px] rounded-[20px] border border-border-subtle"
                        style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(20px)" }}>

                        <div className="flex flex-col gap-6">
                            {/* Rows */}
                            <a href="mailto:siddeshpansare207@gmail.com" onClick={copyEmail} className="group flex items-center gap-4 text-text-secondary hover:text-text-primary transition-colors cursor-pointer relative">
                                <Mail size={16} className="text-text-tertiary" />
                                <span className="font-body text-[16px] relative inline-block">
                                    siddeshpansare207@gmail.com
                                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-text-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                                </span>
                            </a>

                            <a href="https://linkedin.com/in/siddeshpansare93" target="_blank" rel="noreferrer" className="group flex items-center gap-4 text-text-secondary hover:text-text-primary transition-colors relative">
                                <Linkedin size={16} className="text-text-tertiary" />
                                <span className="font-body text-[16px] relative inline-block">
                                    linkedin.com/in/siddeshpansare93
                                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-text-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                                </span>
                            </a>

                            <a href="https://github.com/Siddesh-Pansare93" target="_blank" rel="noreferrer" className="group flex items-center gap-4 text-text-secondary hover:text-text-primary transition-colors relative">
                                <Github size={16} className="text-text-tertiary" />
                                <span className="font-body text-[16px] relative inline-block">
                                    Siddesh-Pansare93
                                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-text-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                                </span>
                            </a>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-[1px] bg-border-subtle my-[24px]"></div>

                        <div className="flex flex-col gap-4">
                            <MagneticButton href="mailto:siddeshpansare207@gmail.com" className="w-full py-4 rounded-xl text-white font-body font-medium flex justify-center border-none" style={{ background: "linear-gradient(135deg, #6E8EFF, #A78BFA)" }}>
                                Send an Email
                            </MagneticButton>

                            <a href="#" className="w-fit mx-auto font-body text-[14px] text-text-secondary hover:text-text-primary underline mt-2 hover:decoration-text-primary transition-colors">
                                Download Resume ↓
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Toast */}
            <div className={`fixed bottom-8 right-8 bg-bg-elevated border border-border-subtle text-text-primary py-3 px-6 rounded-lg shadow-xl font-body text-[14px] transition-all duration-300 transform ${copied ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 pointer-events-none'}`}>
                Copied to clipboard!
            </div>
        </section>
    );
}
