import Banner from '@templates/Stories/Banner';
import Journey from '@templates/Stories/Journey';
import ImageQuote from '@templates/Stories/ImageQuote';
import Step from '@templates/Stories/Step';
import FAQ from '@templates/shared/FAQ';
import { customers, clientSteps } from '@/data';

export default async function page({ params }) {
  const { slug } = await params;
  const client = customers.find((customer) => customer.slug === slug);

  return (
    <div className="space-y-25 lg:space-y-45">
      <div>
        <Banner
          title={client.title}
          description={client.description}
          images={client.images}
          challenge={client.challenge}
        />
        <Journey />
      </div>
      <div className="space-y-10 lg:space-y-20">
        <ImageQuote image={client.images[0]} />
        <Step title={clientSteps[0].title} />
      </div>
      <FAQ />
    </div>
  );
}
