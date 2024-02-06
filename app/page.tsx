import { type JSX } from "react";
import { type NextPage } from "next";

const IndexPage: NextPage = (): JSX.Element => {
  return (
    <main className="outerPage">
      <div className="innerPage">
        <h1>Hello, world!</h1>
      </div>
    </main>
  );
};

export default IndexPage;
