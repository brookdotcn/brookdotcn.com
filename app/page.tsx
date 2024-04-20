import { Github } from "lucide-react";
import { type NextPage } from "next";
import Link from "next/link";
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
    <section className="page gap-8">
      <div className="flex flex-col gap-4">
        <div className="page-header">
          <h1 className="page-title">Brook Nash</h1>

          <Link
            className="text-black dark:text-white"
            href="https://github.com/brookdotcn"
            target="_blank"
          >
            <Github />
          </Link>
        </div>

        <p className="page-subtitle">A little about me.</p>

        <p>
          Hello! I&apos;m a twenty two year old software engineer from the
          United Kingdom (Wales in particular) and this is the site I use to
          document my learnings and findings in all things software &
          technology.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="page-header">
          <h1 className="page-title">Recent Blogs</h1>
        </div>

        <p className="page-subtitle">
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
        <div className="page-header">
          <h1 className="page-title">React</h1>
        </div>

        <p className="page-subtitle">
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
        <div className="page-header">
          <h1 className="page-title">Configuration</h1>
        </div>

        <p className="page-subtitle">
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
