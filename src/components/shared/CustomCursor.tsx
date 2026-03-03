"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
    const dotRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Only initialize on non-touch devices
        if (window.matchMedia("(pointer: coarse)").matches) return;

        const dot = dotRef.current;
        const ring = ringRef.current;

        if (!dot || !ring) return;

        const onMouseMove = (e: MouseEvent) => {
            gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 0.08 });
            gsap.to(ring, { x: e.clientX, y: e.clientY, duration: 0.5, ease: "power2.out" });
        };

        const handleMouseEnterInteractive = () => {
            gsap.to(ring, { scale: 2.5, opacity: 0.4, duration: 0.3 });
            gsap.to(dot, { scale: 0, duration: 0.2 });
        };

        const handleMouseLeaveInteractive = () => {
            gsap.to(ring, { scale: 1, opacity: 0.8, duration: 0.3 });
            gsap.to(dot, { scale: 1, duration: 0.2 });
        };

        const handleMouseEnterText = () => {
            gsap.to(ring, { scaleX: 2, scaleY: 0.3, duration: 0.2 });
        };

        const handleMouseLeaveText = () => {
            gsap.to(ring, { scaleX: 1, scaleY: 1, duration: 0.2 });
        };

        window.addEventListener("mousemove", onMouseMove);

        // Initial query binding (runs once)
        const interactiveElements = document.querySelectorAll('a, button, [data-cursor="pointer"]');
        interactiveElements.forEach((el) => {
            el.addEventListener("mouseenter", handleMouseEnterInteractive);
            el.addEventListener("mouseleave", handleMouseLeaveInteractive);
        });

        const textElements = document.querySelectorAll('p, h1, h2, h3, [data-cursor="text"]');
        textElements.forEach((el) => {
            el.addEventListener("mouseenter", handleMouseEnterText);
            el.addEventListener("mouseleave", handleMouseLeaveText);
        });

        // We can use MutationObserver to watch DOM changes for dynamically entered elements later if scaled

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            interactiveElements.forEach((el) => {
                el.removeEventListener("mouseenter", handleMouseEnterInteractive);
                el.removeEventListener("mouseleave", handleMouseLeaveInteractive);
            });
            textElements.forEach((el) => {
                el.removeEventListener("mouseenter", handleMouseEnterText);
                el.removeEventListener("mouseleave", handleMouseLeaveText);
            });
        };
    }, []);

    return (
        <>
            <div
                ref={dotRef}
                className="fixed top-0 left-0 w-2 h-2 bg-accent-primary rounded-full pointer-events-none z-[9999] mix-blend-exclusion hidden md:block"
                style={{ transform: "translate(-50%, -50%)" }}
            />
            <div
                ref={ringRef}
                className="fixed top-0 left-0 w-8 h-8 rounded-full border border-text-tertiary bg-transparent pointer-events-none z-[9998] opacity-80 hidden md:block"
                style={{ transform: "translate(-50%, -50%)" }}
            />
        </>
    );
}
