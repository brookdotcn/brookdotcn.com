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
      <h1 className="font-bold text-2xl">{blogByTitle?.title!}</h1>
      <hr />
      <Markup rawMarkdown={blogByTitle?.content!} />
    </div>
  );
};

export default BlogPage;
