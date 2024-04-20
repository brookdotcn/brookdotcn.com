import { type NextPage } from "next";
import { type JSX } from "react";
import Search from "@/components/search";
import BlogCard from "@/components/ui/card";
import prisma from "@/lib";

const BlogsPage: NextPage = async (): Promise<JSX.Element> => {
  const blogs = await prisma.blog.findMany({
    include: { tags: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="container flex flex-col gap-8 py-12">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold">All Blogs</h1>

        <p className="text-zinc-400 dark:text-zinc-600">
          Discover what tickles your fancy.
        </p>
      </div>

      <Search blogs={blogs} />

      <div className="flex min-w-full flex-wrap gap-4 overflow-x-auto">
        {blogs.map((blog) => {
          return (
            <BlogCard
              key={blog.id}
              title={blog.title}
              createdAt={blog.createdAt}
              description={blog.description}
              tags={blog.tags}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BlogsPage;
