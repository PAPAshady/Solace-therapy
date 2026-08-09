import BlogCard from '@modules/BlogCard/BlogCard';
import { blogs } from '@/data';

export default function BLogsGrid({ client }) {
  return (
    <div className="container">
      <div className="grid grid-cols-1 gap-10 min-[530px]:grid-cols-2 sm:gap-20 md:gap-25">
        {blogs.map((blog, index) => (
          <BlogCard key={blog.id} index={index} client={client} {...blog} />
        ))}
      </div>
    </div>
  );
}
