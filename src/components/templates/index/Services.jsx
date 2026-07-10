'use client';
import { useRef } from 'react';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import ServiceCard from '@modules/ServiceCard/ServiceCard';
import { services } from '@/data';

export default function Services() {
  const container = useRef(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray('#serviceCard', container.current);
      const MIN_HEIGHT = 400;
      const MAX_HEIGHT = 520;
      const MAX_DISTANCE = container.current.clientWidth;

      const setters = cards.map((card) =>
        gsap.quickTo(card, 'height', {
          duration: 0.35,
          ease: 'power2.out',
        })
      );

      const handleMove = (e) => {
        cards.forEach((card, index) => {
          const rect = card.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const distance = Math.abs(e.clientX - centerX);

          let influence = 1 - distance / MAX_DISTANCE;
          influence = gsap.utils.clamp(0, 1, influence);
          influence = influence * influence;

          const height = MIN_HEIGHT + influence * (MAX_HEIGHT - MIN_HEIGHT);
          setters[index](height);
        });
      };

      const handleLeave = () => setters.forEach((set) => set(MIN_HEIGHT));

      if (window.innerWidth >= 1280) {
        container.current.addEventListener('mousemove', handleMove);
        container.current.addEventListener('mouseleave', handleLeave);
      }

      return () => {
        container.current.removeEventListener('mousemove', handleMove);
        container.current.removeEventListener('mouseleave', handleLeave);
      };
    },
    { scope: container }
  );

  return (
    <div ref={container} className="container flex items-center pt-10 sm:p-0">
      <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-2 xl:h-130 xl:grid-cols-4!">
        {services.map(({ id, title, description, image }) => (
          <ServiceCard key={id} id={id} title={title} description={description} image={image} />
        ))}
      </div>
    </div>
  );
}
