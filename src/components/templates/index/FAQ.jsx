import Accordion from '@modules/Accordion/Accordion';
import PrimaryButton from '@modules/PrimaryButton/PrimaryButton';
import { FAQs } from '@/data';

export default function FAQ() {
  return (
    <div className="bg-[#fafafa]">
      <div className="container pb-20 lg:pb-40">
        <div className="flex flex-col gap-12 md:flex-row">
          <div className="relative text-center md:flex md:w-[40%] md:flex-col md:justify-between md:text-start">
            <div className="space-y-6 min-[1200px]:mb-38! md:sticky md:top-[calc(50vh-84px)] md:mb-46">
              <h2 className="text-4xl leading-snug whitespace-pre-wrap md:text-5xl">
                پاسخ به
                <span className="hidden min-[1200px]:inline"> </span>
                <span className="text-primary block min-[1200px]:inline">سوالات شما</span>
              </h2>
              <p className="text-paragraph mx-auto max-w-120 md:m-0">
                نمی‌دانید باید از کجا شروع کنید؟ پاسخ های زیر به شما کمک می‌کند با اطمینان و آرامش
                بیشتری اولین قدم را در مسیر درمان بردارید.
              </p>
            </div>
            <div className="hidden flex-col justify-center gap-8 md:flex">
              <p className="text-paragraph max-w-100 text-sm leading-relaxed">
                پاسخ سؤال خود را پیدا نکردید؟ کافی است برای ما پیام بفرستید. با دقت و شفافیت، در
                کوتاه‌ترین زمان ممکن پاسخ شما را خواهیم داد.
              </p>
              <PrimaryButton>درباره ما</PrimaryButton>
            </div>
          </div>
          <div className="space-y-4 md:w-[60%]">
            {FAQs.map((faq) => (
              <Accordion key={faq.id} question={faq.question} answer={faq.answer} />
            ))}
          </div>
          <div className="flex flex-col items-center justify-center gap-8 md:hidden">
            <p className="text-paragraph mx-auto max-w-100 text-center text-sm leading-relaxed">
              پاسخ سؤال خود را پیدا نکردید؟ کافی است برای ما پیام بفرستید. با دقت و شفافیت، در
              کوتاه‌ترین زمان ممکن پاسخ شما را خواهیم داد.
            </p>
            <PrimaryButton>درباره ما</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}
