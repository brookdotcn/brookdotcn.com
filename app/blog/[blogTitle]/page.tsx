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
    <div className="page-inner">
      <div className="page-header flex-col items-start">
        <p className="text-neutral-500">
          {blogByTitle?.createdAt!.toLocaleDateString()}
        </p>

        <h1 className="page-title">{blogByTitle?.title!}</h1>
      </div>

      <hr />

      <Markup rawMarkdown={blogByTitle?.content!} />
    </div>
  );
};

export default BlogPage;
