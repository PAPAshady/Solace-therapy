import Hero from '@templates/shared/Hero';
import AboutUs from '@templates/About/AboutUs';

export default function page() {
  return (
    <div className="space-y-25 pb-16 lg:space-y-50">
      <Hero />
      <AboutUs />
    </div>
  );
}
