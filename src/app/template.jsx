'use client';
import { useRef } from 'react';

import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

// show a white-fade transtion on navigation.
export default function Template({ children }) {
  const overlay = useRef(null);

  useGSAP(() => {
    gsap.to(overlay.current, {
      opacity: 0,
      zIndex: -1,
      delay: 0.2,
      duration: 1,
    });
    ScrollTrigger.refresh();
  });

  return (
    <div className="relative">
      <div ref={overlay} className="fixed top-0 left-0 z-50 min-h-screen min-w-dvw bg-white"></div>
      {children}
    </div>
  );
}
