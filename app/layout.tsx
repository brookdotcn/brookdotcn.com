import "./index.css";

import { type ReactNode, type JSX } from "react";
import { type Metadata } from "next";

import { GeistMono } from "geist/font/mono";

export const metadata: Metadata = {
  title: "Home | brookdotcn",
  description: "A personal site for myself.",
};

type IndexLayoutProps = {
  readonly children: ReactNode;
};

const IndexLayout = ({ children }: IndexLayoutProps): JSX.Element => {
  return (
    <html lang="en">
      <body className={GeistMono.className}>{children}</body>
    </html>
  );
};

export default IndexLayout;
