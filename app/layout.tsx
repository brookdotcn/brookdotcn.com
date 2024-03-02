import "./index.css";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { GeistMono } from "geist/font/mono";
import { type NextPage, type Metadata } from "next";
import { type ReactNode, type JSX } from "react";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  description: "A personal site for myself.",
  title: "Home | brookdotcn",
};

type Props = {
  readonly children: ReactNode;
};

const IndexLayout: NextPage<Props> = ({ children }): JSX.Element => {
  return (
    <html lang="en">
      <body className={GeistMono.className}>
        <main className="flex h-screen flex-col sm:flex-row">
          <div className="h-16 w-screen sm:h-screen sm:w-24">
            <Navbar />
          </div>

          <div className="h-full w-full overflow-y-auto">{children}</div>
        </main>

        <SpeedInsights />
      </body>
    </html>
  );
};

export default IndexLayout;
