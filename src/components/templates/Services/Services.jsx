'use client';
import Image from 'next/image';
import { useRef } from 'react';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import PrimaryButton from '@modules/PrimaryButton/PrimaryButton';
import TransitionLink from '@modules/TransitionLink/TransitionLink';
import { setTheme } from '@/utils';
import { services } from '@/data';

export default function Services({ client }) {
  const desktopContainer = useRef(null);
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(min-width: 1024px)', () => {
        const setDark = () => setTheme('dark');
        const setLight = () => setTheme('light');
        gsap.to('#imgWrapper', {
          scrollTrigger: {
            trigger: desktopContainer.current,
            start: 'top top',
            end: 'bottom top',
            markers: false,
            onEnter: setLight,
            onLeave: setDark,
            onLeaveBack: setDark,
            onEnterBack: setLight,
          },
        });

        const images = gsap.utils.toArray('.img');
        images.forEach((image) => {
          gsap.to(image, {
            yPercent: -20,
            ease: 'none',
            scrollTrigger: {
              trigger: image,
              start: 'top bottom',
              end: 'bottom center',
              scrub: 1,
              markers: false,
            },
          });
        });

        gsap.to('.line', {
          strokeDashoffset: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: '#lineContainer',
            markers: false,
            start: 'top center',
            end: 'bottom center',
            scrub: 1.5,
          },
        });
      });
    },
    { scope: desktopContainer }
  );

  return (
    <section>
      {/* mobile layout */}
      <div className="space-y-20 lg:hidden">
        {services.map((service) => (
          <div key={service.id} className="flex flex-col gap-10">
            <div className="h-100 md:h-160">
              <Image
                alt={service.title}
                width={2048}
                height={2048}
                src={`/images/services/${service.image}`}
                className="size-full object-cover"
              />
            </div>
            <div className="container">
              <div className="flex max-w-160 flex-col gap-10 md:gap-12">
                <div className="flex flex-col gap-8">
                  <h2 className="font-secondary text-[64px] leading-snug md:text-[88px]">
                    {service.title}
                  </h2>
                  <p className="text-paragraph leading-relaxed whitespace-pre-wrap">
                    {service.longDescription}
                  </p>
                </div>
                <div>
                  <TransitionLink href={`/${client}/book-session`}>
                    <PrimaryButton>دریافت نوبت</PrimaryButton>
                  </TransitionLink>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* desktop layout */}
      <div className="relative hidden overflow-hidden lg:block" ref={desktopContainer}>
        <div
          className="absolute top-0 right-[calc(70%-340px)] z-1 h-[6000px] w-170"
          id="lineContainer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 680 6000"
            className="absolute inset-0"
          >
            <path
              d="M 292.611 0 C 206.603 235.538 213.101 526.363 520.09 603.62 C 827.079 680.877 227.543 233.573 188.884 603.62 C 150.224 973.667 870.379 940.009 537 983.738 C 203.621 1027.467 622.702 1760.187 145.5 1393.045 C -331.701 1025.903 902.521 1619.076 459 1846.885 C 15.479 2074.694 529.284 2268.192 246 2328.747 C -37.284 2389.301 840.27 1867.048 504 2451 C 167.73 3034.952 146.418 3053.182 322.5 3014.5 C 498.582 2975.818 823.305 3168.482 478 3469.102 C 132.695 3769.722 501.751 3891.534 601 3825.369 C 700.249 3759.204 292.326 3589.284 202 3942.457 C 111.675 4295.629 491.241 3896.327 601 4025.519 C 710.76 4154.711 501.293 4413.512 319.5 4327.746 C 137.707 4241.979 580.408 4385.053 373.25 4843.132 C 166.092 5301.212 439.342 5167.326 459 5072.805 C 478.658 4978.283 100.658 5142.487 232 5338.504 C 363.342 5534.52 898.528 5541.779 520 5370 C 141.472 5198.221 -139.509 5577.671 238.5 5715.5 C 616.509 5853.329 373.25 6000 373.25 6000"
              className="line fill-transparent stroke-white stroke-2"
              style={{ strokeDasharray: 12727.5, strokeDashoffset: 12727.5 }}
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 680 6000"
            className="absolute inset-0"
          >
            <path
              d="M 302.5 0 C 105.666 399.076 337.423 546.046 504 585.5 C 670.577 624.954 524.895 422.451 322.5 455 C 120.105 487.549 182.88 842.381 448.853 893.147 C 714.827 943.913 432.195 879.201 400.87 1124.592 C 369.545 1369.983 436.394 1632.667 194.444 1454.439 C -47.507 1276.211 0.572 1162.574 247.425 1365.074 C 494.277 1567.574 794.407 1672.598 463.348 1872.647 C 132.289 2072.695 432.047 2164.647 352.887 2272.781 C 273.728 2380.914 41.259 2358.863 364 2208.5 C 686.741 2058.137 620.877 2188.893 381.377 2667.894 C 141.878 3146.894 252.401 3014.308 448.853 3014.308 C 645.306 3014.308 707.347 3264.748 489.339 3438.039 C 271.331 3611.329 254.271 3814.198 489.339 3833.654 C 724.407 3853.111 632.688 3747.287 503.834 3730.232 C 374.979 3713.176 315.507 3748.217 247.425 3823.613 C 179.343 3899.009 60.801 4195.552 400.87 4044.515 C 740.939 3893.478 701.01 4378.029 422.363 4344.741 C 143.715 4311.453 365.058 4286.613 448.853 4562.631 C 532.648 4838.648 192.143 5058.856 290.41 5157.56 C 388.676 5256.264 565.739 4901.845 381.377 5019.998 C 197.015 5138.152 106.35 5323.513 309.903 5441.72 C 513.456 5559.928 858.911 5528.704 448.853 5369.927 C 38.795 5211.15 -25.798 5612.896 247.425 5699.774 C 520.647 5786.652 518.765 5926.801 363.883 6000"
              className="line fill-transparent stroke-white stroke-2 opacity-30"
              style={{ strokeDasharray: 12727.5, strokeDashoffset: 12727.5 }}
            ></path>
          </svg>
        </div>
        {services.map((service) => (
          <div
            key={service.id}
            className="relative flex h-min min-h-[120vh] items-center overflow-hidden pt-25 pb-16"
          >
            <Image
              alt={service.title}
              width={2048}
              height={2048}
              src={`/images/services/${service.image}`}
              className="img scale-x[-1] absolute inset-0 size-[130%] object-cover"
            />
            <div className="z-1 container">
              <div className="space-y-16">
                <div className="space-y-8">
                  <h2 className="font-secondary max-w-200 text-[130px] leading-tight text-white">
                    {service.title}
                  </h2>
                  <p className="max-w-160 whitespace-pre-wrap text-white">
                    {service.longDescription}
                  </p>
                </div>
                <div>
                  <TransitionLink href={`/${client}/book-session`}>
                    <PrimaryButton variant="ghost">دریافت نوبت</PrimaryButton>
                  </TransitionLink>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
