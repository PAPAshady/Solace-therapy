const stats = [
  { id: 1, title: '+۴۵۰', description: 'جلسات درمان' },
  { id: 2, title: '+۸۵', description: 'مشتریان درمان شده' },
  { id: 3, title: '+۹', description: 'سال سابقه' },
  { id: 4, title: '+۲۵', description: 'کارگاه و برنامه های آموزشی' },
];

export default function Stats() {
  return (
    <div className="bg-[#fafafa]">
      <div className="container flex flex-col">
        <div className="flex flex-col gap-9.5 py-20 md:flex-row md:items-center md:gap-18 lg:py-40">
          <h2 className="text-4xl leading-snug whitespace-pre-wrap md:w-1/2">
            <span>این آمار، نتیجه تجربه ما در همراهی مراجعان در مسیر روان‌درمانی و </span>
            <span className="text-primary">ایجاد تغییرات ماندگار </span>
            <span>است</span>
          </h2>
          <p className="text-paragraph max-w-120 leading-relaxed md:w-1/2 md:max-w-none">
            این آمار تنها اعداد نیستند؛ بلکه نشان‌دهنده تجربه ما در همراهی مراجعان، ارائه خدمات
            روان‌درمانی و کمک به ایجاد تغییرات ماندگار در سلامت روان هستند.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-16 pb-20 min-[480px]:grid-cols-2 lg:grid-cols-4 lg:pb-40">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col items-center justify-center gap-4 text-center"
            >
              <p className="text-primary text-7xl font-semibold">{stat.title}</p>
              <p className="text-paragraph text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
