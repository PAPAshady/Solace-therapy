import Banner from '@templates/Stories/Banner';
import Journey from '@templates/Stories/Journey';
import { customers } from '@/data';

export default async function page({ params }) {
  const { slug } = await params;
  const client = customers.find((customer) => customer.slug === slug);

  return (
    <div>
      <Banner
        title={client.title}
        description={client.description}
        images={client.images}
        challenge={client.challenge}
      />
      <Journey />
    </div>
  );
}
