'use client';
import { useParams } from 'next/navigation';

import { CheckCircle } from 'lucide-react';

import PrimaryButton from '@modules/PrimaryButton/PrimaryButton';
import TransitionLink from '../TransitionLink/TransitionLink';

export default function PlanCard({ title, description, price, points }) {
  const { client } = useParams();
  return (
    <div className="hover:border-primary flex flex-col gap-10 rounded-2xl border border-white bg-white p-8 transition-colors duration-300">
      <div className="space-y-2.5">
        <h3 className="font-secondary text-3xl">{title}</h3>
        <p className="text-paragraph text-sm">{description}</p>
      </div>
      <div className="flex items-center gap-2 whitespace-nowrap">
        <span className="text-primary font-primary text-[26px]">
          {price.toLocaleString('fa')} تومان
        </span>
        <span className="text-paragraph mt-2 text-sm">/ ساعتی</span>
      </div>
      <ul className="flex flex-col gap-4">
        {points.map((point) => (
          <li key={point} className="flex items-center gap-2">
            <CheckCircle size={24} className="text-primary" />
            <span className="text-paragraph">{point}</span>
          </li>
        ))}
      </ul>
      <TransitionLink href={`/demo/${client}/book-session`}>
        <PrimaryButton>شروع مسیر</PrimaryButton>
      </TransitionLink>
    </div>
  );
}
