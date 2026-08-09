import Banner from '@templates/index/Banner';
import Services from '@templates/index/Services';
import AboutUs from '@templates/index/AboutUs';
import Customers from '@templates/shared/Customers';
import HowItWorks from '@templates/index/HowItWorks';
import Plans from '@templates/index/Plans/Plans';
import Quote from '@templates/index/Quote';
import Blogs from '@templates/index/Blogs';
import Stats from '@templates/shared/Stats';
import FAQ from '@templates/shared/FAQ';
import BookSession from '@templates/shared/BookSession';
import { customers } from '@/data';

export default async function page({ params }) {
  const { client } = await params;
  return (
    <>
      <Banner />
      <div className="space-y-25 pb-16 lg:space-y-50">
        <Services client={client} />
        <AboutUs client={client} />
        <Customers
          title={customers[0].title}
          description={customers[0].description}
          images={customers[0].images}
          slug={customers[0].slug}
          client={client}
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
          slug={customers[1].slug}
          client={client}
        />
        <Blogs client={client} />
        <div>
          <Stats />
          <FAQ client={client} />
        </div>
        <BookSession />
      </div>
    </>
  );
}
