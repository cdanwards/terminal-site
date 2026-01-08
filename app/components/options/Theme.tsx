"use client";

import React, { useState, useEffect } from "react";

type ThemeProps = {
  mode?: string;
};

const Theme: React.FC<ThemeProps> = ({ mode }) => {
  const [currentTheme, setCurrentTheme] = useState<"light" | "dark">("dark");
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    // Get the initial theme from localStorage or default to dark
    const savedTheme = localStorage.getItem("terminal-theme") as
      | "light"
      | "dark"
      | null;
    const initialTheme = savedTheme || "dark";
    setCurrentTheme(initialTheme);

    // If mode argument provided, set that theme directly
    if (mode === "dark" || mode === "light") {
      setCurrentTheme(mode);
      document.documentElement.setAttribute("data-theme", mode);
      localStorage.setItem("terminal-theme", mode);
      setMessage(`Theme set to ${mode} mode.`);
    } else if (mode) {
      // Invalid mode provided
      setMessage(`Invalid theme "${mode}". Use "theme dark" or "theme light".`);
    } else {
      // No mode - toggle
      const newTheme = initialTheme === "dark" ? "light" : "dark";
      setCurrentTheme(newTheme);
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("terminal-theme", newTheme);
      setMessage(`Theme toggled to ${newTheme} mode.`);
    }
  }, [mode]);

  return (
    <div>
      <p>{message}</p>
      <p className="mt-2 text-sm opacity-80">
        Tip: Use <code>theme dark</code> or <code>theme light</code> to set a
        specific theme.
      </p>
    </div>
  );
};

export default Theme;
