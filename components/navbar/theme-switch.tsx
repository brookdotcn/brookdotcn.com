"use client";

import { useTheme } from "next-themes";
import { type FC, type JSX } from "react";
import { Switch } from "../ui/switch";

const ThemeSwitch: FC = (): JSX.Element => {
  const { setTheme, systemTheme, theme } = useTheme();

  const determineThemeToSwitchTo = (): void => {
    if (theme === "system") {
      return setTheme(systemTheme === "light" ? "dark" : "light");
    }

    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Switch
      checked={theme === "dark"}
      onCheckedChange={determineThemeToSwitchTo}
    />
  );
};

export default ThemeSwitch;
