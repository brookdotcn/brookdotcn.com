import "./index.css";

import { type ReactNode, type JSX } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { type Metadata } from "next";
import { GeistMono } from "geist/font/mono";

import Navbar from "@/components/navbar";

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
      <body className={GeistMono.className}>
        <Navbar />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
};

export default IndexLayout;
