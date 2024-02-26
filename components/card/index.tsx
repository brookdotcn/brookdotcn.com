import Link from "next/link";
import { type FC, type JSX } from "react";
import { IoCalendarClearOutline } from "react-icons/io5";
import { MdOutlineReadMore } from "react-icons/md";
import Markup from "@/components/markup";
import { formatBlogTitleForUrl, stringCut } from "@/utils";

type Props = {
  content: string;
  createdAt: Date;
  title: string;
};

const Card: FC<Props> = ({ content, createdAt, title }): JSX.Element => {
  return (
    <div className="min-w-80 max-w-96 bg-white border border-neutral-300 rounded-lg min-h-44 p-2 gap-2 flex flex-col justify-between">
      <div className="flex flex-col gap-2">
        <h3 className="font-semibold text-lg">{title}</h3>
        <div className="text-neutral-400 text-sm">
          <Markup rawMarkdown={stringCut(content, 150)} />
        </div>
      </div>
      <div className="flex justify-between">
        <span className="text-neutral-300 flex gap-2 items-center text-sm">
          <IoCalendarClearOutline />
          {createdAt.toLocaleDateString()}
        </span>
        <Link
          href={`/blog/${formatBlogTitleForUrl(title)}`}
          className="text-blue-400 text-sm w-max flex gap-2 items-center link"
        >
          <MdOutlineReadMore size={24} /> Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
