"use server";

import { type Blog } from "@prisma/client";
import prisma from "@/lib";

export const findBySearch = async (
  term: string,
): Promise<Blog[] | undefined> => {
  const data = await prisma.blog.findMany({
    orderBy: {
      _relevance: {
        fields: ["title"],
        search: "database",
        sort: "asc",
      },
    },
    where: {
      OR: [
        {
          title: {
            search: term,
          },
        },
        {
          tags: {
            some: {
              name: {
                search: term,
              },
            },
          },
        },
      ],
    },
  });

  return data;
};
