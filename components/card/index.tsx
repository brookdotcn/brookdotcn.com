import { Blog } from "@prisma/client";
import { type FC, type JSX } from "react";
import { IoCalendarClearOutline } from "react-icons/io5";
import Action from "./action";
import { stringCut } from "@/utils";

const Card: FC<Omit<Blog, "id" | "updatedAt">> = ({
  createdAt,
  description,
  title,
}): JSX.Element => {
  return (
    <div className="flex min-w-96 max-w-96 flex-col gap-4 rounded bg-neutral-100 p-4 dark:bg-neutral-900">
      <h3 className="text-xl font-semibold text-black dark:text-white">
        {title}
      </h3>

      <div className="text-sm text-neutral-500">
        {stringCut(description, 150)}
      </div>

      <div className="flex justify-between">
        <span className="flex items-center gap-2 text-neutral-400 dark:text-neutral-600">
          <IoCalendarClearOutline />
          <p>{createdAt.toLocaleDateString()}</p>
        </span>

        <Action title={title} />
      </div>
    </div>
  );
};

export default Card;
