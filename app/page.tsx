import { type NextPage } from "next";
import { type JSX } from "react";
import BlogCard from "@/components/ui/card";
import prisma from "@/lib";

const IndexPage: NextPage = async (): Promise<JSX.Element> => {
  const recentBlogs = await prisma.blog.findMany({
    include: { tags: true },
    orderBy: { createdAt: "desc" },
  });

  const reactBlogs = await prisma.blog.findMany({
    include: { tags: true },
    orderBy: { createdAt: "desc" },
    where: {
      tags: {
        some: {
          name: "react",
        },
      },
    },
  });

  const configurationBlogs = await prisma.blog.findMany({
    include: { tags: true },
    orderBy: { createdAt: "desc" },
    where: {
      tags: {
        some: {
          name: "configuration",
        },
      },
    },
  });

  return (
    <section className="container flex flex-col gap-8 py-12">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold">Recent Blogs</h1>

        <p className="text-zinc-400 dark:text-zinc-600">
          Be up to date on my latest blogs, left most recent.
        </p>

        <div className="flex gap-4 overflow-x-auto rounded">
          {recentBlogs.map((blog) => {
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

      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold">React</h1>

        <p className="text-zinc-400 dark:text-zinc-600">
          Blogs containing information on React, one of the most popular tools
          in web development.
        </p>

        <div className="flex gap-4 overflow-x-auto rounded">
          {reactBlogs.map((blog) => {
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

      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold">Configuration</h1>

        <p className="text-zinc-400 dark:text-zinc-600">
          Tools or settings I may use across my devices, kept updated whenever I
          am able to.
        </p>

        <div className="flex gap-4 overflow-x-auto rounded">
          {configurationBlogs.map((blog) => {
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
    </section>
  );
};

export default IndexPage;
