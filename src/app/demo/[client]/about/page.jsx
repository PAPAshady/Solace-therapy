import Hero from '@templates/shared/Hero';
import AboutUs from '@templates/About/AboutUs';
import Founders from '@templates/About/Founders';
import Team from '@templates/About/Team';
import Quote from '@templates/About/Quote';
import Customers from '@templates/shared/Customers';
import FAQ from '@templates/shared/FAQ';
import { customers, heroContent } from '@/data';
import clients from '@/clients';

export default async function page({ params }) {
  const { client } = await params;

  return (
    <div className="space-y-25 lg:space-y-45">
      <Hero
        title={heroContent.about.title}
        description={`ما در ${clients[client].clinicName} باور داریم که هر فرد، تجربه‌ها، دغدغه‌ها و مسیر زندگی منحصر به‌ فرد خود را دارد. به همین دلیل، تلاش می‌کنیم با رویکردی حرفه‌ای، همدلانه و متناسب با نیازهای هر فرد، در کنار شما باشیم تا با آرامش و آگاهی بیشتری با چالش‌های زندگی روبه‌رو شوید.`}
        subtitle={heroContent.about.subtitle}
      />
      <AboutUs />
      <Founders client={client} />
      <Team client={client} />
      <Quote client={client} />
      <Customers
        title={customers[2].title}
        description={customers[2].description}
        images={customers[2].images}
        slug={customers[2].slug}
      />
      <div className="bg-[#fafafa] py-10">
        <FAQ />
      </div>
    </div>
  );
}
