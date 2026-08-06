import Hero from '@templates/shared/Hero';
import Customers from '@templates/shared/Customers';
import { heroContent, customers } from '@/data';

export default function page() {
  return (
    <div className="space-y-25 pb-25 lg:space-y-50 lg:pb-50">
      <Hero
        title={heroContent.stories.title}
        description={heroContent.stories.description}
        subtitle={heroContent.stories.subtitle}
      />
      {customers.map(({ id, title, description, images, subtitle, slug }, index) => (
        <Customers
          key={id}
          title={title}
          description={description}
          images={images}
          subtitle={subtitle}
          slug={slug}
          dir={index % 2 === 0 ? 'rtl' : 'ltr'}
        />
      ))}
    </div>
  );
}
