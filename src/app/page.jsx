import Banner from '@templates/index/Banner';
import Services from '@templates/index/Services';
import AboutUs from '@templates/index/AboutUs';
import Customers from '@templates/index/Customers';
import HowItWorks from '@templates/index/HowItWorks';
import Plans from '@templates/index/Plans/Plans';
import Quote from '@templates/index/Quote';

export default function page() {
  return (
    <>
      <Banner />
      <div className="space-y-25 pb-16 lg:space-y-50">
        <Services />
        <AboutUs />
        <Customers />
        <HowItWorks />
        <div>
          <Plans />
          <Quote />
        </div>
      </div>
    </>
  );
}
