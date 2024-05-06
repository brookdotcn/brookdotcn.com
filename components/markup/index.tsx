"use client";

import { useTheme } from "next-themes";
import { type FC, type JSX } from "react";
import Markdown from "react-markdown";
import { Prism } from "react-syntax-highlighter";
import {
  oneDark as darkTheme,
  oneLight as lightTheme,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";

type MarkupProps = {
  rawMarkdown: string;
};

const Markup: FC<MarkupProps> = ({ rawMarkdown }): JSX.Element => {
  const { resolvedTheme } = useTheme();

  return (
    <div id="markdown">
      <Markdown
        className="flex flex-col gap-4"
        remarkPlugins={[remarkGfm]}
        components={{
          code: ({ children, className, ...props }) => {
            if (!children) return;

            if (!className) {
              return (
                <code {...props} id="inline-code">
                  {children}
                </code>
              );
            }

            const [languageIdentifier, fileName] = className
              .split("-")
              .slice(1);

            return (
              <div>
                <div className="w-full text-center text-zinc-400 dark:text-zinc-500">
                  {fileName}
                </div>
                <Prism
                  showLineNumbers
                  language={languageIdentifier}
                  style={resolvedTheme === "dark" ? darkTheme : lightTheme}
                >
                  {children.toString().replace(/\n$/, "")}
                </Prism>
              </div>
            );
          },
        }}
      >
        {rawMarkdown}
      </Markdown>
    </div>
  );
};

export default Markup;
