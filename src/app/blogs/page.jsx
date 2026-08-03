import Hero from '@templates/shared/Hero';
import { heroContent,  } from '@/data';

export default function page() {
  return (
    <div className="space-y-25 pb-25 lg:space-y-50 lg:pb-50">
      <Hero
        title={heroContent.blogs.title}
        description={heroContent.blogs.description}
        subtitle={heroContent.blogs.subtitle}
      />
    </div>
  );
}
