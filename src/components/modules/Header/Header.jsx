'use client';
import { usePathname, useParams } from 'next/navigation';
import { useRef } from 'react';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import PrimaryButton from '@modules/PrimaryButton/PrimaryButton';
import TransitionLink from '@modules/TransitionLink/TransitionLink';
import HamburgerMenu from '@modules/HamburgerMenu/HamburgerMenu';
import clients from '@/clients';
import { navLinks } from '@/data';

export default function Header() {
  const headerRef = useRef(null);
  const pathname = usePathname();
  const { client } = useParams();

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add('(min-width: 1024px)', () => {
        gsap.fromTo('#bookSessionBtn', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1 });
        gsap.fromTo(
          '#navLink',
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.6, delay: 1, stagger: 0.1 }
        );
      });

      return () => mm.revert();
    },
    { scope: headerRef, dependencies: [pathname] }
  );

  return (
    <header
      key={pathname}
      ref={headerRef}
      id="header"
      data-theme="dark"
      className="group/header sticky top-0 left-0 z-10 w-full lg:fixed"
    >
      <div className="absolute inset-0 hidden size-full mask-[linear-gradient(to_bottom,black_0%,black_70%,transparent_100%)] backdrop-blur-[5px] lg:block"></div>
      <div className="relative z-1 mx-auto flex max-w-360 items-center justify-between gap-4 bg-white p-4 md:px-10 md:py-5 lg:bg-transparent lg:px-16 lg:pt-6 lg:pb-5">
        <div className="flex items-center gap-14">
          <TransitionLink href={`/${client}/`} id="navLink" className="flex items-center gap-3">
            <span className="bg-primary lg:group-data-[theme=dark]/header:bg-primary size-2 rounded-full transition-colors duration-300 lg:bg-white"></span>
            <h1 className="text-primary font-secondary lg:group-data-[theme=dark]/header:text-primary text-[26px] transition-colors duration-300 lg:text-white">
              {clients[client]?.logo || 'لوگو'}
            </h1>
          </TransitionLink>
          <nav className="hidden items-center gap-14 lg:flex">
            {navLinks.map((link) => (
              <div id="navLink" key={link.id}>
                <TransitionLink
                  className="group-data-[theme=dark]/header:text-primary group-data-[theme=dark]/header:hover:border-primary border-b border-transparent pb-0.5 text-white transition-colors duration-300 group-data-[theme=light]/header:hover:border-white"
                  href={`/${client}${link.href}` }
                >
                  {link.title}
                </TransitionLink>
              </div>
            ))}
          </nav>
        </div>
        <HamburgerMenu />
        <div className="hidden lg:block" id="bookSessionBtn">
          <TransitionLink href={`/${client}/book-session`}>
            <PrimaryButton>دریافت نوبت</PrimaryButton>
          </TransitionLink>
        </div>
      </div>
    </header>
  );
}
