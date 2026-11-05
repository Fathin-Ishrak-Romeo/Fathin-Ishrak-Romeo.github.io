import { useEffect, useRef } from 'react';

interface StickySidebarOptions {
  topOffset?: number; // Distance from viewport top when stuck to top (default 80px)
  bottomOffset?: number; // Distance from viewport bottom when stuck to bottom (default 24px)
}

/**
 * useStickySidebar
 * Handles two-way sticky scrolling:
 * - When scrolling DOWN: sidebar scrolls down naturally until its bottom reaches the bottom
 *   of the viewport, and then stops/locks there.
 * - When scrolling UP: sidebar scrolls up naturally until its top reaches the top
 *   of the viewport (below navbar), and stops/locks there until the page reaches the top.
 */
export function useStickySidebar(options: StickySidebarOptions = {}) {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const topOffset = options.topOffset ?? 84;
  const bottomOffset = options.bottomOffset ?? 24;

  useEffect(() => {
    const sidebar = sidebarRef.current;
    if (!sidebar) return;

    let lastScrollY = window.scrollY;
    let currentStickyTop = topOffset;
    let rafId: number | null = null;

    const updateStickyPosition = () => {
      // Only apply two-way sticky on large screens (desktop >= 1024px)
      if (window.innerWidth < 1024) {
        sidebar.style.position = '';
        sidebar.style.top = '';
        return;
      }

      const viewportHeight = window.innerHeight;
      const sidebarHeight = sidebar.offsetHeight;
      const scrollY = window.scrollY;
      const delta = scrollY - lastScrollY;

      // If sidebar is shorter than or fits in viewport, just stick at top
      if (sidebarHeight + topOffset + bottomOffset <= viewportHeight) {
        currentStickyTop = topOffset;
      } else {
        const minTop = viewportHeight - bottomOffset - sidebarHeight;
        const maxTop = topOffset;

        if (delta > 0) {
          // Scrolling down: sidebar moves up relative to viewport until bottom hits bottomOffset
          currentStickyTop = Math.max(currentStickyTop - delta, minTop);
        } else if (delta < 0) {
          // Scrolling up: sidebar moves down relative to viewport until top hits topOffset
          currentStickyTop = Math.min(currentStickyTop - delta, maxTop);
        }

        // Clamp to valid range in case of rapid window resize or jump
        currentStickyTop = Math.min(Math.max(currentStickyTop, minTop), maxTop);
      }

      sidebar.style.position = 'sticky';
      sidebar.style.top = `${Math.round(currentStickyTop)}px`;
      lastScrollY = scrollY;
    };

    const handleScroll = () => {
      if (rafId === null) {
        rafId = window.requestAnimationFrame(() => {
          updateStickyPosition();
          rafId = null;
        });
      }
    };

    const handleResize = () => {
      updateStickyPosition();
    };

    // Initial positioning
    updateStickyPosition();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, [topOffset, bottomOffset]);

  return sidebarRef;
}
