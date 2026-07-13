'use client';
import { useRef } from 'react';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import { reachingOutSteps } from '@/data';

export default function HowItWorks() {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          endTrigger: '#lastStep',
          start: 'top center',
          end: 'bottom center',
          markers: false,
          onUpdate: (self) => {
            if (self.progress < 0.3) {
              gsap.to('#num1', { y: 0, opacity: 1, duration: 0.6, ease: 'sine.out' });
              gsap.to('#num2', { y: '75%', opacity: 0, duration: 0.6, ease: 'sine.out' });
              return;
            }
            if (self.progress >= 0.4 && self.progress < 0.75) {
              gsap.to('#num1', { y: '-75%', opacity: 0, duration: 0.6, ease: 'sine.out' });
              gsap.to('#num2', { y: 0, opacity: 1, duration: 0.6, ease: 'sine.out' });
              gsap.to('#num3', { y: '75%', opacity: 0, duration: 0.6, ease: 'sine.out' });
              return;
            }
            if (self.progress >= 0.75) {
              gsap.to('#num3', { y: 0, opacity: 1, duration: 0.6, ease: 'sine.out' });
              gsap.to('#num2', { y: '-75%', opacity: 0, duration: 0.6, ease: 'sine.out' });
            }
          },
        },
      });
    },
    { scope: container }
  );
  return (
    <div className="container">
      <div className="space-y-16">
        <div className="space-y-8 lg:space-y-12">
          <h2 className="font-secondary text-5xl lg:text-7xl">
            مسیر همراهی
            <span className="text-primary inline-block">با شما</span>
          </h2>
          <h5 className="max-w-180 text-xl leading-relaxed lg:max-w-220">
            شروع مسیر درمان لازم نیست پیچیده یا دشوار باشد. ما با فرایندی ساده، شفاف و متناسب با
            شرایط شما، از نخستین جلسه تا دستیابی به تغییرات پایدار، در کنارتان خواهیم بود.
          </h5>
        </div>
        <div ref={container} className="md:flex md:items-start">
          <div className="flex flex-col gap-16 md:w-1/2">
            <div className="space-y-6 md:mt-[10vh] md:h-[50vh] lg:mt-[15vh] xl:mt-[20vh] xl:h-[70vh]">
              <h3 className="text-primary font-secondary text-5xl md:text-6xl">
                {reachingOutSteps[0].title}
              </h3>
              <p className="text-paragraph leading-relaxed md:max-w-120">
                {reachingOutSteps[0].description}
              </p>
            </div>
            <div className="space-y-6 md:h-[50vh] xl:h-[70vh]">
              <h3 className="text-primary font-secondary text-5xl md:text-6xl">
                {reachingOutSteps[1].title}
              </h3>
              <p className="text-paragraph leading-relaxed md:max-w-120">
                {reachingOutSteps[1].description}
              </p>
            </div>
            <div id="lastStep" className="space-y-6 md:h-[45vh] xl:h-[60vh]">
              <h3 className="text-primary font-secondary text-5xl md:text-6xl">
                {reachingOutSteps[2].title}
              </h3>
              <p className="text-paragraph leading-relaxed md:max-w-120">
                {reachingOutSteps[2].description}
              </p>
            </div>
          </div>
          <div className="sticky top-0 hidden h-screen items-start justify-center md:flex md:w-1/2">
            <div
              id="counter"
              className="sticky top-1/4 flex w-full items-center justify-end pe-8 pt-10 xl:justify-center xl:ps-10 xl:pe-0"
            >
              <div className="relative flex flex-col items-center justify-center gap-10">
                <span
                  id="num1"
                  className="text-primary text-[240px] min-[990px]:text-[320px] lg:text-[320px] xl:text-[350px]"
                >
                  {(1).toLocaleString('fa')}
                </span>
                <span
                  id="num2"
                  className="text-primary absolute left-1.5 translate-y-[75%] text-[240px] opacity-0 min-[990px]:text-[320px] lg:text-[320px] xl:text-[350px]"
                >
                  {(2).toLocaleString('fa')}
                </span>
                <span
                  id="num3"
                  className="text-primary absolute left-1.5 translate-y-[75%] text-[240px] opacity-0 min-[990px]:text-[320px] lg:text-[320px] xl:text-[350px]"
                >
                  {(3).toLocaleString('fa')}
                </span>
              </div>
              <span className="text-primary text-[240px] min-[990px]:text-[320px] lg:text-[320px] xl:text-[350px]">
                {(0).toLocaleString('fa')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
