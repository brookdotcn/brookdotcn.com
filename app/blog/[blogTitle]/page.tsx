import { type NextPage } from "next";
import { type JSX } from "react";
import Markup from "@/components/markup";
import prisma from "@/lib";
import { determineTimeToRead, parseBlogTitleFromUrl } from "@/utils";

type Props = {
  params: { blogTitle: string };
};

const BlogPage: NextPage<Props> = async ({ params }): Promise<JSX.Element> => {
  const blogByTitle = await prisma.blog.findFirst({
    where: {
      title: parseBlogTitleFromUrl(params.blogTitle),
    },
  });

  return (
    <div className="page">
      <div className="page-header w-full flex-col items-start">
        <div className="flex w-full flex-wrap justify-between gap-2 sm:gap-0">
          <p className="text-neutral-500">
            {blogByTitle?.createdAt!.toLocaleDateString()}
          </p>
          <span className="text-neutral-500">
            {determineTimeToRead(blogByTitle?.content!)}m read
          </span>
        </div>

        <h1 className="page-title">{blogByTitle?.title!}</h1>
      </div>

      <hr />

      <Markup rawMarkdown={blogByTitle?.content!} />
    </div>
  );
};

export default BlogPage;
