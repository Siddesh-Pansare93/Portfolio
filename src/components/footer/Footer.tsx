import { Github, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-transparent relative overflow-hidden text-text-tertiary">
            {/* Top gradient hairline */}
            <div
                className="absolute top-0 inset-x-0 h-[1px]"
                style={{
                    borderImage: "linear-gradient(to right, transparent, var(--border-subtle), transparent) 1",
                    borderTop: "1px solid"
                }}
            />

            <div className="max-w-7xl mx-auto px-[64px] py-[32px] flex flex-col md:flex-row items-center justify-between gap-6 max-md:px-6">
                {/* Left */}
                <div className="font-mono text-[12px] order-3 md:order-1">
                    Siddesh Pansare · {new Date().getFullYear()}
                </div>

                {/* Center */}
                <div className="flex flex-wrap justify-center items-center gap-[32px] font-body text-[12px] order-1 md:order-2">
                    {["About", "Projects", "Skills", "Contact"].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="hover:text-text-primary transition-colors duration-200"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                {/* Right */}
                <div className="flex items-center gap-4 order-2 md:order-3">
                    <a href="https://github.com/Siddesh-Pansare93" target="_blank" rel="noreferrer" className="hover:text-text-primary transition-colors duration-200" aria-label="GitHub">
                        <Github size={18} />
                    </a>
                    <a href="https://linkedin.com/in/siddeshpansare93" target="_blank" rel="noreferrer" className="hover:text-text-primary transition-colors duration-200" aria-label="LinkedIn">
                        <Linkedin size={18} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
