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
    <div className="page-container">
      <div className="page-block">
        <h1 className="page-block-title">All Blogs</h1>

        <p className="page-block-subtitle">Discover what tickles your fancy.</p>
      </div>

      <Search blogs={blogs} />

      <div className="flex min-w-full flex-wrap gap-4">
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
