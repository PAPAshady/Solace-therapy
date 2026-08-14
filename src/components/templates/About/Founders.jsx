'use client';
import Image from 'next/image';
import { useRef } from 'react';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import clients from '@/clients';

export default function Founders({ client }) {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.to('#img', {
        yPercent: () => (window.innerWidth >= 768 ? -18 : 18),
        ease: 'none',
        scrollTrigger: {
          trigger: '#img',
          start: 'top bottom',
          end: 'bottom center',
          scrub: true,
          markers: false,
        },
      });
    },
    { scope: container }
  );

  return (
    <div className="container">
      <div className="space-y-20 lg:space-y-30">
        <div className="flex flex-col gap-10">
          <div className="flex max-w-160 flex-col gap-4 lg:mx-auto">
            <h2 className="font-secondary text-5xl leading-snug whitespace-pre-wrap md:text-6xl">
              آشنایی با <span className="text-primary">بنیان‌گذار</span> کلینیک
            </h2>
            <div className="text-paragraph flex flex-col gap-4">
              <p className="leading-relaxed whitespace-pre-wrap">
                {clients[client].clinicName} توسط
                <span className="font-bold text-black"> {clients[client].founder}، </span>
                بنیان‌گذاری شد. باور او بر این است که تغییرات ماندگار از قدم‌های کوچک و آگاهانه آغاز
                می‌شوند و هر فرد، با همراهی و حمایت درست، می‌تواند مسیر رشد و سلامت روان خود را با
                اطمینان بیشتری طی کند.
              </p>
              <p>
                {clients[client].clinicName} با این هدف شکل گرفت که هر فرد، در هر مرحله از زندگی،
                جایی امن برای شنیده شدن، تأمل و یافتن مسیر پیش روی خود داشته باشد. سارا احمدی باور
                دارد که تغییرهای ماندگار، از فضایی سرشار از اعتماد، احترام و همراهی آغاز می‌شوند.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto flex max-w-250 flex-col gap-12 md:flex-row md:items-start md:gap-20 lg:gap-30">
          <div
            ref={container}
            className="flex h-120 w-full items-center justify-center overflow-hidden md:aspect-[.651338] md:h-auto md:max-h-150 md:w-1/2"
          >
            <Image
              id="img"
              className="size-[115%] max-w-none object-cover"
              alt={clients[client].founder}
              width={2048}
              height={2048}
              src={clients[client].founderImg || '/images/about/founder.webp'}
            />
          </div>
          <div className="border-primary flex flex-col gap-5 border-r-[3px] py-2 ps-10 md:w-1/2">
            <h4 className="font-semiboldl text-2xl leading-relaxed md:text-3xl">
              روان‌درمانی برای تغییر دادن آدم‌ها نیست؛ برای این است که در کنارشان باشیم تا{' '}
              <span className="text-primary">مسیر خودشان را پیدا کنند.</span>
            </h4>
            <span className="text-paragraph text-sm">— {clients[client].quote}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
