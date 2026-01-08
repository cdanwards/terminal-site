"use client";

import { useEffect } from "react";

export function useTheme() {
  useEffect(() => {
    const savedTheme = localStorage.getItem("terminal-theme") as
      | "light"
      | "dark"
      | null;
    if (savedTheme) {
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);
}
