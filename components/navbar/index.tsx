import Image from "next/image";
import Link from "next/link";
import { type FC, type JSX } from "react";

const Navbar: FC = (): JSX.Element => {
  return (
    <nav className="h-full sm:w-24 w-full flex sm:flex-col bg-neutral-100 justify-between sm:justify-normal border-r">
      <div className="h-full sm:h-24 w-1/3 sm:w-full flex justify-center items-center">
        <Image
          className="rounded"
          src="/brook.jpeg"
          alt="An image of me at a younger age"
          height="50"
          width="50"
        />
      </div>
      <div className="flex rounded sm:rounded-none bg-neutral-200 sm:bg-transparent w-2/3 sm:w-full sm:flex-col gap-2 overflow-x-auto">
        <Link
          href="/"
          className="link flex gap-2 items-center p-2 sm:hover:bg-neutral-200"
        >
          home
        </Link>
        <Link
          href="/blog"
          className="link flex gap-2 items-center p-2 sm:hover:bg-neutral-200"
        >
          blog
        </Link>
        <Link
          href="/about"
          className="link flex gap-2 items-center p-2 sm:hover:bg-neutral-200"
        >
          about
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
