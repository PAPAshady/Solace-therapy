import TeamCard from '@modules/TeamCard/TeamCard';
import { team } from '@/data';

export default function Team() {
  return (
    <div className="container lg:-mt-8">
      <div className="space-y-8">
        <div className="space-y-7.5 text-center">
          <div className="flex flex-col items-center gap-6">
            <div className="size-16">
              <svg
                role="presentation"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
                className="size-full"
              >
                <path
                  d="M 1.28 0.036 C 3.221 -0.542 3.539 5.95 4.159 7.563 C 5.401 10.802 9.709 15.328 13.149 15.97 C 20.662 17.372 26.485 10.147 33.482 8.867 C 35.133 8.566 40.106 7.717 39.047 10.992 C 38.753 11.896 32.361 13.007 30.904 13.61 C 25.818 15.724 22.81 19.861 16.464 20.345 C 8.259 20.972 0.598 13.698 0.02 5.456 C -0.056 4.373 0.03 0.408 1.283 0.033 Z"
                  className="fill-primary"
                  transform="translate(11.046 22.107)"
                />
                <path
                  d="M 0 14.352 C 0.561 8.669 6.814 3.93 11.759 1.921 C 20.251 -1.528 35.338 -0.382 42.525 5.763 C 44.259 7.243 46.958 10.002 45.657 12.449 C 42.899 12.831 41.02 9.637 38.48 8.112 C 28.486 2.117 13.658 2.121 4.838 10.317 C 4.031 11.064 0.983 15.355 0.003 14.349 Z"
                  className="fill-primary"
                  transform="translate(9 43.499)"
                />
                <path
                  d="M 6.499 0.083 C 10.886 -0.828 14.378 5.948 14.208 9.622 C 13.977 14.702 9.883 20.483 4.367 19.599 C -3.544 18.33 0.598 1.31 6.499 0.083 Z M 7.201 3.565 C 4.727 3.796 2.834 10.323 2.827 12.479 C 2.81 16.476 6.308 18.481 9.011 14.891 C 10.914 12.364 11.461 8.388 9.893 5.591 C 9.412 4.732 8.284 3.459 7.201 3.561 Z"
                  className="fill-primary"
                  transform="translate(24.188 6)"
                />
              </svg>
            </div>
            <p className="text-primary font-semibold">تیم درمان ما</p>
          </div>
          <h2 className="text-4xl leading-snug lg:text-5xl">همراهان شما در مسیر درمان</h2>
          <p className="text-paragraph mx-auto max-w-120">
            در کلینیک صدف، شما فقط یک مراجعه‌کننده نیستید. اعضای تیم ما با گوش دادن، همراهی و احترام
            به مسیر منحصربه‌فرد هر فرد، در کنار شما هستند تا قدم‌های بعدی را با اطمینان بیشتری
            بردارید.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-10 min-[530px]:grid-cols-2 sm:gap-x-20 md:gap-x-30 lg:grid-cols-3 lg:pb-25">
          {team.map((therapist, index) => (
            <TeamCard
              className={index === 1 && 'lg:translate-y-20'}
              key={therapist.id}
              index={index}
              {...therapist}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-9.5 pt-20 md:flex-row md:items-center md:justify-between md:gap-30 md:pt-30">
        <h2 className="text-[34px] md:w-1/2">
          حمایتی آگاهانه، بر پایه تجربه و با هدف{' '}
          <span className="text-primary">ایجاد تغییری ماندگار</span>
        </h2>
        <p className="text-paragraph md:w-1/2">
          جلسات درمانی ما فضایی امن و آرام فراهم می‌کنند تا تغییر، به شکلی طبیعی و ماندگار شکل
          بگیرد. در طول مسیر، با دقت به نیازهای شما گوش می‌دهیم، هر جا لازم باشد مسیر را شفاف‌تر
          می‌کنیم و در رسیدن به اهدافی که خودتان انتخاب کرده‌اید، همراهتان هستیم.
        </p>
      </div>
    </div>
  );
}
