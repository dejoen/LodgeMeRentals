import BlogCard from "./BlogCard";

const BlogCardContainer = () => {
  return (
    <div className="mt-10 md:flex md:flex-wrap md:gap-20 md:place-items-center md:justify-center">
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>
  );
};

export default BlogCardContainer;
