import BlogContent from '@templates/Blog/BlogContent';
import Recommended from '@templates/Blog/Recommended';
import FAQ from '@templates/shared/FAQ';

export default async function page({ params }) {
  const { client } = await params;

  return (
    <div className="space-y-20 lg:space-y-40">
      <BlogContent client={client} />
      <Recommended />
      <FAQ />
    </div>
  );
}
