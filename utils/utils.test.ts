import { describe, expect, test } from "vitest";
import {
  determineTimeToRead,
  formatBlogTitleForUrl,
  parseBlogTitleFromUrl,
} from "./index";

describe("formatBlogTitleForUrl", () => {
  test("should return lowercase string", () => {
    const actual = formatBlogTitleForUrl("Hello World TitleCase");
    expect(actual).toBe("hello-world-titlecase");
  });

  test("should return string with whitespace replaced with dashes", () => {
    const actual = formatBlogTitleForUrl("Hello world");
    expect(actual).toBe("hello-world");
  });

  test("should return a string with no trailing whitespace", () => {
    const actual = formatBlogTitleForUrl("Hello world ");
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

describe("determineTimeToRead", () => {
  test("should return '1' for a less than 1 minute read", () => {
    const input = "a a a a a a a a a a a a a a a a a a a a a a a a a a a";

    const actual = determineTimeToRead(input);
    expect(actual).toBe(1);
  });
});
