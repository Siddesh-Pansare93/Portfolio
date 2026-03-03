"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
    children: ReactNode;
    className?: string;
    href?: string;
    target?: string;
    onClick?: () => void;
    style?: React.CSSProperties;
}

export default function MagneticButton({ children, className, href, target, onClick, style }: MagneticButtonProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = container.getBoundingClientRect();
            const x = (e.clientX - rect.left - rect.width / 2) * 0.35;
            const y = (e.clientY - rect.top - rect.height / 2) * 0.35;
            gsap.to(container, { x, y, duration: 0.4, ease: "power2.out" });

            if (textRef.current) {
                const textX = (e.clientX - rect.left - rect.width / 2) * 0.15;
                const textY = (e.clientY - rect.top - rect.height / 2) * 0.15;
                gsap.to(textRef.current, { x: textX, y: textY, duration: 0.4, ease: "power2.out" });
            }
        };

        const handleMouseLeave = () => {
            gsap.to(container, { x: 0, y: 0, duration: 0.8, ease: "elastic.out(1, 0.4)" });
            if (textRef.current) {
                gsap.to(textRef.current, { x: 0, y: 0, duration: 0.8, ease: "elastic.out(1, 0.4)" });
            }
        };

        container.addEventListener("mousemove", handleMouseMove);
        container.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            container.removeEventListener("mousemove", handleMouseMove);
            container.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    const Component = href ? "a" : "button";

    return (
        <Component
            href={href}
            target={target}
            onClick={onClick}
            style={style}
            className={cn("inline-flex items-center justify-center relative", className)}
        >
            <div ref={containerRef} className="w-full h-full flex items-center justify-center pointer-events-auto">
                <span ref={textRef} className="inline-block relative z-10 pointer-events-none">
                    {children}
                </span>
            </div>
        </Component>
    );
}
