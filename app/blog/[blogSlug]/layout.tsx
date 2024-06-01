import { type NextPage, type Metadata } from "next";
import { redirect } from "next/navigation";
import { type ReactNode, type JSX } from "react";
import { findBlogMetadataBySlug } from "@/utils/blog";

type Props = {
  readonly children: ReactNode;
  params: { blogSlug: string };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const blogMetadata = await findBlogMetadataBySlug(params.blogSlug);
  if (!blogMetadata) redirect("/");

  return {
    description: blogMetadata.description,
    title: `${blogMetadata.title} | brookdotcn`,
  };
};

const BlogsLayout: NextPage<Props> = ({ children }): JSX.Element => {
  return <>{children}</>;
};

export default BlogsLayout;
