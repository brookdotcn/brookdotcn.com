import { type NextPage } from "next";
import { type JSX } from "react";
import { readAllBlogsMetadata } from "@/actions";
import BlogCard from "@/components/ui/card";

const BlogsPage: NextPage = async (): Promise<JSX.Element> => {
  const allBlogs = await readAllBlogsMetadata();

  return (
    <div className="page-container">
      <div className="page-block">
        <h1 className="page-block-title">Blogs</h1>
        <p className="page-block-subtitle">Discover what tickles your fancy.</p>
      </div>

      <div className="page-grid">
        {allBlogs.map((blog, idx) => {
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
    </div>
  );
};

export default BlogsPage;
