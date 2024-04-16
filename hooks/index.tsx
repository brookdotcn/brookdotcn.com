import { useEffect, useState } from "react";

export const useDebounce = (value: string): string => {
  const [debounce, setDebounce] = useState<string>(value);

  useEffect(() => {
    const pause = setTimeout(() => {
      setDebounce(value);
    }, 250);

    return () => clearTimeout(pause);
  }, [value]);

  return debounce;
};
