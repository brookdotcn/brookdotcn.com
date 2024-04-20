"use client";

import { Palette } from "lucide-react";
import { useTheme } from "next-themes";
import { type FC, type JSX } from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const ThemeSwitch: FC = (): JSX.Element => {
  const { setTheme, theme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Palette className="cursor-pointer hover:text-zinc-400" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-24" align="start">
        <DropdownMenuCheckboxItem
          className="cursor-pointer"
          checked={theme === "system"}
          onCheckedChange={() => setTheme("system")}
        >
          System
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          className="cursor-pointer"
          checked={theme === "light"}
          onCheckedChange={() => setTheme("light")}
        >
          Light
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          className="cursor-pointer"
          checked={theme === "dark"}
          onCheckedChange={() => setTheme("dark")}
        >
          Dark
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeSwitch;
