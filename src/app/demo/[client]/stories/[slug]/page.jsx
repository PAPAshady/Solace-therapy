import Banner from '@templates/Stories/Banner';
import Journey from '@templates/Stories/Journey';
import ImageQuote from '@templates/Stories/ImageQuote';
import Step from '@templates/Stories/Step';
import FAQ from '@templates/shared/FAQ';
import { customers, clientSteps } from '@/data';

export default async function page({ params }) {
  const { slug, client } = await params;
  const customer = customers.find((customer) => customer.slug === slug);

  return (
    <div className="space-y-25 lg:space-y-45">
      <div>
        <Banner
          title={customer.title}
          description={customer.description}
          images={customer.images}
          challenge={customer.challenge}
        />
        <Journey />
      </div>
      <div className="space-y-10 lg:space-y-20">
        <ImageQuote image={customer.images[0]} />
        <Step title={clientSteps[0].title} />
      </div>
      <FAQ client={client} />
    </div>
  );
}
