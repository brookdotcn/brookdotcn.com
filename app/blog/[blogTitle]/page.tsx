import { type NextPage } from "next";
import { redirect } from "next/navigation";
import { type JSX } from "react";
import Markup from "@/components/markup";
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
    <div className="container flex flex-col gap-8 py-12">
      <div className="flex w-full flex-wrap justify-between gap-2 sm:gap-0">
        <p className="text-zinc-400 dark:text-zinc-600">
          {blogByTitle.createdAt.toLocaleDateString()}
        </p>
        <span className="text-zinc-400 dark:text-zinc-600">
          {determineTimeToRead(blogByTitle.content)}m read
        </span>
      </div>

      <h1 className="w-full text-center text-4xl font-bold sm:text-6xl">
        {blogByTitle.title}
      </h1>

      <span className="flex w-full items-center justify-center gap-2 overflow-x-auto rounded">
        {blogByTitle.tags.map((tag) => (
          <span key={tag.id}>
            <p
              className={`rounded px-2`}
              style={{ backgroundColor: tag.colour }}
            >
              {tag.name}
            </p>
          </span>
        ))}
      </span>

      <Separator />

      <Markup rawMarkdown={blogByTitle.content} />
    </div>
  );
};

export default BlogPage;
