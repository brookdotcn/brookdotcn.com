import { Github, Home, Newspaper, Twitter } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { type FC, type JSX } from "react";

const ThemeSwitch = dynamic(() => import("./theme-switch"), { ssr: false });

const Navbar: FC = (): JSX.Element => {
  return (
    <nav className="sticky left-0 top-0 flex h-16 flex-row items-center justify-between gap-2 bg-zinc-100/20 backdrop-blur-md dark:bg-zinc-900/20 sm:h-screen sm:w-16 sm:flex-col sm:gap-8 sm:bg-zinc-100 sm:bg-opacity-100 sm:py-8 sm:backdrop-blur-none sm:dark:bg-zinc-900">
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
        <section className="flex gap-4 sm:h-2/3 sm:flex-col">
          <Link className="nav-link" href="/" title="Go Home">
            <Home />
          </Link>

          <Link className="nav-link" href="/blog" title="See All Blogs">
            <Newspaper />
          </Link>
        </section>

        <section className="flex items-center gap-4 sm:h-1/3 sm:flex-col sm:justify-end">
          <Link
            className="text-black dark:text-white"
            href="https://twitter.com/brookdotcn"
            target="_blank"
          >
            <Twitter />
          </Link>

          <Link
            className="text-black dark:text-white"
            href="https://github.com/brookdotcn"
            target="_blank"
          >
            <Github />
          </Link>

          <ThemeSwitch />
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
