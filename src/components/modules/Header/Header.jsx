import Link from 'next/link';

import PrimaryButton from '@modules/PrimaryButton/PrimaryButton';
import { navLinks } from '@/data';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-10 w-full">
      <div className="mx-auto flex max-w-360 items-center justify-between gap-4 p-4 md:px-10 md:py-5 lg:px-16 lg:pt-10 lg:pb-0">
        <div className="flex items-center gap-14">
          <div className="flex items-center gap-3">
            <span className="bg-primary size-2 rounded-full lg:bg-white"></span>
            <h1 className="text-primary font-secondary text-[26px] lg:text-white">کلینیک صدف</h1>
          </div>
          <nav className="hidden items-center gap-14 lg:flex">
            {navLinks.map((link) => (
              <div key={link.id}>
                <Link className="text-white" href={link.href}>
                  {link.title}
                </Link>
              </div>
            ))}
          </nav>
        </div>
        <PrimaryButton className="lg:hidden">منو</PrimaryButton>
        <PrimaryButton variant="ghost" className="hidden lg:block">
          دریافت نوبت
        </PrimaryButton>
      </div>
    </header>
  );
}
