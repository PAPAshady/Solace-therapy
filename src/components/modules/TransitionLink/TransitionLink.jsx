'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import gsap from 'gsap';

export default function TransitionLink({ children, href = '', replace = false, ...props }) {
  const router = useRouter();

  const clickHandler = (e) => {
    const url = new URL(href, window.location.href);

    const shouldHandleNormally =
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey ||
      url.hash !== '' ||
      url.origin !== window.location.origin ||
      (url.pathname === window.location.pathname && url.search === window.location.search);

    if (shouldHandleNormally) return;

    e.preventDefault();

    gsap.to('#navTransitionOverlay', {
      opacity: 1,
      zIndex: 50,
      duration: 0.2,
      ease: 'none',
      onComplete: () => {
        if (replace) router.replace(href);
        else router.push(href);
      },
    });
  };

  return (
    <Link href={href} onClick={clickHandler} {...props}>
      {children}
    </Link>
  );
}
