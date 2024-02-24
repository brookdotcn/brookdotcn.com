import { type FC, type JSX } from "react";
import Markdown from "react-markdown";
import { Prism } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";

type MarkupProps = {
  rawMarkdown: string;
};

const Markup: FC<MarkupProps> = ({
  rawMarkdown: rawMarkup,
}: MarkupProps): JSX.Element => {
  return (
    <div className="w-full flex flex-col gap-4" id="markdown">
      <Markdown
        remarkPlugins={[remarkGfm]}
        components={{
          code: (props) => {
            const { children, className } = props;
            const languageIdentifier = /language-(\w+)/.exec(className || "");
            if (!languageIdentifier || !children) return;

            return (
              <Prism language={languageIdentifier[1]} style={vscDarkPlus}>
                {children.toString().replace(/\n$/, "")}
              </Prism>
            );
          },
        }}
      >
        {rawMarkup}
      </Markdown>
    </div>
  );
};

export default Markup;
