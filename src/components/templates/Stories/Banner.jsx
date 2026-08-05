'use client';
import Image from 'next/image';
import { useRef } from 'react';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { setTheme } from '@/utils';

export default function Banner() {
  const container = useRef(null);
  const bannerTextContainer = useRef(null);
  const bannerBottomSection = useRef(null);

  useGSAP(
    () => {
      // timeline to cross-fade images on scroll
      const imgTl = gsap.timeline({
        scrollTrigger: {
          trigger: '#imgContainer',
          start: 'top top',
          end: () =>
            `bottom ${window.innerWidth > 767 || window.innerHeight > 900 ? 'top' : '180'}`,
          scrub: true,
          pin: true,
          markers: false,
          invalidateOnRefresh: true,
          onEnter: () => setTheme('light'),
        },
      });
      // cross-fade images as user scrolss
      imgTl
        .to('#img1', { opacity: 0, duration: 1 })
        .to(bannerTextContainer.current, { y: -150 }, 0.5)
        .to(bannerBottomSection.current, { y: -20 });

      // timeline to control the background change (to white) when user reaches the end of banner by scrolling
      const toggleTl = gsap.timeline({ paused: true });
      toggleTl
        .to('#whiteBackground', { opacity: 1, duration: 0.5 }, '<')
        .to('#bannerBottomTextWrapper', { opacity: 0, duration: 0.3 }, 0);

      // controll animation for the bottom section of banner
      let hasPlayed = false;
      gsap.timeline({
        scrollTrigger: {
          trigger: '#bannerBottomTextWrapper',
          start: 'center center',
          end: `bottom-=13% center`,
          endTrigger: container.current,
          markers: false,
          pin: true,
          onUpdate: (self) => {
            if (self.progress >= 0.75 && !hasPlayed) {
              hasPlayed = true;
              toggleTl.play();
              setTheme('dark');
              return;
            }
            if (self.progress < 0.75 && hasPlayed) {
              hasPlayed = false;
              toggleTl.reverse();
              setTheme('light');
            }
          },
        },
      });

      // timeline to controll line drawing
      const lineTl = gsap.timeline({
        scrollTrigger: {
          trigger: bannerBottomSection.current,
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

      // initial animations
      gsap.fromTo(
        '#slogan span',
        {
          opacity: 0,
          y: 30,
          filter: 'blur(5px)',
        },
        { opacity: 1, y: 0, filter: 'blur(0px)', stagger: 0.17, duration: 1.65 }
      );
      gsap.fromTo(
        '#description',
        {
          opacity: 0,
          y: -30,
        },
        { opacity: 1, y: 0, duration: 1, delay: 0.8 }
      );

      // calculate the height of line contianer dynamically so the tip of the line always end at top of the banner bottom section. no matter what is the viewport height.
      const updateLineHeight = () => {
        const textContainerHeight = bannerTextContainer.current.scrollHeight;
        const bannerBottomSectionHeight = bannerBottomSection.current.scrollHeight;
        gsap.set('#lineContainer', {
          height: textContainerHeight + bannerBottomSectionHeight / 2 - 180,
        });
      };

      updateLineHeight();
      ScrollTrigger.addEventListener('refreshInit', updateLineHeight);

      return () => {
        ScrollTrigger.removeEventListener('refreshInit', updateLineHeight);
      };
    },
    { scope: container }
  );

  return (
    <div ref={container} className="relative overflow-hidden">
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
        id="imgContainer"
        className="relative flex h-[130vh] max-h-320 max-w-full items-end justify-center"
      >
        <Image
          id="img1"
          width={3600}
          height={3200}
          alt=""
          unoptimized
          src="/images/customers/customer-1.jpg"
          className="absolute inset-0 z-1 flex h-screen w-full items-center justify-between object-cover object-[50%_29.75%]"
          preload
        />
        <div id="img2" className="absolute inset-0 size-full">
          <Image
            width={2048}
            height={2048}
            alt=""
            unoptimized
            src="/images/client-story/banner.jpg"
            className="size-full object-cover"
            preload
          />
          <div id="whiteBackground" className="absolute inset-0 size-full bg-white opacity-0"></div>
        </div>
      </div>
      <div className="absolute inset-0 z-2 container">
        <div
          ref={bannerTextContainer}
          className="flex h-screen max-h-210 items-center justify-center text-white md:max-h-200"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-20 lg:pt-40 xl:gap-0!">
            <p
              id="slogan"
              className="font-secondary text-6xl leading-tight whitespace-pre-wrap min-[480px]:text-7xl min-[1200px]:text-8xl! min-[1440px]:text-[110px]! lg:w-[50%] lg:text-[85px]"
            >
              <span className="inline-block">هر </span>
              <span className="inline-block">تغییر </span>
              <span className="inline-block">بزرگی، </span>
              <br className="hidden lg:block" />
              <span className="inline-block">از </span>
              <span className="inline-block">یک </span>
              <span className="inline-block">قدم </span>
              <span className="inline-block">آغاز </span>
              <span className="inline-block">میشود.</span>
            </p>
            <div className="space-y-8 lg:flex lg:w-[50%] lg:max-w-107.5 lg:flex-col xl:max-w-125!">
              <p className="leading-loose" id="description">
                در اینجا، با ارائه خدمات روان‌درمانی و مشاوره، همراه شما هستیم تا با آرامش و اطمینان
                بیشتری با چالش‌های زندگی روبه‌رو شوید. در کنار هم، شناخت عمیق‌تری از خود به دست
                می‌آوریم، سلامت روان را تقویت می‌کنیم و گام‌به‌گام مسیر رسیدن به تغییرات پایدار را
                طی می‌کنیم.
              </p>
            </div>
          </div>
        </div>
        <div id="bannerBottomTextWrapper">
          <div
            ref={bannerBottomSection}
            className="flex items-center justify-center text-center md:h-screen md:max-h-180"
          >
            <div className="mx-auto flex max-w-300 flex-col gap-12 pt-10 text-white">
              <div className="space-y-6">
                <div className="mx-auto size-16">
                  <svg
                    className="block size-full"
                    role="presentation"
                    viewBox="0 0 64 64"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.488 33.368C13.427 32.707 13.504 32.154 13.733 31.528C14.332 29.89 17.841 24.156 18.962 22.357C20.3 20.212 22.147 18.509 23.666 16.515C14.297 11.138 22.092-1.026 31.066.069C40.183 1.181 36.935 13.775 30.811 16.993L30.7 17.43C32.267 20.096 34.133 22.669 35.499 25.451C36.079 26.629 38.512 33.628 39.413 33.635C48.836 28.64 55.555 40.245 47.215 47.019C43.6 49.955 37.7 49.862 35.7 45.15C35.257 44.106 35.349 41.777 34.33 41.707C33.821 41.671 33.098 42.034 32.432 42.053C28.652 42.159 24.704 41.825 20.952 42.025C19.914 42.079 17.726 42.201 16.838 42.365C16.067 42.506 13.558 46.001 11.797 46.907C1.339 52.287-4.084 39.034 3.651 33.551C6.737 31.364 10.278 31.749 13.491 33.368ZM27.719 3.593C25.745 4.004 23.022 7.409 23.006 9.455C22.987 12.037 25.532 14.141 27.977 14.071C31.971 13.955 36.738 1.717 27.719 3.593ZM35.091 39.436C34.916 38.372 36.298 36.715 36.333 36.047C36.346 35.838 35.171 32.639 34.958 32.093C34.19 30.131 28.146 17.652 26.691 17.649C23.904 20.735 20.764 23.649 18.943 27.477C18.191 29.061 17.781 30.779 17.141 32.401C16.844 33.153 15.755 34.679 15.711 35.154C15.682 35.45 16.548 37.932 16.739 38.273C17.602 39.802 18.386 38.835 19.679 38.813C24.85 38.723 29.961 38.841 35.088 39.436ZM7.358 35.694C1.094 36.844 2.951 48.359 10.093 43.264C14.727 39.962 12.1 34.823 7.358 35.694ZM39.355 44.504C42.677 47.607 49.472 42.326 47.027 37.891C43.683 31.83 35.028 40.46 39.355 44.504Z"
                      transform="translate(7 7)"
                      fill="white"
                    />
                  </svg>
                </div>
                <p className="text-sm font-bold">چالش پیش رو</p>
              </div>
              <h4 className="challenge space-x-2 text-[28px] leading-relaxed font-semibold whitespace-pre-wrap md:text-4xl md:leading-loose">
                {'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز'
                  .split(' ')
                  .map((word, index) => (
                    <span className="inline-block" key={index}>
                      {word}
                    </span>
                  ))}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
