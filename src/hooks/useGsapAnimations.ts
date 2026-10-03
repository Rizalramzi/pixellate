import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugin safely in browser
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };

interface SectionAnimationOptions {
  threshold?: string; // e.g. "top 85%"
  yOffset?: number;
  duration?: number;
}

/**
 * Hook to animate every section container with a fluid fade-in and slide-up
 * upon entering the viewport via GSAP ScrollTrigger, followed by staggered child elements.
 */
export function useSectionAnimation<T extends HTMLElement = HTMLElement>(
  options: SectionAnimationOptions = {}
) {
  const sectionRef = useRef<T>(null);
  const { threshold = 'top 85%', yOffset = 48, duration = 0.9 } = options;

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      gsap.set(el, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      // 1. Fluid Fade-In and Slide-Up for the entire section container
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: yOffset,
        },
        {
          opacity: 1,
          y: 0,
          duration: duration,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: threshold,
            toggleActions: 'play none none none',
            once: true,
          },
        }
      );

      // 2. Animate section header / badge with slight delay
      const header = el.querySelector('.gsap-header');
      if (header) {
        gsap.fromTo(
          header,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: threshold,
              toggleActions: 'play none none none',
              once: true,
            },
          }
        );
      }

      // 3. Animate staggered children items (cards, grid rows, chips)
      const items = el.querySelectorAll('.gsap-item');
      if (items.length > 0) {
        gsap.fromTo(
          items,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            delay: 0.2,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: threshold,
              toggleActions: 'play none none none',
              once: true,
            },
          }
        );
      }
    }, el);

    return () => ctx.revert();
  }, [threshold, yOffset, duration]);

  return sectionRef;
}

/**
 * Global helper to initialize viewport fade-in and slide-up across all section tags in a container
 */
export function useAllSectionsObserver<T extends HTMLElement = HTMLElement>() {
  const containerRef = useRef<T>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const sections = container.querySelectorAll('section');

      sections.forEach((section, index) => {
        // Skip hero section from the generic batch if it has its own custom entrance & parallax
        if (section.id === 'hero' || index === 0) return;

        gsap.fromTo(
          section,
          {
            opacity: 0,
            y: 45,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
              toggleActions: 'play none none none',
              once: true,
            },
          }
        );
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return containerRef;
}
