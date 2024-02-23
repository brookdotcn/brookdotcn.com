import { type NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { type JSX } from "react";

const AboutPage: NextPage = (): JSX.Element => {
  return (
    <div className="innerPage">
      <div className="flex justify-between items-center">
        <Image
          className="rounded"
          src="/brook.jpeg"
          alt="An image of me at a younger age"
          height="100"
          width="100"
        />
        <div className="flex gap-2">
          <Link
            href="https://github.com/brookdotcn"
            target="_blank"
            className="link"
          >
            GitHub
          </Link>
        </div>
      </div>
      <hr />
      <h1 className="font-semibold text-2xl">Brook Nash</h1>
      <p className="font-light text-neutral-400">
        I&apos;m a twenty two year old software engineer from the United Kingdom
        (Wales in particular) and this is the site I use to document my
        learnings and findings in all things software & technology.
      </p>
    </div>
  );
};

export default AboutPage;
