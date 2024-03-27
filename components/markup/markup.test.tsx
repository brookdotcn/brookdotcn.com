import { render, screen, cleanup } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, test } from "vitest";
import Markup from "./index";

const markdownInput = `
# heading one

**bold**
*italic*
~~strikethrough~~

---

\`inline code\`

\`\`\`ts
const x = 10;
\`\`\`
`;

afterEach(cleanup);
beforeEach(() => {
  render(<Markup rawMarkdown={markdownInput} />);
});

describe("when the markdown is parsed", () => {
  test("should return a heading", () => {
    expect(screen.getByText("heading one").nodeName).toBe("H1");
  });

  test("should return a strong element", () => {
    expect(screen.getByText("bold").nodeName).toBe("STRONG");
  });

  test("should return an emphasis element", () => {
    expect(screen.getByText("italic").nodeName).toBe("EM");
  });

  test("should return a deletion element", () => {
    expect(screen.getByText("strikethrough").nodeName).toBe("DEL");
  });

  test("should return a horizontal rule element", () => {
    expect(screen.getByRole("separator").nodeName).toBe("HR");
  });

  test("should return inline code", () => {
    expect(screen.getByText("inline code").nodeName).toBe("CODE");
  });

  describe("when it is a code block", () => {
    test.each(["const", "=", "10", ";"])(
      "should return {%s} with a 'token' class attribute",
      (token) => {
        expect(screen.getByText(token).className).toBe("token");
      },
    );
  });
});
