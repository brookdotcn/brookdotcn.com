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
    <div className="flex min-w-96 max-w-96 flex-col justify-between gap-4 rounded bg-zinc-100 p-4 dark:bg-zinc-900">
      <div className="flex w-full justify-between">
        <h3
          className="text-xl font-semibold text-black dark:text-white"
          title={title}
        >
          {stringCut(title, 19)}
        </h3>

        <span className="flex items-center gap-2 text-zinc-400 dark:text-zinc-600">
          <p>{createdAt.toLocaleDateString()}</p>
        </span>
      </div>

      <div className="text-sm text-zinc-500">{stringCut(description, 150)}</div>

      <div className="flex items-center justify-between">
        <span className="flex w-1/2 items-center gap-2 overflow-x-auto rounded">
          {tags.map((tag) => (
            <span key={tag.id}>
              <p
                className={`rounded px-2 dark:bg-zinc-900`}
                style={{ backgroundColor: tag.colour }}
              >
                {tag.name}
              </p>
            </span>
          ))}
        </span>

        <Action title={title} />
      </div>
    </div>
  );
};

export default Card;
