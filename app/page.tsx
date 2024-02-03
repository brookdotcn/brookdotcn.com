import { type JSX } from "react";
import { type NextPage } from "next";

const IndexPage: NextPage = (): JSX.Element => {
  return (
    <main className="flex justify-center">
      <div className="w-1/2 py-12">
        <h1>Hello, world!</h1>
      </div>
    </main>
  );
};

export default IndexPage;
