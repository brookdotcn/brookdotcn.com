import { type NextPage } from "next";
import { type JSX } from "react";
import prisma from "@/lib";
import { parseBlogTitleFromUrl } from "@/utils";

type Props = {
  params: { blogTitle: string };
};

const BlogPage: NextPage<Props> = async ({
  params,
}: Props): Promise<JSX.Element> => {
  const blogByTitle = await prisma.blog.findFirst({
    where: {
      title: parseBlogTitleFromUrl(params.blogTitle),
    },
  });

  return (
    <div className="innerPage">
      <h1 className="font-semibold text-2xl">{blogByTitle?.title}</h1>
    </div>
  );
};

export default BlogPage;
