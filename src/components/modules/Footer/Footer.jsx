'use client';
import Link from 'next/link';
import { useRef } from 'react';
import { useParams } from 'next/navigation';

import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Input from '@modules/Input/Input';
import PrimaryButton from '@modules/PrimaryButton/PrimaryButton';
import { footerRelatedLinks, footerServicesLinks } from '@/data';
import { setTheme } from '@/utils';
import TransitionLink from '@modules/TransitionLink/TransitionLink';
import clients from '@/clients';

export default function Footer() {
  const container = useRef(null);
  const { client } = useParams();

  useGSAP(
    () => {
      const setDark = () => setTheme('dark');
      const setLight = () => setTheme('light');
      ScrollTrigger.create({
        trigger: container.current,
        start: 'top top',
        end: 'bottom top',
        onEnter: setLight,
        onLeave: setDark,
        onLeaveBack: setDark,
        onEnterBack: setLight,
        invalidateOnRefresh: true,
        markers: false,
      });
    },
    { scope: container }
  );

  return (
    <footer
      ref={container}
      style={{ backgroundImage: 'url(/images/footer.webp)' }}
      className="relative flex min-h-screen flex-col items-center justify-center bg-cover bg-fixed bg-center bg-no-repeat"
    >
      <div className="absolute inset-0 size-full bg-black/10"></div>
      <div className="relative z-1 container flex flex-col gap-20 pt-20 pb-10 lg:pt-50 lg:pb-16">
        <div className="flex flex-col gap-20 lg:flex-row lg:gap-40">
          <div className="flex max-w-130 flex-col gap-12 lg:w-1/2 lg:max-w-none">
            <div className="flex flex-col gap-6">
              <h2 className="font-secondary text-5xl leading-tight text-white">عضویت در خبرنامه</h2>
              <p className="text-sm leading-relaxed text-[#ffffffa6]">
                در خبرنامه ما، تازه‌ترین مقالات روانشناسی، نکات کاربردی و مطالبی درباره رشد فردی،
                سلامت روان و مهارت‌های زندگی را به‌صورت دوره‌ای با شما به اشتراک می‌گذاریم تا با
                آگاهی، آرامش و تعادل بیشتری مسیر زندگی را ادامه دهید.
              </p>
            </div>
            <form className="flex flex-col gap-6 sm:flex-row">
              <Input
                className="border-white/70 text-white placeholder:text-white/70 focus:border-white"
                placeholder="ایمیل شما"
                type="email"
              />
              <PrimaryButton type="submit" className="shrink-0" variant="ghost">
                عضویت
              </PrimaryButton>
            </form>
          </div>
          <div className="flex flex-col gap-x-5 gap-y-16 sm:flex-row lg:w-1/2">
            <div className="flex flex-col gap-8 sm:grow">
              <p className="font-secondary text-2xl font-semibold text-[#ffffffa6]">
                لینک های مرتبط
              </p>
              <ul className="flex flex-col gap-10">
                {footerRelatedLinks.map((link) => (
                  <li key={link.id}>
                    <TransitionLink
                      href={`/demo/${client}${link.href}`}
                      className="font-bold text-white transition-colors duration-300 hover:text-white/70"
                    >
                      {link.title}
                    </TransitionLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-8 sm:grow">
              <p className="font-secondary text-2xl font-semibold text-[#ffffffa6]">خدمات</p>
              <ul className="flex flex-col gap-10">
                {footerServicesLinks.map((link) => (
                  <li key={link.id}>
                    <TransitionLink
                      href={`/demo/${client}${link.href}`}
                      className="font-bold text-white transition-colors duration-300 hover:text-white/70"
                    >
                      {link.title}
                    </TransitionLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-1 text-lg sm:flex-row">
            <p className="text-[#ffffffa6]">با ما تماس بگیرید :</p>
            <Link href={`tel:${clients[client]?.phone}`} className="text-white hover:underline">
              {clients[client]?.phone || '09123456789'}
            </Link>
          </div>
        </div>
        <p className="text-center text-sm text-[#ffffffa6]">
          © {clients[client]?.clinicName}. تمامی حقوق محفوظ است ۱۴۰۵.
        </p>
      </div>
    </footer>
  );
}
