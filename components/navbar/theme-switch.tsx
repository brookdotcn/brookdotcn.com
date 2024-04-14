"use client";

import { useTheme } from "next-themes";
import { type FC, type JSX } from "react";
import { MdOutlineFlashlightOff, MdOutlineFlashlightOn } from "react-icons/md";

const ThemeSwitch: FC = (): JSX.Element => {
  const { setTheme, systemTheme, theme } = useTheme();

  const determineThemeToSwitchTo = (): string => {
    if (theme === "system") return systemTheme === "light" ? "dark" : "light";
    return theme === "light" ? "dark" : "light";
  };

  return (
    <button
      className="nav-link"
      title="Change Site Theme"
      onClick={() => setTheme(determineThemeToSwitchTo())}
    >
      {theme === "light" ? (
        <MdOutlineFlashlightOn size={22} />
      ) : (
        <MdOutlineFlashlightOff size={22} />
      )}
    </button>
  );
};

export default ThemeSwitch;
