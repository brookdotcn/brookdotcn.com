export const stringCut = (str: string, len: number): string => {
  return str.length > len ? str.slice(0, len).trim() + "..." : str;
};

export const formatBlogTitleForUrl = (title: string): string => {
  return title.toLocaleLowerCase().trim().split(" ").join("-");
};

export const parseBlogTitleFromUrl = (titleFromUrl: string): string => {
  return titleFromUrl
    .split("-")
    .join(" ")
    .replaceAll(
      /\w\S*/g,
      (title) => title.charAt(0).toUpperCase() + title.slice(1).toLowerCase()
    );
};
