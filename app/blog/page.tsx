import { type NextPage } from "next";
import { type JSX } from "react";
import { TbSelectAll } from "react-icons/tb";
import Card from "@/components/card";
import Search from "@/components/search";
import prisma from "@/lib";

const BlogsPage: NextPage = async (): Promise<JSX.Element> => {
  const blogs = await prisma.blog.findMany({
    include: { tags: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="page">
      <div className="relative sm:w-1/2">
        <Search />
      </div>

      <div className="page-header">
        <TbSelectAll size={24} />
        <h1 className="page-title">All Blogs</h1>
      </div>

      <p className="page-subtitle">Discover what tickles your fancy.</p>

      <div className="flex min-w-full flex-wrap gap-4 overflow-x-auto">
        {blogs.map((blog) => {
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
  );
};

export default BlogsPage;
