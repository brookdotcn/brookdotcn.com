import { type NextPage } from "next";
import { type JSX } from "react";
import BlogCard from "@/components/ui/card";
import { readAllBlogsMetadata } from "@/utils/blog";

const IndexPage: NextPage = async (): Promise<JSX.Element> => {
  const allBlogs = await readAllBlogsMetadata();

  return (
    <section className="page-container">
      <div className="page-block">
        <h1 className="page-block-title">Recent</h1>

        <p className="page-block-subtitle">
          Be up to date on my ten latest blogs, left most recent.
        </p>
      </div>

      <div className="page-scrollable">
        {allBlogs
          .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
          .map((blog, idx) => {
            return (
              <BlogCard
                key={idx}
                createdAt={blog.createdAt}
                dirName={blog.dirName}
                slug={blog.slug}
                title={blog.title}
                description={blog.description}
              />
            );
          })}
      </div>
    </section>
  );
};

export default IndexPage;
