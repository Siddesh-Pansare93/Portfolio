"use client";

import { useEffect, ReactNode } from "react";
import Lenis from "lenis";
import { registerGSAP } from "@/lib/utils";

export default function SmoothScroll({ children }: { children: ReactNode }) {
    useEffect(() => {
        // Check for reduced motion preference
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReducedMotion) return;

        registerGSAP();

        // ScrollTrigger is registered inside utils.ts
        const { gsap } = require("gsap");
        const { ScrollTrigger } = require("gsap/ScrollTrigger");

        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
        });

        lenis.on("scroll", ScrollTrigger.update);

        gsap.ticker.add((time: number) => {
            lenis.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);

        return () => {
            lenis.destroy();
            gsap.ticker.remove((time: number) => lenis.raf(time * 1000));
        };
    }, []);

    return <>{children}</>;
}
