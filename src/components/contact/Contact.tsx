"use client";

import { useEffect, useState } from "react";
import MagneticButton from "@/components/shared/MagneticButton";
import data from "@/data/portfolio.json";

export default function Contact() {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(data.contact.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" className="py-[120px] px-6 max-w-[1200px] mx-auto overflow-hidden">
            <div className="font-mono text-[11px] text-text-tertiary mb-12">{data.contact.sectionNumber}</div>

            <div className="flex flex-col md:flex-row gap-16 lg:gap-24 relative">
                <div className="w-full md:w-[50%] flex flex-col justify-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border-subtle bg-bg-surface w-fit mb-8">
                        <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse"></span>
                        <span className="font-mono text-[11px] text-text-secondary">{data.contact.status}</span>
                    </div>

                    <h2 className="text-[40px] md:text-[56px] font-display font-extrabold text-text-primary leading-[1.1] mb-6 tracking-tight">
                        {data.contact.title}
                    </h2>
                    <p className="text-[18px] text-text-secondary font-body leading-relaxed max-w-[420px] mb-12">
                        {data.contact.subtitle}
                    </p>

                    <div className="flex flex-col gap-6 font-mono text-[13px] text-text-secondary">
                        <div className="flex flex-col gap-1">
                            <span className="text-text-tertiary uppercase text-[10px]">Email</span>
                            <a href={`mailto:${data.contact.email}`} className="text-text-primary hover:text-accent-primary transition-colors underline decoration-border-subtle hover:decoration-solid underline-offset-4">{data.contact.email}</a>
                        </div>
                        <div className="flex flex-col gap-1 mt-4">
                            <span className="text-text-tertiary uppercase text-[10px]">Socials</span>
                            <div className="flex gap-4">
                                <a href={data.contact.linkedinUrl} target="_blank" rel="noreferrer" className="text-text-primary underline decoration-border-subtle hover:text-accent-primary transition-colors underline-offset-4 decoration-solid">{data.contact.linkedin}</a>
                                <a href={data.contact.githubUrl} target="_blank" rel="noreferrer" className="text-text-primary underline decoration-border-subtle hover:text-accent-primary transition-colors underline-offset-4 decoration-solid">{data.contact.github}</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-[50%] relative flex justify-center md:justify-end items-center">
                    <div className="w-full max-w-[400px] aspect-square rounded-[24px] overflow-hidden relative group">
                        <div className="absolute inset-0 border border-border-subtle rounded-[24px] pointer-events-none z-20"></div>

                        <div className="absolute inset-0 bg-gradient-to-br from-bg-surface to-bg-base z-0"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] bg-accent-primary rounded-full blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none z-0"></div>

                        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 gap-6">
                            <MagneticButton
                                onClick={handleCopy}
                                className="h-[56px] px-8 rounded-full bg-text-primary text-bg-base font-display text-[15px] font-semibold hover:scale-105 transition-transform duration-300 shadow-[0_4px_20px_rgba(255,255,255,0.1)] active:scale-95"
                            >
                                {copied ? "Address Copied!" : "Copy Email Address"}
                            </MagneticButton>

                            <a href={data.contact.resumeUrl} target="_blank" rel="noreferrer" className="font-mono text-[12px] text-text-tertiary hover:text-text-primary transition-colors underline decoration-border-subtle hover:decoration-solid underline-offset-4 flex gap-2 items-center">
                                {data.contact.resumeText}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
