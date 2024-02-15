import { type Metadata } from "next";
import { type ReactNode, type JSX } from "react";

export const metadata: Metadata = {
  description: "All blogs available.",
  title: "Blog | brookdotcn",
};

type Props = {
  readonly children: ReactNode;
};

const BlogsLayout = ({ children }: Props): JSX.Element => {
  return <section className="outerPage">{children}</section>;
};

export default BlogsLayout;
