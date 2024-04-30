import { type NextPage } from "next";
import { redirect } from "next/navigation";
import { type JSX } from "react";
import Markup from "@/components/markup";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import prisma from "@/lib";
import { determineTimeToRead, parseBlogTitleFromUrl } from "@/utils";

type Props = {
  params: { blogTitle: string };
};

const BlogPage: NextPage<Props> = async ({ params }): Promise<JSX.Element> => {
  const blogByTitle = await prisma.blog.findFirst({
    include: { tags: true },
    where: {
      title: parseBlogTitleFromUrl(params.blogTitle),
    },
  });

  if (!blogByTitle) redirect("/");

  return (
    <div className="page-container">
      <div className="flex w-full flex-wrap justify-between gap-2 sm:gap-0">
        <p className="page-block-subtitle">
          {blogByTitle.createdAt.toLocaleDateString()}
        </p>
        <span className="page-block-subtitle">
          {determineTimeToRead(blogByTitle.content)}m read
        </span>
      </div>

      <h1 className="page-block-title w-full text-center sm:text-6xl">
        {blogByTitle.title}
      </h1>

      <span className="flex w-full items-center justify-center gap-2 overflow-x-auto rounded">
        {blogByTitle.tags.map((tag) => (
          <Badge
            key={tag.id}
            className="text-zinc-950 dark:text-white"
            style={{
              backgroundColor: tag.colour,
              border: `2px solid ${tag.colour}`,
            }}
          >
            {tag.name}
          </Badge>
        ))}
      </span>

      <Separator />

      <Markup rawMarkdown={blogByTitle.content} />
    </div>
  );
};

export default BlogPage;
