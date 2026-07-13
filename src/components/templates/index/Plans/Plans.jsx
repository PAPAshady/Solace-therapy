import PlansHeader from './PlansHeader';
import PlanCard from '@modules/PlanCard/PlanCard';

export default function Plans() {
  return (
    <div className="bg-[#fafafa] py-20 lg:mt-[-20vh]">
      <div className="container">
        <div className="space-y-12 overflow-hidden">
          <PlansHeader />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <PlanCard />
            <PlanCard />
            <PlanCard />
          </div>
        </div>
      </div>
    </div>
  );
}
