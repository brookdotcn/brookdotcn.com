import { render, screen, cleanup } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, test } from "vitest";
import Navbar from "./index";

const linkTitles = ["Go Home", "See All Blogs", "About Me"] as const;
const linkHrefs: Record<(typeof linkTitles)[number], string> = {
  "About Me": "/about",
  "Go Home": "/",
  "See All Blogs": "/blog",
} as const;

const getLink = (name: string): HTMLElement => {
  return screen.getByRole("link", { name });
};

afterEach(cleanup);
beforeEach(() => {
  render(<Navbar />);
});

test("should cover all links", () => {
  expect(screen.getAllByRole("link").length).toBe(linkTitles.length);
});

describe.each(linkTitles)("when the {%s} link is rendered", async (text) => {
  test("should have the correct href", () => {
    expect(getLink(text).getAttribute("href")).toBe(linkHrefs[text]);
  });
});
