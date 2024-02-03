import { type JSX } from "react";
import { type NextPage } from "next";

const AboutPage: NextPage = (): JSX.Element => {
  return (
    <main className="flex justify-center">
      <div className="w-1/2 py-12">
        <h1>Hello, about!</h1>
      </div>
    </main>
  );
};

export default AboutPage;
