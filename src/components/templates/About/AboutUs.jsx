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
      if (window.innerWidth >= 1024) {
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
      }
      const words = gsap.utils.toArray('#paragraph > span');
      gsap.from(words, {
        opacity: 0.2,
        stagger: 0.2,
        ease: 'none',
        scrollTrigger: {
          trigger: container.current,
          start: 'top+=70 center',
          end: () => `${window.innerWidth >= 1024 ? 'bottom-=150' : 'bottom-=70'} center`,
          scrub: true,
          markers: false,
        },
      });
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#fafafa] lg:min-h-[120vh]"
    >
      <div className="absolute inset-0 size-full">
        <Image
          alt=""
          src="/images/about/about.jpg"
          width={2048}
          height={2048}
          className="size-full object-cover object-center"
        />
      </div>

      <div className="relative z-1 container py-35 lg:py-55">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col items-center justify-center gap-6 text-center">
            <div className="size-16">
              <svg
                role="presentation"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
                className="block size-full fill-white"
              >
                <path
                  d="M 28.139 3.308 C 36.548 -3.619 48.887 0.788 46.757 12.291 C 45.435 19.43 33.643 35.051 28.596 40.963 C 28.485 41.093 28.34 41.265 28.17 41.467 C 26.836 43.052 23.911 46.528 22.963 46.828 C 22.317 47.034 21.694 47.087 21.065 46.807 C 20.512 46.56 18.112 43.397 16.24 40.93 C 15.31 39.704 14.51 38.651 14.132 38.212 C 12.984 36.877 11.634 35.487 10.237 34.047 C 6.387 30.081 2.171 25.737 0.776 21.138 C -3.922 5.635 13.912 -5.299 22.006 10.678 C 22.959 9.698 23.751 8.593 24.546 7.485 C 25.609 6.002 26.677 4.513 28.139 3.308 Z M 26.959 10.149 C 26.611 10.632 26.108 11.528 25.598 12.434 C 24.933 13.618 24.257 14.822 23.9 15.153 C 23.271 15.738 22.868 15.707 22.078 15.368 C 20.534 14.705 19.366 13.044 18.171 11.345 C 17.089 9.807 15.984 8.236 14.557 7.346 C 10.724 4.954 6.453 7.656 4.789 11.223 C 2.107 16.972 4.313 21.492 7.851 26.225 L 22.154 42.963 C 22.154 42.963 33.944 28.2 36.556 24.544 C 39.167 20.889 41.574 16.122 41.857 15.501 C 43.242 12.482 44.563 7.869 41.69 5.247 L 41.697 5.25 C 40.334 4.007 37.838 3.357 36.004 3.622 C 31.689 4.25 29.348 6.832 26.959 10.149 Z"
                  fill="white"
                  transform="translate(8 8)"
                />
              </svg>
            </div>
            <p className="text-m font-bold text-white">رویکرد درمانی ما</p>
          </div>
          <div>
            <h4
              id="paragraph"
              className="mx-auto max-w-300 text-center text-2xl leading-loose whitespace-pre-wrap text-white md:text-3xl lg:text-4xl"
            >
              <span>همه </span>
              <span>چیز </span>
              <span>با </span>
              <span>شنیدن </span>
              <span>دقیق </span>
              <span>و </span>
              <span>درک </span>
              <span>شرایط </span>
              <span>و </span>
              <span>نیازهای </span>
              <span>شما </span>
              <span>آغاز </span>
              <span>می‌شود. </span>
              <span>سپس </span>
              <span>با </span>
              <span>توجه </span>
              <span>به </span>
              <span>اهداف </span>
              <span>و </span>
              <span>سرعت </span>
              <span>پیشرفتتان، </span>
              <span>مسیری </span>
              <span>درمانی </span>
              <span>طراحی </span>
              <span>می‌کنیم </span>
              <span>که </span>
              <span>واقع‌بینانه </span>
              <span>و </span>
              <span>متناسب </span>
              <span>با </span>
              <span>شما </span>
              <span>باشد. </span>
              <span>هر </span>
              <span>جلسه </span>
              <span>فضایی </span>
              <span>امن، </span>
              <span>آرام </span>
              <span>و </span>
              <span>بدون </span>
              <span>قضاوت </span>
              <span>فراهم </span>
              <span>می‌کند </span>
              <span>تا </span>
              <span>بتوانید </span>
              <span>با </span>
              <span>اطمینان </span>
              <span>بیشتری </span>
              <span>خودتان </span>
              <span>را </span>
              <span>بشناسید </span>
              <span>و </span>
              <span>در </span>
              <span>مسیر </span>
              <span>رشد </span>
              <span>و </span>
              <span>سلامت </span>
              <span>روان </span>
              <span>قدم </span>
              <span>بردارید. </span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
