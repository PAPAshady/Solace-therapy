import Hero from '@templates/shared/Hero';
import BLogsGrid from '@templates/Blogs/BLogsGrid';
import { heroContent } from '@/data';

export default async function page({ params }) {
  const { client } = await params;
  return (
    <div className="space-y-20 pb-25 lg:space-y-40 lg:pb-50">
      <Hero
        title={heroContent.blogs.title}
        description={heroContent.blogs.description}
        subtitle={heroContent.blogs.subtitle}
      />
      <BLogsGrid client={client} />
    </div>
  );
}
