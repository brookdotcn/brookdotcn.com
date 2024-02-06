import Card from "./index";

import { render, cleanup, screen } from "@testing-library/react";
import { afterEach, describe, expect, test } from "vitest";

const content = "This is content";
const createdAt = new Date();

const getLink = (): HTMLElement => {
  return screen.getByRole("link", { name: "See More" });
};

afterEach(cleanup);

describe("when the title is used for the href", () => {
  test("should remove any trailing whitespace", () => {
    render(<Card title="a b c " content={content} createdAt={createdAt} />);
    expect(getLink().getAttribute("href")).toBe("/a-b-c");
  });

  test("should set the href correctly", () => {
    render(<Card title="a b c" content={content} createdAt={createdAt} />);
    expect(getLink().getAttribute("href")).toBe("/a-b-c");
  });
});
