import { type NextPage, type Metadata } from "next";
import { type ReactNode, type JSX } from "react";

export const metadata: Metadata = {
  description: "A little bit about me.",
  title: "About | brookdotcn",
};

type Props = {
  readonly children: ReactNode;
};

const AboutLayout: NextPage<Props> = ({ children }): JSX.Element => {
  return <section className="outerPage">{children}</section>;
};

export default AboutLayout;
