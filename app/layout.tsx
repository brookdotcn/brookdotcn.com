import "./index.css";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { type NextPage, type Metadata } from "next";
import { type ReactNode, type JSX } from "react";
import Navbar from "@/components/navbar";
import Providers from "@/components/providers";

export const metadata: Metadata = {
  description: "A personal site for myself.",
  title: "Home | brookdotcn",
};

type Props = {
  readonly children: ReactNode;
};

const IndexLayout: NextPage<Props> = ({ children }): JSX.Element => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <main className="flex min-h-screen flex-col sm:flex-row">
            <Navbar />

            <div className="h-full w-full overflow-y-auto">{children}</div>
          </main>

          <SpeedInsights />
        </Providers>
      </body>
    </html>
  );
};

export default IndexLayout;
