'use client';
import Image from 'next/image';
import { useRef } from 'react';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import { setTheme } from '@/utils';
import clients from '@/clients';

export default function Quote({ client }) {
  const container = useRef(null);
  const setDark = () => setTheme('dark');
  const setLight = () => setTheme('light');
  useGSAP(
    () => {
      if (window.innerWidth >= 1024) {
        gsap.to(['#line1', '#line2'], {
          strokeDashoffset: () => (window.innerHeight >= 1024 ? 2200 : 3000),
          scrollTrigger: {
            trigger: container.current,
            start: `top-=10% center`,
            end: 'bottom+=45% center-=100',
            markers: false,
            scrub: 1.5,
            invalidateOnRefresh: true,
          },
        });

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
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-[#fafafa] lg:h-[105vh]"
    >
      <div className="absolute inset-0 size-full">
        <Image
          alt=""
          src="/images/about/quote.webp"
          width={2048}
          height={2048}
          className="size-full scale-x-[-1] object-cover object-[70%_center] min-[480px]:object-center"
        />
      </div>
      <div className="absolute -top-20 right-[calc(70%-340px)] hidden h-[2000px] w-170 lg:block">
        <div className="size-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-full opacity-20"
            viewBox="0 0 680 2000"
          >
            <path
              d="M 298.313 -3535 C 101.479 -3135.924 333.236 -2988.954 499.813 -2949.5 C 666.39 -2910.046 520.708 -3112.549 318.313 -3080 C 115.919 -3047.451 178.693 -2692.619 444.667 -2641.853 C 710.64 -2591.087 428.009 -2655.799 396.684 -2410.408 C 365.359 -2165.017 432.207 -1902.333 190.257 -2080.561 C -51.693 -2258.789 -3.614 -2372.426 243.238 -2169.926 C 490.091 -1967.426 790.221 -1862.402 459.161 -1662.353 C 128.102 -1462.305 427.86 -1370.353 348.701 -1262.219 C 269.541 -1154.086 37.072 -1176.137 359.813 -1326.5 C 682.555 -1476.863 616.69 -1346.107 377.191 -867.106 C 137.691 -388.106 248.214 -520.692 444.667 -520.692 C 641.119 -520.692 703.16 -270.252 485.152 -96.961 C 267.144 76.329 250.085 279.198 485.152 298.654 C 720.22 318.111 628.502 212.287 499.647 195.232 C 370.792 178.176 316.972 226.809 243.238 288.613 C 169.505 350.417 56.615 660.552 396.684 509.515 C 736.753 358.478 696.824 843.029 418.176 809.741 C 139.528 776.453 360.872 751.613 444.667 1027.631 C 528.461 1303.648 187.957 1523.856 286.223 1622.56 C 384.489 1721.264 561.553 1366.845 377.191 1484.998 C 192.829 1603.152 102.163 1788.513 305.716 1906.72 C 509.269 2024.928 854.725 1993.704 444.667 1834.927 C 34.608 1676.15 -29.985 2077.896 243.238 2164.774 C 516.461 2251.652 514.579 2391.801 359.697 2465"
              stroke="white"
              strokeWidth="2"
              fill="transparent"
              id="line1"
              style={{ strokeDasharray: 12838.3, strokeDashoffset: 6060 }}
            ></path>
          </svg>
        </div>
      </div>
      <div className="absolute -top-20 right-[calc(70%-340px)] hidden h-[2000px] w-170 lg:block">
        <div className="size-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="size-full" viewBox="0 0 680 2000">
            <path
              d="M 288.784 -3535 C 202.776 -3299.462 209.274 -3008.637 516.263 -2931.38 C 823.252 -2854.123 223.717 -3301.427 185.057 -2931.38 C 146.397 -2561.333 866.552 -2594.991 533.173 -2551.262 C 199.794 -2507.533 618.875 -1774.813 141.673 -2141.955 C -335.528 -2509.097 898.694 -1915.924 455.173 -1688.115 C 11.652 -1460.306 525.457 -1266.808 242.173 -1206.253 C -41.111 -1145.699 836.443 -1667.952 500.173 -1084 C 163.903 -500.048 142.591 -481.818 318.673 -520.5 C 494.755 -559.182 819.478 -366.518 474.173 -65.898 C 128.868 234.722 497.924 356.534 597.173 290.369 C 696.422 224.204 288.499 54.284 198.173 407.457 C 107.848 760.629 487.414 361.327 597.173 490.519 C 706.933 619.711 497.466 878.512 315.673 792.746 C 133.88 706.979 576.582 850.053 369.423 1308.132 C 162.265 1766.212 435.515 1632.326 455.173 1537.805 C 474.831 1443.283 96.831 1607.487 228.173 1803.504 C 359.515 1999.52 894.701 2006.779 516.173 1835 C 137.645 1663.221 -143.336 2042.671 234.673 2180.5 C 612.682 2318.329 369.423 2465 369.423 2465"
              stroke="white"
              strokeWidth="2"
              fill="transparent"
              id="line2"
              style={{ strokeDasharray: 12838.3, strokeDashoffset: 6060 }}
            ></path>
          </svg>
        </div>
      </div>
      <div className="relative z-1 container min-[480px]:py-20">
        <div className="flex flex-col gap-6">
          <h2 className="font-secondary max-w-180 text-5xl leading-tight text-white md:text-6xl">
            ”هر مسیر، داستان خودش را دارد؛ مهم این است که قدم بعدی را بردارید، حتی اگر کوچک باشد.“
          </h2>
          <p className="text-white/65">{clients[client].quote}</p>
        </div>
      </div>
    </div>
  );
}
