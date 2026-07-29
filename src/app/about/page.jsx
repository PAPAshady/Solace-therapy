import Hero from '@templates/shared/Hero';
import AboutUs from '@templates/About/AboutUs';
import Founders from '@templates/About/Founders';
import Team from '@templates/About/Team';
import Quote from '@templates/About/Quote';
import Customers from '@templates/shared/Customers';
import FAQ from '@templates/shared/FAQ';
import { customers, heroContent } from '@/data';

export default function page() {
  return (
    <div className="space-y-25 lg:space-y-45">
      <Hero
        title={heroContent.about.title}
        description={heroContent.about.description}
        subtitle={heroContent.about.subtitle}
      />
      <AboutUs />
      <Founders />
      <Team />
      <Quote />
      <Customers
        title={customers[2].title}
        description={customers[2].description}
        images={customers[2].images}
      />
      <div className="bg-[#fafafa] py-10">
        <FAQ />
      </div>
    </div>
  );
}
