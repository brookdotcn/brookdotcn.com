"use client";

import { type Blog } from "@prisma/client";
import { useEffect, useState, type FC, type JSX } from "react";
import { CiSearch } from "react-icons/ci";
import { HiEllipsisVertical } from "react-icons/hi2";
import { findBySearch } from "@/actions";
import { useDebounce } from "@/hooks";
import { formatBlogTitleForUrl } from "@/utils";

const Search: FC = (): JSX.Element => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [foundBlogs, setFoundBlogs] = useState<Blog[]>([]);
  const debouncedValue = useDebounce(searchValue);

  useEffect(() => {
    if (!debouncedValue) return;

    findBySearch(debouncedValue).then((blogs) => {
      if (!blogs) return;
      setFoundBlogs(blogs);
    });
  }, [debouncedValue]);

  return (
    <div className="flex w-full items-center gap-2 rounded border border-zinc-400 bg-white p-1 dark:border-zinc-700 dark:bg-zinc-900">
      <input
        type="text"
        placeholder="Search by title or tag..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.currentTarget.value)}
        className="w-full focus:outline-none dark:bg-zinc-900"
      />
      <HiEllipsisVertical size={16} />
      <CiSearch size={24} />
      {debouncedValue && (
        <div className="absolute left-0 top-8 max-h-44 w-full border border-zinc-400 bg-white p-2 shadow-lg dark:border-zinc-700 dark:bg-zinc-900">
          <div className="flex flex-col gap-4">
            {foundBlogs.length > 0 &&
              foundBlogs.map((blog) => (
                <a
                  key={blog.id}
                  href={`blog/${formatBlogTitleForUrl(blog.title)}`}
                  className="rounded border p-1 hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
                >
                  {blog.title}
                </a>
              ))}
            {foundBlogs.length === 0 && (
              <p className="text-center text-red-300">No blogs found.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
