"use client";

import Link from "next/link";
import { useState, type FC, type JSX } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { MdOutlineReadMore } from "react-icons/md";
import { formatBlogTitleForUrl } from "@/utils";

const Action: FC<{ title: string }> = ({ title }): JSX.Element => {
  const [redirectLoading, setRedirectLoading] = useState<boolean>(false);

  return (
    <>
      {!redirectLoading && (
        <Link
          href={`/blog/${formatBlogTitleForUrl(title)}`}
          onClick={() => setRedirectLoading(true)}
        >
          <span className="flex items-center gap-2 text-blue-400 hover:text-blue-500">
            <MdOutlineReadMore size={24} />
            Read More
          </span>
        </Link>
      )}

      {redirectLoading && (
        <AiOutlineLoading3Quarters
          className="animate-spin text-zinc-500"
          size={24}
        />
      )}
    </>
  );
};

export default Action;
