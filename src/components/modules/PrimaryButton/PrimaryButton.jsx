'use client';
import Link from 'next/link';

import clsx from 'clsx';

function Dot({ variant, dir }) {
  return (
    <span
      className={clsx(
        'absolute top-1/2 block size-1 -translate-1/2 rounded-full transition-all duration-350',
        variant === 'primary' ? 'bg-white' : 'group-hover:bg-primary bg-black',
        dir === 'right' ? 'right-4 group-hover:-right-4' : '-left-4 group-hover:left-4'
      )}
    />
  );
}

export default function PrimaryButton({
  children,
  variant = 'primary',
  href = '',
  className,
  ...props
}) {
  return (
    <Link
      href={href}
      className={clsx(
        'font-primary group relative overflow-hidden rounded-full py-2 ps-12 pe-4 text-sm transition-all duration-350 hover:ps-4 hover:pe-12',
        variant === 'primary' ? 'bg-primary text-white' : 'hover:text-primary bg-white text-black',
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
