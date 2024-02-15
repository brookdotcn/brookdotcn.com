import "./index.css";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { GeistMono } from "geist/font/mono";
import { type Metadata } from "next";
import { type ReactNode, type JSX } from "react";
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
        <main className="flex sm:flex-row flex-col">
          <div className="sm:sticky sm:h-screen h-16 top-0 left-0">
            <Navbar />
          </div>
          <div className="w-full overflow-auto">{children}</div>
        </main>
        <SpeedInsights />
      </body>
    </html>
  );
};

export default IndexLayout;
