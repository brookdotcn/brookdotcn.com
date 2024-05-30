"use server";

import { type JSX } from "react";
import HelloWorld from "@/blog/hello-world/page.mdx";

// type created simply to be more explicit with the return context
// and the content was extracted from the intellisense within the
// 'mdx' import, like so:
//
// (alias) function HelloWorld(props: {
//    readonly components?: {} | undefined;
// }): JSX.Element
type MarkdownPage = (props: {
  readonly components?: {} | undefined;
}) => JSX.Element;

const findBlogContentBySlug = (slug: string): MarkdownPage | undefined => {
  const slugToMarkdownContent: Record<string, MarkdownPage> = {
    "hello-world": HelloWorld,
  };

  return slugToMarkdownContent[slug];
};

export default findBlogContentBySlug;
