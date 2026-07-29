import Hero from '@templates/shared/Hero';
import { heroContent } from '@/data';

export default function page() {
  return (
    <div className="space-y-25 pb-16 lg:space-y-45">
      <Hero
        title={heroContent.stories.title}
        description={heroContent.stories.description}
        subtitle={heroContent.stories.subtitle}
      />
    </div>
  );
}
