import { type NextPage } from "next";
import Link from "next/link";
import { type JSX } from "react";
import { GrContactInfo } from "react-icons/gr";
import { PiGithubLogo } from "react-icons/pi";

const AboutPage: NextPage = (): JSX.Element => {
  return (
    <div className="innerPage">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold flex gap-2 items-center text-2xl">
          <GrContactInfo />
          Brook Nash
        </h1>
        <Link
          href="https://github.com/brookdotcn"
          target="_blank"
          className="link"
        >
          <PiGithubLogo size={24} />
        </Link>
      </div>
      <p className="text-sm font-light text-neutral-400">A little about me.</p>
      <p className="font-light">
        Hello! I&apos;m a twenty two year old software engineer from the United
        Kingdom (Wales in particular) and this is the site I use to document my
        learnings and findings in all things software & technology.
      </p>
    </div>
  );
};

export default AboutPage;
