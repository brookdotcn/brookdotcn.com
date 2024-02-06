import { type Metadata } from "next";
import { type ReactNode, type JSX } from "react";

export const metadata: Metadata = {
  description: "A little bit about brookdotcn.",
  title: "About | brookdotcn",
};

type Props = {
  readonly children: ReactNode;
};

const AboutLayout = ({ children }: Props): JSX.Element => {
  return <main className="outerPage">{children}</main>;
};

export default AboutLayout;
