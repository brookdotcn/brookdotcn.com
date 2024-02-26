import { type NextPage } from "next";
import { type JSX } from "react";
import { IoIosTimer } from "react-icons/io";
import Card from "@/components/card";
import prisma from "@/lib";

const IndexPage: NextPage = async (): Promise<JSX.Element> => {
  const blogs = await prisma.blog.findMany();

  return (
    <section className="outerPage">
      <div className="innerPage">
        <h1 className="font-semibold flex gap-2 items-center text-2xl">
          <IoIosTimer />
          Recent Blogs
        </h1>
        <p className="text-sm font-light text-neutral-400">
          Be up to date on my latest blogs, left most recent
        </p>
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
    </section>
  );
};

export default IndexPage;
