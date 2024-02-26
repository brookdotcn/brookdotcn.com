import { type NextPage } from "next";
import { type JSX } from "react";
import { TbSelectAll } from "react-icons/tb";
import Card from "@/components/card";
import prisma from "@/lib";

const BlogsPage: NextPage = async (): Promise<JSX.Element> => {
  const blogs = await prisma.blog.findMany();

  return (
    <section className="innerPage">
      <h1 className="font-semibold flex gap-2 items-center text-2xl">
        <TbSelectAll />
        All Blogs
      </h1>
      <p className="text-sm font-light text-neutral-400">
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
