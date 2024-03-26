import { type FC, type JSX } from "react";
import Markdown from "react-markdown";
import { Prism } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";

type MarkupProps = {
  rawMarkdown: string;
};

const Markup: FC<MarkupProps> = ({ rawMarkdown }): JSX.Element => {
  return (
    <div id="markdown">
      <Markdown
        className="flex flex-col gap-4"
        remarkPlugins={[remarkGfm]}
        components={{
          code: ({ children, className, ...props }) => {
            if (!children) return;
            const languageIdentifier = /language-(\w+)/.exec(className || "");

            if (!languageIdentifier) {
              return (
                <code {...props} id="inline-code">
                  {children}
                </code>
              );
            }

            return (
              <Prism language={languageIdentifier[1]} style={vscDarkPlus}>
                {children.toString().replace(/\n$/, "")}
              </Prism>
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
