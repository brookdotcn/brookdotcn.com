"use client";

import { Blog } from "@prisma/client";
import Link from "next/link";
import { useState, type FC, type JSX } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { IoCalendarClearOutline } from "react-icons/io5";
import { MdOutlineReadMore } from "react-icons/md";
import { formatBlogTitleForUrl, stringCut } from "@/utils";

const Card: FC<Omit<Blog, "id" | "updatedAt">> = ({
  createdAt,
  description,
  title,
}): JSX.Element => {
  const [redirectLoading, setRedirectLoading] = useState<boolean>(false);

  return (
    <div className="flex w-96 flex-col gap-4 rounded bg-neutral-800 p-4">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <div className="text-sm text-neutral-500">
        {stringCut(description, 150)}
      </div>

      <div className="flex justify-between">
        <span className="flex items-center gap-2 text-neutral-600">
          <IoCalendarClearOutline />
          <p>{createdAt.toLocaleDateString()}</p>
        </span>

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
            className="animate-spin text-neutral-500"
            size={24}
          />
        )}
      </div>
    </div>
  );
};

export default Card;
