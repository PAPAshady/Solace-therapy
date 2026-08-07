'use client';
import { usePathname } from 'next/navigation';
import { useRef, useEffect } from 'react';

import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

export default function TransitionOverlay() {
  const pathname = usePathname();
  const overlay = useRef(null);

  useEffect(() => {
    gsap.to('#navTransitionOverlay', {
      opacity: 0,
      zIndex: -1,
      duration: 1,
      ease: 'none',
    });
  }, [pathname]);

  useGSAP(
    () => {
      gsap.to(overlay.current, {
        opacity: 0,
        zIndex: -1,
        delay: 0.2,
        duration: 1,
        ease: 'none',
      });
      ScrollTrigger.refresh();
    },
    { scope: overlay }
  );

  return (
    <div
      ref={overlay}
      id="navTransitionOverlay"
      className="fixed top-0 left-0 z-50 min-h-screen min-w-dvw bg-white"
    ></div>
  );
}
