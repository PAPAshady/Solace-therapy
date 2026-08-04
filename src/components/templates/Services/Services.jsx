'use client';
import Image from 'next/image';
import { useRef } from 'react';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import PrimaryButton from '@modules/PrimaryButton/PrimaryButton';
import { setTheme } from '@/utils';
import { services } from '@/data';

export default function Services() {
  const desktopContainer = useRef(null);
  useGSAP(
    () => {
      const setDark = () => setTheme('dark');
      const setLight = () => setTheme('light');
      const mm = gsap.matchMedia();

      mm.add('(min-width: 1024px)', () => {
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
                  <PrimaryButton href="/book-session">دریافت نوبت</PrimaryButton>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* desktop layout */}
      <div className="hidden lg:block" ref={desktopContainer}>
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
                  <PrimaryButton variant="ghost" href="/book-session">
                    دریافت نوبت
                  </PrimaryButton>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
