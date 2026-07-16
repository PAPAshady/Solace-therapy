import Banner from '@templates/index/Banner';
import Services from '@templates/index/Services';
import AboutUs from '@templates/index/AboutUs';
import Customers from '@templates/index/Customers';
import HowItWorks from '@templates/index/HowItWorks';
import Plans from '@templates/index/Plans/Plans';
import Quote from '@templates/index/Quote';
import Journal from '@templates/index/Journal';
import Stats from '@templates/index/Stats';
import FAQ from '@templates/index/FAQ';
import { customers } from '@/data';

export default function page() {
  return (
    <>
      <Banner />
      <div className="space-y-25 pb-16 lg:space-y-50">
        <Services />
        <AboutUs />
        <Customers
          title={customers[0].title}
          description={customers[0].description}
          images={customers[0].images}
        />
        <HowItWorks />
        <div>
          <Plans />
          <Quote />
        </div>
        <Customers
          title={customers[1].title}
          description={customers[1].description}
          images={customers[1].images}
        />
        <Journal />
        <div>
          <Stats />
          <FAQ />
        </div>
      </div>
    </>
  );
}
