import Link from 'next/link';

export default function ServiceCard({ id, image, title, description }) {
  return (
    <div
      key={id}
      className="group h-100 max-h-137.5 origin-center bg-cover bg-center transition-all duration-500 ease-out md:h-112.5"
      style={{ backgroundImage: `url(/images/services/${image})` }}
      id="serviceCard"
    >
      <Link
        href=""
        className="container flex size-full flex-col justify-between gap-4 px-6 pt-4 pb-6"
      >
        <h3 className="font-secondary line-clamp-2 h-24 text-[32px] text-white">{title}</h3>
        <div className="row flex flex-col justify-end gap-8 xl:grow xl:gap-0">
          <p className="flex grow items-center text-sm leading-loose text-white sm:text-base xl:text-sm">
            {description}
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
  );
}
