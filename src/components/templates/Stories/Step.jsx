export default function Step({ title }) {
  return (
    <div className="container max-w-120 space-y-4 lg:mx-auto lg:space-y-6">
      <h2 className="text-4xl md:text-[40px] lg:text-[44px]">{title}</h2>
      <p className="text-paragraph leading-relaxed">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
        چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
        تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در
        شصت و سه درصد گذشته حال و آینده
      </p>
    </div>
  );
}
