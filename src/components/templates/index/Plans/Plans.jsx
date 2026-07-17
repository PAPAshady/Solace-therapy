import PlansHeader from './PlansHeader';
import PlanCard from '@modules/PlanCard/PlanCard';

export default function Plans() {
  return (
    <div className="bg-[#fafafa] py-20 lg:mt-[-20vh]">
      <div className="">
        <div className="space-y-12 overflow-hidden">
          <PlansHeader />
          <div className="container grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <PlanCard />
            <PlanCard />
            <PlanCard />
          </div>
        </div>
        <div className="container flex flex-col gap-9.5 pt-20 md:flex-row md:items-center md:justify-between md:gap-30 md:pt-40">
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
    </div>
  );
}
