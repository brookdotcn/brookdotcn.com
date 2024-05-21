"use server";

import { type JSX } from "react";
import HelloWorld from "@/blog/hello-world/page.mdx";

type MarkdownPage = (props: {
  readonly components?: {} | undefined;
}) => JSX.Element;

const findBlogBySlug = (slug: string): MarkdownPage | undefined => {
  const pageMap: Record<string, MarkdownPage> = {
    "hello-world": HelloWorld,
  };

  return pageMap[slug];
};

export default findBlogBySlug;
