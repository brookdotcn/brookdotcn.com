"use client";

import { Clipboard } from "lucide-react";
import { useTheme } from "next-themes";
import { type FC, type JSX } from "react";
import { Prism } from "react-syntax-highlighter";
import {
  oneDark as darkTheme,
  oneLight as lightTheme,
} from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeBlock: FC<{ children: any }> = ({ children }): JSX.Element => {
  const { resolvedTheme } = useTheme();
  const className: string = children.props.children.props.className;
  const code: string = children.props.children.props.children;

  const [language, fileName] = className.split("-").slice(1);

  return (
    <div className="rounded-lg border border-zinc-300 dark:border-zinc-800">
      <span className="flex h-8 w-full items-center justify-between px-2">
        <p className="flex h-5 items-center rounded border border-zinc-300 bg-zinc-100 px-2 text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900">
          {fileName}
        </p>
        <button onClick={() => navigator.clipboard.writeText(code)}>
          <Clipboard className="text-zinc-500" size={18} />
        </button>
      </span>
      <Prism
        language={language}
        style={resolvedTheme === "dark" ? darkTheme : lightTheme}
      >
        {code}
      </Prism>
    </div>
  );
};

export default CodeBlock;
