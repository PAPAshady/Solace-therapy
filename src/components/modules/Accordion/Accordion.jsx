'use client';
import { useState, useRef } from 'react';

import gsap from 'gsap';
import { ChevronDown } from 'lucide-react';
import clsx from 'clsx';

export default function Accordion({ question, answer }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);

  const toggle = () => {
    gsap.to(contentRef.current, {
      height: open ? 0 : 'auto',
      opacity: open ? 0 : 1,
      duration: 0.3,
      ease: 'power2.out',
    });
    setOpen((prev) => !prev);
  };

  return (
    <div className="overflow-hidden rounded-2xl bg-white">
      <div onClick={toggle} className="flex cursor-pointer items-center gap-4 p-6">
        <p className="grow text-lg">{question}</p>
        <button className={clsx('grid size-8 shrink-0 place-content-center', open && 'rotate-180')}>
          <ChevronDown />
        </button>
      </div>
      <div ref={contentRef} className="h-0 overflow-hidden opacity-0">
        <div className="px-6 pb-6">
          <p className="text-paragraph text-sm leading-relaxed whitespace-pre-wrap">{answer}</p>
        </div>
      </div>
    </div>
  );
}
