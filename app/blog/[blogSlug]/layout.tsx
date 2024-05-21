import { type NextPage, type Metadata } from "next";
import { redirect } from "next/navigation";
import { type ReactNode, type JSX } from "react";
import { findBlogByMetadataSlug } from "@/actions";

type Props = {
  readonly children: ReactNode;
  params: { blogSlug: string };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const blogMetadata = await findBlogByMetadataSlug(params.blogSlug);
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
