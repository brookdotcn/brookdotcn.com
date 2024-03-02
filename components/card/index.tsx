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
    <div className="flex w-96 flex-col gap-4 rounded bg-neutral-800 p-4">
      <h3 className="text-xl font-semibold">{title}</h3>

      <div className="text-sm text-neutral-500">
        <Markup rawMarkdown={stringCut(content, 150)} />
      </div>

      <div className="flex justify-between">
        <span className="flex items-center gap-2">
          <IoCalendarClearOutline />
          <p>{createdAt.toLocaleDateString()}</p>
        </span>

        <Link href={`/blog/${formatBlogTitleForUrl(title)}`}>
          <span className="flex items-center gap-2 text-blue-400 hover:text-blue-500">
            <MdOutlineReadMore size={24} />
            Read More
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Card;
