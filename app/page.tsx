import { type NextPage } from "next";
import { type JSX } from "react";
import { IoIosTimer } from "react-icons/io";
import Card from "@/components/card";
import prisma from "@/lib";

const IndexPage: NextPage = async (): Promise<JSX.Element> => {
  const blogs = await prisma.blog.findMany();

  return (
    <section className="page">
      <div className="page-header">
        <IoIosTimer size={24} />
        <h1 className="page-title">Recent Blogs</h1>
      </div>

      <p className="page-subtitle">
        Be up to date on my latest blogs, left most recent.
      </p>

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
    </section>
  );
};

export default IndexPage;
