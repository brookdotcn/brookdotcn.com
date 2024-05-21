import { promises as fs } from "node:fs";
import path from "node:path";
import { type BlogMetadata } from "@/types";

export const readBlogDirectories = async (): Promise<string[]> => {
  return await fs.readdir(path.join(process.cwd() + "/blog"));
};

export const findBlogByMetadataSlug = async (
  slug: string,
): Promise<BlogMetadata | undefined> => {
  const allBlogsMetadata = await readAllBlogsMetadata();
  return allBlogsMetadata.find((blog) => blog.slug == slug);
};

export const readAllBlogsMetadata = async (): Promise<BlogMetadata[]> => {
  const dirs = await readBlogDirectories();
  const blogFiles = await Promise.all(
    dirs.map(async (dir) => import(`/blog/${dir}/page.mdx`)),
  );

  return blogFiles.map((blog) => ({
    ...blog.meta,
  }));
};
