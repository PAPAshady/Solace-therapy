import Image from 'next/image';

import PrimaryButton from '@modules/PrimaryButton/PrimaryButton';
import { services } from '@/data';

export default function Services() {
  return (
    <section>
      {/* mobile layout */}
      <div className="space-y-20">
        {services.map((service) => (
          <div key={service.id} className="flex flex-col gap-10">
            <div className="h-100 md:h-160">
              <Image
                alt={service.title}
                width={2048}
                height={2048}
                src={`/images/services/${service.image}`}
                className="size-full object-cover"
              />
            </div>
            <div className="container">
              <div className="flex max-w-160 flex-col gap-10 md:gap-12">
                <div className="flex flex-col gap-8">
                  <h2 className="font-secondary text-[64px] leading-snug md:text-[88px]">
                    {service.title}
                  </h2>
                  <p className="text-paragraph leading-relaxed whitespace-pre-wrap">
                    {service.longDescription}
                  </p>
                </div>
                <div>
                  <PrimaryButton href="/book-session">رزرو نوبت</PrimaryButton>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
