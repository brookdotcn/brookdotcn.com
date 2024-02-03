import { type JSX } from "react";
import { type NextPage } from "next";

const BlogPage: NextPage = (): JSX.Element => {
  return (
    <main className="flex justify-center">
      <div className="w-1/2 py-12">
        <h1>Hello, blog!</h1>
      </div>
    </main>
  );
};

export default BlogPage;
