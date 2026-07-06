'use client';
import { useRef } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import PrimaryButton from '@modules/PrimaryButton/PrimaryButton';
import Checkbox from '@modules/Checkbox/Checkbox';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Home() {
  const imgContainerRef = useRef(null);
  const img1 = useRef(null);
  const img2 = useRef(null);
  const textContainer = useRef(null);
  const line = useRef(null);
  const toggleContainer = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: imgContainerRef.current,
        start: 'top top',
        end: `bottom ${window.innerWidth <= 768 ? '150' : 'top'}`,
        scrub: true,
        pin: true,
        markers: true,
      },
    });

    // cross-fade images as user scrolss
    tl.to(img1.current, { opacity: 0, duration: 1 });

    // draw the line as user scrolls
    gsap.to(line.current, {
      strokeDashoffset: 0,
      ease: 'none',
      duration: 1,
      scrollTrigger: {
        trigger: toggleContainer.current,
        start: 'top bottom',
        end: 'center center',
        scrub: true,
        markers: false,
      },
    });
  });

  return (
    <>
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 z-2 container">
          <div
            ref={textContainer}
            className="flex h-screen max-h-210 items-center justify-center text-white md:max-h-200"
          >
            <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-20 lg:pt-40 xl:gap-0!">
              <p className="font-secondary text-6xl leading-tight min-[480px]:text-7xl min-[1200px]:text-8xl! min-[1440px]:text-[110px]! lg:w-[50%] lg:text-[85px]">
                هر تغییر بزرگی، <br className="hidden lg:block" /> از یک قدم آغاز میشود.
              </p>
              <div className="space-y-10 lg:flex lg:w-[50%] lg:max-w-107.5 lg:flex-col xl:max-w-125!">
                <p className="leading-loose">
                  در اینجا، با ارائه خدمات روان‌درمانی و مشاوره، همراه شما هستیم تا با آرامش و
                  اطمینان بیشتری با چالش‌های زندگی روبه‌رو شوید. در کنار هم، شناخت عمیق‌تری از خود
                  به دست می‌آوریم، سلامت روان را تقویت می‌کنیم و گام‌به‌گام مسیر رسیدن به تغییرات
                  پایدار را طی می‌کنیم؛ با سرعتی که برای شما مناسب است.
                </p>
                <PrimaryButton className="w-max text-base!">شروع داستان خود</PrimaryButton>
              </div>
            </div>
          </div>

          <div
            ref={toggleContainer}
            className="flex h-[65dvh] items-center justify-center text-center md:h-screen md:max-h-180 md:pt-0"
          >
            <div className="relative z-5 flex flex-col items-center gap-6 md:pt-30">
              <label className="flex items-center gap-5">
                <p className="text-white">تعادل</p>
                <Checkbox />
              </label>
              <p className="text-4xl leading-relaxed text-white lg:text-[42px]">
                کاش پیدا کردن تعادل <br className="hidden sm:block" />
                به سادگی زدن یک کلید بود.
              </p>
              <p className="text-white">
                گاهی فقط یک قدم، کافی‌ست تا همه‌چیز <br />
                روشن‌تر به نظر برسد.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute z-1 hidden h-150 w-full items-start md:flex md:h-255">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 780 1140"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M 555 0 C -514.95 653.314 502.942 726.558 720 509.5 C 937.058 292.442 174.231 575.033 381 1140"
              stroke="var(--token-15d296e7-c5d1-416d-add7-be3f4225afa3, rgb(255, 255, 255))"
              strokeWidth="2"
              fill="transparent"
              style={{ strokeDasharray: '2420.39px', strokeDashoffset: '1900px' }}
              ref={line}
            ></path>
          </svg>
        </div>
        <div
          className="relative flex h-screen max-h-225 max-w-full items-end justify-center"
          ref={imgContainerRef}
        >
          <div
            ref={img1}
            className="absolute inset-0 z-1 flex h-screen w-full items-center justify-between bg-[url(/images/banner.jpg)] bg-cover bg-top bg-no-repeat"
          ></div>
          <div
            ref={img2}
            className="absolute inset-0 h-screen w-full bg-[url(/images/banner-2.jpg)] bg-cover bg-center bg-no-repeat"
          ></div>
        </div>
      </div>
    </>
  );
}
