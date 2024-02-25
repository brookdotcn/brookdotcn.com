/**
 * @description limit the length of a string safely.
 * @param str string to set a length limit on.
 * @param len number to set the length limit to.
 * @returns string passed if it's length is below the length passed, otherwise, the cut string.
 */
export const stringCut = (str: string, len: number): string => {
  return str.length > len ? str.slice(0, len).trim() + "..." : str;
};

/**
 * @description turn a blog title to a URL safe string.
 * @param title unsafe title with whitespace.
 * @returns lowercase string with dashes.
 */
export const formatBlogTitleForUrl = (title: string): string => {
  return title.toLocaleLowerCase().trim().split(" ").join("-");
};

/**
 * @description parse a URL safe string back to a blog title.
 * @param titleFromUrl safe lowercase title with no whitespace.
 * @returns titlecase string with whitespace.
 */
export const parseBlogTitleFromUrl = (titleFromUrl: string): string => {
  return titleFromUrl
    .split("-")
    .join(" ")
    .replaceAll(
      /\w\S*/g,
      (title) => title.charAt(0).toUpperCase() + title.slice(1).toLowerCase()
    );
};
