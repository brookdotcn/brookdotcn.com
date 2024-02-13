import { type NextPage } from "next";
import { type JSX } from "react";
import Card from "@/components/card";
import prisma from "@/lib";

const BlogsPage: NextPage = async (): Promise<JSX.Element> => {
  const blogs = await prisma.blog.findMany();

  return (
    <div className="innerPage">
      <h1 className="font-semibold text-2xl">Blogs</h1>
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
    </div>
  );
};

export default BlogsPage;
