import Hero from '@templates/shared/Hero';
import AboutUs from '@templates/About/AboutUs';
import Founders from '@templates/About/Founders';
import Team from '@templates/About/Team';
import Quote from '@templates/About/Quote';

export default function page() {
  return (
    <div className="space-y-25 pb-16 lg:space-y-45">
      <Hero />
      <AboutUs />
      <Founders />
      <Team />
      <Quote />
    </div>
  );
}
