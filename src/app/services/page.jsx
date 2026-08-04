import Hero from '@templates/shared/Hero';
import Services from '@templates/Services/Services';
import Stats from '@templates/shared/Stats';
import FAQ from '@templates/shared/FAQ';
import BookSession from '@templates/shared/BookSession';
import { heroContent } from '@/data';

export default function page() {
  return (
    <div className="space-y-20 pb-25 lg:space-y-40 lg:pb-50">
      <Hero
        title={heroContent.services.title}
        description={heroContent.services.description}
        subtitle={heroContent.services.subtitle}
      />
      <div>
        <div className="pb-20 lg:p-0">
          <Services />
        </div>
        <Stats />
        <div className="bg-[#fafafa] md:pt-16">
          <FAQ />
        </div>
      </div>
      <BookSession />
    </div>
  );
}
