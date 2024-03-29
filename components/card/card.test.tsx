import { render, cleanup, screen } from "@testing-library/react";
import { afterEach, describe, expect, test } from "vitest";
import Card from "./index";

const content = "This is content";
const description = "This is a description";
const tags = ["hello", "world"];
const createdAt = new Date();

const getLink = (): HTMLElement => {
  return screen.getByRole("link", { name: "Read More" });
};

afterEach(cleanup);

describe("when the title is used for the href", () => {
  test("should remove any trailing whitespace", () => {
    render(
      <Card
        title="a b c "
        content={content}
        createdAt={createdAt}
        description={description}
        tags={tags}
      />,
    );
    expect(getLink().getAttribute("href")).toBe("/blog/a-b-c");
  });

  test("should set the href correctly", () => {
    render(
      <Card
        title="a b c"
        content={content}
        createdAt={createdAt}
        description={description}
        tags={tags}
      />,
    );
    expect(getLink().getAttribute("href")).toBe("/blog/a-b-c");
  });
});
