"use client";
import Image from "next/image";
import calendarIcon from "../../../public/images/calendar_icon.svg";
import { truncateText } from "@/lib/utils";
import Loader from "../common/Loader/Loader";
import { useBlog } from "@/hooks/dynamoDb/useBlog";

const BlogSection = () => {
  const { blogs, loading } = useBlog();
  const now = new Date();
  const publishedBlogs = blogs.filter(
    (blog) => new Date(blog.publishedDate) <= now
  );

  const sortedBlogs = publishedBlogs.sort(
    (a, b) =>
      new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  );

  // Select the featured blog and the next three
  const featuredBlog = sortedBlogs[0];
  const otherBlogs = sortedBlogs.slice(1, 4);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section className="w-full bg-black px-4 xl:px-24 py-8 mt-16">
          <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-4 xl:gap-12">
            {featuredBlog && (
              <div className="w-auto cursor-pointer relative rounded-2xl overflow-hidden">
                <div className="size-full absolute top-0 left-0 bg-black/50"></div>
                <Image
                  className=" object-cover"
                  src={featuredBlog.image}
                  alt="BlogImg"
                  fill
                />
                <div className="w-full absolute bottom-5 left-0 px-4 xl:px-14">
                  <span className="block w-fit py-1 px-2 rounded-sm bg-gradient-to-b from-orange-600 to-orange-800 text-white font-medium text-[10px]">
                    {featuredBlog.category}
                  </span>
                  <h3 className="font-bold text-base sm:text-xl mt-4">
                    {featuredBlog.title}
                  </h3>
                  <p className="text-sm sm:text-base my-3 sm:my-6">
                    {truncateText(featuredBlog.description)}
                  </p>
                  <span className="flex items-center gap-2 text-xs">
                    <Image
                      className=" object-cover"
                      src={calendarIcon}
                      alt="icon"
                      width={18}
                      height={18}
                    />
                    {featuredBlog.publishedDate}
                  </span>
                </div>
              </div>
            )}
            <div className="w-full grid grid-cols-1 gap-8 sm:gap-4">
              {otherBlogs.map((post) => (
                <div
                  key={post.id}
                  className="w-full cursor-pointer flex flex-wrap sm:flex-nowrap gap-4 items-center"
                >
                  <div className="w-28 h-28 object-cover sm:w-40 sm:h-40 rounded-sm overflow-hidden relative">
                    <Image
                      className=" object-cover"
                      src={post.image}
                      alt="BlogPost"
                      fill
                    />
                  </div>
                  <div className="w-full sm:w-[calc(100%-10rem)]">
                    <span className="block w-fit py-1 px-2 rounded-sm bg-gradient-to-b from-orange-600 to-orange-800 text-white font-medium text-[10px]">
                      {post.category}
                    </span>
                    <h3 className="sm:font-bold text-base mt-3 sm:mt-1">
                      {post.title}
                    </h3>
                    <p className="text-sm sm:text-base my-2">
                      {truncateText(post.description)}
                    </p>
                    <span className="flex items-center gap-2 text-xs">
                      <Image
                        className=""
                        src={calendarIcon}
                        alt="icon"
                        width={18}
                        height={18}
                      />
                      {post.publishedDate}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};
export default BlogSection;
