import { type JSX } from "react";
import { type NextPage } from "next";

const IndexPage: NextPage = (): JSX.Element => {
  return (
    <main className="h-screen flex justify-center items-center">
      <h1>Hello, world!</h1>
    </main>
  );
};

export default IndexPage;
