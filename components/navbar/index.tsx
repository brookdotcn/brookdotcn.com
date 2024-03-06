import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { type FC, type JSX } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineArticle } from "react-icons/md";
import { SlInfo } from "react-icons/sl";

const ThemeSwitch = dynamic(() => import("./theme-switch"), { ssr: false });

const Navbar: FC = (): JSX.Element => {
  return (
    <nav className="flex h-full items-center gap-2 sm:flex-col sm:gap-8 sm:py-8">
      <div className="flex w-1/3 justify-center sm:w-full">
        <Image
          className="rounded"
          src="/brook.jpeg"
          alt="An image of me at a younger age"
          height="50"
          width="50"
        />
      </div>

      <div className="flex h-full w-2/3 items-center gap-4 overflow-x-auto sm:w-full sm:flex-col sm:justify-around sm:gap-0">
        <section className="flex gap-4 sm:h-2/3 sm:flex-col">
          <Link className="nav-link" href="/" title="Go Home">
            <IoHomeOutline size={24} />
          </Link>

          <Link className="nav-link" href="/blog" title="See All Blogs">
            <MdOutlineArticle size={24} />
          </Link>

          <Link className="nav-link" href="/about" title="About Me">
            <SlInfo size={24} />
          </Link>
        </section>

        <section className="flex items-center sm:h-1/3 sm:items-end">
          <ThemeSwitch />
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
