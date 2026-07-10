import Link from 'next/link';

import PrimaryButton from '@modules/PrimaryButton/PrimaryButton';
import { navLinks } from '@/data';

export default function Header() {
  return (
    <header
      id="header"
      data-theme="light"
      className="group/header sticky top-0 left-0 z-10 w-full lg:fixed"
    >
      <div className="absolute inset-0 hidden size-full mask-[linear-gradient(to_bottom,black_0%,black_70%,transparent_100%)] backdrop-blur-[5px] lg:block"></div>
      <div className="relative z-1 mx-auto flex max-w-360 items-center justify-between gap-4 bg-white p-4 md:px-10 md:py-5 lg:bg-transparent lg:px-16 lg:pt-6 lg:pb-5">
        <div className="flex items-center gap-14">
          <div className="flex items-center gap-3">
            <span className="bg-primary lg:group-data-[theme=dark]/header:bg-primary size-2 rounded-full transition-colors duration-300 lg:bg-white"></span>
            <h1 className="text-primary font-secondary lg:group-data-[theme=dark]/header:text-primary text-[26px] transition-colors duration-300 lg:text-white">
              کلینیک صدف
            </h1>
          </div>
          <nav className="hidden items-center gap-14 lg:flex">
            {navLinks.map((link) => (
              <div key={link.id}>
                <Link
                  className="group-data-[theme=dark]/header:text-primary text-white transition-colors duration-300"
                  href={link.href}
                >
                  {link.title}
                </Link>
              </div>
            ))}
          </nav>
        </div>
        <PrimaryButton className="lg:hidden">منو</PrimaryButton>
        <PrimaryButton className="hidden lg:block">دریافت نوبت</PrimaryButton>
      </div>
    </header>
  );
}
