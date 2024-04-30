import { type Blog, type Tag } from "@prisma/client";

export type BlogWithTags = Blog & { tags: Tag[] };
