"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FC, type JSX } from "react";
import { Button } from "../ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { type BlogWithTags } from "@/types";
import { formatBlogTitleForUrl } from "@/utils";

type SearchProps = {
  blogs: Omit<BlogWithTags, "content" | "updatedAt">[];
};

const Search: FC<SearchProps> = ({ blogs }): JSX.Element => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button className="w-24" variant="outline">
          Search
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-max p-0" side="bottom" align="start">
        <Command>
          <CommandInput placeholder="Search by blog title..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              {blogs.map((blog) => (
                <Link
                  className="hover:text-zinc-500"
                  key={blog.id}
                  href={`/blog/${formatBlogTitleForUrl(blog.title)}`}
                >
                  <CommandItem
                    value={blog.title}
                    onSelect={() => {
                      router.push(`/blog/${formatBlogTitleForUrl(blog.title)}`);
                    }}
                  >
                    <p>{blog.title}</p>
                  </CommandItem>
                </Link>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default Search;
