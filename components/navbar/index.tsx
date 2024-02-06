import { type FC, type JSX } from "react";
import Link from "next/link";

const Navbar: FC = (): JSX.Element => {
  return (
    <nav className="h-12 flex border-b justify-around items-center">
      <div className="w-1/2 text-center">
        <Link href="/" className="hover:font-semibold hover:underline">
          brookdotcn
        </Link>
      </div>
      <div className="w-1/2 flex justify-evenly">
        <Link href="/blog" className="hover:font-semibold hover:underline">
          blog
        </Link>
        <Link href="/about" className="hover:font-semibold hover:underline">
          about
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
