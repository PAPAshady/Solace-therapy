'use client';
import Image from 'next/image';
import { useRef } from 'react';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function ImageQuote({ image }) {
  const container = useRef(null);
  useGSAP(
    () => {
      gsap.to('#img', {
        yPercent: () => (window.innerWidth >= 768 ? -18 : 18),
        ease: 'none',
        scrollTrigger: {
          trigger: '#img',
          start: 'top bottom',
          end: 'bottom center',
          scrub: true,
          markers: false,
        },
      });
    },
    { scope: container }
  );

  return (
    <div className="container">
      <div className="mx-auto flex max-w-250 flex-col gap-12 md:flex-row md:items-start md:gap-20 lg:gap-30">
        <div
          ref={container}
          className="flex h-120 w-full items-center justify-center overflow-hidden md:aspect-[.651338] md:h-auto md:max-h-150 md:w-1/2"
        >
          <Image
            id="img"
            className="size-[115%] max-w-none object-cover"
            alt="دکتر سارا احمدی"
            width={2048}
            height={2048}
            src={image}
          />
        </div>
        <div className="border-primary flex flex-col gap-5 border-r-[3px] py-2 ps-10 md:w-1/2">
          <h4 className="font-semiboldl text-2xl leading-relaxed md:text-3xl">
            روان‌درمانی برای تغییر دادن آدم‌ها نیست؛ برای این است که در کنارشان باشیم تا{' '}
            <span className="text-primary">مسیر خودشان را پیدا کنند.</span>
          </h4>
          <span className="text-paragraph text-sm">— مراجع کننده</span>
        </div>
      </div>
    </div>
  );
}
