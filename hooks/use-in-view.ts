import { useEffect, useState, useRef } from 'react';

interface UseInViewOptions extends IntersectionObserverInit {
    triggerOnce?: boolean;
}

export function useInView({ triggerOnce = false, threshold = 0, root = null, rootMargin = '0px' }: UseInViewOptions = {}) {
    const ref = useRef<HTMLDivElement>(null);
    const [isInView, setIsInView] = useState(false);
    const hasAnimatedRef = useRef(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        // If we only want to trigger once and already have, don't observe
        if (triggerOnce && hasAnimatedRef.current) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsInView(true);
                if (triggerOnce) {
                    hasAnimatedRef.current = true;
                    observer.unobserve(element);
                }
            } else {
                if (!triggerOnce) {
                    setIsInView(false);
                }
            }
        }, { threshold, root, rootMargin });

        observer.observe(element);

        return () => {
            if (element) observer.unobserve(element);
        };
    }, [threshold, root, rootMargin, triggerOnce]);

    return { ref, isInView };
}
