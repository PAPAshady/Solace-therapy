'use client';
import { useState, useRef } from 'react';
import { useParams } from 'next/navigation';

import gsap from 'gsap';
import { X } from 'lucide-react';

import PrimaryButton from '@modules/PrimaryButton/PrimaryButton';
import TransitionLink from '@modules/TransitionLink/TransitionLink';
import { navLinks } from '@/data';

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { client } = useParams();
  const menu = useRef(null);

  const toggle = () => {
    gsap.to(menu.current, {
      zIndex: isOpen ? -1 : 20,
      height: isOpen ? 0 : '100vh',
      ease: isOpen ? 'power2.in' : 'power3.out',
      duration: 0.7,
    });

    if (isOpen) {
      gsap.to('.link', {
        opacity: 0,
        y: 20,
        duration: 0.5,
      });
    } else {
      gsap.to('.link', {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: 0.4,
        stagger: 0.1,
      });
    }
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="lg:hidden">
      <PrimaryButton className="w-22!" onClick={toggle}>
        {isOpen ? <X /> : 'منو'}
      </PrimaryButton>
      <div ref={menu} className="fixed top-18 left-0 -z-1 h-0 w-screen overflow-hidden bg-white">
        <div className="flex size-full h-[calc(100vh-72px)] items-center justify-center text-center">
          <ul className="flex flex-col gap-14">
            {navLinks.map((link) => (
              <li className="link" key={link.id} onClick={() => setIsOpen(false)}>
                <TransitionLink className="text-2xl font-semibold" href={`/demo/${client}${link.href}`}>
                  {link.title}
                </TransitionLink>
              </li>
            ))}
            <li className="link">
              <TransitionLink href={`/demo/${client}/book-session`}>
                <PrimaryButton>دریافت نوبت</PrimaryButton>
              </TransitionLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
