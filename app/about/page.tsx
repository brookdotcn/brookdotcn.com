import { CircleUser, Github } from "lucide-react";
import { type NextPage } from "next";
import Link from "next/link";
import { type JSX } from "react";

const AboutPage: NextPage = (): JSX.Element => {
  return (
    <div className="page">
      <div className="page-header">
        <CircleUser />
        <h1 className="page-title">Brook Nash</h1>

        <Link
          className="text-black dark:text-white"
          href="https://github.com/brookdotcn"
          target="_blank"
        >
          <Github />
        </Link>
      </div>

      <p className="page-subtitle">A little about me.</p>

      <p>
        Hello! I&apos;m a twenty two year old software engineer from the United
        Kingdom (Wales in particular) and this is the site I use to document my
        learnings and findings in all things software & technology.
      </p>
    </div>
  );
};

export default AboutPage;
