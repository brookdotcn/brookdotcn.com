import Image from "next/image";
import Link from "next/link";
import { type FC, type JSX } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineArticle } from "react-icons/md";
import { SlInfo } from "react-icons/sl";

const Navbar: FC = (): JSX.Element => {
  return (
    <nav className="flex h-full items-center justify-around sm:flex-col sm:justify-normal sm:gap-8 sm:py-8">
      <div className="flex w-1/3 justify-center sm:w-full">
        <Image
          className="rounded"
          src="/brook.jpeg"
          alt="An image of me at a younger age"
          height="50"
          width="50"
        />
      </div>

      <div className="flex w-2/3 items-center gap-2 overflow-x-auto sm:w-full sm:flex-col sm:gap-4">
        <Link className="nav-link" href="/">
          <IoHomeOutline title="Go Home" size={24} />
        </Link>

        <Link className="nav-link" href="/blog">
          <MdOutlineArticle title="See All Blogs" size={24} />
        </Link>

        <Link className="nav-link" href="/about">
          <SlInfo title="About Me" size={24} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
