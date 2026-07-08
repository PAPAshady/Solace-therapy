'use client';
import { useRef } from 'react';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import PrimaryButton from '@modules/PrimaryButton/PrimaryButton';
import Checkbox from '@modules/Checkbox/Checkbox';

gsap.registerPlugin(useGSAP);

export default function Home() {
  const container = useRef(null);
  const bannerTextContainer = useRef(null);
  const toggleSwitchContainer = useRef(null);

  useGSAP(
    () => {
      const imgTl = gsap.timeline({
        scrollTrigger: {
          trigger: '#imgContainer',
          start: 'top top',
          end: `bottom ${window.innerWidth > 767 || window.innerHeight > 900 ? 'top' : '180'}`,
          scrub: true,
          pin: true,
          markers: true,
        },
      });

      // cross-fade images as user scrolss
      imgTl
        .to('#img1', { opacity: 0, duration: 1 })
        .to(bannerTextContainer.current, { y: -100 }, 0.6)
        .to(toggleSwitchContainer.current, { y: 20 });

      const lineTl = gsap.timeline({
        scrollTrigger: {
          trigger: toggleSwitchContainer.current,
          start: 'top bottom',
          end: 'center center-=100',
          scrub: true,
          markers: false,
        },
      });

      // draw the line as user scrolls and fade it away at the end.
      lineTl
        .to(['#line-1', '#line-2'], {
          strokeDashoffset: 0,
          ease: 'none',
          duration: 1,
        })
        .to(['#line-1', '#line-2'], { opacity: 0 }, 0.9);

      // calculate the height of line contianer dynamically so the tip of the line always end at top of the toggle button section. no matter what is the viewport height.
      const textContainerHeight = bannerTextContainer.current.scrollHeight;
      const toggleContainerHeight = toggleSwitchContainer.current.scrollHeight;
      gsap.set('#lineContainer', {
        height: textContainerHeight + toggleContainerHeight / 2 - 160,
      });
    },
    { scope: container }
  );

  return (
    <div ref={container} className="relative overflow-hidden">
      <div className="absolute inset-0 z-2 container">
        <div
          ref={bannerTextContainer}
          className="flex h-screen max-h-210 items-center justify-center text-white md:max-h-200"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-20 lg:pt-40 xl:gap-0!">
            <p className="font-secondary text-6xl leading-tight min-[480px]:text-7xl min-[1200px]:text-8xl! min-[1440px]:text-[110px]! lg:w-[50%] lg:text-[85px]">
              هر تغییر بزرگی، <br className="hidden lg:block" /> از یک قدم آغاز میشود.
            </p>
            <div className="space-y-8 lg:flex lg:w-[50%] lg:max-w-107.5 lg:flex-col xl:max-w-125!">
              <p className="leading-loose">
                در اینجا، با ارائه خدمات روان‌درمانی و مشاوره، همراه شما هستیم تا با آرامش و اطمینان
                بیشتری با چالش‌های زندگی روبه‌رو شوید. در کنار هم، شناخت عمیق‌تری از خود به دست
                می‌آوریم، سلامت روان را تقویت می‌کنیم و گام‌به‌گام مسیر رسیدن به تغییرات پایدار را
                طی می‌کنیم؛ با سرعتی که برای شما مناسب است.
              </p>
              <PrimaryButton className="w-max text-base!">شروع داستان خود</PrimaryButton>
            </div>
          </div>
        </div>
        <div
          ref={toggleSwitchContainer}
          className="flex items-center justify-center text-center md:h-screen md:max-h-180"
        >
          <div className="relative z-5 flex flex-col items-center gap-6 pt-20 md:p-0">
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
      <div id="lineContainer" className="absolute z-1 hidden w-full items-start md:flex">
        <svg
          className="absolute"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 780 1140"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            className="stroke-white/60"
            d="M 568.5 0 C -446.766 669.726 420.757 754.867 688 543.5 C 955.243 332.133 149.225 460.324 381 1140"
            stroke="var(--token-15d296e7-c5d1-416d-add7-be3f4225afa3, rgb(255, 255, 255))"
            strokeWidth="2"
            fill="transparent"
            style={{ strokeDasharray: '2420.39px', strokeDashoffset: '1900px' }}
            id="line-2"
          ></path>
        </svg>
        <svg
          className="absolute"
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
            id="line-1"
          ></path>
        </svg>
      </div>
      <div
        className="relative flex h-screen max-h-225 max-w-full items-end justify-center"
        id="imgContainer"
      >
        <div
          id="img1"
          className="absolute inset-0 z-1 flex h-screen w-full items-center justify-between bg-[url(/images/banner.jpg)] bg-cover bg-top bg-no-repeat"
        ></div>
        <div
          id="img2"
          className="absolute inset-0 h-screen w-full bg-[url(/images/banner-2.jpg)] bg-cover bg-center bg-no-repeat"
        ></div>
      </div>
    </div>
  );
}
