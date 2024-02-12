import { type NextPage } from "next";
import { type JSX } from "react";
import Card from "@/components/card";
import prisma from "@/lib";

const IndexPage: NextPage = async (): Promise<JSX.Element> => {
  const blogs = await prisma.blog.findMany();

  return (
    <main className="outerPage">
      <div className="innerPage">
        <h1 className="font-semibold text-2xl">Recent Blogs</h1>
        <div className="flex bg-neutral-100 p-2 rounded-lg w-full gap-4 overflow-x-auto">
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
    </main>
  );
};

export default IndexPage;
