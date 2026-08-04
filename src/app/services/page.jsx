import Hero from '@templates/shared/Hero';
import { heroContent } from '@/data';

export default function page() {
  return (
    <div className="space-y-20 pb-25 lg:space-y-40 lg:pb-50">
      <Hero
        title={heroContent.services.title}
        description={heroContent.services.description}
        subtitle={heroContent.services.subtitle}
      />
    </div>
  );
}
