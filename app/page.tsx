import { type NextPage } from "next";
import { type JSX } from "react";
import { FaReact } from "react-icons/fa";
import { GiSettingsKnobs } from "react-icons/gi";
import { TbTimeDuration10 } from "react-icons/tb";
import Card from "@/components/card";
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
    <section className="page gap-12">
      <div className="flex flex-col gap-4">
        <div className="page-header">
          <TbTimeDuration10 size={24} />
          <h1 className="page-title">Recent Blogs</h1>
        </div>

        <p className="page-subtitle">
          Be up to date on my latest blogs, left most recent.
        </p>

        <div className="flex gap-4 overflow-x-auto rounded">
          {recentBlogs.map((blog) => {
            return (
              <Card
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
        <div className="page-header">
          <FaReact size={24} />
          <h1 className="page-title">React</h1>
        </div>

        <p className="page-subtitle">
          Blogs containing information on React, one of the most popular tools
          in web development.
        </p>

        <div className="flex gap-4 overflow-x-auto rounded">
          {reactBlogs.map((blog) => {
            return (
              <Card
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
        <div className="page-header">
          <GiSettingsKnobs size={24} />
          <h1 className="page-title">Configuration</h1>
        </div>

        <p className="page-subtitle">
          Tools or settings I may use across my devices, kept updated whenever I
          am able to.
        </p>

        <div className="flex gap-4 overflow-x-auto rounded">
          {configurationBlogs.map((blog) => {
            return (
              <Card
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
