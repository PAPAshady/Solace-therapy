'use client';
import { useRef } from 'react';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function PlansHeader() {
  const container = useRef(null);

  useGSAP(
    () => {
      const lineTl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: 'top-=80 center+=60',
          end: 'bottom+=80 center+=60',
          markers: false,
          scrub: true,
        },
      });

      lineTl.to('#line', {
        strokeDashoffset: 0,
        duration: 1,
      });
    },
    { scope: container }
  );

  return (
    <div ref={container} className="flex flex-col items-center justify-center gap-8 px-2">
      <div className="flex flex-col items-center justify-center gap-6">
        <div className="size-16">
          <svg
            display="block"
            role="presentation"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 44.212 6.018 C 42.639 4.723 41.538 3.616 39.417 3.919 C 35.518 4.472 34.199 7.37 31.211 8.698 C 22.497 12.568 19.174 2.927 11.956 3.862 C 10.181 4.091 6.798 6.567 5.302 7.756 C 4.391 8.481 1.072 12.679 0.032 11.613 C -0.029 10.9 -0.025 10.264 0.249 9.584 C 0.636 8.617 4.302 4.472 5.262 3.62 C 9.226 0.103 14.335 -1.295 19.093 1.443 C 22.723 3.534 24.582 7.739 29.308 5.538 C 34.119 3.3 35.401 -0.081 42.103 0.988 C 44.289 1.337 47.946 4.509 47.587 6.891 C 47.152 9.777 44.748 6.473 44.204 6.022 Z"
              className="fill-primary"
              width="47.61186500408185px"
              height="11.785100934979251px"
              transform="translate(7 15)"
            />

            <path
              d="M 21.985 3.223 C 23.01 3.859 23.949 5.121 25.486 5.601 C 29.115 6.74 32.127 2.453 35.454 1.219 C 39.898 -0.429 45.536 0.309 47.943 4.887 C 48.883 6.67 49.326 9.659 46.612 8.704 C 44.697 8.031 44.443 4.133 40.152 4.031 C 35.861 3.928 33.974 7.265 30.611 8.585 C 21.792 12.044 18.735 1.608 8.864 4.904 C 4.758 6.273 3.916 10.368 0 10.839 C 0.032 7.261 3.96 3.691 6.839 2.026 C 12.743 -1.384 16.554 -0.154 21.989 3.227 Z"
              className="fill-primary"
              width="48.66847448834921px"
              height="10.839016291929195px"
              transform="translate(7.447 28.468)"
            />

            <path
              d="M 48.512 9.12 C 44.153 9.444 44.794 5.009 39.85 4.989 C 31.749 4.956 31.978 11.781 22.054 7.55 C 16.606 5.226 14.235 1.763 7.67 5.071 C 5.92 5.952 2.255 10.174 0.545 8.94 C -1.988 7.116 5.053 2.525 6.469 1.804 C 10.227 -0.115 14.13 -0.615 18.171 0.849 C 22.139 2.287 25.518 7.046 30.373 4.804 C 31.595 4.238 32.809 2.46 35.059 1.75 C 40.612 0 48.75 2.132 48.512 9.12 Z"
              className="fill-primary"
              width="48.51694101411549px"
              height="9.164098006606281px"
              transform="translate(8.483 40.836)"
            />
          </svg>
        </div>
        <p className="text-primary font-bold">طرح های ما</p>
      </div>
      <div className="space-y-6 text-center">
        <div className="relative">
          <div className="absolute left-1/2 h-50 w-87 -translate-x-1/2 min-[439px]:translate-x-[-71%] min-[439px]:-translate-y-17 min-[480px]:translate-x-[-75%]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 310 80"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M 102.553 10.231 C 13.801 17.664 -40.643 84.063 188.321 68.702 C 417.285 53.341 215.171 -19.995 48.855 10.231"
                strokeWidth="3"
                className="stroke-primary"
                fill="transparent"
                style={{ strokeDasharray: '622.494px', strokeDashoffset: '622px' }}
                id="line"
              ></path>
            </svg>
          </div>
          <h2 className="flex flex-wrap justify-center gap-1.5 text-4xl leading-relaxed">
            <span>همراه شما</span>
            <span className="text-primary">در هر قدم از مسیر</span>
          </h2>
        </div>
        <p className="text-paragraph max-w-120">
          نخستین جلسه، آغاز یک گفت‌وگوی صمیمانه و حرفه‌ای است. پس از آن، روند درمان متناسب با شرایط
          و نیازهای شما ادامه پیدا می‌کند تا بتوانید با آرامش و اطمینان، مسیر تغییر را طی کنید.
        </p>
      </div>
    </div>
  );
}
