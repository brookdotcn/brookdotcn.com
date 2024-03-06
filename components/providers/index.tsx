"use client";

import { ThemeProvider } from "next-themes";
import { type FC, type ReactNode, type JSX } from "react";

type Props = {
  readonly children: ReactNode;
};

const Providers: FC<Props> = ({ children }): JSX.Element => {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

export default Providers;
