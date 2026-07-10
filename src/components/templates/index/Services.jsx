import Link from 'next/link';

import { services } from '@/data';

export default function Services() {
  return (
    <div className="container pt-10 sm:p-0">
      <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-2 xl:grid-cols-4!">
        {services.map((service) => (
          <div
            key={service.id}
            className="group bg-cover bg-center"
            style={{ backgroundImage: `url(/images/services/${service.image})` }}
          >
            <Link
              href=""
              className="container flex h-100 w-full max-w-140 flex-col justify-between gap-4 bg-black/20 px-6 pt-4 pb-6 transition-all duration-500 lg:h-112.5"
            >
              <h3 className="font-secondary text-[32px] text-white">{service.title}</h3>
              <div className="flex grow flex-col justify-end gap-8">
                <p className="text-sm leading-loose text-white sm:text-base xl:text-sm">
                  {service.description}
                </p>
                <div className="flex items-center gap-4">
                  <span className="size-1 rounded-full bg-white"></span>
                  <span className="font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    بیشتر بدانید
                  </span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
