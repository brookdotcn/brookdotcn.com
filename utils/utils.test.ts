import { stringCut } from "./index";
import { describe, expect, test } from "vitest";

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
