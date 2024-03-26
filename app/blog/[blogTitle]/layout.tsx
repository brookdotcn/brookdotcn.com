import { type NextPage, type Metadata } from "next";
import { redirect } from "next/navigation";
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

  if (!blogByTitle) return redirect("/");

  return {
    description: blogByTitle.content,
    title: `${blogByTitle.title} | brookdotcn`,
  };
};

const BlogsLayout: NextPage<Props> = ({ children }): JSX.Element => {
  return <>{children}</>;
};

export default BlogsLayout;
