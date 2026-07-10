'use client';
import Link from 'next/link';

import clsx from 'clsx';

function Dot({ variant, dir }) {
  return (
    <span
      className={clsx(
        'lg:group-data-[theme=light]/header:group-hover:bg-primary bg-white absolute top-1/2 block size-1 -translate-1/2 rounded-full transition-all duration-500 lg:group-data-[theme=dark]/header:bg-white lg:group-data-[theme=light]/header:bg-black',
        variant && (variant === 'primary' ? 'bg-white!' : 'group-hover:bg-primary! bg-black!'),
        dir === 'right' ? 'right-4 group-hover:-right-4' : '-left-4 group-hover:left-4'
      )}
    />
  );
}

export default function PrimaryButton({ children, variant, href = '', className, ...props }) {
  return (
    <Link
      href={href}
      className={clsx(
        'font-primary bg-primary text-white group lg:group-data-[theme=light]/header:hover:text-primary lg:group-data-[theme=dark]/header:bg-primary relative flex overflow-hidden rounded-full py-2 ps-12 pe-4 text-sm transition-all duration-500 hover:ps-4 hover:pe-12 lg:text-base lg:group-data-[theme=dark]/header:text-white lg:group-data-[theme=light]/header:bg-white lg:group-data-[theme=light]/header:text-black',
        variant &&
          (variant === 'primary'
            ? 'bg-primary! text-white!'
            : 'hover:text-primary! bg-white! text-black!'),
        className
      )}
      {...props}
    >
      <Dot variant={variant} dir="right" />
      <p>{children}</p>
      <Dot variant={variant} dir="left" />
    </Link>
  );
}
