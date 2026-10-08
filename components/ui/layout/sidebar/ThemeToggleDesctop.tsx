"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggleDesctop() {
  const { theme, setTheme } = useTheme();

  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  if (!mounted) {
    return null;
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="
        flex w-full items-center justify-between
        rounded-xl
        border border-border
        bg-card
        px-3 py-2.5
        text-sm
        text-muted-foreground
        transition-colors
        hover:border-primary/50
        hover:text-foreground
      "
    >
      <span className="flex items-center gap-2">
        {isDark ? (
          <Moon className="size-5 text-primary" />
        ) : (
          <Sun className="size-5 text-primary" />
        )}

        <span>{isDark ? "حالت تاریک" : "حالت روشن"}</span>
      </span>

      <span
        className={`
          relative h-5 w-11 rounded-full
          transition-colors
          ${isDark ? "bg-primary" : "bg-muted"}
        `}
      >
        <span
          className={`
            absolute top-0.5 size-4 mr-1 rounded-full bg-white
            transition-transform duration-200
            ${isDark ? "translate-x-6" : "translate-x-1"}
          `}
        />
      </span>
    </button>
  );
}
