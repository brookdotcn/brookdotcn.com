import { type FC, type JSX } from "react";
import Link from "next/link";

import { stringCut } from "@/utils";

type Props = {
  content: string;
  createdAt: Date;
  title: string;
};

const Card: FC<Props> = ({ content, createdAt, title }: Props): JSX.Element => {
  return (
    <div className="min-w-96 border rounded-lg min-h-44 p-2 flex flex-col justify-between">
      <div className="flex flex-col gap-2">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-neutral-400 text-sm text-ellipsis">
          {stringCut(content, 75)}
        </p>
      </div>
      <div className="flex justify-between">
        <span className="text-neutral-400 text-sm">
          {createdAt.toLocaleDateString()}
        </span>
        <Link
          href={`/${title.toLocaleLowerCase().trim().split(" ").join("-")}`}
          className="text-blue-400 text-sm w-max hover:font-semibold hover:underline"
        >
          See More
        </Link>
      </div>
    </div>
  );
};

export default Card;
