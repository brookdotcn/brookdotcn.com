import { Github, Twitter } from "lucide-react";
import { type NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { type JSX } from "react";
import BlogCard from "@/components/ui/card";
import Search from "@/components/ui/search";
import { Separator } from "@/components/ui/separator";
import ThemeSwitch from "@/components/ui/theme-switch";
import { readAllBlogsMetadata } from "@/utils/blog";

const IndexPage: NextPage = async (): Promise<JSX.Element> => {
  const allBlogs = await readAllBlogsMetadata();

  return (
    <div className="flex flex-col gap-8">
      <section className="flex h-24 items-center gap-4">
        <Image
          className="rounded"
          src="/brook.jpeg"
          alt="An image of me at a younger age"
          height="75"
          width="75"
        />
      </section>

      <section className="flex h-8 items-center gap-4">
        <ThemeSwitch />

        <Separator orientation="vertical" />

        <Link
          className="text-black dark:text-white"
          href="https://x.com/brookdotcn"
          title="See My Twitter"
          target="_blank"
        >
          <Twitter className="hover:text-zinc-400" />
        </Link>

        <Separator orientation="vertical" />

        <Link
          className="text-black dark:text-white"
          href="https://github.com/brookdotcn"
          title="See My GitHub"
          target="_blank"
        >
          <Github className="hover:text-zinc-400" />
        </Link>
      </section>

      <section className="flex flex-col gap-4">
        <Search items={allBlogs} />
        <div className="flex flex-wrap">
          {allBlogs
            .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
            .map((blog, idx) => {
              return (
                <BlogCard
                  key={idx}
                  createdAt={blog.createdAt}
                  dirName={blog.dirName}
                  slug={blog.slug}
                  title={blog.title}
                  description={blog.description}
                />
              );
            })}
        </div>
      </section>
    </div>
  );
};

export default IndexPage;
