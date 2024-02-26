import Image from "next/image";
import Link from "next/link";
import { type FC, type JSX } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineArticle } from "react-icons/md";
import { SlInfo } from "react-icons/sl";

const Navbar: FC = (): JSX.Element => {
  return (
    <nav className="sm:h-full py-4 sm:w-20 w-full flex sm:flex-col sm:gap-8 bg-neutral-100 border-r">
      <div className="flex w-1/3 sm:w-full justify-center items-center">
        <Image
          className="rounded"
          src="/brook.jpeg"
          alt="An image of me at a younger age"
          height="50"
          width="50"
        />
      </div>
      <div className="flex text-2xl sm:w-full w-full justify-center items-center sm:flex-col gap-2">
        <Link
          href="/"
          className="link flex gap-2 sm:w-full justify-center p-2 sm:hover:bg-neutral-200"
        >
          <IoHomeOutline title="Home" />
        </Link>
        <Link
          href="/blog"
          className="link flex gap-2 sm:w-full justify-center p-2 sm:hover:rounded sm:hover:bg-neutral-200"
        >
          <MdOutlineArticle title="Blog" />
        </Link>
        <Link
          href="/about"
          className="link flex gap-2 sm:w-full justify-center p-2 sm:hover:rounded sm:hover:bg-neutral-200"
        >
          <SlInfo title="About" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
