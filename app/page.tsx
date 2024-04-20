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
    <section className="page-container">
      <div className="page-block">
        <h1 className="page-block-title">Recent Blogs</h1>

        <p className="page-block-subtitle">
          Be up to date on my latest blogs, left most recent.
        </p>

        <div className="page-block-scrollable">
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

      <div className="page-block">
        <h1 className="page-block-title">React</h1>

        <p className="page-block-subtitle">
          Blogs containing information on React, one of the most popular tools
          in web development.
        </p>

        <div className="page-block-scrollable">
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

      <div className="page-block">
        <h1 className="page-block-title">Configuration</h1>

        <p className="page-block-subtitle">
          Tools or settings I may use across my devices, kept updated whenever I
          am able to.
        </p>

        <div className="page-block-scrollable">
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
