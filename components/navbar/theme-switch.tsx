"use client";

import { useTheme } from "next-themes";
import { type FC, type JSX } from "react";
import { MdOutlineFlashlightOff, MdOutlineFlashlightOn } from "react-icons/md";

const ThemeSwitch: FC = (): JSX.Element => {
  const { setTheme, theme } = useTheme();

  return (
    <button
      className="nav-link"
      title="Change Site Theme"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
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
