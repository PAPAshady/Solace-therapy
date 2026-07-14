'use client';
import Image from 'next/image';
import { useRef } from 'react';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import { setTheme } from '@/utils';

export default function Quote() {
  const container = useRef(null);
  const setDark = () => setTheme('dark');
  const setLight = () => setTheme('light');
  useGSAP(
    () => {
      gsap.to('#imgWrapper', {
        scrollTrigger: {
          trigger: container.current,
          start: 'top top',
          end: 'bottom top',
          markers: false,
          onEnter: setLight,
          onLeave: setDark,
          onLeaveBack: setDark,
          onEnterBack: setLight,
        },
      });
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className="relative flex min-h-[70vh] items-center justify-center bg-[#fafafa] lg:h-screen"
    >
      <div className="absolute inset-0 size-full">
        <Image
          alt=""
          src="/images/index/quote.jpg"
          width={2048}
          height={2048}
          className="size-full scale-x-[-1] object-cover object-[70%_center] min-[480px]:object-center"
        />
      </div>
      <div className="relative z-1 container min-[480px]:py-20">
        <div className="flex flex-col gap-6">
          <h2 className="font-secondary max-w-180 text-5xl leading-tight text-white md:text-6xl">
            ”در سخت‌ترین روزها، آخرین چیزی که به آن نیاز داریم، شرمندگی از انسان بودنمان است.“
          </h2>
          <p className="text-white/65">دکتر سارا رضایی، روان‌درمانگر و بنیان‌گذار کلینیک صدف</p>
        </div>
      </div>
    </div>
  );
}
