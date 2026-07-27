import Image from 'next/image';
import Link from 'next/link';

import clsx from 'clsx';

import PrimaryButton from '@modules/PrimaryButton/PrimaryButton';
import { cardShapes } from '@/data';

export default function JournalCard({ index, title, description, image, className }) {
  return (
    <div className={clsx('flex flex-col', className)}>
      <Link href="">
        <Image
          alt={title}
          width={2048}
          height={2048}
          src={image}
          style={{ maskImage: `url(${cardShapes[index % cardShapes.length]})` }}
          className="aspect-square w-full mask-contain mask-center mask-no-repeat"
        />
      </Link>
      <div className="mb-6 flex grow flex-col space-y-4 text-center">
        <h3 className="grow">
          <Link href="" className="font-secondary text-primary line-clamp-2 text-3xl">
            {title}
          </Link>
        </h3>
        <p className="text-paragraph line-clamp-2 text-sm leading-relaxed">{description}</p>
      </div>
      <PrimaryButton href="" className="mx-auto">
        بیشتر بخوانید
      </PrimaryButton>
    </div>
  );
}
