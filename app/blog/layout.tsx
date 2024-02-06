import { type ReactNode, type JSX } from "react";
import { type Metadata } from "next";

export const metadata: Metadata = {
  description: "All blogs available.",
  title: "Blog | brookdotcn",
};

type Props = {
  readonly children: ReactNode;
};

const BlogLayout = ({ children }: Props): JSX.Element => {
  return <main className="outerPage">{children}</main>;
};

export default BlogLayout;
