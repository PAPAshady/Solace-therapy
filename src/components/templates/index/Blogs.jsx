import PrimaryButton from '@modules/PrimaryButton/PrimaryButton';
import BlogCard from '@modules/BlogCard/BlogCard';
import { blogs } from '@/data';

export default function Journal() {
  return (
    <div className="container">
      <div className="space-y-8">
        <div className="space-y-7.5 text-center">
          <div className="flex flex-col items-center gap-6">
            <div className="size-16">
              <svg
                role="presentation"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
                className="size-full"
              >
                <path
                  d="M 33.917 15.903 C 34.985 16.567 35.684 14.682 36.473 14.026 C 39.021 11.922 48.766 7.202 51.49 9.88 C 52.129 10.506 52.026 14.57 51.923 15.712 C 50.967 26.127 39.214 37.633 28.8 39.692 C 21.263 41.182 9.772 37.085 5.024 31.216 C 1.446 26.795 -1.672 15.517 1.009 10.394 C 2.18 8.157 7.988 10.332 9.866 11.179 C 10.965 11.677 13.761 13.308 14.589 14.076 C 15.631 15.039 15.554 16.687 17.201 16.322 C 17.377 11.349 20.092 4.454 23.833 0.959 C 27.912 -2.856 31.172 5.745 32.175 8.672 C 32.566 9.809 33.599 15.703 33.921 15.903 Z
              M 24.639 5.687 C 20.483 9.556 19.899 20.838 21.182 25.948 C 21.478 27.123 24.253 34.175 25.128 34.151 C 27.847 29.975 30.871 23.213 30.511 18.186 C 30.352 15.973 27.993 7.812 26.959 5.836 C 26.732 5.401 26.445 5.006 25.986 4.77 C 25.578 5.114 25.025 5.326 24.639 5.687 Z
              M 21.057 35.396 C 18.677 30.867 17.823 24.167 14.808 20.087 C 13.688 18.568 4.874 11.349 3.492 12.582 C 1.627 23.217 9.806 34.362 21.057 35.396 Z
              M 48.05 12.582 C 43.362 13.433 37.185 16.214 34.993 20.473 C 33.531 23.321 32.879 27.123 31.412 30.278 C 31.039 31.079 28.671 34.445 29.203 34.981 C 39.128 32.976 48.917 22.661 48.05 12.578 Z"
                  fill="currentColor"
                  className="fill-primary"
                  transform="translate(6 12)"
                />
              </svg>
            </div>
            <p className="text-primary font-semibold">مجله سلامت روان</p>
          </div>
          <h2 className="text-[34px] leading-snug">
            مقالات و مطالبی برای رشد فردی، <br /> آرامش و خودشناسی.
          </h2>
          <p className="text-paragraph mx-auto max-w-120">
            مجموعه‌ای از مقالات، تمرین‌ها و نکات کاربردی برای کمک به سلامت روان، رشد فردی و شناخت
            بهتر خود.
          </p>
          <PrimaryButton className="mx-auto w-max">مشاهده همه</PrimaryButton>
        </div>
        <div className="grid grid-cols-1 gap-10 min-[530px]:grid-cols-2 sm:gap-20 md:gap-30 lg:grid-cols-3 lg:pb-25">
          {blogs.map((blog, index) => (
            <BlogCard
              className={index === 1 && 'lg:translate-y-25'}
              key={blog.id}
              index={index}
              {...blog}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
