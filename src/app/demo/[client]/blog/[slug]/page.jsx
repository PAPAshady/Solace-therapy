import BlogContent from '@templates/Blog/BlogContent';
import Recommended from '@templates/Blog/Recommended';
import FAQ from '@templates/shared/FAQ';

export default function page() {
  return (
    <div className="space-y-20 lg:space-y-40">
      <BlogContent />
      <Recommended />
      <FAQ />
    </div>
  );
}
