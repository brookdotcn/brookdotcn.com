import { type Blog, type Tag } from "@prisma/client";
import { type FC, type JSX } from "react";
import Action from "./action";
import { stringCut } from "@/utils";

type CardProps = Omit<Blog & { tags: Tag[] }, "id" | "content" | "updatedAt">;

const Card: FC<CardProps> = ({
  createdAt,
  description,
  tags,
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

      <div className="flex items-center justify-between">
        <span className="flex w-24 items-center gap-2 overflow-x-auto rounded bg-neutral-200 p-2 dark:bg-neutral-800">
          {tags.map((tag) => (
            <span key={tag.id}>
              <p
                className={`rounded px-2 dark:bg-neutral-900`}
                style={{ backgroundColor: tag.colour }}
              >
                {tag.name}
              </p>
            </span>
          ))}
        </span>

        <span className="flex items-center gap-2 text-neutral-400 dark:text-neutral-600">
          <p>{createdAt.toLocaleDateString()}</p>
        </span>

        <Action title={title} />
      </div>
    </div>
  );
};

export default Card;
