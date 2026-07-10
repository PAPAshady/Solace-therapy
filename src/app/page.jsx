import Banner from '@templates/index/Banner';
import Services from '@templates/index/Services';

export default function page() {
  return (
    <>
      <Banner />
      <div className="pb-16">
        <Services />
      </div>
    </>
  );
}
