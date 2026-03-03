"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import MagneticButton from "@/components/shared/MagneticButton";

export default function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        // ENTRANCE ANIMATION on load:
        if (navRef.current) {
            gsap.from(navRef.current, {
                y: -20,
                opacity: 0,
                duration: 0.6,
                ease: "power3.out",
                delay: 1.6
            });
        }

        const handleScroll = () => {
            setScrolled(window.scrollY > 80);

            // Intercept scroll spy could go here (adding active classes)
            // A simple implementation checking sections:
            const sections = ["about", "experience", "projects", "skills", "contact"];
            let current = "";

            sections.forEach((id) => {
                const section = document.getElementById(id);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    // if the top of the section is near the top of the viewport
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        current = id;
                    }
                }
            });

            // Update nav links to show active state
            document.querySelectorAll('.nav-link').forEach((link) => {
                const span = link.querySelector('span');
                if (link.getAttribute('href') === `#${current}`) {
                    span?.classList.add('text-accent-primary');
                    span?.classList.remove('text-text-secondary');
                } else {
                    span?.classList.add('text-text-secondary');
                    span?.classList.remove('text-accent-primary');
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav
                ref={navRef}
                className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled
                        ? "h-16 bg-[#080B11]/85 backdrop-blur-[20px] saturate-[180%] border-b border-border-subtle"
                        : "h-16 bg-transparent border-b border-transparent"
                    }`}
            >
                <div className="w-full h-full px-6 flex items-center justify-between">

                    {/* LEFT: Logo */}
                    <a href="#" className="font-display font-bold text-[18px] tracking-tight flex items-center">
                        <span className="text-accent-primary">S</span>
                        <span className="text-text-primary">P</span>
                    </a>

                    {/* CENTER: Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {["About", "Experience", "Projects", "Skills", "Contact"].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="nav-link font-body text-[14px] py-1 transition-colors duration-200 group"
                            >
                                <span className="text-text-secondary group-hover:text-text-primary transition-colors duration-200">
                                    {item}
                                </span>
                            </a>
                        ))}
                    </div>

                    {/* RIGHT: Actions */}
                    <div className="flex items-center gap-4">

                        {/* Theme Toggle placeholder */}
                        <button className="hidden md:flex items-center justify-center w-8 h-8 rounded-full hover:bg-bg-elevated transition-colors">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-text-secondary hover:text-text-primary transition-colors">
                                <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 2V4M12 20V22M4 12H2M22 12H20M5.636 5.636L7.05 7.05M16.95 16.95L18.364 18.364M18.364 5.636L16.95 7.05M7.05 16.95L5.636 18.364" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                        {/* Let's Talk Magnetic Button */}
                        <div className="hidden md:block">
                            <MagneticButton
                                href="#contact"
                                className="h-[32px] px-4 font-body text-[14px] bg-transparent border border-border-subtle rounded-lg text-text-primary hover:bg-bg-elevated hover:border-border-hover transition-colors"
                            >
                                Let&apos;s Talk
                            </MagneticButton>
                        </div>

                        {/* Mobile Menu Hamburger */}
                        <button
                            className="flex md:hidden flex-col gap-[5px] p-2 relative z-[60]"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <span className={`block w-5 h-[1.5px] bg-text-primary transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
                            <span className={`block w-5 h-[1.5px] bg-text-primary transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                            <span className={`block w-5 h-[1.5px] bg-text-primary transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-50 bg-bg-base/98 backdrop-blur-[24px] flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
            >
                <div className="flex flex-col items-center gap-8">
                    {["About", "Experience", "Projects", "Skills", "Contact"].map((item, index) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className="font-display font-medium text-[32px] text-text-primary"
                            style={{
                                transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                                opacity: mobileMenuOpen ? 1 : 0,
                                transition: `all 0.4s ease-out ${0.1 + index * 0.05}s`
                            }}
                        >
                            {item}
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
}
