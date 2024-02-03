import Navbar from "./index";

import { type ByRoleOptions, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

const links = ["brookdotcn", "blog", "about"];
render(<Navbar />);

describe.each(links)("when the %s link is rendered", (text) => {
  const linkConfig: ByRoleOptions = {
    name: text,
  };

  const link = screen.getByRole("link", linkConfig);

  test("should have the correct text", () => {
    expect(link.textContent).toBe(text);
  });

  test("should have the correct href", () => {
    const linkText = text === "brookdotcn" ? "" : text;
    expect(link.getAttribute("href")).toBe(`/${linkText}`);
  });
});
