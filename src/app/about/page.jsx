import Hero from '@templates/shared/Hero';
import AboutUs from '@templates/About/AboutUs';
import Founders from '@templates/About/Founders';
import Team from '@templates/About/Team';
import Quote from '@templates/About/Quote';
import Customers from '@templates/shared/Customers';
import { customers } from '@/data';

export default function page() {
  return (
    <div className="space-y-25 pb-16 lg:space-y-45">
      <Hero />
      <AboutUs />
      <Founders />
      <Team />
      <Quote />
      <Customers
        title={customers[2].title}
        description={customers[2].description}
        images={customers[2].images}
      />
    </div>
  );
}
