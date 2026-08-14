import BookSession from '@templates/shared/BookSession';
import FAQ from '@templates/shared/FAQ';

export default function page() {
  return (
    <div className="space-y-25 pt-16 md:pt-30 lg:space-y-50">
      <BookSession />
      <FAQ />
    </div>
  );
}
