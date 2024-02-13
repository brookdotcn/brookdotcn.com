import { type Metadata } from "next";
import { type ReactNode, type JSX } from "react";
import prisma from "@/lib";
import { parseBlogTitleFromUrl } from "@/utils";

type Props = {
  readonly children: ReactNode;
  params: { blogTitle: string };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const blogByTitle = await prisma.blog.findFirst({
    where: {
      title: parseBlogTitleFromUrl(params.blogTitle),
    },
  });

  return {
    description: blogByTitle?.content,
    title: `${blogByTitle?.title} | brookdotcn`,
  };
};

const BlogsLayout = ({ children }: Props): JSX.Element => {
  return <>{children}</>;
};

export default BlogsLayout;
