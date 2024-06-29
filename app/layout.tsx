import "./index.css";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { type NextPage, type Metadata } from "next";
import { type ReactNode, type JSX } from "react";
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
          <main className="container py-12">{children}</main>
          <Analytics />
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  );
};

export default IndexLayout;
