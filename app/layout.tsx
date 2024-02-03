import "./index.css";

import { type ReactNode, type JSX } from "react";
import { type Metadata } from "next";

import { GeistMono } from "geist/font/mono";

export const metadata: Metadata = {
  description: "A personal site for myself.",
  title: "Home | brookdotcn",
};

type Props = {
  readonly children: ReactNode;
};

const IndexLayout = ({ children }: Props): JSX.Element => {
  return (
    <html lang="en">
      <body className={GeistMono.className}>{children}</body>
    </html>
  );
};

export default IndexLayout;
