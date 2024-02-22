import { type NextPage } from "next";
import { type JSX } from "react";
import Card from "@/components/card";
import prisma from "@/lib";

const BlogsPage: NextPage = async (): Promise<JSX.Element> => {
  const blogs = await prisma.blog.findMany();

  return (
    <section className="innerPage">
      <h1 className="font-semibold text-2xl">Blogs</h1>
      <p className="text-sm text-neutral-400">
        Discover what tickles your fancy
      </p>
      <div className="flex rounded-lg gap-4 flex-wrap">
        {blogs.map((blog) => {
          return (
            <Card
              key={blog.id}
              title={blog.title}
              content={blog.content}
              createdAt={blog.createdAt}
            />
          );
        })}
      </div>
    </section>
  );
};

export default BlogsPage;
