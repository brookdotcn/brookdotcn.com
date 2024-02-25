import { type NextPage } from "next";
import { type JSX } from "react";
import Markup from "@/components/markup";
import prisma from "@/lib";
import { parseBlogTitleFromUrl } from "@/utils";

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
    <div className="innerPage">
      <div className="flex justify-between">
        <h1 className="font-bold text-2xl">{blogByTitle?.title!}</h1>
        <span className="flex gap-4">
          <p className="text-sm text-neutral-400">
            {blogByTitle?.createdAt!.toLocaleDateString()}
          </p>
        </span>
      </div>
      <hr />
      <Markup rawMarkdown={blogByTitle?.content!} />
    </div>
  );
};

export default BlogPage;
