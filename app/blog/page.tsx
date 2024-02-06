import { type NextPage } from "next";
import { type JSX } from "react";

import Card from "@/components/card";

const BlogPage: NextPage = (): JSX.Element => {
  return (
    <div className="innerPage">
      <h1 className="font-semibold text-2xl">Blogs</h1>
      <div className="flex rounded-lg gap-4 flex-wrap">
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
  );
};

export default BlogPage;
