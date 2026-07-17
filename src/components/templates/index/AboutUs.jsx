'use client';
import { useRef } from 'react';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import PrimaryButton from '@/components/modules/PrimaryButton/PrimaryButton';

export default function AboutUs() {
  const container = useRef(null);

  useGSAP(
    () => {
      const words = gsap.utils.toArray('#paragraph span');

      gsap.fromTo(
        words,
        { opacity: 0.2, y: 5, filter: 'blur(3px)' },
        {
          y: 0,
          filter: 'blur(0px)',
          opacity: 1,
          stagger: 0.2,
          ease: 'none',
          scrollTrigger: {
            trigger: '#paragraph',
            start: 'top bottom',
            end: 'bottom 45%',
            scrub: true,
            markers: false,
          },
        }
      );
    },
    { scope: container }
  );

  return (
    <div ref={container} className="container max-w-4xl">
      <div className="space-y-12">
        <div className="text-primary flex flex-col items-center gap-6 text-center">
          <svg
            className="size-16"
            display="block"
            role="presentation"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 8.079 0.051 C 18.508 -1.045 19.376 15.827 9.406 17.685 C -2.071 19.825 -3.666 1.286 8.079 0.051 Z M 4.528 13.023 C 9.78 18.318 16.739 7.909 10.933 4.221 C 8.642 2.765 4.326 5.54 3.477 7.95 C 2.898 9.592 3.296 11.785 4.528 13.026 Z"
              transform="translate(23.105 3)"
              fill="currentColor"
            />

            <path
              d="M 35.303 19.449 C 43.521 15.47 48.761 22.977 41.677 29.479 C 39.547 31.434 28.676 35.372 25.738 35.667 C 24.914 35.748 24.273 35.748 23.642 35.115 C 23.257 34.479 23.533 33.759 24.124 33.392 C 28.176 31.23 33.08 30.268 37.159 28.373 C 38.745 27.636 40.421 26.58 41.152 24.885 C 42.131 22.62 40.916 21.198 38.571 21.332 C 33.387 21.633 29.348 26.649 23.353 26.978 C 17.927 27.276 13.878 21.01 8.132 21.317 C 4.254 21.523 1.723 26.107 4.854 29.009 C 8.424 32.311 18.903 30.901 20.884 33.201 C 22.824 35.454 19.227 35.501 17.756 35.416 C 14.485 35.231 8.493 34.288 5.489 33.066 C -4.017 29.206 0.088 19.785 8.222 17.829 C 8.878 11.861 12.047 5.547 17.062 2.164 C 22.184 -1.292 25.953 -0.543 30.032 3.946 C 33.972 8.283 36.111 13.506 35.309 19.452 Z M 10.781 17.858 C 15.955 18.368 19.093 23.876 24.267 23.513 C 27.989 23.253 33.129 20.524 32.812 16.166 C 32.461 11.331 26.444 2.872 21.158 3.473 C 16.301 4.025 11.024 13.217 10.781 17.858 Z"
              transform="translate(9 23.296)"
              fill="currentColor"
            />

            <path
              d="M 3.002 0.099 C 4.663 -0.024 4.998 0.91 5.642 0.894 C 7.194 0.86 8.484 -0.813 10.499 0.506 C 12.315 1.697 11.361 4.259 10.456 5.757 C 9.946 6.603 7.663 8.994 6.802 9.276 C 1.743 10.911 -3.438 0.578 2.999 0.099 Z M 2.75 2.84 C 2.442 4.203 4.395 6.938 5.707 6.904 C 6.416 6.885 8.5 4.379 8.954 3.62 C 8.074 2.411 7.679 4.097 6.88 4.338 C 4.597 5.03 4.442 3.52 2.75 2.84 Z"
              transform="translate(25.71 35.835)"
              fill="currentColor"
            />
          </svg>
          <p className="font-bold">داستان ما</p>
        </div>
        <h4
          id="paragraph"
          className="flex w-full max-w-full flex-wrap justify-center gap-2 text-center text-[30px] leading-relaxed"
        >
          <span>ما</span>
          <span>در</span>
          <span>کلینیک</span>
          <span>صدف،</span>
          <span>تغییر</span>
          <span>را</span>
          <span>فرایندی</span>
          <span>میدانیم</span>
          <span>که</span>
          <span>به</span>
          <span>زمان،</span>
          <span>آگاهی</span>
          <span>و</span>
          <span>همراهی</span>
          <span>نیاز</span>
          <span>دارد.</span>
          <span>ما</span>
          <span>با</span>
          <span>گفت و گو،</span>
          <span>رویکردهای</span>
          <span>درمانی</span>
          <span>مؤثر</span>
          <span>و</span>
          <span>حمایت</span>
          <span>مستمر،</span>
          <span>کنار</span>
          <span>شما</span>
          <span>هستیم</span>
          <span>تا</span>
          <span>مسیر</span>
          <span>رشد</span>
          <span>و</span>
          <span>آرامش</span>
          <span>را</span>
          <span>با</span>
          <span>اطمینان</span>
          <span>طی</span>
          <span>کنید.</span>
          {/* ما در کلینیک صدف، تغییر را فرآیندی می‌دانیم که به زمان، آگاهی و همراهی نیاز دارد. ما با
          گفت‌وگو، رویکردهای درمانی مؤثر و حمایت مستمر، کنار شما هستیم تا مسیر رشد و آرامش را با
          اطمینان طی کنید. */}
        </h4>
        <div className="mx-auto max-w-30">
          <PrimaryButton href="/about-us">درباره ما</PrimaryButton>
        </div>
      </div>
    </div>
  );
}
