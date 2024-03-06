import { type NextPage } from "next";
import { type JSX } from "react";
import { TbSelectAll } from "react-icons/tb";
import Card from "@/components/card";
import prisma from "@/lib";

const BlogsPage: NextPage = async (): Promise<JSX.Element> => {
  const blogs = await prisma.blog.findMany();

  return (
    <div className="page">
      <div className="page-header">
        <TbSelectAll size={24} />
        <h1 className="page-title">All Blogs</h1>
      </div>

      <p className="page-subtitle">Discover what tickles your fancy.</p>

      {blogs.map((blog) => {
        return (
          <Card
            key={blog.id}
            title={blog.title}
            content={blog.content}
            createdAt={blog.createdAt}
            description={blog.description}
          />
        );
      })}
    </div>
  );
};

export default BlogsPage;
