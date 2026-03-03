import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const scrollAnimation = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    viewport: { once: true, margin: "-80px" }
};

export const blurToFocus = {
    initial: { opacity: 0, filter: "blur(8px)", y: 16 },
    animate: { opacity: 1, filter: "blur(0px)", y: 0 },
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
    viewport: { once: true }
};

export const staggerContainer = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.08
        }
    }
};

// GSAP plugin registration (call this once in SmoothScroll provider)
export function registerGSAP() {
    if (typeof window === "undefined") return;
    const { gsap } = require("gsap");
    const { ScrollTrigger } = require("gsap/ScrollTrigger");
    const { useGSAP } = require("@gsap/react");
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

// Counter animation utility
export function animateCounter(
    element: HTMLElement,
    target: number,
    duration: number = 1200
) {
    const start = performance.now();
    const update = (time: number) => {
        const elapsed = time - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        element.textContent = Math.round(eased * target).toString();
        if (progress < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
}

// Framer Motion variants for specific use cases:
export const slideInLeft = {
    initial: { opacity: 0, x: -32 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
    viewport: { once: true, margin: "-60px" }
};

export const slideInRight = {
    initial: { opacity: 0, x: 32 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
    viewport: { once: true, margin: "-60px" }
};

export const scaleIn = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
    viewport: { once: true }
};
