import { CheckCircle } from 'lucide-react';

import PrimaryButton from '@modules/PrimaryButton/PrimaryButton';
import { planCardPoints } from '@/data';

export default function PlanCard() {
  return (
    <div className="hover:border-primary flex flex-col gap-10 rounded-2xl border border-white bg-white p-8 transition-colors duration-300">
      <div className="space-y-2.5">
        <h3 className="font-secondary text-3xl">مشاوره بالینی</h3>
        <p className="text-paragraph text-sm">یک متن تستی راجب مشاوره بالینی که مثلا خیلی خوبه</p>
      </div>
      <div className="flex items-center gap-2 whitespace-nowrap">
        <span className="text-primary font-primary text-[26px]">
          {(500000).toLocaleString('fa')} تومان
        </span>
        <span className="text-paragraph mt-2 text-sm">/ ساعتی</span>
      </div>
      <ul className="flex flex-col gap-4">
        {planCardPoints.map((point) => (
          <li key={point.id} className="flex items-center gap-2">
            <CheckCircle size={24} className="text-primary" />
            <span className="text-paragraph">{point.title}</span>
          </li>
        ))}
      </ul>
      <PrimaryButton href="" className="w-max">
        شروع مسیر
      </PrimaryButton>
    </div>
  );
}
