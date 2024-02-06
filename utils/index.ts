export const stringCut = (str: string, len: number): string => {
  return str.length > len ? str.slice(0, len).trim() + "..." : str;
};
