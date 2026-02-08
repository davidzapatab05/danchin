"use client";

import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

interface ScrollAnimationProps {
    children: React.ReactNode;
    className?: string;
    animation?: "fade-in" | "slide-up" | "slide-left" | "slide-right" | "zoom-in";
    duration?: number;
    delay?: number;
    triggerOnce?: boolean;
}

export function ScrollAnimation({
    children,
    className,
    animation = "slide-up",
    duration = 700,
    delay = 0,
    triggerOnce = false,
}: ScrollAnimationProps) {
    const { ref, isInView } = useInView({ threshold: 0, rootMargin: "0px", triggerOnce });

    const getAnimationClass = () => {
        switch (animation) {
            case "fade-in": return "animate-in fade-in";
            case "slide-left": return "animate-in slide-in-from-right fade-in";
            case "slide-right": return "animate-in slide-in-from-left fade-in";
            case "zoom-in": return "animate-in zoom-in fade-in";
            case "slide-up":
            default: return "animate-in slide-in-from-bottom-10 fade-in";
        }
    };

    return (
        <div
            ref={ref}
            className={cn(
                "opacity-0 transition-opacity duration-700 ease-out fill-mode-forwards block w-full",
                isInView && "opacity-100",
                isInView && getAnimationClass(),
                className
            )}
            style={{
                animationDuration: `${duration}ms`,
                animationDelay: `${delay}ms`,
                animationFillMode: 'both'
            }}
        >
            {children}
        </div>
    );
}
