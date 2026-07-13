'use client';
import { useRef } from 'react';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import { reachingOutSteps } from '@/data';

export default function HowItWorks() {
  const container = useRef(null);

  useGSAP(
    () => {
      const counterNumbers = gsap.utils.toArray('#num');
      let current = -1;

      function show(step) {
        if (step === current) return;
        current = step;
        counterNumbers.forEach((num, i) => {
          gsap.to(num, {
            y: i < step ? '-75%' : i === step ? 0 : '75%',
            opacity: i === step ? 1 : 0,
            duration: 0.6,
            ease: 'sine.out',
          });
        });
      }

      gsap.timeline({
        scrollTrigger: {
          trigger: '#counterContainer',
          endTrigger: '#lastStep',
          start: 'top center',
          end: 'bottom center',
          markers: false,
          onUpdate: (self) => {
            if (self.progress < 0.33) show(0);
            else if (self.progress < 0.66) show(1);
            else show(2);
          },
        },
      });

      const backgroundLinesTl = gsap.timeline({
        scrollTrigger: {
          trigger: '#counterContainer',
          start: 'top center',
          end: 'bottom center',
          toggleActions: 'play reverse play reverse',
        },
      });
      backgroundLinesTl.to('#line1', { opacity: 0.4, duration: 0.3, ease: 'sine.inOut' });
      backgroundLinesTl.to('#line2', { opacity: 0.1, duration: 0.3, ease: 'sine.inOut' });
    },
    { scope: container }
  );
  return (
    <div className="relative container" ref={container}>
      <div
        id="line1"
        className="fixed top-1/2 left-[200%] -z-1 hidden size-[400%] -translate-1/2 items-center justify-center opacity-0 md:flex"
      >
        <svg viewBox="0 0 6000 680">
          <path
            d="M 258.784 0 C 172.776 235.538 179.274 526.363 486.263 603.62 C 793.252 680.877 193.717 233.573 155.057 603.62 C 116.397 973.667 836.552 940.009 503.173 983.738 C 169.794 1027.467 588.875 1760.187 111.673 1393.045 C -365.528 1025.903 868.694 1619.076 425.173 1846.885 C -18.348 2074.694 495.457 2268.192 212.173 2328.747 C -71.111 2389.301 806.443 1867.048 470.173 2451 C 133.903 3034.952 112.591 3053.182 288.673 3014.5 C 464.755 2975.818 789.478 3168.482 444.173 3469.102 C 98.868 3769.722 467.924 3891.534 567.173 3825.369 C 666.422 3759.204 258.499 3589.284 168.173 3942.457 C 77.848 4295.629 457.414 3896.327 567.173 4025.519 C 676.933 4154.711 467.466 4413.512 285.673 4327.746 C 103.88 4241.979 546.582 4385.053 339.423 4843.132 C 132.265 5301.212 405.515 5167.326 425.173 5072.805 C 444.831 4978.283 66.831 5142.487 198.173 5338.504 C 329.515 5534.52 864.701 5541.779 486.173 5370 C 107.645 5198.221 -173.336 5577.671 204.673 5715.5 C 582.682 5853.329 339.423 6000 339.423 6000"
            transform="translate(2689.827 -2660) rotate(90 309.75 3000)"
            fill="transparent"
            stroke='var(--token-534ca2ef-c37b-4157-bbaa-6f2919ef42ae, rgb(127, 166, 155)) /* {"name":"Green"} */'
          ></path>
        </svg>
      </div>
      <div
        id="line2"
        className="fixed top-1/2 left-[200%] -z-1 hidden size-[400%] -translate-1/2 items-center justify-center opacity-0 md:flex"
      >
        <svg viewBox="0 0 6000 680" id="svg9185786404">
          <path
            d="M 266.813 0 C 69.979 399.076 301.736 546.046 468.313 585.5 C 634.89 624.954 489.208 422.451 286.813 455 C 84.419 487.549 147.193 842.381 413.167 893.147 C 679.14 943.913 396.509 879.201 365.184 1124.592 C 333.859 1369.983 400.707 1632.667 158.757 1454.439 C -83.193 1276.211 -35.114 1162.574 211.738 1365.074 C 458.591 1567.574 758.721 1672.598 427.661 1872.647 C 96.602 2072.695 396.36 2164.647 317.201 2272.781 C 238.041 2380.914 5.572 2358.863 328.313 2208.5 C 651.055 2058.137 585.19 2188.893 345.691 2667.894 C 106.191 3146.894 216.714 3014.308 413.167 3014.308 C 609.619 3014.308 671.66 3264.748 453.652 3438.039 C 235.644 3611.329 218.585 3814.198 453.652 3833.654 C 688.72 3853.111 597.002 3747.287 468.147 3730.232 C 339.292 3713.176 279.82 3748.217 211.738 3823.613 C 143.656 3899.009 25.115 4195.552 365.184 4044.515 C 705.253 3893.478 665.324 4378.029 386.676 4344.741 C 108.028 4311.453 329.372 4286.613 413.167 4562.631 C 496.961 4838.648 156.457 5058.856 254.723 5157.56 C 352.989 5256.264 530.053 4901.845 345.691 5019.998 C 161.329 5138.152 70.663 5323.513 274.216 5441.72 C 477.769 5559.928 823.225 5528.704 413.167 5369.927 C 3.108 5211.15 -61.485 5612.896 211.738 5699.774 C 484.961 5786.652 483.079 5926.801 328.197 6000"
            transform="translate(2695.687 -2660) rotate(90 304 3000)"
            fill="transparent"
            stroke='var(--token-534ca2ef-c37b-4157-bbaa-6f2919ef42ae, rgb(127, 166, 155)) /* {"name":"Green"} */'
          ></path>
        </svg>
      </div>
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
        <div id="counterContainer" className="md:flex md:items-start">
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
                  id="num"
                  className="text-primary text-[240px] min-[990px]:text-[320px] lg:text-[320px] xl:text-[350px]"
                >
                  {(1).toLocaleString('fa')}
                </span>
                <span
                  id="num"
                  className="text-primary absolute left-1.5 translate-y-[75%] text-[240px] opacity-0 min-[990px]:text-[320px] lg:text-[320px] xl:text-[350px]"
                >
                  {(2).toLocaleString('fa')}
                </span>
                <span
                  id="num"
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
