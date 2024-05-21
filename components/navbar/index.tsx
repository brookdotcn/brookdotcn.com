import { Github, Home, Newspaper, Twitter } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { type FC, type JSX } from "react";
import { Separator } from "../ui/separator";

const ThemeSwitch = dynamic(() => import("./theme-switch"), { ssr: false });

const Navbar: FC = (): JSX.Element => {
  return (
    <nav className="sticky left-0 top-0 flex h-12 flex-row items-center justify-between gap-2 bg-white/20 backdrop-blur-md dark:bg-zinc-950/20 sm:h-screen sm:w-12 sm:flex-col sm:gap-8 sm:bg-white sm:bg-opacity-100 sm:py-8 sm:backdrop-blur-none sm:dark:bg-zinc-950">
      <div className="flex w-1/3 justify-center sm:w-full">
        <Image
          className="rounded"
          src="/brook.jpeg"
          alt="An image of me at a younger age"
          height="30"
          width="30"
        />
      </div>

      <div className="flex h-full w-2/3 items-center justify-center gap-4 overflow-x-auto sm:w-full sm:flex-col sm:justify-around sm:gap-0">
        <section className="flex h-2/6 items-center gap-4 sm:h-full sm:flex-col">
          <Link href="/" title="Go Home">
            <Home className="hover:text-zinc-400" />
          </Link>

          <Link href="/blog" title="See All Blogs">
            <Newspaper className="hover:text-zinc-400" />
          </Link>

          <Separator className="hidden sm:block" />

          <Link
            className="text-black dark:text-white"
            href="https://x.com/brookdotcn"
            title="See My Twitter"
            target="_blank"
          >
            <Twitter className="hover:text-zinc-400" />
          </Link>

          <Link
            className="text-black dark:text-white"
            href="https://github.com/brookdotcn"
            title="See My GitHub"
            target="_blank"
          >
            <Github className="hover:text-zinc-400" />
          </Link>

          <Separator className="hidden sm:block" />

          <ThemeSwitch />
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
