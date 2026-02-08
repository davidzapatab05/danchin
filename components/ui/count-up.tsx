"use client"

import { useEffect, useState, useRef } from "react"
import { useInView } from "@/hooks/use-in-view"

interface CountUpProps {
    end: number
    duration?: number
    prefix?: string
    suffix?: string
    className?: string
}

export function CountUp({ end, duration = 2000, prefix = "", suffix = "", className = "" }: CountUpProps) {
    const [count, setCount] = useState(0)
    const { ref, isInView } = useInView({ threshold: 0.5, rootMargin: "0px", triggerOnce: false })

    useEffect(() => {
        if (isInView) {
            let startTime: number | null = null
            let animationFrameId: number

            const animate = (timestamp: number) => {
                if (!startTime) startTime = timestamp
                const progress = timestamp - startTime
                const percentage = Math.min(progress / duration, 1)

                // Ease out quart
                const easeOut = 1 - Math.pow(1 - percentage, 4)

                setCount(Math.floor(easeOut * end))

                if (progress < duration) {
                    animationFrameId = requestAnimationFrame(animate)
                } else {
                    setCount(end)
                }
            }

            animationFrameId = requestAnimationFrame(animate)

            return () => {
                cancelAnimationFrame(animationFrameId)
            }
        } else {
            // Reset to 0 when out of view so it can animate again
            setCount(0)
        }
    }, [isInView, end, duration])

    return (
        <span ref={ref} className={className}>
            {prefix}{count}{suffix}
        </span>
    )
}
