import { render, cleanup, screen } from "@testing-library/react";
import { afterEach, describe, expect, test } from "vitest";
import Card from "./index";

const description = "This is a description";
const tags = [
  { blogId: 1, colour: "#FF0000", id: 1, name: "Hello" },
  { blogId: 2, colour: "#00FF00", id: 2, name: "Hello" },
  { blogId: 3, colour: "#0000FF", id: 3, name: "Hello" },
];
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
        createdAt={createdAt}
        description={description}
        tags={tags}
      />,
    );
    expect(getLink().getAttribute("href")).toBe("/blog/a-b-c");
  });
});
