"use client";

import { useEffect, useState, useRef } from "react";
import MagneticButton from "@/components/shared/MagneticButton";
import data from "@/data/portfolio.json";
import { gsap } from "gsap";

export default function Nav() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);

    const navLinks = data.nav.links;

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
            setIsScrolled(window.scrollY > 80);

            const sections = navLinks.map(link => link.toLowerCase());
            let current = "";

            for (let i = sections.length - 1; i >= 0; i--) {
                const sectionId = sections[i];
                const section = document.getElementById(sectionId);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        current = sectionId;
                        break;
                    }
                }
            }
            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [navLinks]);

    return (
        <>
            <nav
                ref={navRef}
                className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${isScrolled
                    ? "h-16 bg-[#080B11]/85 backdrop-blur-[20px] saturate-[180%] border-b border-border-subtle"
                    : "h-16 bg-transparent border-b border-transparent"
                    }`}
            >
                <div className="w-full h-full px-6 flex items-center justify-between">

                    {/* LEFT: Logo */}
                    <a href="#" className="font-display font-bold text-[22px] tracking-tight relative group ml-2 z-50 mix-blend-difference">
                        <span className="text-text-primary group-hover:text-accent-primary transition-colors duration-300">{data.nav.logo.highlight}</span>
                        <span className="text-text-secondary group-hover:text-text-primary transition-colors duration-300">{data.nav.logo.rest}</span>
                    </a>

                    {/* CENTER: Desktop Links */}
                    <div className="hidden md:flex items-center gap-8 ml-8">
                        {navLinks.map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className={`nav-link font-body text-[14px] py-1 transition-colors duration-200 ${activeSection === item.toLowerCase() ? 'text-accent-primary' : 'text-text-secondary hover:text-text-primary'}`}
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                    {/* RIGHT: Actions */}
                    <div className="flex items-center gap-4">

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
