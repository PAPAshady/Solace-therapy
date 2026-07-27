import Hero from '@templates/shared/Hero';
import AboutUs from '@templates/About/AboutUs';
import Founders from '@templates/About/Founders';

export default function page() {
  return (
    <div className="space-y-25 pb-16 lg:space-y-45">
      <Hero />
      <AboutUs />
      <Founders />
    </div>
  );
}
