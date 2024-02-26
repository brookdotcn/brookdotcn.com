import { render, screen, cleanup } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, test } from "vitest";
import Navbar from "./index";

const links = ["Home", "Blog", "About"] as const;

const getLink = (name: string): HTMLElement => {
  return screen.getByRole("link", { name });
};

afterEach(cleanup);
beforeEach(() => {
  render(<Navbar />);
});

test("should cover all links", () => {
  expect(screen.getAllByRole("link").length).toBe(links.length);
});

describe.each(links)("when the %s link is rendered", (text) => {
  test("should have the correct href", () => {
    const linkText = text === "Home" ? "" : text.toLocaleLowerCase();
    expect(getLink(text).getAttribute("href")).toBe(`/${linkText}`);
  });
});
