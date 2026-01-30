import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface ScrollRevealOptions {
    threshold?: number;
    rootMargin?: string;
    triggerOnce?: boolean;
}

/**
 * Premium scroll reveal hook using Intersection Observer
 * Animates elements when they enter the viewport
 * Respects prefers-reduced-motion
 */
export function useScrollReveal<T extends HTMLElement>(
    options: ScrollRevealOptions = {}
) {
    const {
        threshold = 0.1,
        rootMargin = '0px 0px -100px 0px',
        triggerOnce = true,
    } = options;

    const ref = useRef<T>(null);
    const [isVisible, setIsVisible] = useState(false);
    const prefersReducedMotion = useReducedMotion();

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        // If user prefers reduced motion, show immediately
        if (prefersReducedMotion) {
            setIsVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);

                        // If triggerOnce, disconnect after first trigger
                        if (triggerOnce) {
                            observer.disconnect();
                        }
                    } else if (!triggerOnce) {
                        setIsVisible(false);
                    }
                });
            },
            {
                threshold,
                rootMargin,
            }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [threshold, rootMargin, triggerOnce, prefersReducedMotion]);

    return { ref, isVisible };
}
