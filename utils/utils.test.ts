import { describe, expect, test } from "vitest";
import {
  formatBlogTitleForUrl,
  parseBlogTitleFromUrl,
  stringCut,
} from "./index";

describe("stringCut", () => {
  test("should return string affixed with an ellipsis", () => {
    const actual = stringCut("Hello, world!", 5);
    expect(actual).toBe("Hello...");
  });

  test("should remove all leading whitespace before affixing an ellipsis", () => {
    const actual = stringCut("Hello, world!", 7);
    expect(actual).toBe("Hello,...");
  });

  test("should return passed string if the desired length is out of bounds", () => {
    const actual = stringCut("Hello, world!", 50);
    expect(actual).toBe("Hello, world!");
  });
});

describe("formatBlogTitleForUrl", () => {
  test("should return lowercase string", () => {
    const actual = formatBlogTitleForUrl("Hello World TitleCase");
    expect(actual).toBe("hello-world-titlecase");
  });

  test("should return string with whitespace replaced with dashes", () => {
    const actual = formatBlogTitleForUrl("Hello world");
    expect(actual).toBe("hello-world");
  });
});

describe("parseBlogTitleFromUrl", () => {
  test("should return titlecase string", () => {
    const actual = parseBlogTitleFromUrl("hello-world-lowercase");
    expect(actual).toBe("Hello World Lowercase");
  });

  test("should return string with dashes replaced with whitespace", () => {
    const actual = parseBlogTitleFromUrl("hello-world");
    expect(actual).toBe("Hello World");
  });
});
