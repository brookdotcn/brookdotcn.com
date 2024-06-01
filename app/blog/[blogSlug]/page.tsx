import { type NextPage } from "next";
import { redirect } from "next/navigation";
import { type JSX } from "react";
import findBlogContentBySlug from "@/actions";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { findBlogMetadataBySlug, readAllBlogsMetadata } from "@/utils/blog";

export const generateStaticParams = async () => {
  const allBlogs = await readAllBlogsMetadata();

  return allBlogs.map((blog) => ({
    blog: blog.dirName,
  }));
};

type Props = {
  params: { blogSlug: string };
};

const BlogPage: NextPage<Props> = async ({ params }): Promise<JSX.Element> => {
  const blogMetadata = await findBlogMetadataBySlug(params.blogSlug);
  if (!blogMetadata || !params.blogSlug) redirect("/");

  const Blog = findBlogContentBySlug(params.blogSlug) || redirect("/");

  return (
    <div className="page-container">
      <div className="flex w-full flex-wrap justify-between gap-2 sm:gap-0">
        <p className="page-block-subtitle">
          {blogMetadata.createdAt.toLocaleDateString(undefined, {
            dateStyle: "full",
          })}
        </p>
      </div>

      <h1 className="page-block-title w-full text-center sm:text-6xl">
        {blogMetadata.title}
      </h1>

      <span className="flex w-full items-center justify-center gap-2 overflow-x-auto rounded">
        {blogMetadata.tags.map((tag) => (
          <Badge
            key={tag}
            variant="outline"
            className="text-zinc-950 dark:text-white"
          >
            {tag}
          </Badge>
        ))}
      </span>

      <Separator />

      <div className="markdown">
        <Blog />
      </div>
    </div>
  );
};

export default BlogPage;
