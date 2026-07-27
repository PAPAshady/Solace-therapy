import Image from 'next/image';

import clsx from 'clsx';

import { cardShapes } from '@/data';

export default function TeamCard({ index, name, description, image, className }) {
  return (
    <div className={clsx('flex flex-col', className)}>
      <Image
        alt={name}
        width={2048}
        height={2048}
        src={image}
        style={{ maskImage: `url(${cardShapes[index % cardShapes.length]})` }}
        className="aspect-square w-full mask-contain mask-center mask-no-repeat"
      />
      <div className="mb-6 flex grow flex-col space-y-4 text-center">
        <h3 className="font-secondary text-primary text-3xl">{name}</h3>
        <p className="text-paragraph line-clamp-3 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
