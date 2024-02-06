import { type JSX } from "react";
import { type NextPage } from "next";

import Card from "@/components/card";

const IndexPage: NextPage = (): JSX.Element => {
  return (
    <main className="outerPage">
      <div className="innerPage">
        <h1 className="font-semibold text-2xl">Recent Blogs</h1>
        <div className="flex bg-neutral-100 p-2 rounded-lg w-full gap-4 overflow-x-auto">
          <Card
            title="Test Card"
            content="This is a test card, until the database is setup. I am now actively trying to make this as long as possible to test handling long pieces of content."
            createdAt={new Date()}
          />
          <Card
            title="Test Card"
            content="This is a test card, until the database is setup. I am now actively trying to make this as long as possible to test handling long pieces of content."
            createdAt={new Date()}
          />
          <Card
            title="Test Card"
            content="This is a test card, until the database is setup. I am now actively trying to make this as long as possible to test handling long pieces of content."
            createdAt={new Date()}
          />
          <Card
            title="Test Card"
            content="This is a test card, until the database is setup. I am now actively trying to make this as long as possible to test handling long pieces of content."
            createdAt={new Date()}
          />
          <Card
            title="Test Card"
            content="This is a test card, until the database is setup. I am now actively trying to make this as long as possible to test handling long pieces of content."
            createdAt={new Date()}
          />
        </div>
      </div>
    </main>
  );
};

export default IndexPage;
