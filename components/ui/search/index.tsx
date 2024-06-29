"use client";

import { Search as SearchIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FC, type JSX } from "react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { type BlogMetadata } from "@/types";

type Props = {
  items: BlogMetadata[];
};

const Search: FC<Props> = ({ items }): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const router = useRouter();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-64 justify-start text-zinc-500">
          <SearchIcon className="mr-2 h-4 w-4 shrink-0 opacity-50" />
          {value || "Search..."}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64 p-0">
        <Command>
          <CommandInput placeholder="e.g. Hello, World!" className="h-10" />
          <CommandList>
            <CommandEmpty>No blogs found.</CommandEmpty>
            <CommandGroup>
              {items.map((blog) => (
                <Link key={blog.slug} href={`/${blog.slug}`}>
                  <CommandItem
                    value={blog.tags.join(" ")}
                    onSelect={(currentValue) => {
                      setValue(currentValue);
                      setOpen(false);
                      router.push(`/${blog.slug}`);
                    }}
                  >
                    {blog.title}
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
